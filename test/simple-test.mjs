import { DouyinCrawler } from '../src/crawler/crawler.mjs';
import { Database } from '../src/database/database.mjs';

// 初始化数据库
const db = new Database();
await db.init();

// 创建爬虫实例
const crawler = new DouyinCrawler(db);

// 监听新评论
// crawler.on('new-comment', (comment) => {
//   console.log('🎉 新评论:', {
//     source: comment.source,
//     username: comment.username,
//     content: comment.content,
//     timestamp: new Date(comment.timestamp).toLocaleTimeString()
//   });
// });

// 处理退出信号
process.on('SIGINT', async () => {
  console.log('\n🛑 收到退出信号，正在停止监听...');
  await crawler.stopMonitoring();
  process.exit(0);
});

try {
  console.log('🚀 启动抖音直播评论监听 (仅DOM策略)...');
  console.log('💡 提示: 按 Ctrl+C 停止监听');
  
  // 使用一个活跃的直播间URL
  await crawler.startMonitoring('https://live.douyin.com/494992812876');
  
  console.log('✅ 监听已启动，等待评论数据...');

} catch (error) {
  console.error('❌ 启动失败:', error.message);
  process.exit(1);
}