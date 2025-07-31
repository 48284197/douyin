import puppeteer from 'puppeteer';
import { EventEmitter } from 'events';

export class DouyinCrawler extends EventEmitter {
  constructor(database) {
    super();
    this.database = database;
    this.browser = null;
    this.page = null;
    this.isMonitoring = false;
    this.healthCheckInterval = null;
  }

  async startMonitoring(liveUrl) {
    try {
      this.emit('status-change', { status: 'connecting' });
    } catch (error) {
      console.error('发射状态变化事件失败:', error.message);
    }

    // 启动浏览器
    let browserRetryCount = 0;
    const maxBrowserRetries = 3;
    
    while (browserRetryCount < maxBrowserRetries) {
      try {
        // 检测是否在 Electron 环境中运行
        const isElectron = typeof process !== 'undefined' && process.versions && process.versions.electron;
        
        const launchOptions = {
          headless: 'new',
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage'
          ],
          timeout: 15000,
          ignoreHTTPSErrors: true,
          defaultViewport: null
        };
        
        // 如果不在 Electron 环境中，尝试使用系统 Chrome
        if (!isElectron) {
          try {
            // 尝试使用系统安装的 Chrome
            launchOptions.executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
          } catch (error) {
            // 如果找不到系统 Chrome，使用默认的 Chromium
            console.log('未找到系统 Chrome，使用默认 Chromium');
          }
        }
        
        this.browser = await puppeteer.launch(launchOptions);
        break; // 成功启动则跳出循环
      } catch (browserError) {
        browserRetryCount++;
        console.log(`浏览器启动失败 (${browserRetryCount}/${maxBrowserRetries}):`, browserError.message);
        
        if (browserRetryCount >= maxBrowserRetries) {
          throw new Error(`浏览器启动失败，已重试 ${maxBrowserRetries} 次: ${browserError.message}`);
        } else {
          // 等待一段时间后重试
          await new Promise(resolve => setTimeout(resolve, 2000 * browserRetryCount));
        }
      }
    }

    // 创建新页面
    this.page = await this.browser.newPage();
    this.page.setDefaultTimeout(15000);
    this.page.setDefaultNavigationTimeout(15000);
    
    // 设置用户代理
    await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

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
            try {
              const data = await response.json();
              await this.parseCommentData(data);
            } catch (jsonError) {
              // 忽略JSON解析错误，可能是网络中断导致的不完整响应
              if (!jsonError.message.includes('socket hang up')) {
                console.log('JSON解析错误:', jsonError.message);
              }
            }
          }
        }
      } catch (error) {
        // 忽略网络相关错误，继续监听
        if (!error.message.includes('socket hang up') && !error.message.includes('net::ERR_')) {
          console.log('响应处理错误:', error.message);
        }
      }
    });
    
    // 监听WebSocket消息
    await this.setupWebSocketListener();
    
    // 基础错误监听
    this.page.on('error', (error) => {
      console.error('页面错误:', error.message);
    });

    // 访问直播间
    console.log('正在访问直播间:', liveUrl);
    await this.page.goto(liveUrl, { 
      waitUntil: 'domcontentloaded',
      timeout: 15000
    });
    console.log('✅ 成功访问直播间');

    // 等待页面加载完成
    await this.page.waitForTimeout(3000);

    this.isMonitoring = true;
    this.emit('status-change', { status: 'monitoring' });

    console.log('✅ 开始监听直播间:', liveUrl);

    // 定期检查页面状态
    this.startHealthCheck();
  }

  // 设置WebSocket监听器
  async setupWebSocketListener() {
    try {
      // 获取CDP会话
      const client = await this.page.target().createCDPSession();
      
      // 启用网络域
      await client.send('Network.enable');
      
      // 监听WebSocket创建
      client.on('Network.webSocketCreated', (params) => {
        console.log('WebSocket创建:', params.url);
      });
      
      // 监听WebSocket帧发送
      client.on('Network.webSocketFrameSent', (params) => {
        try {
         
          // 可以在这里解析发送的消息
        } catch (error) {

        }
      });
      
      // 监听WebSocket帧接收
      client.on('Network.webSocketFrameReceived', async (params) => {
        try {
          const payloadData = params.response.payloadData;
          
          // 尝试解析JSON数据
          try {
            const data = JSON.parse(payloadData);
            console.log('WebSocket接收JSON消息:', data);
            await this.parseWebSocketData(data);
          } catch (jsonError) {
            // 如果不是JSON格式，可能是二进制数据或其他格式
         
            
            // 尝试解析base64编码的数据
            try {
              const decodedData = this.decodeWebSocketMessage(payloadData);
              if (decodedData) {
                await this.parseWebSocketData(decodedData);
              }
            } catch (decodeError) {
              console.log('解码WebSocket消息失败:', decodeError.message);
            }
          }
        } catch (error) {
          console.log('处理WebSocket接收消息错误:', error.message);
        }
      });
      
      // 监听WebSocket关闭
      client.on('Network.webSocketClosed', (params) => {
        console.log('WebSocket关闭:', params.requestId);
      });
      
      console.log('✅ WebSocket监听器设置完成');
    } catch (error) {
      console.error('设置WebSocket监听器失败:', error.message);
    }
  }
  
  // 解码WebSocket消息
  decodeWebSocketMessage(payloadData) {
    try {
      // 尝试base64解码
      const buffer = Buffer.from(payloadData, 'base64');
      
      // 检查是否为gzip压缩数据
      if (buffer.length > 2 && buffer[0] === 0x1f && buffer[1] === 0x8b) {
        // 这是gzip压缩数据，需要解压缩
        const zlib = require('zlib');
        try {
          const decompressed = zlib.gunzipSync(buffer);
          const text = decompressed.toString('utf8');
          
          // 尝试解析为JSON
          try {
            return JSON.parse(text);
          } catch {
            return { type: 'decompressed', data: text };
          }
        } catch (gzipError) {
          console.log('gzip解压缩失败:', gzipError.message);
          return { type: 'binary', data: buffer.toString('utf8') };
        }
      } else {
        // 尝试解析为UTF-8字符串
        const text = buffer.toString('utf8');
        
        // 检查是否为有效的JSON
        try {
          return JSON.parse(text);
        } catch {
          // 如果不是JSON，返回原始文本
          return { type: 'binary', data: text };
        }
      }
    } catch (error) {
      console.log('解码WebSocket消息失败:', error.message);
      return null;
    }
  }
  
  // 解析WebSocket数据
  async parseWebSocketData(data) {
    try {
      console.log('解析WebSocket数据:', JSON.stringify(data).substring(0, 200));
      
      // 如果是解压缩后的数据，尝试进一步解析
      if (data.type === 'decompressed' && data.data) {
        console.log('解压缩后的数据:', data.data.substring(0, 500));
        
        // 尝试解析protobuf格式的数据
        await this.parseProtobufData(data.data);
        return;
      }
      
      if (data.type === 'binary' && data.data) {
        console.log('二进制数据:', data.data.substring(0, 500));
        
        // 尝试解析protobuf格式的数据
        await this.parseProtobufData(data.data);
        return;
      }
      
      // 检查是否包含评论或聊天消息
      if (data.type === 'chat' || data.type === 'comment') {
        const comment = this.extractComment(data);
        if (comment) {
          await this.handleNewComment(comment);
        }
      } else if (data.messages && Array.isArray(data.messages)) {
        for (const message of data.messages) {
          const comment = this.extractComment(message);
          if (comment) {
            await this.handleNewComment(comment);
          }
        }
      } else if (data.data && Array.isArray(data.data)) {
        for (const item of data.data) {
          const comment = this.extractComment(item);
          if (comment) {
            await this.handleNewComment(comment);
          }
        }
      }
    } catch (error) {
      console.log('解析WebSocket数据时出错:', error.message);
    }
  }
  
  // 解析Protobuf数据
  async parseProtobufData(data) {
    try {
      // 抖音直播间的protobuf数据通常包含多个消息
      // 使用更精确的方法来提取文本内容
      
      // 查找中文字符和较长的英文单词
      const chineseMatches = data.match(/[\u4e00-\u9fa5]{2,}/g) || [];
      const englishMatches = data.match(/[a-zA-Z]{3,}/g) || [];
      const mixedMatches = data.match(/[\u4e00-\u9fa5a-zA-Z0-9]{4,}/g) || [];
      
      const allMatches = [...chineseMatches, ...englishMatches, ...mixedMatches];
      
      if (allMatches.length > 0) {
        console.log('从protobuf中提取的有效文本:', allMatches.slice(0, 10)); // 只显示前10个
        
        // 过滤掉明显不是用户名或评论的内容
         const validTexts = allMatches.filter(text => {
           // 过滤掉太短或太长的文本
           if (text.length < 2 || text.length > 50) return false;
           
           // 过滤掉明显的系统字段和技术术语
           const systemFields = [
             'compress', 'gzip', 'internal', 'pushserver', 'wrds', 'cursor', 'live',
             'server', 'time', 'type', 'msg', 'req', 'wss', 'first', 'fetch',
             'seq', 'info', 'did', 'aid', 'sdk', 'version', 'code', 'platform',
             'web', 'browser', 'chrome', 'safari', 'mozilla', 'webkit', 'gecko',
             'https', 'http', 'www', 'com', 'douyin', 'bytedance', 'toutiao'
           ];
           
           const lowerText = text.toLowerCase();
           if (systemFields.some(field => lowerText.includes(field))) return false;
           
           // 过滤掉看起来像base64编码的字符串
           if (/^[A-Za-z0-9+/=]{4,}$/.test(text)) return false;
           
           // 过滤掉纯数字或时间戳
           if (/^\d+$/.test(text) && text.length > 8) return false;
           
           // 过滤掉看起来像随机字符串的内容
           if (text.length <= 5 && /^[A-Za-z]{2,5}$/.test(text) && 
               !text.match(/[\u4e00-\u9fa5]/)) {
             // 可能是随机字符串，除非包含中文
             return false;
           }
           
           return true;
         });
        
        // 如果有有效的文本，尝试配对用户名和评论
        if (validTexts.length >= 2) {
          // 只有当检测到可能的真实评论时才输出
          const hasRealContent = validTexts.some(text => {
            // 检测中文内容
            if (/[\u4e00-\u9fa5]/.test(text)) return true;
            // 检测常见的评论词汇
            const commentWords = ['好', '棒', '厉害', '哈哈', '666', '牛', '赞', 'nice', 'good', 'wow'];
            return commentWords.some(word => text.toLowerCase().includes(word));
          });
          
          if (hasRealContent) {
            for (let i = 0; i < validTexts.length - 1; i++) {
              const possibleUsername = validTexts[i];
              const possibleContent = validTexts[i + 1];
              
              // 更严格的规则：用户名通常较短，评论内容有意义
              if (possibleUsername.length <= 15 && 
                  possibleContent.length >= 3 && 
                  possibleContent.length <= 100 &&
                  !possibleUsername.match(/^[0-9]+$/) && // 不是纯数字
                  !possibleContent.match(/^[0-9]+$/)) {  // 不是纯数字
                
                const comment = {
                  content: possibleContent.trim(),
                  username: possibleUsername.trim(),
                  userId: 'protobuf_extracted',
                  timestamp: Date.now(),
                  platform: 'douyin',
                  source: 'websocket_protobuf'
                };
                
                console.log('从protobuf提取的评论:', comment);
                await this.handleNewComment(comment);
                
                // 避免重复处理，跳过下一个
                i++;
              }
            }
          }
        }
      }
      
      // 查找特定的protobuf字段标识
      if (data.includes('WebcastChatMessage') || data.includes('chat')) {
        console.log('检测到聊天消息类型的protobuf数据');
      }
      
      if (data.includes('WebcastGiftMessage') || data.includes('gift')) {
        console.log('检测到礼物消息类型的protobuf数据');
      }
      
      if (data.includes('WebcastLikeMessage') || data.includes('like')) {
        console.log('检测到点赞消息类型的protobuf数据');
      }
      
    } catch (error) {
      console.log('解析protobuf数据时出错:', error.message);
    }
  }

  async parseCommentData(data) {
    try {
      // 检查数据结构
      if (data && data.data && Array.isArray(data.data)) {
        for (const item of data.data) {
          const comment = this.extractComment(item);
          if (comment) {
            await this.handleNewComment(comment);
          }
        }
      } else if (data && Array.isArray(data)) {
        for (const item of data) {
          const comment = this.extractComment(item);
          if (comment) {
            await this.handleNewComment(comment);
          }
        }
      } else if (data && typeof data === 'object') {
        const comment = this.extractComment(data);
        if (comment) {
          await this.handleNewComment(comment);
        }
      }
    } catch (error) {
      console.log('解析评论数据时出错:', error.message);
    }
  }

  extractComment(item) {
    try {
      // 尝试不同的数据结构
      let content = '';
      let username = '';
      let userId = '';
      let timestamp = Date.now();

      // 检查常见的评论数据结构
      if (item.content) {
        content = item.content;
      } else if (item.text) {
        content = item.text;
      } else if (item.message) {
        content = item.message;
      }

      if (item.user) {
        username = item.user.nickname || item.user.name || item.user.username || '';
        userId = item.user.id || item.user.uid || '';
      } else if (item.nickname) {
        username = item.nickname;
        userId = item.user_id || item.uid || '';
      }

      if (item.timestamp) {
        timestamp = item.timestamp;
      } else if (item.create_time) {
        timestamp = item.create_time;
      }

      // 只有当有内容时才返回评论
      if (content && content.trim()) {
        return {
          content: content.trim(),
          username: username || '匿名用户',
          userId: userId || 'unknown',
          timestamp: timestamp,
          platform: 'douyin'
        };
      }
    } catch (error) {
      console.log('提取评论信息时出错:', error.message);
    }
    return null;
  }

  async handleNewComment(comment) {
    try {
      // 保存到数据库
      await this.database.saveComment(comment);
      
      // 发射新评论事件
      this.emit('new-comment', comment);
      
      console.log('新评论:', comment.username, ':', comment.content);
    } catch (error) {
      console.error('处理新评论时出错:', error.message);
    }
  }

  startHealthCheck() {
    this.healthCheckInterval = setInterval(async () => {
      try {
        if (this.page && !this.page.isClosed()) {
          // 检查页面是否还在运行
          await this.page.evaluate(() => {
            return document.readyState;
          });
        } else {
          console.log('页面已关闭，停止监听');
          await this.stopMonitoring();
        }
      } catch (error) {
        console.log('健康检查失败:', error.message);
        // 可以在这里实现重连逻辑
      }
    }, 30000); // 每30秒检查一次
  }

  async stopMonitoring() {
    this.isMonitoring = false;
    
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }
    
    await this.cleanup();
    this.emit('status-change', { status: 'stopped' });
  }

  async cleanup() {
    try {
      if (this.page && !this.page.isClosed()) {
        await this.page.close();
      }
      if (this.browser) {
        await this.browser.close();
      }
    } catch (error) {
      console.error('清理资源时出错:', error.message);
    }
  }
}