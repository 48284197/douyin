"use strict";
const require$$0 = require("electron");
var preload = {};
const { contextBridge, ipcRenderer } = require$$0;
contextBridge.exposeInMainWorld("electronAPI", {
  // 监听控制
  startMonitoring: (liveUrl) => ipcRenderer.invoke("start-monitoring", liveUrl),
  stopMonitoring: () => ipcRenderer.invoke("stop-monitoring"),
  // 数据获取
  getComments: (options) => ipcRenderer.invoke("get-comments", options),
  exportComments: (format) => ipcRenderer.invoke("export-comments", format),
  // 事件监听
  onNewComment: (callback) => {
    ipcRenderer.on("new-comment", (event, comment) => callback(comment));
  },
  onStatusChange: (callback) => {
    ipcRenderer.on("status-change", (event, status) => callback(status));
  },
  onMenuAction: (callback) => {
    ipcRenderer.on("menu-start-monitoring", () => callback("start"));
    ipcRenderer.on("menu-stop-monitoring", () => callback("stop"));
  },
  // 移除监听器
  removeAllListeners: (channel) => {
    ipcRenderer.removeAllListeners(channel);
  }
});
module.exports = preload;
