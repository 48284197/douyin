import { app, BrowserWindow, ipcMain, screen } from 'electron';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { DouyinCrawler } from '../crawler/crawler.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = process.env.NODE_ENV === 'development' || process.argv.includes('--dev');
let mainWindow;
let miniWindow = null;
let db, crawler;

async function initializeApp() {
  try {
    // 初始化数据库和爬虫    
    crawler = new DouyinCrawler();
    
    setupIPC();
    setupCrawlerEventListeners();
    
    console.log('✅ 应用初始化完成');
  } catch (error) {
    console.error('❌ 应用初始化失败:', error);
    // 重新抛出错误，让上层处理
    throw error;
  }
}

function setupIPC() {
  // 开始监听直播间
  ipcMain.handle('start-monitoring', async (event, liveUrl) => {
    try {
      console.log('📡 收到启动监听请求:', liveUrl);
      if (!crawler) {
        throw new Error('爬虫模块未初始化完成，请稍后重试');
      }

      // 确保事件监听器已设置
      setupCrawlerEventListeners();

      await crawler.startMonitoring(liveUrl);
      console.log('✅ 监听启动成功');
      return { success: true };
    } catch (error) {
      console.error('❌ 启动监听失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 创建小窗口
  ipcMain.handle('create-mini-window', async (event, options = {}) => {
    try {
      if (miniWindow && !miniWindow.isDestroyed()) {
        miniWindow.focus();
        return { success: true, message: '弹幕小窗口已存在' };
      }

      const { width = 400, height = 500, backgroundColor = '#80000000', title = '弹幕小窗' } = options;
      
        // 直接使用绝对路径确保preload脚本能够立即加载
  const preloadPath = isDev
    ? path.join(__dirname, 'simple-preload.js')
    : path.join(__dirname, 'simple-preload.js');
     
      
      console.log('🔧 小窗口 Preload 脚本路径:', preloadPath);
      console.log('🔧 Preload 文件是否存在:', fs.existsSync(preloadPath));
      
      miniWindow = new BrowserWindow({
        width,
        height,
        title,
        frame: false,
        transparent: true,
        alwaysOnTop: false,
        resizable: true,
        minimizable: false,
        maximizable: false,
        skipTaskbar: true,
        hasShadow: false,
        thickFrame: false,
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: true,
          preload: preloadPath,
          devTools: isDev,
          hardwareAcceleration: true,
          backgroundThrottling: false
        }
      });

      // 设置窗口背景色
      miniWindow.setBackgroundColor(backgroundColor);

      // 加载小窗口页面
      if (isDev) {
        await miniWindow.loadURL('http://localhost:5174/#/mini-window');
      } else {
        await miniWindow.loadFile(path.join(__dirname, '../renderer/index.html'), {
          hash: 'mini-window'
        });
      }

      miniWindow.show();

      // 在开发模式下打开开发者工具
      if (isDev) {
        miniWindow.webContents.openDevTools();
      }

      miniWindow.on('closed', () => {
        miniWindow = null;
      });

      console.log('✅ 小窗口创建成功');
      return { success: true };
    } catch (error) {
      console.error('❌ 创建小窗口失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 关闭小窗口
  ipcMain.handle('close-mini-window', async () => {
    try {
      if (miniWindow && !miniWindow.isDestroyed()) {
        miniWindow.close();
        miniWindow = null;
      }
      return { success: true };
    } catch (error) {
      console.error('❌ 关闭小窗口失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 设置小窗口置顶
  ipcMain.handle('set-mini-window-always-on-top', async (event, flag) => {
    try {
      if (miniWindow && !miniWindow.isDestroyed()) {
        miniWindow.setAlwaysOnTop(flag);
      }
      return { success: true };
    } catch (error) {
      console.error('❌ 设置窗口置顶失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 设置小窗口背景色
  ipcMain.handle('set-mini-window-background', async (event, backgroundColor) => {
    try {
      if (miniWindow && !miniWindow.isDestroyed()) {
        miniWindow.setBackgroundColor(backgroundColor);
      }
      return { success: true };
    } catch (error) {
      console.error('❌ 设置窗口背景失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 设置小窗口大小
  ipcMain.handle('set-mini-window-size', async (event, width, height) => {
    try {
      if (miniWindow && !miniWindow.isDestroyed()) {
        miniWindow.setSize(width, height);
      }
      return { success: true };
    } catch (error) {
      console.error('❌ 设置窗口大小失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 获取小窗口边界信息
  ipcMain.handle('get-mini-window-bounds', async () => {
    try {
      if (miniWindow && !miniWindow.isDestroyed()) {
        const [x, y] = miniWindow.getPosition();
        const [width, height] = miniWindow.getSize();
        return { success: true, data: { x, y, width, height } };
      }
      return { success: false, error: '窗口不存在' };
    } catch (error) {
      console.error('❌ 获取窗口边界失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 设置小窗口绝对位置
  ipcMain.handle('set-mini-window-position', async (event, x, y) => {
    try {
      if (miniWindow && !miniWindow.isDestroyed()) {
        const [windowWidth, windowHeight] = miniWindow.getSize();
        
        // 获取屏幕工作区域
        const display = screen.getPrimaryDisplay();
        const { width: screenWidth, height: screenHeight } = display.workAreaSize;
        const { x: screenX, y: screenY } = display.workArea;
        
        // 边界检测 - 确保窗口不会完全移出屏幕
        const minVisibleArea = 50; // 至少保留50px可见
        const newX = Math.max(screenX - windowWidth + minVisibleArea, Math.min(x, screenX + screenWidth - minVisibleArea));
        const newY = Math.max(screenY, Math.min(y, screenY + screenHeight - minVisibleArea));
        
        miniWindow.setPosition(newX, newY);
      }
      return { success: true };
    } catch (error) {
      console.error('❌ 设置窗口位置失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 移动小窗口（保留兼容性）
  ipcMain.handle('move-mini-window', async (event, deltaX, deltaY) => {
    try {
      if (miniWindow && !miniWindow.isDestroyed()) {
        const [currentX, currentY] = miniWindow.getPosition();
        const [windowWidth, windowHeight] = miniWindow.getSize();
        
        // 获取屏幕工作区域
        const display = screen.getPrimaryDisplay();
        const { width: screenWidth, height: screenHeight } = display.workAreaSize;
        const { x: screenX, y: screenY } = display.workArea;
        
        // 计算新位置
        let newX = currentX + deltaX;
        let newY = currentY + deltaY;
        
        // 边界检测 - 确保窗口不会完全移出屏幕
        const minVisibleArea = 50; // 至少保留50px可见
        newX = Math.max(screenX - windowWidth + minVisibleArea, Math.min(newX, screenX + screenWidth - minVisibleArea));
        newY = Math.max(screenY, Math.min(newY, screenY + screenHeight - minVisibleArea));
        
        miniWindow.setPosition(newX, newY);
      }
      return { success: true };
    } catch (error) {
      console.error('❌ 移动窗口失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 停止监听
  ipcMain.handle('stop-monitoring', async () => {
    try {
      console.log('📡 收到停止监听请求');
      if (!crawler) {
        throw new Error('爬虫模块未初始化');
      }
      await crawler.stopMonitoring();
      console.log('✅ 监听停止成功');
      return { success: true };
    } catch (error) {
      console.error('❌ 停止监听失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 获取评论历史
  ipcMain.handle('get-comments', async (event, options = {}) => {
    try {
      if (!crawler) {
        throw new Error('爬虫模块未初始化');
      }
      // 从爬虫获取评论数据
      const comments = crawler.getComments ? await crawler.getComments(options) : [];
      return { success: true, data: comments };
    } catch (error) {
      console.error('❌ 获取评论失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 导出评论
  ipcMain.handle('export-comments', async (event, format = 'json') => {
    try {
      if (!crawler) {
        throw new Error('爬虫模块未初始化');
      }
      // 从爬虫导出评论数据
      const result = crawler.exportComments ? await crawler.exportComments(format) : [];
      return { success: true, data: result };
    } catch (error) {
      console.error('❌ 导出评论失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 测试方法
  ipcMain.handle('test', () => {
    return 'Main process is working!';
  });
  
  // API就绪检查
  ipcMain.handle('check-api-ready', () => {
    return { 
      success: true, 
      crawler: !!crawler,
      timestamp: Date.now()
    };
  });

  // 清空评论
  ipcMain.handle('clear-comments', async () => {
    try {
      if (crawler) {
        crawler.clearComments();
        return { success: true, message: '评论已清空' };
      } else {
        return { success: false, message: '爬虫未初始化' };
      }
    } catch (error) {
      console.error('清空评论失败:', error);
      return { success: false, message: error.message };
    }
  });

  // 清除用户数据（重新登录）
  ipcMain.handle('clear-user-data', async () => {
    try {
      // 先停止监听
      if (crawler && crawler.isMonitoring) {
        await crawler.stopMonitoring();
      }
      
      // 清除用户数据
      const result = await DouyinCrawler.clearUserData();
      return result;
    } catch (error) {
      console.error('清除用户数据失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 获取用户数据目录路径
  ipcMain.handle('get-user-data-dir', async () => {
    try {
      const userDataDir = DouyinCrawler.getUserDataDir();
      const exists = fs.existsSync(userDataDir);
      return { success: true, path: userDataDir, exists };
    } catch (error) {
      console.error('获取用户数据目录失败:', error);
      return { success: false, error: error.message };
    }
  });
}

// 单独的函数来设置爬虫事件监听
function setupCrawlerEventListeners() {
  if (!crawler) {
    console.log('⚠️ 爬虫未初始化，跳过事件监听设置');
    return;
  }

  // 移除之前的监听器，避免重复监听
  crawler.removeAllListeners('new-comment');
  crawler.removeAllListeners('status-change');

  // 监听新评论事件
  crawler.on('new-comment', (comment) => {
    console.log('📨 转发新评论事件到渲染进程:', comment.username, comment.content?.substring(0, 20));
    
    // 发送给主窗口
    if (mainWindow && !mainWindow.isDestroyed()) {
      try {
        mainWindow.webContents.send('new-comment', comment);
      } catch (error) {
        console.error('发送新评论事件到主窗口失败:', error);
      }
    }
    
    // 发送给小窗口
    if (miniWindow && !miniWindow.isDestroyed()) {
      try {
        miniWindow.webContents.send('new-comment', comment);
      } catch (error) {
        console.error('发送新评论事件到小窗口失败:', error);
      }
    }
  });

  // 监听状态变化
  crawler.on('status-change', (status) => {
    console.log('📡 转发状态变化事件到渲染进程:', status);
    if (mainWindow && !mainWindow.isDestroyed()) {
      try {
        mainWindow.webContents.send('status-change', status);
      } catch (error) {
        console.error('发送状态变化事件失败:', error);
      }
    }
  });

  console.log('✅ 爬虫事件监听器设置完成');
}

async function createWindow() {
  // 检查是否已有窗口存在
  if (mainWindow && !mainWindow.isDestroyed()) {
    console.log('⚠️ 主窗口已存在，聚焦到现有窗口');
    mainWindow.focus();
    return;
  }

  console.log('🚀 创建主窗口...');

  // 创建浏览器窗口

  // 直接使用绝对路径确保preload脚本能够立即加载
  const preloadPath = isDev
    ? path.join(__dirname, 'simple-preload.js')
    : path.join(__dirname, 'simple-preload.js');
  console.log('🔧 Preload 脚本路径:', preloadPath);
  console.log('🔧 主进程直接挂载preload脚本');

  // 检查文件是否存在
  if (fs.existsSync(preloadPath)) {
    console.log('✅ Preload 文件存在');
  } else {
    console.error('❌ Preload 文件不存在:', preloadPath);
    // 列出目录内容
    try {
      const files = fs.readdirSync(__dirname);
      console.log('📁 当前目录文件:', files);
    } catch (err) {
      console.error('无法读取目录:', err);
    }
  }

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: preloadPath
    },
    show: false
  });

  console.log('✅ 主窗口创建完成');



  if (isDev) {
    console.log('🔧 开发模式，等待 Vite 服务器启动...');

    // 等待 Vite 服务器启动
    let retries = 0;
    const maxRetries = 10;

    const tryLoadDev = async () => {
      try {
        await mainWindow.loadURL('http://localhost:5174');
        console.log('✅ 开发服务器页面加载成功');
        mainWindow.show();
        mainWindow.webContents.openDevTools();
      } catch (error) {
        retries++;
        if (retries < maxRetries) {
          console.log(`⏳ 重试加载开发服务器 (${retries}/${maxRetries})...`);
          setTimeout(tryLoadDev, 1000);
        } else {
          console.error('❌ 开发服务器加载失败，尝试加载本地文件');
          // 加载本地 HTML 文件作为备选
          const htmlPath = path.join(__dirname, '../renderer/index.html');
          await mainWindow.loadFile(htmlPath);
          mainWindow.show();
        }
      }
    };

    setTimeout(tryLoadDev, 1000);

  } else {
    // 生产模式
    const htmlPath = path.join(__dirname, '../../dist/index.html');
    await mainWindow.loadFile(htmlPath);
    mainWindow.show();
  }

  // 窗口事件处理
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('❌ 页面加载失败:', errorCode, errorDescription);
  });

  mainWindow.webContents.on('dom-ready', () => {
    console.log('✅ DOM 加载完成');

    // 延迟一段时间确保所有初始化完成
    setTimeout(() => {
      // 检查 preload 脚本是否正确执行
      mainWindow.webContents.executeJavaScript(`
        console.log('🔍 检查 electronAPI:', typeof window.electronAPI);
        console.log('🔍 检查 preloadTest:', window.preloadTest);
        console.log('🔍 electronAPI 属性:', window.electronAPI ? Object.keys(window.electronAPI) : 'undefined');
        
        // 通知渲染进程主进程已完全就绪
        if (window.electronAPI && window.electronAPI.checkApiReady) {
          window.electronAPI.checkApiReady().then(result => {
            console.log('🎯 主进程就绪状态:', result);
          }).catch(err => {
            console.error('检查主进程就绪状态失败:', err);
          });
        }
      `).catch(err => console.error('执行检查脚本失败:', err));
    }, 500); // 延迟500ms
  });
}

// 单例应用检查
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  console.log('⚠️ 应用已在运行，退出当前实例');
  app.quit();
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    console.log('🔄 检测到第二个实例启动，关闭当前实例以启动新实例');
    
    // 当检测到第二个实例时，关闭当前实例让新实例启动
    if (mainWindow) {
      mainWindow.close();
    }
    
    // 延迟退出，给新实例时间启动
    setTimeout(() => {
      console.log('✅ 当前实例已关闭，新实例将启动');
      app.quit();
    }, 500);
  });
}

// 应用事件处理
app.whenReady().then(async () => {
  console.log('🎯 Electron 准备就绪');

  try {
    // 先初始化应用模块
    await initializeApp();
    console.log('✅ 应用模块初始化成功');

    // 然后创建窗口
    await createWindow();

  } catch (error) {
    console.error('❌ 应用启动失败:', error);
    console.error('❌ Electron API 初始化失败，应用将退出');
    
    // 如果初始化失败，直接退出应用
    app.quit();
    return;
  }

  app.on('activate', async () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      await createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 应用退出时清理
app.on('before-quit', async () => {
  if (crawler) {
    try {
      await crawler.stopMonitoring();
    } catch (error) {
      console.error('清理爬虫失败:', error);
    }
  }
});

console.log('🚀 ES Module 主进程启动...');