"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const sqlite3 = require("sqlite3");
const path = require("path");
const fs = require("fs");
class Database {
  constructor() {
    this.db = null;
    this.dbPath = path.join(process.cwd(), "data", "comments.db");
  }
  async init() {
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      this.db = new sqlite3.Database(this.dbPath);
      await this.createTables();
      console.log("✅ 数据库初始化完成");
    } catch (error) {
      console.error("❌ 数据库初始化失败:", error);
      throw error;
    }
  }
  async createTables() {
    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        this.db.run(`
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
        this.db.run(`CREATE INDEX IF NOT EXISTS idx_comments_timestamp ON comments(timestamp)`);
        this.db.run(`CREATE INDEX IF NOT EXISTS idx_comments_live_url ON comments(live_url)`);
        this.db.run(`
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
        this.db.run(`
          CREATE TABLE IF NOT EXISTS user_stats (
            user_id TEXT PRIMARY KEY,
            username TEXT,
            comment_count INTEGER DEFAULT 0,
            last_comment_time INTEGER,
            first_seen INTEGER DEFAULT (strftime('%s', 'now'))
          )
        `, (err) => {
          if (err)
            reject(err);
          else
            resolve();
        });
      });
    });
  }
  async saveComment(comment) {
    return new Promise((resolve, reject) => {
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
        comment.liveUrl,
        (err) => {
          if (err) {
            reject(err);
          } else {
            this.updateUserStats(comment).then(() => resolve(true)).catch(reject);
          }
        }
      );
    });
  }
  async updateUserStats(comment) {
    return new Promise((resolve, reject) => {
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
      stmt.run(comment.userId, comment.username, comment.userId, comment.timestamp, (err) => {
        if (err) {
          console.error("更新用户统计失败:", err);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  async getComments(options = {}) {
    return new Promise((resolve, reject) => {
      const {
        limit = 100,
        offset = 0,
        liveUrl = null,
        startTime = null,
        endTime = null
      } = options;
      let query = "SELECT * FROM comments WHERE 1=1";
      const params = [];
      if (liveUrl) {
        query += " AND live_url = ?";
        params.push(liveUrl);
      }
      if (startTime) {
        query += " AND timestamp >= ?";
        params.push(startTime);
      }
      if (endTime) {
        query += " AND timestamp <= ?";
        params.push(endTime);
      }
      query += " ORDER BY timestamp DESC LIMIT ? OFFSET ?";
      params.push(limit, offset);
      this.db.all(query, params, (err, rows) => {
        if (err) {
          console.error("获取评论失败:", err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  async exportComments(format = "json") {
    try {
      const comments = await this.getComments({ limit: 1e4 });
      if (format === "json") {
        return JSON.stringify(comments, null, 2);
      } else if (format === "csv") {
        const headers = ["ID", "用户名", "内容", "时间", "用户ID", "等级"];
        const csvData = [headers.join(",")];
        comments.forEach((comment) => {
          const row = [
            comment.id,
            `"${comment.username}"`,
            `"${comment.content.replace(/"/g, '""')}"`,
            new Date(comment.timestamp).toISOString(),
            comment.user_id || "",
            comment.level || 0
          ];
          csvData.push(row.join(","));
        });
        return csvData.join("\n");
      }
      return comments;
    } catch (error) {
      console.error("导出评论失败:", error);
      throw error;
    }
  }
  async getStats() {
    return new Promise((resolve, reject) => {
      this.db.get("SELECT COUNT(*) as count FROM comments", (err, totalComments) => {
        if (err) {
          reject(err);
          return;
        }
        this.db.get("SELECT COUNT(*) as count FROM user_stats", (err2, totalUsers) => {
          if (err2) {
            reject(err2);
            return;
          }
          this.db.all(`
            SELECT username, comment_count 
            FROM user_stats 
            ORDER BY comment_count DESC 
            LIMIT 10
          `, (err3, topUsers) => {
            if (err3) {
              reject(err3);
            } else {
              resolve({
                totalComments: totalComments.count,
                totalUsers: totalUsers.count,
                topUsers
              });
            }
          });
        });
      });
    });
  }
  close() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
}
exports.Database = Database;
