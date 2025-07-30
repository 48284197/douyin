import BetterSqlite3 from 'better-sqlite3';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

export class Database {
  constructor() {
    this.db = null;
    this.dbPath = join(process.cwd(), 'data', 'comments.db');
  }

  async init() {
    try {
      // 确保数据目录存在
      const dataDir = join(process.cwd(), 'data');
      if (!existsSync(dataDir)) {
        mkdirSync(dataDir, { recursive: true });
      }

      // 初始化数据库
      this.db = new BetterSqlite3(this.dbPath);
      
      // 创建表结构
      await this.createTables();
      
      console.log('✅ 数据库初始化完成');
    } catch (error) {
      console.error('❌ 数据库初始化失败:', error);
      throw error;
    }
  }

  async createTables() {
    try {
      // 评论表
      this.db.exec(`
        CREATE TABLE IF NOT EXISTS comments (
          id TEXT PRIMARY KEY,
          username TEXT NOT NULL,
          content TEXT NOT NULL,
          timestamp INTEGER NOT NULL,
          user_id TEXT,
          level INTEGER DEFAULT 0,
          avatar TEXT,
          gift_name TEXT,
          gift_count INTEGER DEFAULT 1,
          live_url TEXT,
          created_at INTEGER DEFAULT (strftime('%s', 'now'))
        )
      `);

      // 创建索引
      this.db.exec(`CREATE INDEX IF NOT EXISTS idx_comments_timestamp ON comments(timestamp)`);
      this.db.exec(`CREATE INDEX IF NOT EXISTS idx_comments_live_url ON comments(live_url)`);

      // 直播间统计表
      this.db.exec(`
        CREATE TABLE IF NOT EXISTS live_sessions (
          url TEXT PRIMARY KEY,
          title TEXT,
          streamer TEXT,
          start_time INTEGER,
          end_time INTEGER,
          total_comments INTEGER DEFAULT 0,
          created_at INTEGER DEFAULT (strftime('%s', 'now'))
        )
      `);

      // 用户统计表
      this.db.exec(`
        CREATE TABLE IF NOT EXISTS user_stats (
          user_id TEXT PRIMARY KEY,
          username TEXT,
          comment_count INTEGER DEFAULT 0,
          last_comment_time INTEGER,
          first_seen INTEGER DEFAULT (strftime('%s', 'now'))
        )
      `);
    } catch (error) {
      throw error;
    }
  }

  async saveComment(comment) {
    try {
      const stmt = this.db.prepare(`
        INSERT OR REPLACE INTO comments 
        (id, username, content, timestamp, user_id, level, avatar, gift_name, gift_count, live_url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      stmt.run(
        comment.id,
        comment.username,
        comment.content,
        comment.timestamp,
        comment.userId,
        comment.level,
        comment.avatar,
        comment.giftName,
        comment.giftCount,
        comment.liveUrl
      );

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
      const stmt = this.db.prepare(`
        INSERT OR REPLACE INTO user_stats 
        (user_id, username, comment_count, last_comment_time)
        VALUES (
          ?, 
          ?, 
          COALESCE((SELECT comment_count FROM user_stats WHERE user_id = ?), 0) + 1,
          ?
        )
      `);

      stmt.run(comment.userId, comment.username, comment.userId, comment.timestamp);
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

      let query = 'SELECT * FROM comments WHERE 1=1';
      const params = [];

      if (liveUrl) {
        query += ' AND live_url = ?';
        params.push(liveUrl);
      }

      if (startTime) {
        query += ' AND timestamp >= ?';
        params.push(startTime);
      }

      if (endTime) {
        query += ' AND timestamp <= ?';
        params.push(endTime);
      }

      query += ' ORDER BY timestamp DESC LIMIT ? OFFSET ?';
      params.push(limit, offset);

      const stmt = this.db.prepare(query);
      return stmt.all(...params);
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
      const totalComments = this.db.prepare('SELECT COUNT(*) as count FROM comments').get();
      const totalUsers = this.db.prepare('SELECT COUNT(*) as count FROM user_stats').get();
      const topUsers = this.db.prepare(`
        SELECT username, comment_count 
        FROM user_stats 
        ORDER BY comment_count DESC 
        LIMIT 10
      `).all();

      return {
        totalComments: totalComments.count,
        totalUsers: totalUsers.count,
        topUsers
      };
    } catch (error) {
      console.error('获取统计数据失败:', error);
      throw error;
    }
  }

  close() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
}