import {DouyinCrawler} from '../src/crawler/crawler.mjs';
import {Database} from '../src/database/database.mjs';

// 初始化数据库
const db = new Database();
await db.init();

// 创建爬虫实例
const crawler = new DouyinCrawler(db);

// 只监听状态变化，不输出评论事件
crawler.on('status-change', (data) => {
  console.log('🔄 状态变化:', data);
});

// 暂时禁用评论事件输出，只看定期检查结果
// crawler.on('new-comment', (comment) => {
//   console.log('🎉 新评论:', comment);
// });

// 处理退出信号
process.on('SIGINT', async () => {
  console.log('\n🛑 收到退出信号，正在停止监听...');
  await crawler.stopMonitoring();
  process.exit(0);
});

try {
  console.log('🚀 启动抖音直播评论监听...');
  console.log('💡 提示: 按 Ctrl+C 停止监听');
  
  // 使用一个活跃的直播间URL
  await crawler.startMonitoring('https://live.douyin.com/494992812876');
  
  console.log('✅ 监听已启动，只输出定期检查结果...');
  console.log('📝 每3秒检查一次页面评论数据\n');
  
  // 保持进程运行，不输出其他信息
  setInterval(() => {
    // 静默运行，只看定期检查的输出
  }, 60000);

} catch (error) {
  console.error('❌ 启动失败:', error.message);
  process.exit(1);
}