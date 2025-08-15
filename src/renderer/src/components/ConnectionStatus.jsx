import React from 'react';
import { Wifi, WifiOff, Loader, AlertCircle, CheckCircle } from 'lucide-react';

const ConnectionStatus = ({ status, isMonitoring, commentsCount, lastCommentTime }) => {
  const getStatusInfo = () => {
    switch (status) {
      case 'monitoring':
        return {
          icon: <CheckCircle className="w-5 h-5 text-green-500" />,
          text: '监听中',
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200'
        };
      case 'connecting':
        return {
          icon: <Loader className="w-5 h-5 text-yellow-500 animate-spin" />,
          text: '连接中',
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200'
        };
      case 'error':
        return {
          icon: <AlertCircle className="w-5 h-5 text-red-500" />,
          text: '连接错误',
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200'
        };
      case 'websocket-created':
        return {
          icon: <Wifi className="w-5 h-5 text-blue-500" />,
          text: 'WebSocket已连接',
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200'
        };
      case 'websocket-closed':
        return {
          icon: <WifiOff className="w-5 h-5 text-orange-500" />,
          text: 'WebSocket已断开',
          color: 'text-orange-600',
          bgColor: 'bg-orange-50',
          borderColor: 'border-orange-200'
        };
      default:
        return {
          icon: <WifiOff className="w-5 h-5 text-gray-400" />,
          text: '未连接',
          color: 'text-gray-600',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200'
        };
    }
  };

  const statusInfo = getStatusInfo();

  const formatLastCommentTime = () => {
    if (!lastCommentTime) return '无';
    const now = Date.now();
    const diff = now - lastCommentTime;
    
    if (diff < 1000) return '刚刚';
    if (diff < 60000) return `${Math.floor(diff / 1000)}秒前`;
    if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`;
    return `${Math.floor(diff / 3600000)}小时前`;
  };

  return (
    <div className={`rounded-lg border p-4 ${statusInfo.bgColor} ${statusInfo.borderColor}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {statusInfo.icon}
          <span className={`font-medium ${statusInfo.color}`}>
            {statusInfo.text}
          </span>
        </div>
        {isMonitoring && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-green-600">实时</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-gray-500">收到评论</div>
          <div className={`font-medium ${statusInfo.color}`}>
            {commentsCount} 条
          </div>
        </div>
        <div>
          <div className="text-gray-500">最后活动</div>
          <div className={`font-medium ${statusInfo.color}`}>
            {formatLastCommentTime()}
          </div>
        </div>
      </div>

      {status === 'monitoring' && commentsCount === 0 && (
        <div className="mt-3 text-xs text-gray-500 bg-white rounded p-2">
          💡 提示: 如果长时间没有数据，请检查直播间是否正在直播，或尝试刷新页面
        </div>
      )}
    </div>
  );
};

export default ConnectionStatus;