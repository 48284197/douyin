import {DouyinCrawler} from '../src/crawler/crawler.mjs';
import {Database} from '../src/database/database.mjs';

// 初始化数据库
const db = new Database();
await db.init();

// 创建爬虫实例
const d = new DouyinCrawler(db);

// 添加事件监听
d.on('status-change', (data) => {
  console.log('状态变化:', data);
});

d.on('new-comment', (comment) => {
  console.log('新评论:', comment);
});

try {
  await d.startMonitoring('https://live.douyin.com/16028686557?activity_name=&anchor_id=3166202891080029&banner_type=recommend&category_name=all&page_type=live_main_page');

} catch (error) {
  console.error('启动失败:', error.message);
  process.exit(1);
}
