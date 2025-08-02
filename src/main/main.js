import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;
let Database, DouyinCrawler;
let db, crawler;

async function initializeApp() {
  try {
    console.log('🔧 开始初始化应用模块...');
    
    // 动态导入 ES 模块
    const databaseModule = await import('../database/database.mjs');
    const crawlerModule = await import('../crawler/crawler.mjs');
    
    Database = databaseModule.Database;
    DouyinCrawler = crawlerModule.DouyinCrawler;

    // 初始化数据库和爬虫
    db = new Database();
    await db.init();
    
    crawler = new DouyinCrawler(db);
    
    console.log('✅ 应用模块初始化完成');
    
    // 设置 IPC 处理
    setupIPC();
    
    // 设置爬虫事件监听
    setupCrawlerEventListeners();
    
  } catch (error) {
    console.error('❌ 应用初始化失败:', error);
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
      
      // 设置爬虫事件监听（每次启动时重新设置）
      setupCrawlerEventListeners();
      
      await crawler.startMonitoring(liveUrl);
      console.log('✅ 监听启动成功');
      return { success: true };
    } catch (error) {
      console.error('❌ 启动监听失败:', error);
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
      if (!db) {
        throw new Error('数据库未初始化');
      }
      const comments = await db.getComments(options);
      return { success: true, data: comments };
    } catch (error) {
      console.error('❌ 获取评论失败:', error);
      return { success: false, error: error.message };
    }
  });

  // 导出评论
  ipcMain.handle('export-comments', async (event, format = 'json') => {
    try {
      if (!db) {
        throw new Error('数据库未初始化');
      }
      const result = await db.exportComments(format);
      return { success: true, data: result };
    } catch (error) {
      console.error('❌ 导出评论失败:', error);
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
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('new-comment', comment);
    }
  });

  // 监听状态变化
  crawler.on('status-change', (status) => {
    console.log('📡 转发状态变化事件到渲染进程:', status);
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('status-change', status);
    }
  });

  console.log('✅ 爬虫事件监听器设置完成');
}

async function createWindow() {
  console.log('🚀 创建主窗口...');
  
  // 创建浏览器窗口
  const isDev = process.env.NODE_ENV === 'development' || process.argv.includes('--dev');
  const preloadPath = isDev 
    ? path.join(__dirname, '../preload/preload.js')
    : path.join(__dirname, 'preload.js');
  console.log('🔧 Preload 脚本路径:', preloadPath);
  
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

  const isDev = process.env.NODE_ENV === 'development' || process.argv.includes('--dev');
  
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
    
    // 检查 preload 脚本是否正确执行
    mainWindow.webContents.executeJavaScript(`
      console.log('🔍 检查 electronAPI:', typeof window.electronAPI);
      console.log('🔍 检查 preloadTest:', window.preloadTest);
      console.log('🔍 electronAPI 属性:', window.electronAPI ? Object.keys(window.electronAPI) : 'undefined');
    `).catch(err => console.error('执行检查脚本失败:', err));
  });
}

// 应用事件处理
app.whenReady().then(async () => {
  console.log('🎯 Electron 准备就绪');
  
  try {
    // 先初始化应用模块
    await initializeApp();
    
    // 然后创建窗口
    await createWindow();
    
  } catch (error) {
    console.error('❌ 应用启动失败:', error);
    // 即使初始化失败，也要创建窗口
    await createWindow();
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