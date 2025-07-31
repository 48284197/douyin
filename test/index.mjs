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
  await d.startMonitoring('https://live.douyin.com/742385042555?activity_name=&anchor_id=67555205972&banner_type=recommend&category_name=all&page_type=live_main_page');
  console.log('监听已开始，按 Ctrl+C 停止');
} catch (error) {
  console.error('启动失败:', error.message);
  process.exit(1);
}
