// 简化的抖音直播消息解码器
// 基于实际观察到的数据格式

import zlib from 'zlib';

export class SimpleDouyinDecoder {
  constructor() {
    // 简化的消息类型
    this.messageTypes = {
      1: 'Chat',     // 聊天消息
      2: 'Gift',     // 礼物消息
      3: 'Like',     // 点赞消息
      4: 'Member',   // 用户进入消息
    };
  }

  // 解码WebSocket数据
  decode(buffer) {
    try {
      console.log('🔍 开始解码，数据大小:', buffer.length);

      // 尝试查找gzip压缩数据
      const gzipMessages = this.findGzipData(buffer);

      if (gzipMessages.length > 0) {

        return gzipMessages;
      }

      // 尝试protobuf解析
      const protobufMessages = this.parseProtobuf(buffer);
      console.log('尝试protobuf解析', protobufMessages)
      if (protobufMessages.length > 0) {

        return protobufMessages;
      }

      // 尝试查找文本数据
      const textMessages = this.findTextData(buffer);
      if (textMessages.length > 0) {
        return textMessages;
      }



      console.log('⚠️ 未能解码数据');
      return [];

    } catch (error) {
      console.error('解码失败:', error.message);
      return [];
    }
  }

  // 查找并解压gzip数据
  findGzipData(buffer) {
    const messages = [];

    try {
      // 扫描整个buffer，寻找gzip魔数 (1f 8b)
      for (let i = 0; i < buffer.length - 1; i++) {
        if (buffer[i] === 0x1f && buffer[i + 1] === 0x8b) {
          console.log('🎯 找到gzip数据，位置:', i);

          try {
            // 尝试从这个位置开始解压
            const gzipData = buffer.slice(i);
            const decompressed = zlib.gunzipSync(gzipData);

            console.log('✅ gzip解压成功:', decompressed.length, 'bytes');
            console.log('📄 解压数据预览:', decompressed.slice(0, 100).toString('utf8').replace(/[\x00-\x1f\x7f-\x9f]/g, '.'));

            // 在解压后的数据中查找评论
            const comments = this.extractComments(decompressed);
            messages.push(...comments);

            // 继续查找下一个gzip数据
            i += 10; // 跳过当前gzip头部

          } catch (gzipError) {
            console.log('❌ gzip解压失败:', gzipError.message);
            continue;
          }
        }
      }
    } catch (error) {
      console.error('查找gzip数据失败:', error.message);
    }

    return messages;
  }

  // 查找文本数据
  findTextData(buffer) {
    const messages = [];

    try {
      const text = buffer.toString('utf8');

      // 查找中文评论
      const chineseMatches = text.match(/[\u4e00-\u9fa5]{2,}/g);
      if (chineseMatches && chineseMatches.length > 0) {
        console.log('🎯 发现中文文本:', chineseMatches.slice(0, 5));

        chineseMatches.forEach(content => {
          if (content.length > 1 && content.length < 100) {
            messages.push({
              type: 'text',
              content: content,
              user: { nickname: '文本用户' },
              timestamp: Date.now()
            });
          }
        });
      }

      // 查找JSON格式的数据
      const jsonMatches = text.match(/\{[^}]*"[^"]*"[^}]*\}/g);
      if (jsonMatches) {
        jsonMatches.forEach(jsonStr => {
          try {
            const data = JSON.parse(jsonStr);
            if (data.content || data.text || data.message) {
              messages.push({
                type: 'json',
                content: data.content || data.text || data.message,
                user: { nickname: data.nickname || data.user?.nickname || 'JSON用户' },
                timestamp: Date.now()
              });
            }
          } catch (e) {
            // JSON解析失败，忽略
          }
        });
      }

    } catch (error) {
      console.error('查找文本数据失败:', error.message);
    }

    return messages;
  }

  // 简单的protobuf解析
  parseProtobuf(buffer) {
    const messages = [];

    try {
      let offset = 0;

      while (offset < buffer.length - 5) {
        // 尝试读取varint作为长度
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

        // 尝试解析消息
        const message = this.parseSimpleMessage(messageData);
        if (message) {
          messages.push(message);
        }

        offset += messageLength;
      }

    } catch (error) {
      console.error('protobuf解析失败:', error.message);
    }

    return messages;
  }

  // 解析简单消息
  parseSimpleMessage(data) {
    try {
      // 查找可能的文本内容
      const text = data.toString('utf8');

      // 查找中文内容
      const chineseMatch = text.match(/[\u4e00-\u9fa5]{2,}/);
      if (chineseMatch) {
        return {
          type: 'protobuf',
          content: chineseMatch[0],
          user: { nickname: 'Protobuf用户' },
          timestamp: Date.now()
        };
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  // 从解压数据中提取评论
  extractComments(data) {
    const comments = [];

    try {
      const text = data.toString('utf8');

      // 查找中文评论内容
      const chineseMatches = text.match(/[\u4e00-\u9fa5]{2,}/g);
      if (chineseMatches) {
        console.log('🎯 解压数据中发现中文:', chineseMatches.slice(0, 5));

        chineseMatches.forEach(content => {
          if (content.length > 1 && content.length < 100) {
            // 简单过滤，避免提取到非评论内容
            if (!content.includes('直播') && !content.includes('关注') &&
              !content.includes('点赞') && !content.includes('礼物')) {
              comments.push({
                type: 'gzip',
                content: content,
                user: { nickname: '解压用户' },
                timestamp: Date.now()
              });
            }
          }
        });
      }

      // 查找可能的用户名和评论对
      const commentPatterns = [
        /nickname["\s]*[:=]["\s]*([^"'\n\r\x00-\x1f\x7f-\x9f]+)[^}]*content["\s]*[:=]["\s]*([^"'\n\r\x00-\x1f\x7f-\x9f]+)/g,
        /([^\x00-\x1f\x7f-\x9f]{2,10})[:\s]*([^\x00-\x1f\x7f-\x9f]{3,50})/g
      ];

      commentPatterns.forEach(pattern => {
        let match;
        while ((match = pattern.exec(text)) !== null) {
          if (match[2] && match[2].length > 2) {
            comments.push({
              type: 'pattern',
              content: match[2].trim(),
              user: { nickname: match[1]?.trim() || '模式用户' },
              timestamp: Date.now()
            });
          }
        }
      });

    } catch (error) {
      console.error('提取评论失败:', error.message);
    }

    return comments;
  }

  // 读取varint
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