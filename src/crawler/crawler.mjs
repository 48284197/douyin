import puppeteer from 'puppeteer';
import { EventEmitter } from 'events';

export class DouyinCrawler extends EventEmitter {
  constructor(database) {
    super();
    this.db = database;
    this.browser = null;
    this.page = null;
    this.isMonitoring = false;
    this.liveUrl = null;
  }

  async startMonitoring(liveUrl) {
    if (this.isMonitoring) {
      throw new Error('已在监听中，请先停止当前监听');
    }

    try {
      this.liveUrl = liveUrl;
      this.emit('status-change', { status: 'connecting' });

      // 启动浏览器
      this.browser = await puppeteer.launch({
        headless: false, // 开发时可以看到浏览器
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-web-security',
          '--disable-features=VizDisplayCompositor'
        ]
      });

      this.page = await this.browser.newPage();
      
      // 设置用户代理
      await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
      
      // 设置视口
      await this.page.setViewport({ width: 1920, height: 1080 });

      // 监听网络请求，捕获评论数据
      await this.page.setRequestInterception(true);
      
      this.page.on('request', (request) => {
        request.continue();
      });

      this.page.on('response', async (response) => {
        try {
          const url = response.url();
          
          // 监听评论相关的API请求
          if (url.includes('webcast/room/') || url.includes('comment') || url.includes('chat')) {
            const contentType = response.headers()['content-type'];
            if (contentType && contentType.includes('application/json')) {
              const data = await response.json();
              await this.parseCommentData(data);
            }
          }
        } catch (error) {
          // 忽略解析错误，继续监听
          console.log('解析响应数据时出错:', error.message);
        }
      });

      // 访问直播间
      await this.page.goto(liveUrl, { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });

      // 等待页面加载完成
      await this.page.waitForTimeout(3000);

      this.isMonitoring = true;
      this.emit('status-change', { status: 'monitoring' });

      console.log('✅ 开始监听直播间:', liveUrl);

      // 定期检查页面状态
      this.startHealthCheck();

    } catch (error) {
      await this.cleanup();
      this.emit('status-change', { status: 'error' });
      throw error;
    }
  }

  async parseCommentData(data) {
    try {
      // 这里需要根据抖音的实际API响应格式来解析
      // 由于抖音的API结构可能会变化，这里提供一个通用的解析框架
      
      if (data.data && Array.isArray(data.data)) {
        for (const item of data.data) {
          const comment = this.extractComment(item);
          if (comment) {
            await this.handleNewComment(comment);
          }
        }
      } else if (data.messages && Array.isArray(data.messages)) {
        for (const message of data.messages) {
          const comment = this.extractComment(message);
          if (comment) {
            await this.handleNewComment(comment);
          }
        }
      }
    } catch (error) {
      console.log('解析评论数据时出错:', error.message);
    }
  }

  extractComment(item) {
    try {
      // 根据抖音API的实际结构来提取评论信息
      // 这是一个示例结构，实际使用时需要根据真实API调整
      
      const comment = {
        id: item.id || item.msgId || Date.now(),
        username: item.user?.nickname || item.nickname || '匿名用户',
        content: item.content || item.text || '',
        timestamp: Date.now(),
        userId: item.user?.id || item.userId,
        level: item.user?.level || 0,
        avatar: item.user?.avatar || '',
        giftName: item.gift?.name,
        giftCount: item.gift?.count || 1
      };

      // 过滤空评论
      if (!comment.content.trim()) {
        return null;
      }

      return comment;
    } catch (error) {
      console.log('提取评论信息时出错:', error.message);
      return null;
    }
  }

  async handleNewComment(comment) {
    try {
      // 保存到数据库
      await this.db.saveComment(comment);
      
      // 发送给前端
      this.emit('new-comment', comment);
      
      console.log(`新评论: ${comment.username}: ${comment.content}`);
    } catch (error) {
      console.log('处理新评论时出错:', error.message);
    }
  }

  startHealthCheck() {
    this.healthCheckInterval = setInterval(async () => {
      if (!this.isMonitoring || !this.page) return;

      try {
        // 检查页面是否还在运行
        await this.page.evaluate(() => document.title);
      } catch (error) {
        console.log('页面连接丢失，尝试重新连接...');
        this.emit('status-change', { status: 'reconnecting' });
        
        try {
          await this.page.reload({ waitUntil: 'networkidle2' });
          this.emit('status-change', { status: 'monitoring' });
        } catch (reloadError) {
          console.log('重新连接失败:', reloadError.message);
          this.emit('status-change', { status: 'error' });
        }
      }
    }, 10000); // 每10秒检查一次
  }

  async stopMonitoring() {
    this.isMonitoring = false;
    await this.cleanup();
    this.emit('status-change', { status: 'offline' });
    console.log('✅ 停止监听');
  }

  async cleanup() {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }

    if (this.page) {
      try {
        await this.page.close();
      } catch (error) {
        console.log('关闭页面时出错:', error.message);
      }
      this.page = null;
    }

    if (this.browser) {
      try {
        await this.browser.close();
      } catch (error) {
        console.log('关闭浏览器时出错:', error.message);
      }
      this.browser = null;
    }
  }
}