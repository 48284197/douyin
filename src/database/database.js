import { Database as BunDatabase } from 'bun:sqlite';
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
      this.db = new BunDatabase(this.dbPath);
      
      // 创建表结构
      await this.createTables();
      
      console.log('✅ 数据库初始化完成');
    } catch (error) {
      console.error('❌ 数据库初始化失败:', error);
      throw error;
    }
  }

  async createTables() {
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
    this.db.exec(`CREATE INDEX IF NOT EXISTS idx_comm
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
        fi