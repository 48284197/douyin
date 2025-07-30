import React from 'react';
import { Play, Square, Users, MessageCircle, Clock } from 'lucide-react';

const ControlPanel = ({ liveUrl, setLiveUrl, isMonitoring, onStart, onStop, stats }) => {
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