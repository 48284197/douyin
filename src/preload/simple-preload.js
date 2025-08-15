import { contextBridge, ipcRenderer } from 'electron';

console.log('🚀 Simple Preload 脚本开始执行...');
console.log('🔧 主进程直接挂载模式启动');

// 简单测试，直接在 window 上设置一个属性
window.preloadTest = 'Preload is working!';
// 设置preload立即可用标记
window.preloadLoaded = true;
window.electronAPIReady = true;

try {
  contextBridge.exposeInMainWorld('electronAPI', {
    test: () => 'API is working!',
    checkApiReady: () => ipcRenderer.invoke('check-api-ready'),
    startMonitoring: (liveUrl) => {
      console.log('📡 调用 startMonitoring:', liveUrl);
      return ipcRenderer.invoke('start-monitoring', liveUrl);
    },
    stopMonitoring: () => {
      console.log('📡 调用 stopMonitoring');
      return ipcRenderer.invoke('stop-monitoring');
    },
    getComments: (options) => ipcRenderer.invoke('get-comments', options),
    exportComments: (format) => ipcRenderer.invoke('export-comments', format),
    clearComments: () => ipcRenderer.invoke('clear-comments'),
    onNewComment: (callback) => {
      console.log('📡 注册 new-comment 监听器');
      ipcRenderer.on('new-comment', (event, comment) => {
        console.log('📨 收到 new-comment 事件:', comment);
        callback(comment);
      });
    },
    onStatusChange: (callback) => {
      console.log('📡 注册 status-change 监听器');
      ipcRenderer.on('status-change', (event, status) => {
        console.log('📨 收到 status-change 事件:', status);
        callback(status);
      });
    },
    onMenuAction: (callback) => {
      ipcRenderer.on('menu-start-monitoring', () => callback('start'));
      ipcRenderer.on('menu-stop-monitoring', () => callback('stop'));
    },
    removeAllListeners: (channel) => {
      ipcRenderer.removeAllListeners(channel);
    }
  });
  
  // 确保electronAPI立即可用
  window.electronAPIReady = true;
  console.log('✅ Simple Preload 脚本执行完成 - electronAPI立即可用');
} catch (error) {
  console.error('❌ Simple Preload 脚本执行失败:', error);
  window.electronAPIReady = false;
}

// 在 DOM 加载后再次检查
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM 加载完成，检查 electronAPI:', typeof window.electronAPI);
  });
} else {
  // 如果 document 不可用，延迟检查
  setTimeout(() => {
    console.log('📄 延迟检查 electronAPI:', typeof window.electronAPI);
  }, 100);
}