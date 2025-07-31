import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

export class Database {
  constructor() {
    this.comments = [];
    this.userStats = new Map();
    this.liveSessions = new Map();
    this.dataDir = join(process.cwd(), 'data');
  }

  async init() {
    try {
      // 确保数据目录存在
      if (!existsSync(this.dataDir)) {
        mkdirSync(this.dataDir, { recursive: true });
      }
      
      console.log('✅ 内存数据库初始化完成');
    } catch (error) {
      console.error('❌ 数据库初始化失败:', error);
      throw error;
    }
  }



  async saveComment(comment) {
    try {
      // 检查是否已存在相同ID的评论
      const existingIndex = this.comments.findIndex(c => c.id === comment.id);
      
      const commentData = {
        id: comment.id,
        username: comment.username,
        content: comment.content,
        timestamp: comment.timestamp,
        user_id: comment.userId,
        level: comment.level,
        avatar: comment.avatar,
        gift_name: comment.giftName,
        gift_count: comment.giftCount,
        live_url: comment.liveUrl,
        created_at: Date.now()
      };
      
      if (existingIndex >= 0) {
        this.comments[existingIndex] = commentData;
      } else {
        this.comments.push(commentData);
      }

      // 更新用户统计
      await this.updateUserStats(comment);

      return true;
    } catch (error) {
      console.error('保存评论失败:', error);
      throw error;
    }
  }

  async updateUserStats(comment) {
    try {
      const userId = comment.userId;
      const existing = this.userStats.get(userId) || {
        user_id: userId,
        username: comment.username,
        comment_count: 0,
        last_comment_time: 0,
        first_seen: Date.now()
      };
      
      existing.username = comment.username;
      existing.comment_count += 1;
      existing.last_comment_time = comment.timestamp;
      
      this.userStats.set(userId, existing);
    } catch (error) {
      console.error('更新用户统计失败:', error);
      throw error;
    }
  }

  async getComments(options = {}) {
    try {
      const {
        limit = 100,
        offset = 0,
        liveUrl = null,
        startTime = null,
        endTime = null
      } = options;

      let filteredComments = [...this.comments];

      // 过滤条件
      if (liveUrl) {
        filteredComments = filteredComments.filter(c => c.live_url === liveUrl);
      }

      if (startTime) {
        filteredComments = filteredComments.filter(c => c.timestamp >= startTime);
      }

      if (endTime) {
        filteredComments = filteredComments.filter(c => c.timestamp <= endTime);
      }

      // 按时间戳降序排序
      filteredComments.sort((a, b) => b.timestamp - a.timestamp);

      // 分页
      return filteredComments.slice(offset, offset + limit);
    } catch (error) {
      console.error('获取评论失败:', error);
      throw error;
    }
  }

  async exportComments(format = 'json') {
    try {
      const comments = await this.getComments({ limit: 10000 });
      
      if (format === 'json') {
        return JSON.stringify(comments, null, 2);
      } else if (format === 'csv') {
        const headers = ['ID', '用户名', '内容', '时间', '用户ID', '等级'];
        const csvData = [headers.join(',')];
        
        comments.forEach(comment => {
          const row = [
            comment.id,
            `"${comment.username}"`,
            `"${comment.content.replace(/"/g, '""')}"`,
            new Date(comment.timestamp).toISOString(),
            comment.user_id || '',
            comment.level || 0
          ];
          csvData.push(row.join(','));
        });
        
        return csvData.join('\n');
      }
      
      return comments;
    } catch (error) {
      console.error('导出评论失败:', error);
      throw error;
    }
  }

  async getStats() {
    try {
      const totalComments = this.comments.length;
      const totalUsers = this.userStats.size;
      
      // 获取评论数最多的前10个用户
      const topUsers = Array.from(this.userStats.values())
        .sort((a, b) => b.comment_count - a.comment_count)
        .slice(0, 10)
        .map(user => ({
          username: user.username,
          comment_count: user.comment_count
        }));

      return {
        totalComments,
        totalUsers,
        topUsers
      };
    } catch (error) {
      console.error('获取统计数据失败:', error);
      throw error;
    }
  }

  close() {
    // 清理内存数据
    this.comments = [];
    this.userStats.clear();
    this.liveSessions.clear();
  }
}