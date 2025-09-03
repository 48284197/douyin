const { contextBridge, ipcRenderer } = require('electron');

// 存储评论数据
let comments = [];
let commentsUpdateCallback = null;

// 监听新评论事件
ipcRenderer.on('new-comment', (event, comment) => {
  // 格式化评论数据
  const formattedComment = {
    username: comment.username || comment.user?.nickname || '匿名用户',
    message: comment.content || comment.message || '',
    timestamp: comment.timestamp || Date.now(),
    isGift: comment.type === 'gift' || comment.giftName,
    giftName: comment.giftName,
    avatar: comment.user?.avatar
  };
  
  // 添加到评论列表
  comments.push(formattedComment);
  
  // 只保留最新的100条评论
  if (comments.length > 100) {
    comments = comments.slice(-100);
  }
  
  // 通知渲染进程更新
  if (commentsUpdateCallback) {
    commentsUpdateCallback([...comments]);
  }
});

// 暴露API给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 关闭窗口
  closeWindow: () => ipcRenderer.invoke('close-mini-window'),
  
  // 设置窗口样式
  setWindowStyle: (options) => {
    if (options.backgroundColor) {
      ipcRenderer.invoke('set-mini-window-background', options.backgroundColor);
    }
    if (typeof options.alwaysOnTop === 'boolean') {
      ipcRenderer.invoke('set-mini-window-always-on-top', options.alwaysOnTop);
    }
  },
  
  // 移动窗口
  moveWindow: (position) => {
    ipcRenderer.invoke('set-mini-window-position', position.x, position.y);
  },
  
  // 设置窗口大小
  setWindowSize: (width, height) => {
    ipcRenderer.invoke('set-mini-window-size', width, height);
  },
  
  // 获取窗口边界
  getWindowBounds: () => ipcRenderer.invoke('get-mini-window-bounds'),
  
  // 监听评论更新
  onCommentsUpdate: (callback) => {
    commentsUpdateCallback = callback;
    // 立即发送当前评论数据
    if (comments.length > 0) {
      callback([...comments]);
    }
  },
  
  // 获取当前评论
  getComments: () => [...comments]
});

console.log('✅ 小窗口 Preload 脚本加载完成');