import protobuf from 'protobufjs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class DouyinDecoder {
  constructor() {
    this.root = null;
    this.messageTypes = {};
    this.initialized = false;
  }

  // 初始化 protobuf 定义
  async init() {
    try {
      // 直接使用项目根目录的路径
      const protoPath = join(process.cwd(), 'douyin.proto');      
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
      console.log('✅ Protobuf 解码器初始化成功');
      
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
      console.log('🔍 开始解码 WebSocket 数据，大小:', buffer.length);
      
      const messages = [];
      
      // 尝试多种解码方式
      
      // 1. 尝试直接解码为 PushFrame
      const pushFrameMessages = this.decodePushFrame(buffer);
      if (pushFrameMessages.length > 0) {
        messages.push(...pushFrameMessages);
      }
      
      // 2. 尝试解码为 Response
      const responseMessages = this.decodeResponse(buffer);
      if (responseMessages.length > 0) {
        messages.push(...responseMessages);
      }
      
      // 3. 尝试查找并解压 gzip 数据
      const gzipMessages = await this.findAndDecodeGzip(buffer);
      if (gzipMessages.length > 0) {
        messages.push(...gzipMessages);
      }
      
      // 4. 尝试扫描 protobuf 消息
      const scannedMessages = this.scanForProtobufMessages(buffer);
      if (scannedMessages.length > 0) {
        messages.push(...scannedMessages);
      }
      
      console.log(`🎯 总共解码出 ${messages.length} 条消息`);
      return messages;
      
    } catch (error) {
      console.error('❌ 解码失败:', error.message);
      return [];
    }
  }

  // 解码 PushFrame
  decodePushFrame(buffer) {
    const messages = [];
    
    try {
      // 尝试解码整个 buffer 为 PushFrame
      const pushFrame = this.messageTypes.PushFrame.decode(buffer);
      console.log('📦 解码 PushFrame 成功:', {
        seqId: pushFrame.seqId,
        service: pushFrame.service,
        method: pushFrame.method,
        payloadEncoding: pushFrame.payloadEncoding,
        payloadType: pushFrame.payloadType,
        payloadSize: pushFrame.payload?.length || 0
      });
      
      if (pushFrame.payload && pushFrame.payload.length > 0) {
        // 递归解码 payload
        const payloadMessages = this.decodePayload(pushFrame.payload, pushFrame.payloadEncoding);
        messages.push(...payloadMessages);
      }
      
    } catch (error) {
      // PushFrame 解码失败，尝试其他方式
    }
    
    return messages;
  }

  // 解码 Response
  decodeResponse(buffer) {
    const messages = [];
    
    try {
      const response = this.messageTypes.Response.decode(buffer);
      console.log('📦 解码 Response 成功:', {
        messagesCount: response.messagesList?.length || 0,
        cursor: response.cursor,
        fetchInterval: response.fetchInterval
      });
      
      if (response.messagesList && response.messagesList.length > 0) {
        response.messagesList.forEach(message => {
          const decodedMessage = this.decodeMessage(message);
          if (decodedMessage) {
            messages.push(decodedMessage);
          }
        });
      }
      
    } catch (error) {
      // Response 解码失败，尝试其他方式
    }
    
    return messages;
  }

  // 解码单个 Message
  decodeMessage(message) {
    try {
      console.log('📨 解码消息:', {
        method: message.method,
        msgType: message.msgType,
        payloadSize: message.payload?.length || 0
      });
      
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
        case 'WebcastRoomRankMessage':
          return this.decodeRoomRankMessage(message.payload);
        case 'WebcastRoomMessage':
          return this.decodeRoomMessage(message.payload);
        case 'WebcastEmojiChatMessage':
          return this.decodeEmojiChatMessage(message.payload);
        default:
          console.log('⚠️ 未知消息类型:', message.method);
          return this.tryDecodeUnknownMessage(message.payload);
      }
      
    } catch (error) {
      console.error('❌ 解码消息失败:', error.message);
      return null;
    }
  }

  // 解码聊天消息
  decodeChatMessage(payload) {
    try {
      const chatMessage = this.messageTypes.ChatMessage.decode(payload);
      
      // 检查内容是否有效
      if (!chatMessage.content || !this.isValidText(chatMessage.content)) {
        return null;
      }
      
      return {
        type: 'chat',
        content: chatMessage.content.trim(),
        user: {
          id: chatMessage.user?.id?.toString() || '',
          nickname: chatMessage.user?.nickName || '匿名用户',
          level: chatMessage.user?.Level || 0,
          avatar: chatMessage.user?.AvatarThumb?.urlListList?.[0] || ''
        },
        timestamp: chatMessage.common?.createTime ? Number(chatMessage.common.createTime) : Date.now(),
        roomId: chatMessage.common?.roomId?.toString() || '',
        msgId: chatMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      console.error('❌ 解码聊天消息失败:', error.message);
      return null;
    }
  }

  // 解码礼物消息
  decodeGiftMessage(payload) {
    try {
      const giftMessage = this.messageTypes.GiftMessage.decode(payload);
      
      return {
        type: 'gift',
        content: `送出了 ${giftMessage.gift?.name || '礼物'} x${giftMessage.repeatCount || 1}`,
        user: {
          id: giftMessage.user?.id?.toString() || '',
          nickname: giftMessage.user?.nickName || '匿名用户',
          level: giftMessage.user?.Level || 0,
          avatar: giftMessage.user?.AvatarThumb?.urlListList?.[0] || ''
        },
        gift: {
          id: giftMessage.giftId?.toString() || '',
          name: giftMessage.gift?.name || '',
          count: giftMessage.repeatCount || 1,
          comboCount: giftMessage.comboCount || 1,
          diamondCount: giftMessage.gift?.diamondCount || 0
        },
        timestamp: giftMessage.common?.createTime ? Number(giftMessage.common.createTime) : Date.now(),
        roomId: giftMessage.common?.roomId?.toString() || '',
        msgId: giftMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      console.error('❌ 解码礼物消息失败:', error.message);
      return null;
    }
  }

  // 解码点赞消息
  decodeLikeMessage(payload) {
    try {
      const likeMessage = this.messageTypes.LikeMessage.decode(payload);
      
      return {
        type: 'like',
        content: `点赞了直播间 +${likeMessage.count || 1}`,
        user: {
          id: likeMessage.user?.id?.toString() || '',
          nickname: likeMessage.user?.nickName || '匿名用户',
          level: likeMessage.user?.Level || 0,
          avatar: likeMessage.user?.AvatarThumb?.urlListList?.[0] || ''
        },
        count: likeMessage.count || 1,
        total: likeMessage.total || 0,
        timestamp: likeMessage.common?.createTime ? Number(likeMessage.common.createTime) : Date.now(),
        roomId: likeMessage.common?.roomId?.toString() || '',
        msgId: likeMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      console.error('❌ 解码点赞消息失败:', error.message);
      return null;
    }
  }

  // 解码成员消息（用户进入/离开）
  decodeMemberMessage(payload) {
    try {
      const memberMessage = this.messageTypes.MemberMessage.decode(payload);
      
      const actionText = memberMessage.action === 1 ? '进入了直播间' : '离开了直播间';
      
      return {
        type: 'member',
        content: actionText,
        user: {
          id: memberMessage.user?.id?.toString() || '',
          nickname: memberMessage.user?.nickName || '匿名用户',
          level: memberMessage.user?.Level || 0,
          avatar: memberMessage.user?.AvatarThumb?.urlListList?.[0] || ''
        },
        action: memberMessage.action || 0,
        memberCount: memberMessage.memberCount || 0,
        timestamp: memberMessage.common?.createTime ? Number(memberMessage.common.createTime) : Date.now(),
        roomId: memberMessage.common?.roomId?.toString() || '',
        msgId: memberMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      console.error('❌ 解码成员消息失败:', error.message);
      return null;
    }
  } 
 // 解码社交消息（关注等）
  decodeSocialMessage(payload) {
    try {
      const socialMessage = this.messageTypes.SocialMessage.decode(payload);
      
      let actionText = '';
      switch (socialMessage.action) {
        case 1:
          actionText = '关注了主播';
          break;
        case 2:
          actionText = '分享了直播间';
          break;
        default:
          actionText = '进行了社交互动';
      }
      
      return {
        type: 'social',
        content: actionText,
        user: {
          id: socialMessage.user?.id?.toString() || '',
          nickname: socialMessage.user?.nickName || '匿名用户',
          level: socialMessage.user?.Level || 0,
          avatar: socialMessage.user?.AvatarThumb?.urlListList?.[0] || ''
        },
        action: socialMessage.action || 0,
        shareType: socialMessage.shareType || 0,
        followCount: socialMessage.followCount || 0,
        timestamp: socialMessage.common?.createTime ? Number(socialMessage.common.createTime) : Date.now(),
        roomId: socialMessage.common?.roomId?.toString() || '',
        msgId: socialMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      console.error('❌ 解码社交消息失败:', error.message);
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
        timestamp: roomUserSeqMessage.common?.createTime ? Number(roomUserSeqMessage.common.createTime) : Date.now(),
        roomId: roomUserSeqMessage.common?.roomId?.toString() || '',
        msgId: roomUserSeqMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      console.error('❌ 解码房间用户序列消息失败:', error.message);
      return null;
    }
  }

  // 解码控制消息（开播/下播等）
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
          statusText = `直播状态变更: ${controlMessage.status}`;
      }
      
      return {
        type: 'control',
        content: statusText,
        status: controlMessage.status || 0,
        timestamp: controlMessage.common?.createTime ? Number(controlMessage.common.createTime) : Date.now(),
        roomId: controlMessage.common?.roomId?.toString() || '',
        msgId: controlMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      console.error('❌ 解码控制消息失败:', error.message);
      return null;
    }
  }

  // 解码粉丝团消息
  decodeFansclubMessage(payload) {
    try {
      const fansclubMessage = this.messageTypes.FansclubMessage.decode(payload);
      
      let typeText = '';
      switch (fansclubMessage.type) {
        case 1:
          typeText = '粉丝团等级提升';
          break;
        case 2:
          typeText = '加入了粉丝团';
          break;
        default:
          typeText = '粉丝团互动';
      }
      
      return {
        type: 'fansclub',
        content: fansclubMessage.content || typeText,
        user: {
          id: fansclubMessage.user?.id?.toString() || '',
          nickname: fansclubMessage.user?.nickName || '匿名用户',
          level: fansclubMessage.user?.Level || 0,
          avatar: fansclubMessage.user?.AvatarThumb?.urlListList?.[0] || ''
        },
        fansclubType: fansclubMessage.type || 0,
        timestamp: fansclubMessage.commonInfo?.createTime ? Number(fansclubMessage.commonInfo.createTime) : Date.now(),
        roomId: fansclubMessage.commonInfo?.roomId?.toString() || '',
        msgId: fansclubMessage.commonInfo?.msgId?.toString() || ''
      };
      
    } catch (error) {
      console.error('❌ 解码粉丝团消息失败:', error.message);
      return null;
    }
  }

  // 解码房间排行榜消息
  decodeRoomRankMessage(payload) {
    try {
      const roomRankMessage = this.messageTypes.RoomRankMessage.decode(payload);
      
      const ranks = roomRankMessage.ranksList?.map(rank => ({
        user: {
          id: rank.user?.id?.toString() || '',
          nickname: rank.user?.nickName || '匿名用户',
          level: rank.user?.Level || 0
        },
        score: rank.scoreStr || '0'
      })) || [];
      
      return {
        type: 'room_rank',
        content: `排行榜更新，共 ${ranks.length} 位用户`,
        ranks: ranks,
        timestamp: roomRankMessage.common?.createTime ? Number(roomRankMessage.common.createTime) : Date.now(),
        roomId: roomRankMessage.common?.roomId?.toString() || '',
        msgId: roomRankMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      console.error('❌ 解码房间排行榜消息失败:', error.message);
      return null;
    }
  }

  // 解码房间消息
  decodeRoomMessage(payload) {
    try {
      const roomMessage = this.messageTypes.RoomMessage.decode(payload);
      
      return {
        type: 'room',
        content: roomMessage.content || '房间消息',
        timestamp: roomMessage.common?.createTime ? Number(roomMessage.common.createTime) : Date.now(),
        roomId: roomMessage.common?.roomId?.toString() || '',
        msgId: roomMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      console.error('❌ 解码房间消息失败:', error.message);
      return null;
    }
  }

  // 解码表情聊天消息
  decodeEmojiChatMessage(payload) {
    try {
      const emojiChatMessage = this.messageTypes.EmojiChatMessage.decode(payload);
      
      return {
        type: 'emoji_chat',
        content: emojiChatMessage.defaultContent || '发送了表情',
        user: {
          id: emojiChatMessage.user?.id?.toString() || '',
          nickname: emojiChatMessage.user?.nickName || '匿名用户',
          level: emojiChatMessage.user?.Level || 0,
          avatar: emojiChatMessage.user?.AvatarThumb?.urlListList?.[0] || ''
        },
        emojiId: emojiChatMessage.emojiId?.toString() || '',
        timestamp: emojiChatMessage.common?.createTime ? Number(emojiChatMessage.common.createTime) : Date.now(),
        roomId: emojiChatMessage.common?.roomId?.toString() || '',
        msgId: emojiChatMessage.common?.msgId?.toString() || ''
      };
      
    } catch (error) {
      console.error('❌ 解码表情聊天消息失败:', error.message);
      return null;
    }
  }

  // 解码 payload（处理压缩等）
  decodePayload(payload, encoding) {
    const messages = [];
    
    try {
      let decodedPayload = payload;
      
      // 处理压缩
      if (encoding === 'gzip') {
        decodedPayload = zlib.gunzipSync(payload);
        console.log('✅ Gzip 解压成功，大小:', decodedPayload.length);
      }
      
      // 尝试解码为 Response
      const responseMessages = this.decodeResponse(decodedPayload);
      if (responseMessages.length > 0) {
        messages.push(...responseMessages);
      } else {
        // 尝试扫描 protobuf 消息
        const scannedMessages = this.scanForProtobufMessages(decodedPayload);
        messages.push(...scannedMessages);
      }
      
    } catch (error) {
      console.error('❌ 解码 payload 失败:', error.message);
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
          console.log('🎯 找到 gzip 数据，位置:', i);
          
          try {
            // 尝试从这个位置开始解压
            const gzipData = buffer.slice(i);
            const decompressed = zlib.gunzipSync(gzipData);
            
            console.log('✅ Gzip 解压成功，大小:', decompressed.length);
            
            // 递归解码解压后的数据
            const decodedMessages = await this.decode(decompressed);
            messages.push(...decodedMessages);
            
            // 跳过当前 gzip 数据
            i += 10;
            
          } catch (gzipError) {
            console.log('❌ Gzip 解压失败:', gzipError.message);
            continue;
          }
        }
      }
    } catch (error) {
      console.error('❌ 查找 gzip 数据失败:', error.message);
    }
    
    return messages;
  }

  // 扫描 protobuf 消息
  scanForProtobufMessages(buffer) {
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
        
        // 尝试解码为各种消息类型
        const message = this.tryDecodeUnknownMessage(messageData);
        if (message) {
          messages.push(message);
        }
        
        offset += messageLength;
      }
      
    } catch (error) {
      console.error('❌ 扫描 protobuf 消息失败:', error.message);
    }
    
    return messages;
  }

  // 尝试解码未知消息
  tryDecodeUnknownMessage(payload) {
    // 按优先级尝试不同的消息类型
    const messageTypesToTry = [
      'ChatMessage',
      'GiftMessage', 
      'LikeMessage',
      'MemberMessage',
      'SocialMessage',
      'EmojiChatMessage',
      'RoomMessage'
    ];
    
    for (const messageType of messageTypesToTry) {
      try {
        const MessageType = this.messageTypes[messageType];
        if (MessageType) {
          const decoded = MessageType.decode(payload);
          
          // 检查解码结果是否合理
          if (this.isValidDecodedMessage(decoded, messageType)) {
            console.log('✅ 成功解码为', messageType);
            return this.convertToStandardMessage(decoded, messageType.toLowerCase().replace('message', ''));
          }
        }
      } catch (error) {
        // 继续尝试下一个类型
        continue;
      }
    }
    
    return null;
  }

  // 检查解码结果是否合理
  isValidDecodedMessage(decoded, messageType) {
    if (!decoded) return false;
    
    switch (messageType) {
      case 'ChatMessage':
        return decoded.content && decoded.content.length > 0 && this.isValidText(decoded.content);
      case 'GiftMessage':
        return decoded.giftId || decoded.gift;
      case 'LikeMessage':
        return decoded.count !== undefined;
      case 'MemberMessage':
        return decoded.action !== undefined && decoded.user;
      case 'SocialMessage':
        return decoded.action !== undefined;
      case 'EmojiChatMessage':
        return decoded.emojiId || decoded.defaultContent;
      case 'RoomMessage':
        return decoded.content && decoded.content.length > 0 && this.isValidText(decoded.content);
      default:
        return true;
    }
  }

  // 检查文本是否有效（不是乱码）
  isValidText(text) {
    if (!text || typeof text !== 'string') return false;
    
    // 检查是否包含过多的控制字符
    const controlCharCount = (text.match(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g) || []).length;
    const totalLength = text.length;
    
    // 如果控制字符超过30%，认为是乱码
    if (totalLength > 0 && controlCharCount / totalLength > 0.3) {
      return false;
    }
    
    // 检查是否包含中文或英文字符
    const hasValidChars = /[\u4e00-\u9fa5a-zA-Z0-9]/.test(text);
    
    return hasValidChars;
  }

  // 转换为标准消息格式
  convertToStandardMessage(decoded, type) {
    const baseMessage = {
      type: type,
      timestamp: decoded.common?.createTime ? Number(decoded.common.createTime) : Date.now(),
      roomId: decoded.common?.roomId?.toString() || '',
      msgId: decoded.common?.msgId?.toString() || ''
    };
    
    // 添加用户信息
    if (decoded.user) {
      baseMessage.user = {
        id: decoded.user.id?.toString() || '',
        nickname: decoded.user.nickName || '匿名用户',
        level: decoded.user.Level || 0,
        avatar: decoded.user.AvatarThumb?.urlListList?.[0] || ''
      };
    }
    
    // 根据类型添加特定内容
    switch (type) {
      case 'chat':
        baseMessage.content = decoded.content || '';
        break;
      case 'gift':
        baseMessage.content = `送出了 ${decoded.gift?.name || '礼物'} x${decoded.repeatCount || 1}`;
        baseMessage.gift = {
          id: decoded.giftId?.toString() || '',
          name: decoded.gift?.name || '',
          count: decoded.repeatCount || 1,
          comboCount: decoded.comboCount || 1,
          diamondCount: decoded.gift?.diamondCount || 0
        };
        break;
      case 'like':
        baseMessage.content = `点赞了直播间 +${decoded.count || 1}`;
        baseMessage.count = decoded.count || 1;
        baseMessage.total = decoded.total || 0;
        break;
      case 'member':
        baseMessage.content = decoded.action === 1 ? '进入了直播间' : '离开了直播间';
        baseMessage.action = decoded.action || 0;
        baseMessage.memberCount = decoded.memberCount || 0;
        break;
      case 'social':
        baseMessage.content = decoded.action === 1 ? '关注了主播' : '进行了社交互动';
        baseMessage.action = decoded.action || 0;
        break;
      case 'emojichat':
        baseMessage.content = decoded.defaultContent || '发送了表情';
        baseMessage.emojiId = decoded.emojiId?.toString() || '';
        break;
      case 'room':
        baseMessage.content = decoded.content || '房间消息';
        break;
      default:
        baseMessage.content = '未知消息类型';
    }
    
    return baseMessage;
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