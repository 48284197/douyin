// 抖音直播 WebSocket 连接和数据处理
// 基于 https://github.com/saermart/DouyinLiveWebFetcher 项目移植

import WebSocket from 'ws';
import zlib from 'zlib';
import { ProtobufDecoder } from './protobuf.mjs';

export class DouyinWebSocketClient {
  constructor(roomId) {
    this.roomId = roomId;
    this.ws = null;
    this.decoder = new ProtobufDecoder();
    this.isConnected = false;
    this.heartbeatInterval = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.callbacks = {
      onMessage: null,
      onConnect: null,
      onDisconnect: null,
      onError: null
    };
  }

  // 获取WebSocket连接URL
  getWebSocketUrl() {
    // 抖音直播WebSocket地址
    const wsUrl = `wss://webcast3-ws-web-lq.douyin.com/webcast/im/push/v2/`;
    const params = new URLSearchParams({
      app_name: 'douyin_web',
      version_code: '180800',
      webcast_sdk_version: '1.3.0',
      update_version_code: '1.3.0',
      compress: 'gzip',
      internal_ext: this.getInternalExt(),
      device_platform: 'web',
      cookie_enabled: 'true',
      screen_width: '1920',
      screen_height: '1080',
      browser_language: 'zh-CN',
      browser_platform: 'Win32',
      browser_name: 'Mozilla',
      browser_version: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      browser_online: 'true',
      tz_name: 'Asia/Shanghai',
      cursor: 't-' + Date.now() + '_r-1_d-1_u-1',
      internal_ext: this.getInternalExt()
    });

    return `${wsUrl}?${params.toString()}`;
  }

  // 获取内部扩展参数
  getInternalExt() {
    const internalExt = {
      internal_src: 'dim',
      wrds_kvs: {
        'live_id': this.roomId,
        'room_id': this.roomId
      },
      checksum: this.generateChecksum()
    };
    
    return Buffer.from(JSON.stringify(internalExt)).toString('base64');
  }

  // 生成校验和
  generateChecksum() {
    const timestamp = Math.floor(Date.now() / 1000);
    const random = Math.floor(Math.random() * 1000000);
    return `${timestamp}_${random}`;
  }

  // 连接WebSocket
  connect() {
    return new Promise((resolve, reject) => {
      try {
        const wsUrl = this.getWebSocketUrl();
        console.log('🔗 连接抖音直播WebSocket:', wsUrl);

        this.ws = new WebSocket(wsUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Origin': 'https://live.douyin.com',
            'Referer': `https://live.douyin.com/${this.roomId}`,
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          },
          timeout: 10000
        });

        this.ws.on('open', () => {
          console.log('✅ WebSocket连接成功');
          this.isConnected = true;
          this.reconnectAttempts = 0;
          this.startHeartbeat();
          
          if (this.callbacks.onConnect) {
            this.callbacks.onConnect();
          }
          
          resolve();
        });

        this.ws.on('message', (data) => {
          this.handleMessage(data);
        });

        this.ws.on('close', (code, reason) => {
          console.log(`❌ WebSocket连接关闭: ${code} - ${reason}`);
          this.isConnected = false;
          this.stopHeartbeat();
          
          if (this.callbacks.onDisconnect) {
            this.callbacks.onDisconnect(code, reason);
          }
          
          // 自动重连
          this.attemptReconnect();
        });

        this.ws.on('error', (error) => {
          console.error('❌ WebSocket错误:', error.message);
          
          if (this.callbacks.onError) {
            this.callbacks.onError(error);
          }
          
          reject(error);
        });

      } catch (error) {
        console.error('❌ WebSocket连接失败:', error.message);
        reject(error);
      }
    });
  }

  // 处理接收到的消息
  handleMessage(data) {
    try {
      // 检查数据类型
      if (!(data instanceof Buffer)) {
        console.log('⚠️ 收到非Buffer数据:', typeof data);
        return;
      }

      console.log(`📦 收到WebSocket数据: ${data.length} bytes`);
      
      // 尝试解压缩数据（如果是gzip压缩的）
      let decompressedData = data;
      
      // 检查是否是gzip压缩数据
      if (data.length > 2 && data[0] === 0x1f && data[1] === 0x8b) {
        try {
          decompressedData = zlib.gunzipSync(data);
          console.log(`🗜️ Gzip解压成功: ${decompressedData.length} bytes`);
        } catch (gzipError) {
          console.log('❌ Gzip解压失败:', gzipError.message);
        }
      }

      // 使用protobuf解码器解析数据
      const messages = this.decoder.decode(decompressedData);
      
      if (messages.length > 0) {
        console.log(`🎯 解码成功: ${messages.length} 条消息`);
        
        messages.forEach(message => {
          if (this.callbacks.onMessage) {
            this.callbacks.onMessage(message);
          }
        });
      } else {
        // 如果protobuf解码失败，尝试简单的文本解析
        this.tryParseAsText(decompressedData);
      }

    } catch (error) {
      console.error('❌ 处理WebSocket消息失败:', error.message);
      
      // 输出原始数据的十六进制表示（前100字节）
      const hexData = data.slice(0, 100).toString('hex');
      console.log('🔍 原始数据(hex):', hexData);
    }
  }

  // 尝试解析为文本数据
  tryParseAsText(data) {
    try {
      // 尝试UTF-8解码
      const text = data.toString('utf8');
      
      // 查找可能的JSON数据
      const jsonMatches = text.match(/\{[^}]*\}/g);
      if (jsonMatches) {
        jsonMatches.forEach(jsonStr => {
          try {
            const jsonData = JSON.parse(jsonStr);
            console.log('📄 发现JSON数据:', jsonData);
            
            // 检查是否包含评论相关信息
            if (jsonData.content || jsonData.text || jsonData.message) {
              const message = {
                type: 'text',
                content: jsonData.content || jsonData.text || jsonData.message,
                user: {
                  nickname: jsonData.user?.nickname || jsonData.nickname || '未知用户',
                  id: jsonData.user?.id || jsonData.user_id || ''
                },
                timestamp: jsonData.timestamp || Date.now()
              };
              
              if (this.callbacks.onMessage) {
                this.callbacks.onMessage(message);
              }
            }
          } catch (parseError) {
            // JSON解析失败，忽略
          }
        });
      }
      
      // 查找可能的评论文本模式
      const commentPatterns = [
        /"content":"([^"]+)"/g,
        /"text":"([^"]+)"/g,
        /"message":"([^"]+)"/g,
        /"nickname":"([^"]+)"/g
      ];
      
      commentPatterns.forEach(pattern => {
        let match;
        while ((match = pattern.exec(text)) !== null) {
          console.log('🎯 文本模式匹配:', match[1]);
        }
      });
      
    } catch (error) {
      console.log('❌ 文本解析失败:', error.message);
    }
  }

  // 开始心跳
  startHeartbeat() {
    this.heartbeatInterval = setInterval(() => {
      if (this.isConnected && this.ws.readyState === WebSocket.OPEN) {
        // 发送心跳包
        const heartbeat = Buffer.from('ping');
        this.ws.send(heartbeat);
        console.log('💓 发送心跳包');
      }
    }, 30000); // 每30秒发送一次心跳
  }

  // 停止心跳
  stopHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }

  // 尝试重连
  attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000);
      
      console.log(`🔄 ${delay/1000}秒后尝试重连 (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
      
      setTimeout(() => {
        this.connect().catch(error => {
          console.error('❌ 重连失败:', error.message);
        });
      }, delay);
    } else {
      console.log('❌ 达到最大重连次数，停止重连');
    }
  }

  // 设置回调函数
  onMessage(callback) {
    this.callbacks.onMessage = callback;
  }

  onConnect(callback) {
    this.callbacks.onConnect = callback;
  }

  onDisconnect(callback) {
    this.callbacks.onDisconnect = callback;
  }

  onError(callback) {
    this.callbacks.onError = callback;
  }

  // 断开连接
  disconnect() {
    console.log('🛑 主动断开WebSocket连接');
    this.isConnected = false;
    this.stopHeartbeat();
    
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}