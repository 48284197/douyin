import React from 'react';
import { Gift, Diamond, Zap } from 'lucide-react';

const GiftDisplay = ({ gift, user, timestamp }) => {
  // 安全检查：确保必要的 props 存在
  if (!gift || typeof gift !== 'object') {
    console.warn('GiftDisplay: 无效的 gift 对象:', gift);
    return null;
  }

  if (!user || typeof user !== 'object') {
    console.warn('GiftDisplay: 无效的 user 对象:', user);
    return null;
  }

  const formatTime = (timestamp) => {
    try {
      if (!timestamp || isNaN(timestamp)) {
        return '--:--:--';
      }
      return new Date(timestamp).toLocaleTimeString('zh-CN', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    } catch (error) {
      console.error('格式化时间失败:', error);
      return '--:--:--';
    }
  };

  const getGiftValue = () => {
    try {
      const diamondCount = Number(gift?.diamondCount) || 0;
      if (diamondCount > 0) {
        return `${diamondCount} 钻石`;
      }
      return '价值未知';
    } catch (error) {
      console.error('获取礼物价值失败:', error);
      return '价值未知';
    }
  };

  const getGiftRarity = () => {
    try {
      const diamondCount = Number(gift?.diamondCount) || 0;
      if (diamondCount >= 1000) return 'legendary';
      if (diamondCount >= 100) return 'epic';
      if (diamondCount >= 10) return 'rare';
      return 'common';
    } catch (error) {
      console.error('获取礼物稀有度失败:', error);
      return 'common';
    }
  };

  const getRarityStyle = (rarity) => {
    switch (rarity) {
      case 'legendary':
        return 'border-l-purple-500 bg-gradient-to-r from-purple-50 to-pink-50';
      case 'epic':
        return 'border-l-orange-500 bg-gradient-to-r from-orange-50 to-yellow-50';
      case 'rare':
        return 'border-l-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50';
      default:
        return 'border-l-green-500 bg-green-50';
    }
  };

  const getRarityIcon = (rarity) => {
    switch (rarity) {
      case 'legendary':
        return <Zap className="w-4 h-4 text-purple-500" />;
      case 'epic':
        return <Diamond className="w-4 h-4 text-orange-500" />;
      case 'rare':
        return <Gift className="w-4 h-4 text-blue-500" />;
      default:
        return <Gift className="w-4 h-4 text-green-500" />;
    }
  };

  const rarity = getGiftRarity();

  return (
    <div className={`rounded-lg p-4 border-l-4 animate-fade-in ${getRarityStyle(rarity)}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {getRarityIcon(rarity)}
          <div className="w-10 h-10 bg-gradient-to-r from-douyin-pink to-douyin-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
            {(user?.nickname && user.nickname.charAt(0)) || '?'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-800">{user?.nickname || '匿名用户'}</span>
              {user?.level && user.level > 0 && (
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                  Lv.{user.level}
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {formatTime(timestamp)}
            </div>
          </div>
        </div>
      </div>

      {/* 礼物信息卡片 */}
      <div className="bg-white rounded-lg p-3 shadow-sm border">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-orange-500" />
            <span className="font-medium text-gray-800">{gift?.name || '未知礼物'}</span>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-orange-600">x{Number(gift?.count) || 0}</div>
            {Number(gift?.comboCount) > 1 && (
              <div className="text-xs text-gray-500">连击 x{Number(gift?.comboCount) || 0}</div>
            )}
          </div>
        </div>

        {Number(gift?.diamondCount) > 0 && (
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1">
              <Diamond className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-600">价值</span>
            </div>
            <span className="text-sm font-medium text-blue-600">{getGiftValue()}</span>
          </div>
        )}

        {/* 稀有度标识 */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
          <div className="flex items-center gap-1">
            {getRarityIcon(rarity)}
            <span className="text-sm text-gray-600">稀有度</span>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
            rarity === 'legendary' ? 'bg-purple-100 text-purple-700' :
            rarity === 'epic' ? 'bg-orange-100 text-orange-700' :
            rarity === 'rare' ? 'bg-blue-100 text-blue-700' :
            'bg-green-100 text-green-700'
          }`}>
            {rarity === 'legendary' ? '传说' :
             rarity === 'epic' ? '史诗' :
             rarity === 'rare' ? '稀有' : '普通'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GiftDisplay;