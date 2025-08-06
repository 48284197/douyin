import { getPuppeteerOptionsWithFallback } from '../src/utils/environment.mjs';

console.log('🧪 测试 Puppeteer 回退选项...\n');

const fallbackOptions = getPuppeteerOptionsWithFallback();

fallbackOptions.forEach((option, index) => {
  console.log(`📋 回退选项 ${index + 1}:`);
  console.log(`   可执行路径: ${option.executablePath || '自动检测'}`);
  console.log(`   无头模式: ${option.headless}`);
  console.log(`   参数数量: ${option.args?.length || 0}`);
  console.log(`   超时时间: ${option.timeout}ms`);
  console.log('');
});

console.log(`✅ 总共 ${fallbackOptions.length} 个回退选项`);