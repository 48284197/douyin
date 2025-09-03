import React, { useState } from 'react';
import { Play, Square, Users, MessageCircle, Clock, RefreshCw, AlertTriangle } from 'lucide-react';

const ControlPanel = ({ liveUrl, setLiveUrl, isMonitoring, onStart, onStop, stats }) => {
  const [isClearing, setIsClearing] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClearUserData = async () => {
    if (!showConfirm) {
      setShowConfirm(true);
      return;
    }

    setIsClearing(true);
    try {
      const result = await window.electronAPI.clearUserData();
      if (result.success) {
        alert('登录数据已清除！下次启动监听时需要重新登录。');
      } else {
        alert(`清除失败: ${result.error}`);
      }
    } catch (error) {
      alert(`清除失败: ${error.message}`);
    } finally {
      setIsClearing(false);
      setShowConfirm(false);
    }
  };

  const cancelClear = () => {
    setShowConfirm(false);
  };

  return (
    <section className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      {/* URL输入和控制按钮 */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={liveUrl}
          onChange={(e) => setLiveUrl(e.target.value)}
          placeholder="请输入抖音直播间URL..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-douyin-pink focus:border-transparent outline-none"
          disabled={isMonitoring}
        />
        <button
          onClick={onStart}
          disabled={isMonitoring}
          className="px-6 py-2 bg-douyin-pink text-white rounded-lg hover:bg-pink-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
        >
          <Play className="w-4 h-4" />
          开始监听
        </button>
        <button
          onClick={onStop}
          disabled={!isMonitoring}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
        >
          <Square className="w-4 h-4" />
          停止监听
        </button>
        
        {/* 清除登录数据按钮 */}
        {!showConfirm ? (
          <button
            onClick={handleClearUserData}
            disabled={isMonitoring || isClearing}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
            title="清除登录数据，下次需要重新登录"
          >
            <RefreshCw className={`w-4 h-4 ${isClearing ? 'animate-spin' : ''}`} />
            重新登录
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={handleClearUserData}
              disabled={isClearing}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-400 flex items-center gap-2 transition-colors"
            >
              <AlertTriangle className="w-4 h-4" />
              确认清除
            </button>
            <button
              onClick={cancelClear}
              disabled={isClearing}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:bg-gray-400 flex items-center gap-2 transition-colors"
            >
              取消
            </button>
          </div>
        )}
      </div>

      {/* 统计信息栏 */}
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-blue-500" />
          <span className="text-sm text-gray-600">总评论数:</span>
          <span className="font-semibold text-gray-800">{stats.totalComments}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-600">当前在线:</span>
          <span className="font-semibold text-gray-800">{stats.onlineUsers}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-purple-500" />
          <span className="text-sm text-gray-600">监听时长:</span>
          <span className="font-semibold text-gray-800">{stats.duration}</span>
        </div>
      </div>
    </section>
  );
};

export default ControlPanel;