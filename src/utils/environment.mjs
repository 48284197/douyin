import { platform } from 'os';
import { existsSync } from 'fs';
import { join } from 'path';

/**
 * 环境检测模块
 * 检测运行时环境并提供适当的配置
 */
export class EnvironmentDetector {
  constructor() {
    this.config = this.detectEnvironment();
  }

  /**
   * 检测当前运行环境
   * @returns {Object} 环境配置对象
   */
  detectEnvironment() {
    const isElectron = this.isElectronEnvironment();
    const isDevelopment = this.isDevelopmentMode();
    const isPackaged = this.isPackagedApp();
    const currentPlatform = this.getPlatform();

    return {
      isElectron,
      isDevelopment,
      isPackaged,
      platform: currentPlatform,
      chromePaths: this.getBrowserExecutablePaths(currentPlatform)
    };
  }

  /**
   * 检测是否在 Electron 环境中运行
   * @returns {boolean}
   */
  isElectronEnvironment() {
    // 检查多个 Electron 环境标识
    return !!(
      typeof window !== 'undefined' && window.process && window.process.type ||
      typeof process !== 'undefined' && process.versions && process.versions.electron ||
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().indexOf('electron') > -1 ||
      typeof process !== 'undefined' && process.env.ELECTRON_RUN_AS_NODE
    );
  }

  /**
   * 检测是否为开发模式
   * @returns {boolean}
   */
  isDevelopmentMode() {
    return !!(
      typeof process !== 'undefined' && (
        process.env.NODE_ENV === 'development' ||
        process.env.ELECTRON_IS_DEV === '1' ||
        process.defaultApp ||
        /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
        /[\\/]electron[\\/]/.test(process.execPath)
      )
    );
  }

  /**
   * 检测应用是否已打包
   * @returns {boolean}
   */
  isPackagedApp() {
    if (typeof process === 'undefined') return false;
    
    // 在 Electron 中，app.isPackaged 是最可靠的方法
    if (typeof require !== 'undefined') {
      try {
        const { app } = require('electron');
        if (app && typeof app.isPackaged === 'boolean') {
          return app.isPackaged;
        }
      } catch (error) {
        // 如果无法访问 electron app，使用其他方法
      }
    }

    // 备用检测方法
    return !!(
      process.env.NODE_ENV === 'production' ||
      !process.defaultApp ||
      process.execPath.indexOf('node_modules') === -1
    );
  }

  /**
   * 获取当前平台
   * @returns {string}
   */
  getPlatform() {
    return platform();
  }

  /**
   * 获取不同平台的浏览器可执行文件路径
   * @param {string} currentPlatform 当前平台
   * @returns {string[]} 浏览器路径数组，按优先级排序
   */
  getBrowserExecutablePaths(currentPlatform) {
    const paths = [];

    switch (currentPlatform) {
      case 'darwin': // macOS
        paths.push(
          '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
          '/Applications/Chromium.app/Contents/MacOS/Chromium',
          '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
          '/usr/bin/google-chrome-stable',
          '/usr/bin/google-chrome',
          '/usr/bin/chromium-browser',
          '/usr/bin/chromium'
        );
        break;

      case 'win32': // Windows
        paths.push(
          'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
          'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
          'C:\\Program Files\\Chromium\\Application\\chromium.exe',
          'C:\\Program Files (x86)\\Chromium\\Application\\chromium.exe',
          'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
          'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
        );
        break;

      case 'linux': // Linux
        paths.push(
          '/usr/bin/google-chrome-stable',
          '/usr/bin/google-chrome',
          '/usr/bin/chromium-browser',
          '/usr/bin/chromium',
          '/snap/bin/chromium',
          '/usr/bin/microsoft-edge-stable',
          '/usr/bin/microsoft-edge'
        );
        break;

      default:
        // 通用路径
        paths.push(
          '/usr/bin/google-chrome',
          '/usr/bin/chromium'
        );
    }

    // 过滤出实际存在的路径
    return paths.filter(path => {
      try {
        return existsSync(path);
      } catch (error) {
        return false;
      }
    });
  }

  /**
   * 获取 Puppeteer 启动选项
   * @returns {Object} Puppeteer 配置对象
   */
  getPuppeteerOptions() {
    const config = this.config;
    const options = {
      headless: config.isDevelopment ? false : 'new', // 开发模式显示浏览器
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-blink-features=AutomationControlled',
        '--disable-web-security',
        '--disable-features=site-per-process',
        '--no-first-run',
        '--no-default-browser-check',
        '--disable-default-apps'
      ],
      timeout: 30000,
      ignoreHTTPSErrors: true,
      defaultViewport: { width: 1366, height: 768 }
    };

    // Electron 特定配置
    if (config.isElectron) {
      options.args.push(
        '--disable-extensions',
        '--disable-plugins',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding'
      );

      // 在 Electron 中，通常需要更长的超时时间
      options.timeout = 45000;
    }

    // 生产环境优化
    if (!config.isDevelopment) {
      options.args.push(
        '--disable-gpu',
        '--disable-software-rasterizer',
        '--disable-background-networking',
        '--disable-background-timer-throttling',
        '--disable-client-side-phishing-detection',
        '--disable-default-apps',
        '--disable-hang-monitor',
        '--disable-popup-blocking',
        '--disable-prompt-on-repost',
        '--disable-sync',
        '--metrics-recording-only',
        '--no-first-run',
        '--safebrowsing-disable-auto-update'
      );
    }

    // 尝试设置可执行文件路径
    const availablePaths = config.chromePaths;
    if (availablePaths.length > 0) {
      options.executablePath = availablePaths[0]; // 使用第一个可用路径
    }

    return options;
  }

  /**
   * 获取带有回退策略的 Puppeteer 选项数组
   * @returns {Object[]} 多个配置选项，按优先级排序
   */
  getPuppeteerOptionsWithFallback() {
    const baseOptions = this.getPuppeteerOptions();
    const fallbackOptions = [];

    // 主要选项（使用检测到的浏览器路径）
    if (baseOptions.executablePath) {
      fallbackOptions.push({ ...baseOptions });
    }

    // 回退选项1：不指定可执行路径，让 Puppeteer 自动查找
    const fallback1 = { ...baseOptions };
    delete fallback1.executablePath;
    fallbackOptions.push(fallback1);

    // 回退选项2：强制无头模式
    const fallback2 = { 
      ...baseOptions,
      headless: 'new',
      args: [...baseOptions.args, '--disable-gpu']
    };
    delete fallback2.executablePath;
    fallbackOptions.push(fallback2);

    // 回退选项3：最小配置
    fallbackOptions.push({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      timeout: 60000,
      ignoreHTTPSErrors: true
    });

    return fallbackOptions;
  }

  /**
   * 获取环境信息摘要
   * @returns {Object} 环境信息
   */
  getEnvironmentSummary() {
    const config = this.config;
    return {
      runtime: config.isElectron ? 'Electron' : 'Node.js',
      mode: config.isDevelopment ? 'Development' : 'Production',
      packaged: config.isPackaged ? 'Yes' : 'No',
      platform: config.platform,
      availableBrowsers: config.chromePaths.length,
      browserPaths: config.chromePaths
    };
  }

  /**
   * 验证环境是否适合运行爬虫
   * @returns {Object} 验证结果
   */
  validateEnvironment() {
    const config = this.config;
    const issues = [];
    const warnings = [];

    // 检查浏览器可用性
    if (config.chromePaths.length === 0) {
      issues.push('未找到可用的浏览器可执行文件');
    }

    // Electron 特定检查
    if (config.isElectron && config.isPackaged) {
      if (config.chromePaths.length === 0) {
        warnings.push('打包的 Electron 应用中未找到浏览器，可能需要捆绑 Chromium');
      }
    }

    // 平台特定警告
    if (config.platform === 'linux' && config.chromePaths.length === 0) {
      warnings.push('Linux 系统可能需要安装 google-chrome-stable 或 chromium-browser');
    }

    return {
      valid: issues.length === 0,
      issues,
      warnings,
      summary: this.getEnvironmentSummary()
    };
  }
}

// 创建单例实例
export const environmentDetector = new EnvironmentDetector();

// 导出便捷函数
export const getEnvironmentConfig = () => environmentDetector.config;
export const getPuppeteerOptions = () => environmentDetector.getPuppeteerOptions();
export const getPuppeteerOptionsWithFallback = () => environmentDetector.getPuppeteerOptionsWithFallback();
export const validateEnvironment = () => environmentDetector.validateEnvironment();
export const getEnvironmentSummary = () => environmentDetector.getEnvironmentSummary();