import React, { useMemo } from 'react';
import { TrendingUp, Users, Hash } from 'lucide-react';

const StatsSection = ({ comments }) => {
  const stats = useMemo(() => {
    if (!comments.length) return { topUsers: [], hotWords: [], hourlyStats: [] };

    // 统计用户评论数
    const userStats = {};
    const wordStats = {};
    const hourlyStats = Array(24).fill(0);

    comments.forEach(comment => {
      // 用户统计
      if (comment.username) {
        userStats[comment.username] = (userStats[comment.username] || 0) + 1;
      }

      // 词汇统计 (简单分词)
      const words = comment.content?.match(/[\u4e00-\u9fa5]+/g) || [];
      words.forEach(word => {
        if (word.length > 1) {
          wordStats[word] = (wordStats[word] || 0) + 1;
        }
      });

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

    return { topUsers, hotWords, hourlyStats };
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