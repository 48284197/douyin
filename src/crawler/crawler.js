import puppeteer from 'puppeteer';
import { EventEmitter } from 'events';
import { OptimizedDouyinDecoder } from '../decoder/optimized-decoder.js';

export class DouyinCrawler extends EventEmitter {
  constructor() {
    super();

    this.browser = null;
    this.page = null;
    this.isMonitoring = false;
    this.roomId = null;
    this.currentLiveUrl = null;
    this.decoder = new OptimizedDouyinDecoder();
    this.comments = []; // 存储评论数据
    this.maxComments = 1000; // 最大存储评论数量
  }

  // 从URL中提取房间ID
  extractRoomId(url) {
    try {
      // 匹配 https://live.douyin.com/123456789 格式
      const match = url.match(/live\.douyin\.com\/(\d+)/);
      if (match && match[1]) {
        return match[1];
      }

      // 如果URL中包含其他参数，尝试其他匹配方式
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      const roomIdMatch = pathname.match(/\/(\d+)/);

      if (roomIdMatch && roomIdMatch[1]) {
        return roomIdMatch[1];
      }

      return null;
    } catch (error) {
      console.error('提取房间ID失败:', error.message);
      return null;
    }
  }

  async startMonitoring(liveUrl) {
    // 保存当前直播间URL
    this.currentLiveUrl = liveUrl;

    // 从URL中提取房间ID
    this.roomId = this.extractRoomId(liveUrl);
    if (!this.roomId) {
      throw new Error('无法从URL中提取房间ID: ' + liveUrl);
    }

    console.log('🏠 房间ID:', this.roomId);

    try {
      this.emit('status-change', { status: 'connecting' });
    } catch (error) {
      console.error('发射状态变化事件失败:', error.message);
    }

    // 启动浏览器
    await this.startBrowser();

    // 访问直播间页面
    await this.navigateToLiveRoom(liveUrl);

    // 监听页面的WebSocket请求
    await this.setupWebSocketInterception();

    this.isMonitoring = true;
    this.emit('status-change', { status: 'monitoring' });
  }

  // 启动浏览器
  async startBrowser() {
    try {
      console.log('🚀 启动浏览器...');

      const launchOptions = {
        headless: false, // 非无头模式，便于调试
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-blink-features=AutomationControlled',
          '--disable-web-security',
          '--disable-features=site-per-process'
        ],
        timeout: 15000,
        ignoreHTTPSErrors: true,
        defaultViewport: { width: 1366, height: 768 }
      };

      // 尝试使用系统Chrome
      try {
        launchOptions.executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
      } catch (error) {
        console.log('未找到系统Chrome，使用默认Chromium');
      }

      this.browser = await puppeteer.launch(launchOptions);
      this.page = await this.browser.newPage();

      // 设置用户代理
      await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

      // 隐藏webdriver特征
      await this.page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, 'webdriver', {
          get: () => undefined,
        });
        delete navigator.__proto__.webdriver;
      });

      console.log('✅ 浏览器启动成功');

    } catch (error) {
      console.error('❌ 浏览器启动失败:', error.message);
      throw error;
    }
  }

  // 访问直播间页面
  async navigateToLiveRoom(liveUrl) {
    try {
      console.log('🌐 访问直播间:', liveUrl);

      await this.page.goto(liveUrl, {
        waitUntil: 'domcontentloaded',
        timeout: 15000
      });

      // 等待页面加载完成
      await new Promise(resolve => setTimeout(resolve, 3000));

      console.log('✅ 成功访问直播间');

    } catch (error) {
      console.error('❌ 访问直播间失败:', error.message);
      throw error;
    }
  }

  // 设置WebSocket拦截
  async setupWebSocketInterception() {
    try {
      console.log('🔍 设置WebSocket拦截...');

      // 启用CDP (Chrome DevTools Protocol)
      const client = await this.page.target().createCDPSession();
      await client.send('Network.enable');
      await client.send('Runtime.enable');

      // 监听WebSocket创建
      client.on('Network.webSocketCreated', (params) => {
        console.log('🔗 WebSocket连接创建:', params.url);
        this.emit('status-change', { status: 'websocket-created', url: params.url });
      });

      // 监听WebSocket消息
      client.on('Network.webSocketFrameReceived', async (params) => {
        // 减少日志输出，只在有大数据包时输出
        // const payloadLength = params.response.payloadData?.length || 0;
        // if (payloadLength > 1000) {
        //   console.log('📨 收到WebSocket消息:', payloadLength, 'bytes');
        // }

        await this.handleWebSocketFrame(params.response);
      });

      // 监听WebSocket发送的消息
      client.on('Network.webSocketFrameSent', (params) => {
        // console.log('📤 发送WebSocket消息:', {
        //   requestId: params.requestId,
        //   timestamp: params.timestamp,
        //   payloadLength: params.response.payloadData?.length || 0
        // });
      });

      // 监听WebSocket关闭
      client.on('Network.webSocketClosed', (params) => {
        console.log('❌ WebSocket连接关闭:', params.timestamp);
        this.emit('status-change', { status: 'websocket-closed' });
      });

      console.log('✅ WebSocket拦截设置完成');

    } catch (error) {
      console.error('❌ WebSocket拦截设置失败:', error.message);
      throw error;
    }
  }

  // 处理WebSocket帧数据
  async handleWebSocketFrame(response) {
    if (!response.payloadData) {
      return;
    }

    // 将base64数据转换为Buffer
    const buffer = Buffer.from(response.payloadData, 'base64');



    // 使用抖音解码器解析消息
    const messages = await this.decoder.decode(buffer);
    
    if (messages.length > 0) {

      
      messages.forEach(message => {
        if (message) {
          this.handleWebSocketMessage(message);
        }
      });
    } 
  }



  // 尝试解析为文本数据
  tryParseAsText(buffer) {
    try {
      // 尝试UTF-8解码
      const text = buffer.toString('utf8');

      console.log('解析',text)



    } catch (error) {
      console.log('❌ 文本解析失败:', error.message);
    }
  }

  // 处理WebSocket消息
  handleWebSocketMessage(message) {
    try {
      // 只处理感兴趣的消息类型
      const interestingTypes = ['chat', 'gift', 'like', 'member', 'social'];
      if (!interestingTypes.includes(message.type)) {
        return;
      }

      // 构造标准化评论对象
      const comment = {
        id: `ws_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
        username: message.user?.nickname || '匿名用户',
        content: message.content || '',
        timestamp: message.timestamp || Date.now(),
        source: 'websocket',
        live_url: this.currentLiveUrl || '',
        user_id: message.user?.id || '',
        level: message.user?.level || 0,
        message_type: message.type
      };

      // 如果是礼物消息，添加礼物信息
      if (message.type === 'gift' && message.gift) {
        comment.gift = {
          id: message.gift.id || '',
          name: message.gift.name || '未知礼物',
          count: message.gift.count || 1,
          comboCount: message.gift.comboCount || 1,
          diamondCount: message.gift.diamondCount || 0
        };
      }

      // 如果是点赞消息，添加点赞信息
      if (message.type === 'like') {
        comment.count = message.count || 1;
        comment.total = message.total || 0;
      }

      // 过滤空内容和无效内容
      if (!comment.content || comment.content.trim().length === 0) {
        return;
      }

      // 过滤明显的乱码内容
      if (this.isGarbledText(comment.content)) {
        return;
      }

      // 只在开发模式下输出详细日志
      if (process.env.NODE_ENV === 'development' && comment.message_type === 'chat') {
        console.log('💬 新聊天:', {
          username: comment.username,
          content: comment.content.substring(0, 30) + (comment.content.length > 30 ? '...' : '')
        });
      }



      // 存储评论到内存
      this.comments.unshift(comment); // 添加到数组开头
      if (this.comments.length > this.maxComments) {
        this.comments = this.comments.slice(0, this.maxComments); // 保持最大数量限制
      }

      // 发射事件
      console.log('🎯 发射新评论事件:', {
        type: comment.message_type,
        user: comment.username,
        content: comment.content?.substring(0, 30)
      });
      this.emit('new-comment', comment);

    } catch (error) {
      console.error('处理WebSocket消息失败:', error.message);
    }
  }

  // 检查是否为乱码文本
  isGarbledText(text) {
    if (!text || typeof text !== 'string') return true;
    
    // 检查是否包含过多的控制字符
    const controlCharCount = (text.match(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g) || []).length;
    const totalLength = text.length;
    
    // 如果控制字符超过30%，认为是乱码
    if (totalLength > 0 && controlCharCount / totalLength > 0.3) {
      return true;
    }
    
    // 检查是否只包含特殊字符
    const onlySpecialChars = /^[\x00-\x1F\x7F-\x9F\s]*$/.test(text);
    if (onlySpecialChars) {
      return true;
    }
    
    return false;
  }

  // 停止监听
  async stopMonitoring() {
    console.log('🛑 停止监听...');

    this.isMonitoring = false;

    // 关闭浏览器
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
      this.page = null;
    }

    this.emit('status-change', { status: 'stopped' });
    console.log('✅ 监听已停止');
  }

  // 获取评论数据
  getComments() {
    return this.comments || [];
  }

  // 导出评论数据
  exportComments() {
    return {
      comments: this.comments || [],
      exportTime: new Date().toISOString(),
      totalCount: this.comments?.length || 0
    };
  }

  // 清空评论数据
  clearComments() {
    this.comments = [];
    console.log('✅ 评论数据已清空');
  }
}