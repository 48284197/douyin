import { DouyinCrawler } from './crawler/crawler.mjs';
import { WebServer } from './server.mjs';

class DouyinLiveMonitor {
  constructor() {
    // this.db = new Database();
    this.crawler = new DouyinCrawler(this.db);
    this.server = new WebServer(this.db);
  }

  async start() {
    console.log('🚀 启动抖音直播监听器...');
    
    // 初始化数据库
    // await this.db.init();
    
    // 启动Web服务器
    await this.server.start();
    
    console.log('✅ 系统启动完成!');
    console.log('📱 访问 http://localhost:3000 查看监控面板');
    console.log('💬 输入直播间URL开始监听评论');
  }

  async stop() {
    console.log('🛑 正在停止服务...');
    await this.crawler.stop();
    await this.server.stop();
    console.log('✅ 服务已停止');
  }
}

// 启动应用
const monitor = new DouyinLiveMonitor();

// 优雅退出处理
process.on('SIGINT', async () => {
  await monitor.stop();
  process.exit(0);
});

monitor.start().catch(console.error);