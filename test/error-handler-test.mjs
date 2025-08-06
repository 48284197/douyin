#!/usr/bin/env node

/**
 * 错误处理器测试
 * 验证错误分类、重试机制和恢复策略
 */

import { ErrorHandler, ErrorCategory, ErrorSeverity, RecoveryStrategy } from '../src/utils/error-handler.mjs';

async function testErrorHandler() {
  console.log('🧪 开始错误处理器测试...\n');

  const errorHandler = new ErrorHandler({
    maxRetries: 2,
    baseDelay: 100, // 减少测试时间
    enableLogging: true
  });

  // 添加错误监听器以避免未处理的错误事件
  errorHandler.on('error', () => {}); // 空监听器

  // 测试 1: 错误分类
  console.log('📋 测试 1: 错误分类');
  const browserError = new Error('Failed to launch chrome browser');
  const domError = new Error('Cannot find selector .comment-item');
  const networkError = new Error('net::ERR_CONNECTION_REFUSED');

  const browserReport = await errorHandler.handleError(browserError, { operation: 'browser_launch' });
  const domReport = await errorHandler.handleError(domError, { operation: 'dom_extraction' });
  const networkReport = await errorHandler.handleError(networkError, { operation: 'page_navigation' });

  console.log(`✅ 浏览器错误分类: ${browserReport.report.category} (期望: ${ErrorCategory.BROWSER_LAUNCH})`);
  console.log(`✅ DOM 错误分类: ${domReport.report.category} (期望: ${ErrorCategory.DOM_EXTRACTION})`);
  console.log(`✅ 网络错误分类: ${networkReport.report.category} (期望: ${ErrorCategory.PAGE_NAVIGATION})`);
  console.log();

  // 测试 2: 严重程度判断
  console.log('📊 测试 2: 严重程度判断');
  console.log(`✅ 浏览器错误严重程度: ${browserReport.report.severity} (期望: ${ErrorSeverity.CRITICAL})`);
  console.log(`✅ DOM 错误严重程度: ${domReport.report.severity} (期望: ${ErrorSeverity.LOW})`);
  console.log(`✅ 网络错误严重程度: ${networkReport.report.severity} (期望: ${ErrorSeverity.HIGH})`);
  console.log();

  // 测试 3: 重试机制
  console.log('🔄 测试 3: 重试机制');
  let attemptCount = 0;
  
  try {
    const result = await errorHandler.executeWithRetry('test_operation', async () => {
      attemptCount++;
      if (attemptCount < 2) { // 第二次尝试成功
        throw new Error(`模拟失败 - 尝试 ${attemptCount}`);
      }
      return '成功!';
    }, { category: ErrorCategory.NETWORK });
    
    console.log(`✅ 重试成功，总尝试次数: ${attemptCount}，结果: ${result}`);
  } catch (error) {
    console.log(`❌ 重试失败: ${error.message}`);
  }
  console.log();

  // 测试 4: 指数退避延迟
  console.log('⏱️ 测试 4: 指数退避延迟');
  const delays = [];
  for (let i = 0; i < 5; i++) {
    const delay = errorHandler.calculateBackoffDelay(i);
    delays.push(delay);
  }
  console.log(`✅ 退避延迟序列: ${delays.map(d => Math.round(d)).join('ms, ')}ms`);
  console.log();

  // 测试 5: 恢复策略
  console.log('🛠️ 测试 5: 恢复策略');
  const recoveryPlan = errorHandler.getRecoveryPlan(browserReport.report);
  console.log(`✅ 浏览器错误恢复策略: ${recoveryPlan.strategies.join(', ')}`);
  console.log(`✅ 恢复建议数量: ${recoveryPlan.recommendations.length}`);
  console.log();

  // 测试 6: 错误统计
  console.log('📈 测试 6: 错误统计');
  const stats = errorHandler.getErrorStatistics();
  console.log(`✅ 总错误数: ${stats.total}`);
  console.log(`✅ 按类别统计:`, stats.byCategory);
  console.log(`✅ 按严重程度统计:`, stats.bySeverity);
  console.log();

  // 测试 7: 事件发射
  console.log('📡 测试 7: 事件发射');
  let eventReceived = false;
  
  errorHandler.on('error', (report) => {
    eventReceived = true;
    console.log(`✅ 收到错误事件: ${report.category}`);
  });

  await errorHandler.handleError(new Error('测试事件'), { operation: 'test' });
  console.log(`✅ 事件发射测试: ${eventReceived ? '通过' : '失败'}`);
  console.log();

  console.log('🎉 所有测试完成!');
  
  // 显示最终统计
  const finalStats = errorHandler.getErrorStatistics();
  console.log('\n📊 最终错误统计:');
  console.log(`总错误数: ${finalStats.total}`);
  console.log('按类别:', finalStats.byCategory);
  console.log('按严重程度:', finalStats.bySeverity);
}

// 运行测试
testErrorHandler().catch(console.error);