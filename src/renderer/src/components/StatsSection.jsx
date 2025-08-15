import React, { useMemo } from 'react';
import { TrendingUp, Users, Hash, MessageCircle, Gift, Heart, UserPlus, Share2 } from 'lucide-react';

const StatsSection = ({ comments }) => {
  const stats = useMemo(() => {
    if (!comments.length) return { 
      topUsers: [], 
      hotWords: [], 
      hourlyStats: [],
      messageTypes: {},
      totalGifts: 0,
      totalLikes: 0
    };

    // 统计用户评论数
    const userStats = {};
    const wordStats = {};
    const hourlyStats = Array(24).fill(0);
    const messageTypes = {
      chat: 0,
      gift: 0,
      like: 0,
      member: 0,
      social: 0
    };
    let totalGifts = 0;
    let totalLikes = 0;

    comments.forEach(comment => {
      // 用户统计
      if (comment.username) {
        userStats[comment.username] = (userStats[comment.username] || 0) + 1;
      }

      // 消息类型统计
      if (comment.message_type) {
        messageTypes[comment.message_type] = (messageTypes[comment.message_type] || 0) + 1;
      }

      // 礼物和点赞统计
      if (comment.message_type === 'gift' && comment.gift?.count) {
        totalGifts += Number(comment.gift.count) || 0;
      }
      if (comment.message_type === 'like' && comment.count) {
        totalLikes += Number(comment.count) || 0;
      }

      // 词汇统计 (只统计聊天消息)
      if (comment.message_type === 'chat') {
        const words = comment.content?.match(/[\u4e00-\u9fa5]+/g) || [];
        words.forEach(word => {
          if (word.length > 1) {
            wordStats[word] = (wordStats[word] || 0) + 1;
          }
        });
      }

      // 时间统计
      if (comment.timestamp) {
        const hour = new Date(comment.timestamp).getHours();
        hourlyStats[hour]++;
      }
    });

    const topUsers = Object.entries(userStats)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([name, count]) => ({ name, count }));

    const hotWords = Object.entries(wordStats)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([word, count]) => ({ word, count }));

    return { topUsers, hotWords, hourlyStats, messageTypes, totalGifts, totalLikes };
  }, [comments]);

  return (
    <div className="w-80 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
      {/* 头部 */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-500" />
          <h3 className="text-lg font-semibold text-gray-800">数据统计</h3>
        </div>
      </div>

      {/* 统计内容 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* 消息类型统计 */}
        <div>
          <h4 className="font-medium text-gray-800 mb-3">消息类型分布</h4>
          {comments.length > 0 ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-700">聊天</span>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {stats.messageTypes.chat || 0}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-700">礼物</span>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {stats.messageTypes.gift || 0} ({stats.totalGifts}个)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-gray-700">点赞</span>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {stats.messageTypes.like || 0} ({stats.totalLikes}次)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <UserPlus className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-700">成员</span>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {stats.messageTypes.member || 0}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-gray-700">社交</span>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {stats.messageTypes.social || 0}
                </span>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500">暂无数据</p>
          )}
        </div>
        {/* 热门用户 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-4 h-4 text-blue-500" />
            <h4 className="font-medium text-gray-800">热门用户</h4>
          </div>
          {stats.topUsers.length > 0 ? (
            <div className="space-y-2">
              {stats.topUsers.map((user, index) => (
                <div key={user.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center text-white font-bold ${
                      index === 0 ? 'bg-yellow-500' : 
                      index === 1 ? 'bg-gray-400' : 
                      index === 2 ? 'bg-orange-600' : 'bg-gray-300'
                    }`}>
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-700 truncate max-w-32">
                      {user.name}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {user.count}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">暂无数据</p>
          )}
        </div>

        {/* 热门词汇 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Hash className="w-4 h-4 text-purple-500" />
            <h4 className="font-medium text-gray-800">热门词汇</h4>
          </div>
          {stats.hotWords.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {stats.hotWords.map((item, index) => (
                <span
                  key={item.word}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    index < 3 
                      ? 'bg-douyin-pink text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {item.word} ({item.count})
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">暂无数据</p>
          )}
        </div>

        {/* 评论趋势 */}
        <div>
          <h4 className="font-medium text-gray-800 mb-3">24小时评论趋势</h4>
          {comments.length > 0 ? (
            <div className="h-32 flex items-end justify-between gap-1">
              {stats.hourlyStats.map((count, hour) => {
                const maxCount = Math.max(...stats.hourlyStats);
                const height = maxCount > 0 ? (count / maxCount) * 100 : 0;
                return (
                  <div key={hour} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full bg-douyin-blue rounded-t min-h-[2px] transition-all duration-300"
                      style={{ height: `${height}%` }}
                      title={`${hour}:00 - ${count}条评论`}
                    />
                    <span className="text-xs text-gray-500 mt-1">
                      {hour}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="h-32 flex items-center justify-center">
              <p className="text-sm text-gray-500">暂无数据</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;