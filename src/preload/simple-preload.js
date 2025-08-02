import { contextBridge, ipcRenderer } from 'electron';

console.log('🚀 Simple Preload 脚本开始执行...');

// 简单测试，直接在 window 上设置一个属性
window.preloadTest = 'Preload is working!';

try {
  contextBridge.exposeInMainWorld('electronAPI', {
    test: () => 'API is working!',
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
  
  console.log('✅ Simple Preload 脚本执行完成');
} catch (error) {
  console.error('❌ Simple Preload 脚本执行失败:', error);
}

// 在 DOM 加载后再次检查
document.addEventListener('DOMContentLoaded', () => {
  console.log('📄 DOM 加载完成，检查 electronAPI:', typeof window.electronAPI);
});