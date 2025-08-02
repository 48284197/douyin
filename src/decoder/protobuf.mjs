// 抖音直播 Protobuf 消息解码器
// 基于 https://github.com/saermart/DouyinLiveWebFetcher 项目移植

export class ProtobufDecoder {
  constructor() {
    // 消息类型映射
    this.messageTypes = {
      'WebcastChatMessage': 1,
      'WebcastGiftMessage': 2,
      'WebcastLikeMessage': 3,
      'WebcastMemberMessage': 4,
      'WebcastSocialMessage': 5,
      'WebcastRoomUserSeqMessage': 6,
      'WebcastUpdateFanTicketMessage': 7,
      'WebcastCommonTextMessage': 8,
      'WebcastMatchAgainstScoreMessage': 9,
      'WebcastScreenChatMessage': 10,
      'WebcastRoomStatsMessage': 11,
      'WebcastControlMessage': 12,
      'WebcastEmojiChatMessage': 13,
      'WebcastRoomMessage': 14,
      'WebcastRoomRankMessage': 15,
      'WebcastRoomNotifyMessage': 16
    };
  }

  // 解码 Varint
  decodeVarint(buffer, offset = 0) {
    let result = 0;
    let shift = 0;
    let byte;
    
    do {
      if (offset >= buffer.length) {
        throw new Error('Unexpected end of buffer while reading varint');
      }
      
      byte = buffer[offset++];
      result |= (byte & 0x7F) << shift;
      shift += 7;
      
      if (shift >= 64) {
        throw new Error('Varint too long');
      }
    } while (byte & 0x80);
    
    return { value: result, offset };
  }

  // 解码字符串
  decodeString(buffer, offset, length) {
    const stringBuffer = buffer.slice(offset, offset + length);
    return stringBuffer.toString('utf8');
  }

  // 解码消息头
  decodeMessageHeader(buffer, offset = 0) {
    try {
      // 读取消息长度
      const lengthResult = this.decodeVarint(buffer, offset);
      const messageLength = lengthResult.value;
      offset = lengthResult.offset;

      // 读取消息类型
      const typeResult = this.decodeVarint(buffer, offset);
      const messageType = typeResult.value;
      offset = typeResult.offset;

      return {
        length: messageLength,
        type: messageType,
        offset: offset
      };
    } catch (error) {
      console.error('解码消息头失败:', error.message);
      return null;
    }
  }

  // 解码聊天消息
  decodeChatMessage(buffer, offset = 0) {
    try {
      const message = {
        type: 'chat',
        user: {},
        content: '',
        timestamp: Date.now()
      };

      let currentOffset = offset;
      
      while (currentOffset < buffer.length) {
        // 读取字段标签
        const tagResult = this.decodeVarint(buffer, currentOffset);
        const tag = tagResult.value;
        currentOffset = tagResult.offset;

        const fieldNumber = tag >> 3;
        const wireType = tag & 0x07;

        switch (fieldNumber) {
          case 1: // 用户信息
            if (wireType === 2) { // Length-delimited
              const lengthResult = this.decodeVarint(buffer, currentOffset);
              const length = lengthResult.value;
              currentOffset = lengthResult.offset;
              
              const userInfo = this.decodeUserInfo(buffer, currentOffset, length);
              if (userInfo) {
                message.user = userInfo;
              }
              currentOffset += length;
            }
            break;
            
          case 2: // 消息内容
            if (wireType === 2) { // Length-delimited
              const lengthResult = this.decodeVarint(buffer, currentOffset);
              const length = lengthResult.value;
              currentOffset = lengthResult.offset;
              
              message.content = this.decodeString(buffer, currentOffset, length);
              currentOffset += length;
            }
            break;
            
          case 3: // 时间戳
            if (wireType === 0) { // Varint
              const timestampResult = this.decodeVarint(buffer, currentOffset);
              message.timestamp = timestampResult.value;
              currentOffset = timestampResult.offset;
            }
            break;
            
          default:
            // 跳过未知字段
            currentOffset = this.skipField(buffer, currentOffset, wireType);
            break;
        }
      }

      return message;
    } catch (error) {
      console.error('解码聊天消息失败:', error.message);
      return null;
    }
  }

  // 解码用户信息
  decodeUserInfo(buffer, offset, length) {
    try {
      const user = {
        id: '',
        nickname: '',
        level: 0,
        avatar: ''
      };

      const endOffset = offset + length;
      let currentOffset = offset;

      while (currentOffset < endOffset) {
        const tagResult = this.decodeVarint(buffer, currentOffset);
        const tag = tagResult.value;
        currentOffset = tagResult.offset;

        const fieldNumber = tag >> 3;
        const wireType = tag & 0x07;

        switch (fieldNumber) {
          case 1: // 用户ID
            if (wireType === 0) {
              const idResult = this.decodeVarint(buffer, currentOffset);
              user.id = idResult.value.toString();
              currentOffset = idResult.offset;
            }
            break;
            
          case 2: // 昵称
            if (wireType === 2) {
              const lengthResult = this.decodeVarint(buffer, currentOffset);
              const nameLength = lengthResult.value;
              currentOffset = lengthResult.offset;
              
              user.nickname = this.decodeString(buffer, currentOffset, nameLength);
              currentOffset += nameLength;
            }
            break;
            
          case 3: // 等级
            if (wireType === 0) {
              const levelResult = this.decodeVarint(buffer, currentOffset);
              user.level = levelResult.value;
              currentOffset = levelResult.offset;
            }
            break;
            
          default:
            currentOffset = this.skipField(buffer, currentOffset, wireType);
            break;
        }
      }

      return user;
    } catch (error) {
      console.error('解码用户信息失败:', error.message);
      return null;
    }
  }

  // 跳过字段
  skipField(buffer, offset, wireType) {
    switch (wireType) {
      case 0: // Varint
        const varintResult = this.decodeVarint(buffer, offset);
        return varintResult.offset;
        
      case 1: // 64-bit
        return offset + 8;
        
      case 2: // Length-delimited
        const lengthResult = this.decodeVarint(buffer, offset);
        return lengthResult.offset + lengthResult.value;
        
      case 5: // 32-bit
        return offset + 4;
        
      default:
        throw new Error(`Unknown wire type: ${wireType}`);
    }
  }

  // 主解码函数
  decode(buffer) {
    try {
      const messages = [];
      let offset = 0;

      while (offset < buffer.length) {
        // 解码消息头
        const header = this.decodeMessageHeader(buffer, offset);
        if (!header) {
          break;
        }

        offset = header.offset;
        const messageEnd = offset + header.length;

        // 根据消息类型解码
        let message = null;
        
        switch (header.type) {
          case 1: // 聊天消息
            message = this.decodeChatMessage(buffer, offset);
            break;
            
          default:
            // 暂时跳过其他类型的消息
            console.log(`跳过未处理的消息类型: ${header.type}`);
            break;
        }

        if (message) {
          messages.push(message);
        }

        offset = messageEnd;
      }

      return messages;
    } catch (error) {
      console.error('解码失败:', error.message);
      return [];
    }
  }
}