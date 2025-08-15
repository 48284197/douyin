import React, { useMemo } from 'react';
import { Gift, Diamond, TrendingUp, Users, Crown } from 'lucide-react';

const GiftStats = ({ comments }) => {
  const giftStats = useMemo(() => {
    const giftComments = comments.filter(comment => comment.message_type === 'gift' && comment.gift);
    
    if (giftComments.length === 0) {
      return {
        totalGifts: 0,
        totalValue: 0,
        uniqueGifters: 0,
        topGifts: [],
        topGifters: [],
        recentGifts: []
      };
    }

    // 统计礼物类型
    const giftTypes = {};
    const gifters = {};
    let totalValue = 0;

    giftComments.forEach(comment => {
      const giftName = comment.gift.name;
      const giftCount = Number(comment.gift.count) || 1;
      const giftValue = Number(comment.gift.diamondCount) || 0;
      const gifterName = comment.username;

      // 统计礼物类型
      if (!giftTypes[giftName]) {
        giftTypes[giftName] = {
          name: giftName,
          count: 0,
          totalValue: 0
        };
      }
      giftTypes[giftName].count += giftCount;
      giftTypes[giftName].totalValue += giftValue * giftCount;

      // 统计送礼用户
      if (!gifters[gifterName]) {
        gifters[gifterName] = {
          name: gifterName,
          giftCount: 0,
          totalValue: 0,
          level: comment.level || 0
        };
      }
      gifters[gifterName].giftCount += giftCount;
      gifters[gifterName].totalValue += giftValue * giftCount;

      totalValue += giftValue * giftCount;
    });

    // 排序获取Top数据
    const topGifts = Object.values(giftTypes)
      .sort((a, b) => b.totalValue - a.totalValue)
      .slice(0, 5);

    const topGifters = Object.values(gifters)
      .sort((a, b) => b.totalValue - a.totalValue)
      .slice(0, 5);

    // 最近的礼物
    const recentGifts = giftComments
      .slice(0, 5)
      .map(comment => ({
        gifter: comment.username,
        gift: comment.gift.name,
        count: Number(comment.gift.count) || 1,
        value: Number(comment.gift.diamondCount) || 0,
        timestamp: comment.timestamp
      }));

    return {
      totalGifts: giftComments.length,
      totalValue,
      uniqueGifters: Object.keys(gifters).length,
      topGifts,
      topGifters,
      recentGifts
    };
  }, [comments]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('zh-CN', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-4">
        <Gift className="w-5 h-5 text-orange-500" />
        <h3 className="text-lg font-semibold text-gray-800">礼物统计</h3>
      </div>

      {giftStats.totalGifts === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Gift className="w-12 h-12 mx-auto mb-2 text-gray-300" />
          <p>暂无礼物数据</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* 总体统计 */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{giftStats.totalGifts}</div>
              <div className="text-sm text-gray-600">总礼物数</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{giftStats.totalValue}</div>
              <div className="text-sm text-gray-600">总价值(钻石)</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{giftStats.uniqueGifters}</div>
              <div className="text-sm text-gray-600">送礼用户</div>
            </div>
          </div>

          {/* 热门礼物 */}
          {giftStats.topGifts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                <h4 className="font-medium text-gray-800">热门礼物</h4>
              </div>
              <div className="space-y-2">
                {giftStats.topGifts.map((gift, index) => (
                  <div key={gift.name} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0 ? 'bg-yellow-500 text-white' :
                        index === 1 ? 'bg-gray-400 text-white' :
                        index === 2 ? 'bg-orange-600 text-white' :
                        'bg-gray-300 text-gray-700'
                      }`}>
                        {index + 1}
                      </span>
                      <span className="font-medium">{gift.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">x{Number(gift.count) || 0}</div>
                      {gift.totalValue > 0 && (
                        <div className="text-xs text-gray-500">{gift.totalValue} 钻石</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 土豪榜 */}
          {giftStats.topGifters.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Crown className="w-4 h-4 text-yellow-500" />
                <h4 className="font-medium text-gray-800">土豪榜</h4>
              </div>
              <div className="space-y-2">
                {giftStats.topGifters.map((gifter, index) => (
                  <div key={gifter.name} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0 ? 'bg-yellow-500 text-white' :
                        index === 1 ? 'bg-gray-400 text-white' :
                        index === 2 ? 'bg-orange-600 text-white' :
                        'bg-gray-300 text-gray-700'
                      }`}>
                        {index + 1}
                      </span>
                      <span className="font-medium">{gifter.name}</span>
                      {gifter.level > 0 && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded">
                          Lv.{gifter.level}
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{gifter.giftCount} 个礼物</div>
                      {gifter.totalValue > 0 && (
                        <div className="text-xs text-gray-500">{gifter.totalValue} 钻石</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 最近礼物 */}
          {giftStats.recentGifts.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Diamond className="w-4 h-4 text-blue-500" />
                <h4 className="font-medium text-gray-800">最近礼物</h4>
              </div>
              <div className="space-y-2">
                {giftStats.recentGifts.map((gift, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                    <div>
                      <span className="font-medium">{gift.gifter}</span>
                      <span className="text-gray-500 mx-1">送出</span>
                      <span className="text-orange-600">{gift.gift}</span>
                      {Number(gift.count) > 1 && <span className="text-gray-500"> x{Number(gift.count) || 0}</span>}
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatTime(gift.timestamp)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GiftStats;