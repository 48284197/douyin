import React from 'react';
import { Trash2, Download, MessageCircle } from 'lucide-react';

const CommentsSection = ({ comments, onClear, onExport }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('zh-CN', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
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
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-3 border-l-4 border-douyin-pink animate-fade-in"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-douyin-pink to-douyin-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {comment.username?.charAt(0) || '?'}
                    </div>
                    <span className="font-medium text-gray-800">
                      {comment.username || '匿名用户'}
                    </span>
                    {comment.level && (
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                        Lv.{comment.level}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    {formatTime(comment.timestamp)}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                {comment.giftName && (
                  <div className="mt-2 text-sm text-orange-600 bg-orange-50 px-2 py-1 rounded">
                    🎁 {comment.giftName} x{comment.giftCount || 1}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;