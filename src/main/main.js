import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { DouyinCrawler } from '../crawler/crawler.js';
import { Database } from '../database/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class ElectronApp {
  constructor() {
    this.mainWindow = null;
    this.db = new Database();
    this.crawler = new DouyinCrawler(this.db);
    this.isDev = process.argv.includes('--dev');
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
        preload: join(__dirname, '../preload/preload.js')
      },
      titleBarStyle: 'hiddenInset',
      show: false
    });

    // 加载页面
    const htmlPath = join(__dirname, '../renderer/index.html');
    await this.mainWindow.loadFile(htmlPath);

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
    // 初始化数据库
    await this.db.init();
    
    // 设置IPC通信
    this.setupIPC();
    
    console.log('✅ 应用初始化完成');
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