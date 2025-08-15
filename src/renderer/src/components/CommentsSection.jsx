import React from 'react';
import { Trash2, Download, MessageCircle, Gift, Heart, UserPlus, UserMinus, Share2 } from 'lucide-react';
import GiftDisplay from './GiftDisplay';

const CommentsSection = ({ comments, onClear, onExport }) => {
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

  const getMessageIcon = (messageType) => {
    switch (messageType) {
      case 'chat':
        return <MessageCircle className="w-4 h-4 text-blue-500" />;
      case 'gift':
        return <Gift className="w-4 h-4 text-orange-500" />;
      case 'like':
        return <Heart className="w-4 h-4 text-red-500" />;
      case 'member':
        return <UserPlus className="w-4 h-4 text-green-500" />;
      case 'social':
        return <Share2 className="w-4 h-4 text-purple-500" />;
      default:
        return <MessageCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getMessageStyle = (messageType) => {
    switch (messageType) {
      case 'chat':
        return 'border-l-blue-500 bg-blue-50';
      case 'gift':
        return 'border-l-orange-500 bg-orange-50';
      case 'like':
        return 'border-l-red-500 bg-red-50';
      case 'member':
        return 'border-l-green-500 bg-green-50';
      case 'social':
        return 'border-l-purple-500 bg-purple-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getMessageTypeText = (messageType) => {
    switch (messageType) {
      case 'chat':
        return '聊天';
      case 'gift':
        return '礼物';
      case 'like':
        return '点赞';
      case 'member':
        return '成员';
      case 'social':
        return '社交';
      default:
        return '消息';
    }
  };

  return (
    <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
      {/* 头部 */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-blue-500" />
          <h3 className="text-lg font-semibold text-gray-800">实时评论</h3>
          <span className="text-sm text-gray-500">({comments.length})</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onClear}
            className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md flex items-center gap-1 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            清空
          </button>
          <button
            onClick={onExport}
            className="px-3 py-1.5 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md flex items-center gap-1 transition-colors"
          >
            <Download className="w-4 h-4" />
            导出
          </button>
        </div>
      </div>

      {/* 评论列表 */}
      <div className="flex-1 overflow-y-auto p-4">
        {comments.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <MessageCircle className="w-12 h-12 mb-4 text-gray-300" />
            <p className="text-lg">🎯 输入直播间URL开始监听评论</p>
            <p className="text-sm mt-2">评论将在这里实时显示</p>
          </div>
        ) : (
          <div className="space-y-3">
            {comments.map((comment, index) => {
              // 安全检查：确保 comment 对象存在
              if (!comment || typeof comment !== 'object') {
                console.warn('无效的评论对象:', comment);
                return null;
              }

              // 创建唯一的key，结合索引、时间戳和消息类型
              const uniqueKey = `${comment.message_type || 'unknown'}-${index}-${comment.timestamp || Date.now()}-${comment.id || Math.random().toString(36).substr(2, 9)}`;
              
              // 礼物消息使用专门的礼物展示组件
              if (comment.message_type === 'gift' && comment.gift && typeof comment.gift === 'object') {
                return (
                  <GiftDisplay
                    key={uniqueKey}
                    gift={comment.gift}
                    user={{
                      nickname: comment.username || '匿名用户',
                      level: comment.level || 0
                    }}
                    timestamp={comment.timestamp}
                  />
                );
              }

              // 其他消息类型使用原有样式
              return (
                <div
                  key={uniqueKey}
                  className={`rounded-lg p-3 border-l-4 animate-fade-in ${getMessageStyle(comment.message_type)}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getMessageIcon(comment.message_type)}
                      <div className="w-8 h-8 bg-gradient-to-r from-douyin-pink to-douyin-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {(comment.username && comment.username.charAt(0)) || '?'}
                      </div>
                      <span className="font-medium text-gray-800">
                        {comment.username || '匿名用户'}
                      </span>
                      {comment.level && comment.level > 0 && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                          Lv.{comment.level}
                        </span>
                      )}
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {getMessageTypeText(comment.message_type)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {formatTime(comment.timestamp)}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{comment.content || '(无内容)'}</p>
                  
                  {/* 点赞信息 */}
                  {comment.message_type === 'like' && comment.count && (
                    <div className="mt-2 text-sm text-red-600 bg-red-100 px-3 py-1.5 rounded-md flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      <span>+{Number(comment.count) || 0} 点赞</span>
                      {comment.total && (
                        <span className="text-xs text-gray-600">
                          (总计: {Number(comment.total) || 0})
                        </span>
                      )}
                    </div>
                  )}

                  {/* 成员信息 */}
                  {comment.message_type === 'member' && comment.memberCount && (
                    <div className="mt-2 text-sm text-green-600 bg-green-100 px-3 py-1.5 rounded-md flex items-center gap-2">
                      <UserPlus className="w-4 h-4" />
                      <span>当前在线: {comment.memberCount} 人</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;