"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const puppeteer = require("puppeteer");
const events = require("events");
class DouyinCrawler extends events.EventEmitter {
  constructor(database) {
    super();
    this.db = database;
    this.browser = null;
    this.page = null;
    this.isMonitoring = false;
    this.liveUrl = null;
  }
  async startMonitoring(liveUrl) {
    if (this.isMonitoring) {
      throw new Error("已在监听中，请先停止当前监听");
    }
    try {
      this.liveUrl = liveUrl;
      this.emit("status-change", { status: "connecting" });
      this.browser = await puppeteer.launch({
        headless: false,
        // 开发时可以看到浏览器
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
          "--disable-web-security",
          "--disable-features=VizDisplayCompositor"
        ]
      });
      this.page = await this.browser.newPage();
      await this.page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
      await this.page.setViewport({ width: 1920, height: 1080 });
      await this.page.setRequestInterception(true);
      this.page.on("request", (request) => {
        request.continue();
      });
      this.page.on("response", async (response) => {
        try {
          const url = response.url();
          if (url.includes("webcast/room/") || url.includes("comment") || url.includes("chat")) {
            const contentType = response.headers()["content-type"];
            if (contentType && contentType.includes("application/json")) {
              const data = await response.json();
              await this.parseCommentData(data);
            }
          }
        } catch (error) {
          console.log("解析响应数据时出错:", error.message);
        }
      });
      await this.page.goto(liveUrl, {
        waitUntil: "networkidle2",
        timeout: 3e4
      });
      await this.page.waitForTimeout(3e3);
      this.isMonitoring = true;
      this.emit("status-change", { status: "monitoring" });
      console.log("✅ 开始监听直播间:", liveUrl);
      this.startHealthCheck();
    } catch (error) {
      await this.cleanup();
      this.emit("status-change", { status: "error" });
      throw error;
    }
  }
  async parseCommentData(data) {
    try {
      if (data.data && Array.isArray(data.data)) {
        for (const item of data.data) {
          const comment = this.extractComment(item);
          if (comment) {
            await this.handleNewComment(comment);
          }
        }
      } else if (data.messages && Array.isArray(data.messages)) {
        for (const message of data.messages) {
          const comment = this.extractComment(message);
          if (comment) {
            await this.handleNewComment(comment);
          }
        }
      }
    } catch (error) {
      console.log("解析评论数据时出错:", error.message);
    }
  }
  extractComment(item) {
    var _a, _b, _c, _d, _e, _f;
    try {
      const comment = {
        id: item.id || item.msgId || Date.now(),
        username: ((_a = item.user) == null ? void 0 : _a.nickname) || item.nickname || "匿名用户",
        content: item.content || item.text || "",
        timestamp: Date.now(),
        userId: ((_b = item.user) == null ? void 0 : _b.id) || item.userId,
        level: ((_c = item.user) == null ? void 0 : _c.level) || 0,
        avatar: ((_d = item.user) == null ? void 0 : _d.avatar) || "",
        giftName: (_e = item.gift) == null ? void 0 : _e.name,
        giftCount: ((_f = item.gift) == null ? void 0 : _f.count) || 1
      };
      if (!comment.content.trim()) {
        return null;
      }
      return comment;
    } catch (error) {
      console.log("提取评论信息时出错:", error.message);
      return null;
    }
  }
  async handleNewComment(comment) {
    try {
      await this.db.saveComment(comment);
      this.emit("new-comment", comment);
      console.log(`新评论: ${comment.username}: ${comment.content}`);
    } catch (error) {
      console.log("处理新评论时出错:", error.message);
    }
  }
  startHealthCheck() {
    this.healthCheckInterval = setInterval(async () => {
      if (!this.isMonitoring || !this.page)
        return;
      try {
        await this.page.evaluate(() => document.title);
      } catch (error) {
        console.log("页面连接丢失，尝试重新连接...");
        this.emit("status-change", { status: "reconnecting" });
        try {
          await this.page.reload({ waitUntil: "networkidle2" });
          this.emit("status-change", { status: "monitoring" });
        } catch (reloadError) {
          console.log("重新连接失败:", reloadError.message);
          this.emit("status-change", { status: "error" });
        }
      }
    }, 1e4);
  }
  async stopMonitoring() {
    this.isMonitoring = false;
    await this.cleanup();
    this.emit("status-change", { status: "offline" });
    console.log("✅ 停止监听");
  }
  async cleanup() {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }
    if (this.page) {
      try {
        await this.page.close();
      } catch (error) {
        console.log("关闭页面时出错:", error.message);
      }
      this.page = null;
    }
    if (this.browser) {
      try {
        await this.browser.close();
      } catch (error) {
        console.log("关闭浏览器时出错:", error.message);
      }
      this.browser = null;
    }
  }
}
exports.DouyinCrawler = DouyinCrawler;
