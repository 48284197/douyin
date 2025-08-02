import protobuf from 'protobufjs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class OptimizedDouyinDecoder {
  constructor() {
    this.root = null;
    this.messageTypes = {};
    this.initialized = false;
    this.messageCache = new Map(); // 消息去重缓存
    this.lastProcessTime = 0;
  }

  // 初始化 protobuf 定义
  async init() {
    try {
      // 直接使用项目根目录的路径
      const protoPath = join(process.cwd(), 'douyin.proto');
      console.log('🔍 加载 proto 文件:', protoPath);
      
      this.root = await protobuf.load(protoPath);
      
      // 获取消息类型
      this.messageTypes = {
        Response: this.root.lookupType('douyin.Response'),
        Message: this.root.lookupType('douyin.Message'),
        ChatMessage: this.root.lookupType('douyin.ChatMessage'),
        GiftMessage: this.root.lookupType('douyin.GiftMessage'),
        LikeMessage: this.root.lookupType('douyin.LikeMessage'),
        MemberMessage: this.root.lookupType('douyin.MemberMessage'),
        SocialMessage: this.root.lookupType('douyin.SocialMessage'),
        RoomUserSeqMessage: this.root.lookupType('douyin.RoomUserSeqMessage'),
        ControlMessage: this.root.lookupType('douyin.ControlMessage'),
        FansclubMessage: this.root.lookupType('douyin.FansclubMessage'),
        RoomRankMessage: this.root.lookupType('douyin.RoomRankMessage'),
        RoomMessage: this.root.lookupType('douyin.RoomMessage'),
        EmojiChatMessage: this.root.lookupType('douyin.EmojiChatMessage'),
        PushFrame: this.root.lookupType('douyin.PushFrame')
      };
      
      this.initialized = true;
      // 减少日志输出，避免在 Electron 中造成问题
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ 优化版 Protobuf 解码器初始化成功');
      }
      
    } catch (error) {
      console.error('❌ Protobuf 解码器初始化失败:', error.message);
      throw error;
    }
  }

  // 解码 WebSocket 数据
  async decode(buffer) {
    if (!this.initialized) {
      await this.init();
    }

    try {
      const messages = [];
      
      // 1. 尝试解码为 PushFrame（最常见的格式）
      const pushFrameMessages = await this.decodePushFrame(buffer);
      if (pushFrameMessages.length > 0) {
        messages.push(...pushFrameMessages);
      }
      
      // 2. 如果 PushFrame 解码失败，尝试其他方式
      if (messages.length === 0) {
        const fallbackMessages = await this.fallbackDecode(buffer);
        messages.push(...fallbackMessages);
      }
      
      // 3. 过滤和去重
      const filteredMessages = this.filterAndDeduplicateMessages(messages);
      
      if (filteredMessages.length > 0) {
        // 只在有聊天消息时输出详细信息，减少日志量
        const chatMessages = filteredMessages.filter(msg => msg.type === 'chat');
        if (chatMessages.length > 0) {
          console.log(`🎯 解码 ${filteredMessages.length} 条消息 (${chatMessages.length} 条聊天)`);
          // 只显示前3条聊天消息，避免日志过多
          chatMessages.slice(0, 3).forEach(msg => {
            console.log(`💬 ${msg.user.nickname}: ${msg.content.substring(0, 50)}${msg.content.length > 50 ? '...' : ''}`);
          });
        } else {
          // 非聊天消息只显示统计
          console.log(`🎯 解码 ${filteredMessages.length} 条消息 (礼物/点赞/成员等)`);
        }
      }
      
      return filteredMessages;
      
    } catch (error) {
      console.error('❌ 解码失败:', error.message);
      return [];
    }
  }

  // 解码 PushFrame
  async decodePushFrame(buffer) {
    const messages = [];
    
    try {
      const pushFrame = this.messageTypes.PushFrame.decode(buffer);
      
      if (pushFrame.payload && pushFrame.payload.length > 0) {
        // 处理 payload
        let decodedPayload = pushFrame.payload;
        
        // 如果是 gzip 压缩，先解压
        if (pushFrame.payloadEncoding === 'gzip') {
          try {
            decodedPayload = zlib.gunzipSync(pushFrame.payload);
          } catch (gzipError) {
            console.log('❌ Gzip 解压失败:', gzipError.message);
            return messages;
          }
        }
        
        // 解码 Response
        const responseMessages = await this.decodeResponse(decodedPayload);
        messages.push(...responseMessages);
      }
      
    } catch (error) {
      // PushFrame 解码失败，不是错误，继续尝试其他方式
    }
    
    return messages;
  }

  // 解码 Response
  async decodeResponse(buffer) {
    const messages = [];
    
    try {
      const response = this.messageTypes.Response.decode(buffer);
      
      if (response.messagesList && response.messagesList.length > 0) {
        for (const message of response.messagesList) {
          const decodedMessage = await this.decodeMessage(message);
          if (decodedMessage) {
            messages.push(decodedMessage);
          }
        }
      }
      
    } catch (error) {
      // Response 解码失败，尝试扫描方式
      const scannedMessages = await this.scanForMessages(buffer);
      messages.push(...scannedMessages);
    }
    
    return messages;
  }

  // 解码单个 Message
  async decodeMessage(message) {
    try {
      if (!message.payload || message.payload.length === 0) {
        return null;
      }
      
      // 根据 method 选择对应的解码器
      switch (message.method) {
        case 'WebcastChatMessage':
          return this.decodeChatMessage(message.payload);
        case 'WebcastGiftMessage':
          return this.decodeGiftMessage(message.payload);
        case 'WebcastLikeMessage':
          return this.decodeLikeMessage(message.payload);
        case 'WebcastMemberMessage':
          return this.decodeMemberMessage(message.payload);
        case 'WebcastSocialMessage':
          return this.decodeSocialMessage(message.payload);
        case 'WebcastRoomUserSeqMessage':
          return this.decodeRoomUserSeqMessage(message.payload);
        case 'WebcastControlMessage':
          return this.decodeControlMessage(message.payload);
        case 'WebcastFansclubMessage':
          return this.decodeFansclubMessage(message.payload);
        case 'WebcastEmojiChatMessage':
          return this.decodeEmojiChatMessage(message.payload);
        default:
          // 对于未知类型，不处理，避免产生乱码
          return null;
      }
      
    } catch (error) {
      return null;
    }
  }

  // 解码聊天消息
  decodeChatMessage(payload) {
    try {
      const chatMessage = this.messageTypes.ChatMessage.decode(payload);
      
      // 严格验证聊天内容
      if (!chatMessage.content || 
          !this.isValidChatContent(chatMessage.content) ||
          !chatMessage.user?.nickName) {
        return null;
      }
      
      return {
        type: 'chat',
        content: chatMessage.content.trim(),
        user: {
          id: chatMessage.user.id?.toString() || '',
          nickname: chatMessage.user.nickName || '匿名用户',
          level: chatMessage.user.Level || 0,
          avatar: chatMessage.user.AvatarThumb?.urlListList?.[0] || ''
        },
        timestamp: this.extractTimestamp(chatMessage.common),
        roomId: chatMessage.common?.roomId?.toString() || '',
        msgId: chatMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      return null;
    }
  }

  // 解码礼物消息
  decodeGiftMessage(payload) {
    try {
      const giftMessage = this.messageTypes.GiftMessage.decode(payload);
      
      // 验证礼物消息
      if (!giftMessage.user?.nickName || !giftMessage.repeatCount) {
        return null;
      }
      
      const giftName = giftMessage.gift?.name || '礼物';
      const count = giftMessage.repeatCount || 1;
      
      return {
        type: 'gift',
        content: `送出了 ${giftName} x${count}`,
        user: {
          id: giftMessage.user.id?.toString() || '',
          nickname: giftMessage.user.nickName || '匿名用户',
          level: giftMessage.user.Level || 0,
          avatar: giftMessage.user.AvatarThumb?.urlListList?.[0] || ''
        },
        gift: {
          id: giftMessage.giftId?.toString() || '',
          name: giftName,
          count: count,
          comboCount: giftMessage.comboCount || 1,
          diamondCount: giftMessage.gift?.diamondCount || 0
        },
        timestamp: this.extractTimestamp(giftMessage.common),
        roomId: giftMessage.common?.roomId?.toString() || '',
        msgId: giftMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      return null;
    }
  }

  // 解码点赞消息
  decodeLikeMessage(payload) {
    try {
      const likeMessage = this.messageTypes.LikeMessage.decode(payload);
      
      // 只处理有用户信息的点赞
      if (!likeMessage.user?.nickName || likeMessage.count === 0) {
        return null;
      }
      
      return {
        type: 'like',
        content: `点赞了直播间 +${likeMessage.count || 1}`,
        user: {
          id: likeMessage.user.id?.toString() || '',
          nickname: likeMessage.user.nickName || '匿名用户',
          level: likeMessage.user.Level || 0,
          avatar: likeMessage.user.AvatarThumb?.urlListList?.[0] || ''
        },
        count: likeMessage.count || 1,
        total: likeMessage.total || 0,
        timestamp: this.extractTimestamp(likeMessage.common),
        roomId: likeMessage.common?.roomId?.toString() || '',
        msgId: likeMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      return null;
    }
  }

  // 解码成员消息
  decodeMemberMessage(payload) {
    try {
      const memberMessage = this.messageTypes.MemberMessage.decode(payload);
      
      // 只处理有用户信息的成员消息
      if (!memberMessage.user?.nickName) {
        return null;
      }
      
      const actionText = memberMessage.action === 1 ? '进入了直播间' : '离开了直播间';
      
      return {
        type: 'member',
        content: actionText,
        user: {
          id: memberMessage.user.id?.toString() || '',
          nickname: memberMessage.user.nickName || '匿名用户',
          level: memberMessage.user.Level || 0,
          avatar: memberMessage.user.AvatarThumb?.urlListList?.[0] || ''
        },
        action: memberMessage.action || 0,
        memberCount: memberMessage.memberCount || 0,
        timestamp: this.extractTimestamp(memberMessage.common),
        roomId: memberMessage.common?.roomId?.toString() || '',
        msgId: memberMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      return null;
    }
  }

  // 解码社交消息
  decodeSocialMessage(payload) {
    try {
      const socialMessage = this.messageTypes.SocialMessage.decode(payload);
      
      // 只处理有用户信息的社交消息
      if (!socialMessage.user?.nickName) {
        return null;
      }
      
      let actionText = '';
      switch (socialMessage.action) {
        case 1:
          actionText = '关注了主播';
          break;
        case 2:
          actionText = '分享了直播间';
          break;
        default:
          return null; // 忽略未知的社交行为
      }
      
      return {
        type: 'social',
        content: actionText,
        user: {
          id: socialMessage.user.id?.toString() || '',
          nickname: socialMessage.user.nickName || '匿名用户',
          level: socialMessage.user.Level || 0,
          avatar: socialMessage.user.AvatarThumb?.urlListList?.[0] || ''
        },
        action: socialMessage.action || 0,
        timestamp: this.extractTimestamp(socialMessage.common),
        roomId: socialMessage.common?.roomId?.toString() || '',
        msgId: socialMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      return null;
    }
  }

  // 解码房间用户序列消息（在线人数等）
  decodeRoomUserSeqMessage(payload) {
    try {
      const roomUserSeqMessage = this.messageTypes.RoomUserSeqMessage.decode(payload);
      
      return {
        type: 'room_stats',
        content: `在线人数: ${roomUserSeqMessage.totalUserStr || roomUserSeqMessage.totalUser || 0}`,
        total: roomUserSeqMessage.total || 0,
        totalUser: roomUserSeqMessage.totalUser || 0,
        popularity: roomUserSeqMessage.popularity || 0,
        timestamp: this.extractTimestamp(roomUserSeqMessage.common),
        roomId: roomUserSeqMessage.common?.roomId?.toString() || '',
        msgId: roomUserSeqMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      return null;
    }
  }

  // 解码控制消息
  decodeControlMessage(payload) {
    try {
      const controlMessage = this.messageTypes.ControlMessage.decode(payload);
      
      let statusText = '';
      switch (controlMessage.status) {
        case 1:
          statusText = '直播开始';
          break;
        case 2:
          statusText = '直播暂停';
          break;
        case 3:
          statusText = '直播结束';
          break;
        default:
          return null;
      }
      
      return {
        type: 'control',
        content: statusText,
        status: controlMessage.status || 0,
        timestamp: this.extractTimestamp(controlMessage.common),
        roomId: controlMessage.common?.roomId?.toString() || '',
        msgId: controlMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      return null;
    }
  }

  // 解码粉丝团消息
  decodeFansclubMessage(payload) {
    try {
      const fansclubMessage = this.messageTypes.FansclubMessage.decode(payload);
      
      if (!fansclubMessage.user?.nickName) {
        return null;
      }
      
      let typeText = '';
      switch (fansclubMessage.type) {
        case 1:
          typeText = '粉丝团等级提升';
          break;
        case 2:
          typeText = '加入了粉丝团';
          break;
        default:
          return null;
      }
      
      return {
        type: 'fansclub',
        content: fansclubMessage.content || typeText,
        user: {
          id: fansclubMessage.user.id?.toString() || '',
          nickname: fansclubMessage.user.nickName || '匿名用户',
          level: fansclubMessage.user.Level || 0,
          avatar: fansclubMessage.user.AvatarThumb?.urlListList?.[0] || ''
        },
        fansclubType: fansclubMessage.type || 0,
        timestamp: this.extractTimestamp(fansclubMessage.commonInfo),
        roomId: fansclubMessage.commonInfo?.roomId?.toString() || '',
        msgId: fansclubMessage.commonInfo?.msgId?.toString() || ''
      };
      
    } catch (error) {
      return null;
    }
  }

  // 解码表情聊天消息
  decodeEmojiChatMessage(payload) {
    try {
      const emojiChatMessage = this.messageTypes.EmojiChatMessage.decode(payload);
      
      if (!emojiChatMessage.user?.nickName || !emojiChatMessage.defaultContent) {
        return null;
      }
      
      return {
        type: 'emoji_chat',
        content: emojiChatMessage.defaultContent || '发送了表情',
        user: {
          id: emojiChatMessage.user.id?.toString() || '',
          nickname: emojiChatMessage.user.nickName || '匿名用户',
          level: emojiChatMessage.user.Level || 0,
          avatar: emojiChatMessage.user.AvatarThumb?.urlListList?.[0] || ''
        },
        emojiId: emojiChatMessage.emojiId?.toString() || '',
        timestamp: this.extractTimestamp(emojiChatMessage.common),
        roomId: emojiChatMessage.common?.roomId?.toString() || '',
        msgId: emojiChatMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      return null;
    }
  }  
// 备用解码方式
  async fallbackDecode(buffer) {
    const messages = [];
    
    try {
      // 1. 尝试直接解码为 Response
      const responseMessages = await this.decodeResponse(buffer);
      if (responseMessages.length > 0) {
        messages.push(...responseMessages);
      }
      
      // 2. 查找并解压 gzip 数据
      if (messages.length === 0) {
        const gzipMessages = await this.findAndDecodeGzip(buffer);
        messages.push(...gzipMessages);
      }
      
    } catch (error) {
      console.error('❌ 备用解码失败:', error.message);
    }
    
    return messages;
  }

  // 查找并解码 gzip 数据
  async findAndDecodeGzip(buffer) {
    const messages = [];
    
    try {
      // 扫描整个 buffer，寻找 gzip 魔数 (1f 8b)
      for (let i = 0; i < buffer.length - 1; i++) {
        if (buffer[i] === 0x1f && buffer[i + 1] === 0x8b) {
          try {
            // 尝试从这个位置开始解压
            const gzipData = buffer.slice(i);
            const decompressed = zlib.gunzipSync(gzipData);
            
            // 递归解码解压后的数据
            const decodedMessages = await this.decode(decompressed);
            messages.push(...decodedMessages);
            
            // 跳过当前 gzip 数据
            i += 10;
            
          } catch (gzipError) {
            continue;
          }
        }
      }
    } catch (error) {
      console.error('❌ 查找 gzip 数据失败:', error.message);
    }
    
    return messages;
  }

  // 扫描消息（最后的备用方案）
  async scanForMessages(buffer) {
    const messages = [];
    
    try {
      let offset = 0;
      
      while (offset < buffer.length - 5) {
        // 尝试读取 varint 作为长度
        const lengthResult = this.readVarint(buffer, offset);
        if (!lengthResult || lengthResult.value <= 0 || lengthResult.value > buffer.length) {
          offset++;
          continue;
        }
        
        const messageLength = lengthResult.value;
        offset = lengthResult.offset;
        
        // 检查是否有足够的数据
        if (offset + messageLength > buffer.length) {
          break;
        }
        
        // 提取消息数据
        const messageData = buffer.slice(offset, offset + messageLength);
        
        // 尝试解码为聊天消息（最重要的消息类型）
        const chatMessage = this.tryDecodeChatMessage(messageData);
        if (chatMessage) {
          messages.push(chatMessage);
        }
        
        offset += messageLength;
      }
      
    } catch (error) {
      console.error('❌ 扫描消息失败:', error.message);
    }
    
    return messages;
  }

  // 尝试解码为聊天消息
  tryDecodeChatMessage(payload) {
    try {
      const chatMessage = this.messageTypes.ChatMessage.decode(payload);
      
      if (chatMessage.content && 
          this.isValidChatContent(chatMessage.content) &&
          chatMessage.user?.nickName) {
        
        return {
          type: 'chat',
          content: chatMessage.content.trim(),
          user: {
            id: chatMessage.user.id?.toString() || '',
            nickname: chatMessage.user.nickName || '匿名用户',
            level: chatMessage.user.Level || 0,
            avatar: chatMessage.user.AvatarThumb?.urlListList?.[0] || ''
          },
          timestamp: this.extractTimestamp(chatMessage.common),
          roomId: chatMessage.common?.roomId?.toString() || '',
          msgId: chatMessage.common?.msgId?.toString() || ''
        };
      }
      
      return null;
    } catch (error) {
      return null;
    }
  }

  // 验证聊天内容是否有效
  isValidChatContent(content) {
    if (!content || typeof content !== 'string') {
      return false;
    }
    
    // 长度检查
    if (content.length < 1 || content.length > 500) {
      return false;
    }
    
    // 检查是否包含过多的控制字符
    const controlCharCount = (content.match(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g) || []).length;
    const totalLength = content.length;
    
    // 如果控制字符超过20%，认为是乱码
    if (totalLength > 0 && controlCharCount / totalLength > 0.2) {
      return false;
    }
    
    // 检查是否包含有意义的字符
    const hasValidChars = /[\u4e00-\u9fa5a-zA-Z0-9\s\[\]（）()！!？?。，,、：:；;""''""''…—-]/.test(content);
    if (!hasValidChars) {
      return false;
    }
    
    // 检查是否是系统消息或内部消息
    const systemPatterns = [
      /compress_type/,
      /internal_ext/,
      /pushserver/,
      /wss_ms/,
      /WebcastMessage/,
      /^[\x00-\x1F\x7F-\x9F]+$/
    ];
    
    for (const pattern of systemPatterns) {
      if (pattern.test(content)) {
        return false;
      }
    }
    
    return true;
  }

  // 提取时间戳
  extractTimestamp(common) {
    if (common?.createTime) {
      const timestamp = Number(common.createTime);
      // 检查时间戳是否合理（毫秒级）
      if (timestamp > 1000000000000 && timestamp < 9999999999999) {
        return timestamp;
      }
    }
    return Date.now();
  }

  // 过滤和去重消息
  filterAndDeduplicateMessages(messages) {
    const filtered = [];
    const now = Date.now();
    
    for (const message of messages) {
      if (!message || !message.type) {
        continue;
      }
      
      // 生成消息唯一标识
      const messageKey = this.generateMessageKey(message);
      
      // 检查是否重复
      if (this.messageCache.has(messageKey)) {
        continue;
      }
      
      // 添加到缓存（保留5分钟）
      this.messageCache.set(messageKey, now);
      
      // 只保留感兴趣的消息类型
      const interestingTypes = ['chat', 'gift', 'like', 'member', 'social', 'control', 'fansclub'];
      if (interestingTypes.includes(message.type)) {
        filtered.push(message);
      }
    }
    
    // 清理过期的缓存
    this.cleanupCache(now);
    
    return filtered;
  }

  // 生成消息唯一标识
  generateMessageKey(message) {
    const parts = [
      message.type,
      message.user?.id || '',
      message.content || '',
      Math.floor((message.timestamp || 0) / 1000) // 精确到秒
    ];
    return parts.join('|');
  }

  // 清理过期缓存
  cleanupCache(now) {
    // 每30秒清理一次
    if (now - this.lastProcessTime < 30000) {
      return;
    }
    
    this.lastProcessTime = now;
    const expireTime = now - 5 * 60 * 1000; // 5分钟过期
    
    for (const [key, timestamp] of this.messageCache.entries()) {
      if (timestamp < expireTime) {
        this.messageCache.delete(key);
      }
    }
  }

  // 读取 varint
  readVarint(buffer, offset) {
    try {
      let result = 0;
      let shift = 0;
      let byte;
      let currentOffset = offset;

      do {
        if (currentOffset >= buffer.length) {
          return null;
        }

        byte = buffer[currentOffset++];
        result |= (byte & 0x7F) << shift;
        shift += 7;

        if (shift >= 64) {
          return null;
        }
      } while (byte & 0x80);

      return { value: result, offset: currentOffset };
    } catch (error) {
      return null;
    }
  }
}