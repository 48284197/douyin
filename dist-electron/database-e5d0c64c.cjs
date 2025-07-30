"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _commonjsDynamicModules = require("./_commonjs-dynamic-modules-b157458e.cjs");
const path = require("path");
const fs = require("fs");
const require$$3 = require("events");
const require$$0 = require("util");
var sqlite3$1 = { exports: {} };
var bindings = { exports: {} };
var sep = path.sep || "/";
var fileUriToPath_1 = fileUriToPath;
function fileUriToPath(uri) {
  if ("string" != typeof uri || uri.length <= 7 || "file://" != uri.substring(0, 7)) {
    throw new TypeError("must pass in a file:// URI to convert to a file path");
  }
  var rest = decodeURI(uri.substring(7));
  var firstSlash = rest.indexOf("/");
  var host = rest.substring(0, firstSlash);
  var path2 = rest.substring(firstSlash + 1);
  if ("localhost" == host)
    host = "";
  if (host) {
    host = sep + sep + host;
  }
  path2 = path2.replace(/^(.+)\|/, "$1:");
  if (sep == "\\") {
    path2 = path2.replace(/\//g, "\\");
  }
  if (/^.+\:/.test(path2))
    ;
  else {
    path2 = sep + path2;
  }
  return host + path2;
}
(function(module2, exports2) {
  var fs$1 = fs, path$1 = path, fileURLToPath = fileUriToPath_1, join = path$1.join, dirname = path$1.dirname, exists = fs$1.accessSync && function(path2) {
    try {
      fs$1.accessSync(path2);
    } catch (e) {
      return false;
    }
    return true;
  } || fs$1.existsSync || path$1.existsSync, defaults = {
    arrow: process.env.NODE_BINDINGS_ARROW || " → ",
    compiled: process.env.NODE_BINDINGS_COMPILED_DIR || "compiled",
    platform: process.platform,
    arch: process.arch,
    nodePreGyp: "node-v" + process.versions.modules + "-" + process.platform + "-" + process.arch,
    version: process.versions.node,
    bindings: "bindings.node",
    try: [
      // node-gyp's linked version in the "build" dir
      ["module_root", "build", "bindings"],
      // node-waf and gyp_addon (a.k.a node-gyp)
      ["module_root", "build", "Debug", "bindings"],
      ["module_root", "build", "Release", "bindings"],
      // Debug files, for development (legacy behavior, remove for node v0.9)
      ["module_root", "out", "Debug", "bindings"],
      ["module_root", "Debug", "bindings"],
      // Release files, but manually compiled (legacy behavior, remove for node v0.9)
      ["module_root", "out", "Release", "bindings"],
      ["module_root", "Release", "bindings"],
      // Legacy from node-waf, node <= 0.4.x
      ["module_root", "build", "default", "bindings"],
      // Production "Release" buildtype binary (meh...)
      ["module_root", "compiled", "version", "platform", "arch", "bindings"],
      // node-qbs builds
      ["module_root", "addon-build", "release", "install-root", "bindings"],
      ["module_root", "addon-build", "debug", "install-root", "bindings"],
      ["module_root", "addon-build", "default", "install-root", "bindings"],
      // node-pre-gyp path ./lib/binding/{node_abi}-{platform}-{arch}
      ["module_root", "lib", "binding", "nodePreGyp", "bindings"]
    ]
  };
  function bindings2(opts) {
    if (typeof opts == "string") {
      opts = { bindings: opts };
    } else if (!opts) {
      opts = {};
    }
    Object.keys(defaults).map(function(i2) {
      if (!(i2 in opts))
        opts[i2] = defaults[i2];
    });
    if (!opts.module_root) {
      opts.module_root = exports2.getRoot(exports2.getFileName());
    }
    if (path$1.extname(opts.bindings) != ".node") {
      opts.bindings += ".node";
    }
    var requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : _commonjsDynamicModules.commonjsRequire;
    var tries = [], i = 0, l = opts.try.length, n, b, err;
    for (; i < l; i++) {
      n = join.apply(
        null,
        opts.try[i].map(function(p) {
          return opts[p] || p;
        })
      );
      tries.push(n);
      try {
        b = opts.path ? requireFunc.resolve(n) : requireFunc(n);
        if (!opts.path) {
          b.path = n;
        }
        return b;
      } catch (e) {
        if (e.code !== "MODULE_NOT_FOUND" && e.code !== "QUALIFIED_PATH_RESOLUTION_FAILED" && !/not find/i.test(e.message)) {
          throw e;
        }
      }
    }
    err = new Error(
      "Could not locate the bindings file. Tried:\n" + tries.map(function(a) {
        return opts.arrow + a;
      }).join("\n")
    );
    err.tries = tries;
    throw err;
  }
  module2.exports = exports2 = bindings2;
  exports2.getFileName = function getFileName(calling_file) {
    var origPST = Error.prepareStackTrace, origSTL = Error.stackTraceLimit, dummy = {}, fileName;
    Error.stackTraceLimit = 10;
    Error.prepareStackTrace = function(e, st) {
      for (var i = 0, l = st.length; i < l; i++) {
        fileName = st[i].getFileName();
        if (fileName !== __filename) {
          if (calling_file) {
            if (fileName !== calling_file) {
              return;
            }
          } else {
            return;
          }
        }
      }
    };
    Error.captureStackTrace(dummy);
    dummy.stack;
    Error.prepareStackTrace = origPST;
    Error.stackTraceLimit = origSTL;
    var fileSchema = "file://";
    if (fileName.indexOf(fileSchema) === 0) {
      fileName = fileURLToPath(fileName);
    }
    return fileName;
  };
  exports2.getRoot = function getRoot(file) {
    var dir = dirname(file), prev;
    while (true) {
      if (dir === ".") {
        dir = process.cwd();
      }
      if (exists(join(dir, "package.json")) || exists(join(dir, "node_modules"))) {
        return dir;
      }
      if (prev === dir) {
        throw new Error(
          'Could not find module root given file: "' + file + '". Do you have a `package.json` file? '
        );
      }
      prev = dir;
      dir = join(dir, "..");
    }
  };
})(bindings, bindings.exports);
var bindingsExports = bindings.exports;
var sqlite3Binding = bindingsExports("node_sqlite3.node");
var trace = {};
var hasRequiredTrace;
function requireTrace() {
  if (hasRequiredTrace)
    return trace;
  hasRequiredTrace = 1;
  const util = require$$0;
  function extendTrace(object, property, pos) {
    const old = object[property];
    object[property] = function() {
      const error = new Error();
      const name = object.constructor.name + "#" + property + "(" + Array.prototype.slice.call(arguments).map(function(el) {
        return util.inspect(el, false, 0);
      }).join(", ") + ")";
      if (typeof pos === "undefined")
        pos = -1;
      if (pos < 0)
        pos += arguments.length;
      const cb = arguments[pos];
      if (typeof arguments[pos] === "function") {
        arguments[pos] = function replacement() {
          const err = arguments[0];
          if (err && err.stack && !err.__augmented) {
            err.stack = filter(err).join("\n");
            err.stack += "\n--> in " + name;
            err.stack += "\n" + filter(error).slice(1).join("\n");
            err.__augmented = true;
          }
          return cb.apply(this, arguments);
        };
      }
      return old.apply(this, arguments);
    };
  }
  trace.extendTrace = extendTrace;
  function filter(error) {
    return error.stack.split("\n").filter(function(line) {
      return line.indexOf(__filename) < 0;
    });
  }
  return trace;
}
(function(module2, exports2) {
  const path$1 = path;
  const sqlite32 = sqlite3Binding;
  const EventEmitter = require$$3.EventEmitter;
  module2.exports = sqlite32;
  function normalizeMethod(fn) {
    return function(sql) {
      let errBack;
      const args = Array.prototype.slice.call(arguments, 1);
      if (typeof args[args.length - 1] === "function") {
        const callback = args[args.length - 1];
        errBack = function(err) {
          if (err) {
            callback(err);
          }
        };
      }
      const statement = new Statement(this, sql, errBack);
      return fn.call(this, statement, args);
    };
  }
  function inherits(target, source) {
    for (const k in source.prototype)
      target.prototype[k] = source.prototype[k];
  }
  sqlite32.cached = {
    Database: function(file, a, b) {
      if (file === "" || file === ":memory:") {
        return new Database2(file, a, b);
      }
      let db;
      file = path$1.resolve(file);
      if (!sqlite32.cached.objects[file]) {
        db = sqlite32.cached.objects[file] = new Database2(file, a, b);
      } else {
        db = sqlite32.cached.objects[file];
        const callback = typeof a === "number" ? b : a;
        if (typeof callback === "function") {
          let cb = function() {
            callback.call(db, null);
          };
          if (db.open)
            process.nextTick(cb);
          else
            db.once("open", cb);
        }
      }
      return db;
    },
    objects: {}
  };
  const Database2 = sqlite32.Database;
  const Statement = sqlite32.Statement;
  const Backup = sqlite32.Backup;
  inherits(Database2, EventEmitter);
  inherits(Statement, EventEmitter);
  inherits(Backup, EventEmitter);
  Database2.prototype.prepare = normalizeMethod(function(statement, params) {
    return params.length ? statement.bind.apply(statement, params) : statement;
  });
  Database2.prototype.run = normalizeMethod(function(statement, params) {
    statement.run.apply(statement, params).finalize();
    return this;
  });
  Database2.prototype.get = normalizeMethod(function(statement, params) {
    statement.get.apply(statement, params).finalize();
    return this;
  });
  Database2.prototype.all = normalizeMethod(function(statement, params) {
    statement.all.apply(statement, params).finalize();
    return this;
  });
  Database2.prototype.each = normalizeMethod(function(statement, params) {
    statement.each.apply(statement, params).finalize();
    return this;
  });
  Database2.prototype.map = normalizeMethod(function(statement, params) {
    statement.map.apply(statement, params).finalize();
    return this;
  });
  Database2.prototype.backup = function() {
    let backup;
    if (arguments.length <= 2) {
      backup = new Backup(this, arguments[0], "main", "main", true, arguments[1]);
    } else {
      backup = new Backup(this, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    }
    backup.retryErrors = [sqlite32.BUSY, sqlite32.LOCKED];
    return backup;
  };
  Statement.prototype.map = function() {
    const params = Array.prototype.slice.call(arguments);
    const callback = params.pop();
    params.push(function(err, rows) {
      if (err)
        return callback(err);
      const result = {};
      if (rows.length) {
        const keys = Object.keys(rows[0]);
        const key = keys[0];
        if (keys.length > 2) {
          for (let i = 0; i < rows.length; i++) {
            result[rows[i][key]] = rows[i];
          }
        } else {
          const value = keys[1];
          for (let i = 0; i < rows.length; i++) {
            result[rows[i][key]] = rows[i][value];
          }
        }
      }
      callback(err, result);
    });
    return this.all.apply(this, params);
  };
  let isVerbose = false;
  const supportedEvents = ["trace", "profile", "change"];
  Database2.prototype.addListener = Database2.prototype.on = function(type) {
    const val = EventEmitter.prototype.addListener.apply(this, arguments);
    if (supportedEvents.indexOf(type) >= 0) {
      this.configure(type, true);
    }
    return val;
  };
  Database2.prototype.removeListener = function(type) {
    const val = EventEmitter.prototype.removeListener.apply(this, arguments);
    if (supportedEvents.indexOf(type) >= 0 && !this._events[type]) {
      this.configure(type, false);
    }
    return val;
  };
  Database2.prototype.removeAllListeners = function(type) {
    const val = EventEmitter.prototype.removeAllListeners.apply(this, arguments);
    if (supportedEvents.indexOf(type) >= 0) {
      this.configure(type, false);
    }
    return val;
  };
  sqlite32.verbose = function() {
    if (!isVerbose) {
      const trace2 = requireTrace();
      [
        "prepare",
        "get",
        "run",
        "all",
        "each",
        "map",
        "close",
        "exec"
      ].forEach(function(name) {
        trace2.extendTrace(Database2.prototype, name);
      });
      [
        "bind",
        "get",
        "run",
        "all",
        "each",
        "map",
        "reset",
        "finalize"
      ].forEach(function(name) {
        trace2.extendTrace(Statement.prototype, name);
      });
      isVerbose = true;
    }
    return sqlite32;
  };
})(sqlite3$1);
var sqlite3Exports = sqlite3$1.exports;
const sqlite3 = /* @__PURE__ */ _commonjsDynamicModules.getDefaultExportFromCjs(sqlite3Exports);
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
