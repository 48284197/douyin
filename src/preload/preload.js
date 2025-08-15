import { contextBridge, ipcRenderer } from 'electron'

console.log('🔧 Preload 脚本开始加载...');

// 设置一个全局标记
window.preloadLoaded = true;

try {
  // 暴露安全的API给渲染进程
  contextBridge.exposeInMainWorld('electronAPI', {
    // 监听控制
    startMonitoring: (liveUrl) => {
      console.log('📡 调用 startMonitoring:', liveUrl);
      return ipcRenderer.invoke('start-monitoring', liveUrl);
    },
    stopMonitoring: () => {
      console.log('📡 调用 stopMonitoring');
      return ipcRenderer.invoke('stop-monitoring');
    },
    
    // 数据获取
    getComments: (options) => ipcRenderer.invoke('get-comments', options),
    exportComments: (format) => ipcRenderer.invoke('export-comments', format),
    
    // 事件监听
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
    
    // 移除监听器
    removeAllListeners: (channel) => {
      ipcRenderer.removeAllListeners(channel);
    },
    
    // 测试方法
    test: () => {
      console.log('🧪 Preload 测试方法被调用');
      return ipcRenderer.invoke('test');
    },
    
    // API就绪检查
    checkApiReady: () => {
      return ipcRenderer.invoke('check-api-ready');
    }
  });

  console.log('✅ Preload 脚本加载完成，electronAPI 已暴露');
  
} catch (error) {
  console.error('❌ Preload 脚本加载失败:', error);
}