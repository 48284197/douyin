import React, { useState, useEffect } from 'react';
import { Activity, Eye, MessageCircle, Gift, Heart, Users } from 'lucide-react';

const LiveStats = ({ comments, isMonitoring }) => {
  const [realtimeStats, setRealtimeStats] = useState({
    messagesPerMinute: 0,
    activeUsers: new Set(),
    currentViewers: 0,
    peakActivity: 0
  });

  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(() => {
      // 计算最近一分钟的消息数
      const oneMinuteAgo = Date.now() - 60000;
      const recentMessages = comments.filter(comment => 
        comment.timestamp > oneMinuteAgo
      );
      
      // 计算活跃用户数（最近5分钟有发言的用户）
      const fiveMinutesAgo = Date.now() - 300000;
      const activeUsers = new Set(
        comments
          .filter(comment => comment.timestamp > fiveMinutesAgo)
          .map(comment => comment.username)
          .filter(Boolean)
      );

      setRealtimeStats(prev => ({
        messagesPerMinute: recentMessages.length,
        activeUsers,
        currentViewers: prev.currentViewers, // 这个需要从WebSocket获取
        peakActivity: Math.max(prev.peakActivity, recentMessages.length)
      }));
    }, 5000); // 每5秒更新一次

    return () => clearInterval(interval);
  }, [comments, isMonitoring]);

  const getActivityLevel = (messagesPerMinute) => {
    if (messagesPerMinute >= 50) return { level: '火爆', color: 'text-red-500', bg: 'bg-red-100' };
    if (messagesPerMinute >= 20) return { level: '活跃', color: 'text-orange-500', bg: 'bg-orange-100' };
    if (messagesPerMinute >= 5) return { level: '正常', color: 'text-green-500', bg: 'bg-green-100' };
    return { level: '冷清', color: 'text-gray-500', bg: 'bg-gray-100' };
  };

  const activity = getActivityLevel(realtimeStats.messagesPerMinute);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 text-green-500" />
        <h3 className="text-lg font-semibold text-gray-800">实时统计</h3>
        {isMonitoring && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-green-600">实时监控中</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* 每分钟消息数 */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <MessageCircle className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-gray-800">
            {realtimeStats.messagesPerMinute}
          </div>
          <div className="text-sm text-gray-600">消息/分钟</div>
          <div className={`text-xs px-2 py-1 rounded-full mt-1 ${activity.bg} ${activity.color}`}>
            {activity.level}
          </div>
        </div>

        {/* 活跃用户数 */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Users className="w-6 h-6 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-800">
            {realtimeStats.activeUsers.size}
          </div>
          <div className="text-sm text-gray-600">活跃用户</div>
          <div className="text-xs text-gray-500 mt-1">5分钟内</div>
        </div>

        {/* 峰值活跃度 */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Activity className="w-6 h-6 text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-gray-800">
            {realtimeStats.peakActivity}
          </div>
          <div className="text-sm text-gray-600">峰值活跃</div>
          <div className="text-xs text-gray-500 mt-1">消息/分钟</div>
        </div>

        {/* 总消息数 */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Eye className="w-6 h-6 text-orange-500" />
          </div>
          <div className="text-2xl font-bold text-gray-800">
            {comments.length}
          </div>
          <div className="text-sm text-gray-600">总消息数</div>
          <div className="text-xs text-gray-500 mt-1">本次监听</div>
        </div>
      </div>

      {/* 消息类型分布条 */}
      {comments.length > 0 && (
        <div className="mt-4">
          <div className="text-sm text-gray-600 mb-2">消息类型分布</div>
          <div className="flex h-2 bg-gray-200 rounded-full overflow-hidden">
            {(() => {
              const types = comments.reduce((acc, comment) => {
                acc[comment.message_type] = (acc[comment.message_type] || 0) + 1;
                return acc;
              }, {});
              
              const total = comments.length;
              const colors = {
                chat: 'bg-blue-500',
                gift: 'bg-orange-500', 
                like: 'bg-red-500',
                member: 'bg-green-500',
                social: 'bg-purple-500'
              };

              return Object.entries(types).map(([type, count]) => (
                <div
                  key={type}
                  className={`${colors[type] || 'bg-gray-400'} transition-all duration-300`}
                  style={{ width: `${(count / total) * 100}%` }}
                  title={`${type}: ${count} (${((count / total) * 100).toFixed(1)}%)`}
                />
              ));
            })()}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>聊天</span>
            <span>礼物</span>
            <span>点赞</span>
            <span>成员</span>
            <span>社交</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveStats;