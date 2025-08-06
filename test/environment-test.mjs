import { 
  EnvironmentDetector, 
  environmentDetector, 
  getEnvironmentConfig, 
  getPuppeteerOptions,
  validateEnvironment,
  getEnvironmentSummary 
} from '../src/utils/environment.mjs';

console.log('🧪 测试环境检测模块...\n');

// 测试环境检测
console.log('📊 环境配置:');
const config = getEnvironmentConfig();
console.log(JSON.stringify(config, null, 2));

console.log('\n📋 环境摘要:');
const summary = getEnvironmentSummary();
console.log(JSON.stringify(summary, null, 2));

console.log('\n🔧 Puppeteer 配置:');
const puppeteerOptions = getPuppeteerOptions();
console.log(JSON.stringify(puppeteerOptions, null, 2));

console.log('\n✅ 环境验证:');
const validation = validateEnvironment();
console.log(JSON.stringify(validation, null, 2));

console.log('\n🎯 测试完成!');