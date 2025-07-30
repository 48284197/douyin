const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');

// 由于使用 CommonJS，我们需要动态导入 ES 模块
let DouyinCrawler, Database;

class ElectronApp {
  constructor() {
    this.mainWindow = null;
    this.db = null;
    this.crawler = null;
    this.isDev = process.argv.includes('--dev') || process.env.NODE_ENV === 'development';
  }

  async createWindow() {
    // 创建主窗口
    this.mainWindow = new BrowserWindow({
      width: 1200,
      height: 800,
      minWidth: 800,
      minHeight: 600,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, '../preload/preload.cjs')
      },
      titleBarStyle: 'hiddenInset',
      show: false
    });

    // 加载页面
    if (this.isDev) {
      await this.mainWindow.loadURL('http://localhost:5174');
    } else {
      const htmlPath = path.join(__dirname, '../../dist/index.html');
      await this.mainWindow.loadFile(htmlPath);
    }

    // 开发模式打开调试工具
    if (this.isDev) {
      this.mainWindow.webContents.openDevTools();
    }

    // 窗口准备好后显示
    this.mainWindow.once('ready-to-show', () => {
      this.mainWindow.show();
    });

    // 设置菜单
    this.createMenu();
  }

  createMenu() {
    const template = [
      {
        label: '文件',
        submenu: [
          {
            label: '开始监听',
            accelerator: 'CmdOrCtrl+S',
            click: () => {
              this.mainWindow.webContents.send('menu-start-monitoring');
            }
          },
          {
            label: '停止监听',
            accelerator: 'CmdOrCtrl+T',
            click: () => {
              this.mainWindow.webContents.send('menu-stop-monitoring');
            }
          },
          { type: 'separator' },
          {
            label: '退出',
            accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
            click: () => {
              app.quit();
            }
          }
        ]
      },
      {
        label: '查看',
        submenu: [
          { role: 'reload', label: '重新加载' },
          { role: 'forceReload', label: '强制重新加载' },
          { role: 'toggleDevTools', label: '开发者工具' },
          { type: 'separator' },
          { role: 'resetZoom', label: '重置缩放' },
          { role: 'zoomIn', label: '放大' },
          { role: 'zoomOut', label: '缩小' }
        ]
      }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }

  setupIPC() {
    // 开始监听直播间
    ipcMain.handle('start-monitoring', async (event, liveUrl) => {
      try {
        await this.crawler.startMonitoring(liveUrl);
        return { success: true };
      } catch (error) {
        return { success: false, error: error.message };
      }
    });

    // 停止监听
    ipcMain.handle('stop-monitoring', async () => {
      try {
        await this.crawler.stopMonitoring();
        return { success: true };
      } catch (error) {
        return { success: false, error: error.message };
      }
    });

    // 获取评论历史
    ipcMain.handle('get-comments', async (event, options = {}) => {
      try {
        const comments = await this.db.getComments(options);
        return { success: true, data: comments };
      } catch (error) {
        return { success: false, error: error.message };
      }
    });

    // 导出评论数据
    ipcMain.handle('export-comments', async (event, format = 'json') => {
      try {
        const result = await this.db.exportComments(format);
        return { success: true, data: result };
      } catch (error) {
        return { success: false, error: error.message };
      }
    });

    // 监听新评论事件
    this.crawler.on('new-comment', (comment) => {
      this.mainWindow.webContents.send('new-comment', comment);
    });

    // 监听状态变化
    this.crawler.on('status-change', (status) => {
      this.mainWindow.webContents.send('status-change', status);
    });
  }

  async init() {
    try {
      // 动态导入 ES 模块
      const crawlerModule = await import('../crawler/crawler.mjs');
      const databaseModule = await import('../database/database.mjs');
      
      DouyinCrawler = crawlerModule.DouyinCrawler;
      Database = databaseModule.Database;

      // 初始化数据库和爬虫
      this.db = new Database();
      await this.db.init();
      
      this.crawler = new DouyinCrawler(this.db);
      
      // 设置IPC通信
      this.setupIPC();
      
      console.log('✅ 应用初始化完成');
    } catch (error) {
      console.error('❌ 应用初始化失败:', error);
      throw error;
    }
  }
}

// 应用实例
const electronApp = new ElectronApp();

// 应用事件处理
app.whenReady().then(async () => {
  await electronApp.init();
  await electronApp.createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', async () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    await electronApp.createWindow();
  }
});