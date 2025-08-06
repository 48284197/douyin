import { EventEmitter } from 'events';
import { getEnvironmentConfig } from './environment.mjs';

/**
 * 错误类别枚举
 */
export const ErrorCategory = {
  BROWSER_LAUNCH: 'browser_launch',
  PAGE_NAVIGATION: 'page_navigation', 
  DOM_EXTRACTION: 'dom_extraction',
  WEBSOCKET: 'websocket',
  MODULE_LOADING: 'module_loading',
  NETWORK: 'network',
  PERMISSION: 'permission',
  RESOURCE: 'resource',
  UNKNOWN: 'unknown'
};

/**
 * 错误严重程度枚举
 */
export const ErrorSeverity = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical'
};

/**
 * 恢复策略枚举
 */
export const RecoveryStrategy = {
  RETRY: 'retry',
  FALLBACK: 'fallback',
  RESTART: 'restart',
  GRACEFUL_DEGRADATION: 'graceful_degradation',
  ABORT: 'abort'
};

/**
 * 增强的错误处理系统
 * 提供集中的错误管理、分类、恢复策略和重试机制
 */
export class ErrorHandler extends EventEmitter {
  constructor(options = {}) {
    super();
    
    this.options = {
      maxRetries: options.maxRetries || 3,
      baseDelay: options.baseDelay || 1000, // 基础延迟 1 秒
      maxDelay: options.maxDelay || 30000,   // 最大延迟 30 秒
      enableLogging: options.enableLogging !== false,
      enableEvents: options.enableEvents !== false,
      ...options
    };

    this.retryAttempts = new Map(); // 跟踪重试次数
    this.errorHistory = []; // 错误历史记录
    this.recoveryStrategies = new Map(); // 恢复策略映射
    
    this.setupDefaultRecoveryStrategies();
  }

  /**
   * 设置默认恢复策略
   */
  setupDefaultRecoveryStrategies() {
    // 浏览器启动错误恢复策略
    this.recoveryStrategies.set(ErrorCategory.BROWSER_LAUNCH, [
      RecoveryStrategy.RETRY,
      RecoveryStrategy.FALLBACK,
      RecoveryStrategy.RESTART
    ]);

    // 页面导航错误恢复策略
    this.recoveryStrategies.set(ErrorCategory.PAGE_NAVIGATION, [
      RecoveryStrategy.RETRY,
      RecoveryStrategy.FALLBACK
    ]);

    // DOM 提取错误恢复策略
    this.recoveryStrategies.set(ErrorCategory.DOM_EXTRACTION, [
      RecoveryStrategy.FALLBACK,
      RecoveryStrategy.GRACEFUL_DEGRADATION
    ]);

    // WebSocket 错误恢复策略
    this.recoveryStrategies.set(ErrorCategory.WEBSOCKET, [
      RecoveryStrategy.RETRY,
      RecoveryStrategy.FALLBACK,
      RecoveryStrategy.GRACEFUL_DEGRADATION
    ]);

    // 模块加载错误恢复策略
    this.recoveryStrategies.set(ErrorCategory.MODULE_LOADING, [
      RecoveryStrategy.RETRY,
      RecoveryStrategy.RESTART
    ]);

    // 网络错误恢复策略
    this.recoveryStrategies.set(ErrorCategory.NETWORK, [
      RecoveryStrategy.RETRY,
      RecoveryStrategy.FALLBACK
    ]);
  }

  /**
   * 处理错误的主要方法
   * @param {Error} error - 原始错误对象
   * @param {Object} context - 错误上下文信息
   * @returns {Promise<Object>} 错误报告和恢复建议
   */
  async handleError(error, context = {}) {
    const errorReport = this.createErrorReport(error, context);
    
    // 记录错误
    this.logError(errorReport);
    
    // 添加到历史记录
    this.addToHistory(errorReport);
    
    // 发出错误事件（只有在有监听器时才发出）
    if (this.options.enableEvents && this.listenerCount('error') > 0) {
      this.emit('error', errorReport);
    }
    
    // 获取恢复策略
    const recoveryPlan = this.getRecoveryPlan(errorReport);
    
    return {
      report: errorReport,
      recovery: recoveryPlan
    };
  }

  /**
   * 创建详细的错误报告
   * @param {Error} error - 原始错误
   * @param {Object} context - 上下文信息
   * @returns {Object} 错误报告
   */
  createErrorReport(error, context = {}) {
    const category = this.categorizeError(error, context);
    const severity = this.determineSeverity(error, category, context);
    const environmentConfig = getEnvironmentConfig();
    
    return {
      id: this.generateErrorId(),
      timestamp: Date.now(),
      category,
      severity,
      message: error.message || 'Unknown error',
      stack: error.stack,
      name: error.name || 'Error',
      code: error.code,
      context: {
        environment: environmentConfig,
        operation: context.operation,
        url: context.url,
        component: context.component,
        additionalInfo: context.additionalInfo || {},
        ...context
      },
      recovery: {
        attempted: [],
        successful: null,
        suggestions: []
      }
    };
  }

  /**
   * 错误分类
   * @param {Error} error - 错误对象
   * @param {Object} context - 上下文信息
   * @returns {string} 错误类别
   */
  categorizeError(error, context = {}) {
    const message = error.message?.toLowerCase() || '';
    const stack = error.stack?.toLowerCase() || '';
    const code = error.code;

    // 基于错误消息和堆栈的模式匹配
    if (message.includes('chrome') || message.includes('chromium') || 
        message.includes('browser') || message.includes('puppeteer')) {
      return ErrorCategory.BROWSER_LAUNCH;
    }

    if (message.includes('navigation') || message.includes('timeout') ||
        message.includes('net::') || code === 'ENOTFOUND' || code === 'ECONNREFUSED') {
      return ErrorCategory.PAGE_NAVIGATION;
    }

    if (message.includes('selector') || message.includes('element') ||
        message.includes('dom') || context.operation === 'dom_extraction') {
      return ErrorCategory.DOM_EXTRACTION;
    }

    if (message.includes('websocket') || message.includes('ws://') ||
        message.includes('wss://') || context.operation === 'websocket') {
      return ErrorCategory.WEBSOCKET;
    }

    if (message.includes('module') || message.includes('import') ||
        message.includes('require') || stack.includes('module')) {
      return ErrorCategory.MODULE_LOADING;
    }

    if (message.includes('network') || message.includes('fetch') ||
        code === 'ECONNRESET' || code === 'ETIMEDOUT') {
      return ErrorCategory.NETWORK;
    }

    if (message.includes('permission') || message.includes('access') ||
        code === 'EACCES' || code === 'EPERM') {
      return ErrorCategory.PERMISSION;
    }

    if (message.includes('memory') || message.includes('resource') ||
        code === 'ENOMEM' || code === 'EMFILE') {
      return ErrorCategory.RESOURCE;
    }

    return ErrorCategory.UNKNOWN;
  }

  /**
   * 确定错误严重程度
   * @param {Error} error - 错误对象
   * @param {string} category - 错误类别
   * @param {Object} context - 上下文信息
   * @returns {string} 严重程度
   */
  determineSeverity(error, category, context = {}) {
    // 关键错误：阻止核心功能
    if (category === ErrorCategory.BROWSER_LAUNCH || 
        category === ErrorCategory.MODULE_LOADING ||
        category === ErrorCategory.PERMISSION) {
      return ErrorSeverity.CRITICAL;
    }

    // 高严重性：影响主要功能
    if (category === ErrorCategory.PAGE_NAVIGATION ||
        category === ErrorCategory.RESOURCE) {
      return ErrorSeverity.HIGH;
    }

    // 中等严重性：影响部分功能
    if (category === ErrorCategory.WEBSOCKET ||
        category === ErrorCategory.NETWORK) {
      return ErrorSeverity.MEDIUM;
    }

    // 低严重性：不影响核心功能
    if (category === ErrorCategory.DOM_EXTRACTION) {
      return ErrorSeverity.LOW;
    }

    return ErrorSeverity.MEDIUM;
  }

  /**
   * 获取恢复计划
   * @param {Object} errorReport - 错误报告
   * @returns {Object} 恢复计划
   */
  getRecoveryPlan(errorReport) {
    const strategies = this.recoveryStrategies.get(errorReport.category) || [RecoveryStrategy.RETRY];
    const retryKey = `${errorReport.category}_${errorReport.context.operation || 'default'}`;
    const currentAttempts = this.retryAttempts.get(retryKey) || 0;

    return {
      strategies,
      currentAttempts,
      maxRetries: this.options.maxRetries,
      canRetry: currentAttempts < this.options.maxRetries,
      nextDelay: this.calculateBackoffDelay(currentAttempts),
      recommendations: this.getRecoveryRecommendations(errorReport)
    };
  }

  /**
   * 获取恢复建议
   * @param {Object} errorReport - 错误报告
   * @returns {string[]} 恢复建议列表
   */
  getRecoveryRecommendations(errorReport) {
    const recommendations = [];
    const { category, context } = errorReport;

    switch (category) {
      case ErrorCategory.BROWSER_LAUNCH:
        recommendations.push('尝试使用不同的浏览器可执行路径');
        recommendations.push('检查浏览器是否已安装');
        recommendations.push('验证文件权限');
        if (context.environment?.isElectron) {
          recommendations.push('考虑在 Electron 应用中捆绑 Chromium');
        }
        break;

      case ErrorCategory.PAGE_NAVIGATION:
        recommendations.push('检查网络连接');
        recommendations.push('验证 URL 有效性');
        recommendations.push('增加超时时间');
        recommendations.push('尝试使用代理或 VPN');
        break;

      case ErrorCategory.DOM_EXTRACTION:
        recommendations.push('更新 CSS 选择器');
        recommendations.push('等待页面完全加载');
        recommendations.push('尝试备用选择器策略');
        recommendations.push('检查页面结构是否发生变化');
        break;

      case ErrorCategory.WEBSOCKET:
        recommendations.push('检查 WebSocket 连接');
        recommendations.push('验证协议版本');
        recommendations.push('回退到 DOM 轮询');
        recommendations.push('重新建立连接');
        break;

      case ErrorCategory.MODULE_LOADING:
        recommendations.push('检查模块路径');
        recommendations.push('验证依赖项是否已安装');
        recommendations.push('检查 ES 模块兼容性');
        if (context.environment?.isElectron) {
          recommendations.push('验证 Electron 打包配置');
        }
        break;

      case ErrorCategory.NETWORK:
        recommendations.push('检查网络连接');
        recommendations.push('重试请求');
        recommendations.push('使用备用端点');
        break;

      default:
        recommendations.push('重试操作');
        recommendations.push('检查系统资源');
        recommendations.push('查看详细日志');
    }

    return recommendations;
  }

  /**
   * 执行重试操作
   * @param {string} operation - 操作标识
   * @param {Function} fn - 要重试的函数
   * @param {Object} context - 上下文信息
   * @returns {Promise<any>} 操作结果
   */
  async executeWithRetry(operation, fn, context = {}) {
    const retryKey = `${context.category || 'default'}_${operation}`;
    let attempts = this.retryAttempts.get(retryKey) || 0;
    let lastError;

    while (attempts < this.options.maxRetries) {
      try {
        const result = await fn();
        
        // 成功时重置重试计数
        this.retryAttempts.delete(retryKey);
        
        if (attempts > 0 && this.options.enableEvents) {
          this.emit('recovery', {
            operation,
            attempts,
            success: true,
            context
          });
        }
        
        return result;
      } catch (error) {
        lastError = error;
        attempts++;
        this.retryAttempts.set(retryKey, attempts);

        if (attempts >= this.options.maxRetries) {
          break;
        }

        // 计算退避延迟
        const delay = this.calculateBackoffDelay(attempts - 1);
        
        if (this.options.enableLogging) {
          console.warn(`操作 ${operation} 失败，${delay}ms 后重试 (${attempts}/${this.options.maxRetries}):`, error.message);
        }

        if (this.options.enableEvents) {
          this.emit('retry', {
            operation,
            attempt: attempts,
            maxRetries: this.options.maxRetries,
            delay,
            error: error.message,
            context
          });
        }

        await this.delay(delay);
      }
    }

    // 所有重试都失败了
    const errorReport = await this.handleError(lastError, {
      operation,
      attempts,
      ...context
    });

    throw new Error(`操作 ${operation} 在 ${attempts} 次尝试后失败: ${lastError.message}`);
  }

  /**
   * 计算指数退避延迟
   * @param {number} attempt - 当前尝试次数
   * @returns {number} 延迟毫秒数
   */
  calculateBackoffDelay(attempt) {
    const exponentialDelay = this.options.baseDelay * Math.pow(2, attempt);
    const jitter = Math.random() * 0.1 * exponentialDelay; // 添加 10% 的随机抖动
    return Math.min(exponentialDelay + jitter, this.options.maxDelay);
  }

  /**
   * 延迟函数
   * @param {number} ms - 延迟毫秒数
   * @returns {Promise<void>}
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * 记录错误
   * @param {Object} errorReport - 错误报告
   */
  logError(errorReport) {
    if (!this.options.enableLogging) return;

    const { severity, category, message, context } = errorReport;
    const isDevelopment = context.environment?.isDevelopment;
    
    const logMessage = `[${severity.toUpperCase()}] ${category}: ${message}`;
    
    if (isDevelopment) {
      // 开发模式下显示详细信息
      console.group(`🚨 错误报告 - ${errorReport.id}`);
      console.error(logMessage);
      console.log('类别:', category);
      console.log('严重程度:', severity);
      console.log('上下文:', context);
      if (errorReport.stack) {
        console.log('堆栈跟踪:', errorReport.stack);
      }
      console.groupEnd();
    } else {
      // 生产模式下简化日志
      switch (severity) {
        case ErrorSeverity.CRITICAL:
          console.error(logMessage);
          break;
        case ErrorSeverity.HIGH:
          console.error(logMessage);
          break;
        case ErrorSeverity.MEDIUM:
          console.warn(logMessage);
          break;
        case ErrorSeverity.LOW:
          console.log(logMessage);
          break;
      }
    }
  }

  /**
   * 添加错误到历史记录
   * @param {Object} errorReport - 错误报告
   */
  addToHistory(errorReport) {
    this.errorHistory.push(errorReport);
    
    // 限制历史记录大小
    const maxHistorySize = 100;
    if (this.errorHistory.length > maxHistorySize) {
      this.errorHistory = this.errorHistory.slice(-maxHistorySize);
    }
  }

  /**
   * 生成错误 ID
   * @returns {string} 唯一错误 ID
   */
  generateErrorId() {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * 获取错误统计信息
   * @returns {Object} 统计信息
   */
  getErrorStatistics() {
    const stats = {
      total: this.errorHistory.length,
      byCategory: {},
      bySeverity: {},
      recentErrors: this.errorHistory.slice(-10),
      retryAttempts: Object.fromEntries(this.retryAttempts)
    };

    this.errorHistory.forEach(error => {
      stats.byCategory[error.category] = (stats.byCategory[error.category] || 0) + 1;
      stats.bySeverity[error.severity] = (stats.bySeverity[error.severity] || 0) + 1;
    });

    return stats;
  }

  /**
   * 清除错误历史和重试计数
   */
  clearHistory() {
    this.errorHistory = [];
    this.retryAttempts.clear();
  }

  /**
   * 设置自定义恢复策略
   * @param {string} category - 错误类别
   * @param {string[]} strategies - 恢复策略数组
   */
  setRecoveryStrategy(category, strategies) {
    this.recoveryStrategies.set(category, strategies);
  }

  /**
   * 检查是否应该停止重试
   * @param {string} operation - 操作标识
   * @param {string} category - 错误类别
   * @returns {boolean} 是否应该停止
   */
  shouldStopRetrying(operation, category = 'default') {
    const retryKey = `${category}_${operation}`;
    const attempts = this.retryAttempts.get(retryKey) || 0;
    return attempts >= this.options.maxRetries;
  }

  /**
   * 重置特定操作的重试计数
   * @param {string} operation - 操作标识
   * @param {string} category - 错误类别
   */
  resetRetryCount(operation, category = 'default') {
    const retryKey = `${category}_${operation}`;
    this.retryAttempts.delete(retryKey);
  }
}

// 创建默认实例
export const errorHandler = new ErrorHandler();

// 导出便捷函数
export const handleError = (error, context) => errorHandler.handleError(error, context);
export const executeWithRetry = (operation, fn, context) => errorHandler.executeWithRetry(operation, fn, context);
export const getErrorStatistics = () => errorHandler.getErrorStatistics();
export const clearErrorHistory = () => errorHandler.clearHistory();