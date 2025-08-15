import React from 'react';
import { Video } from 'lucide-react';

const Header = ({ status, apiReady }) => {
  const getStatusInfo = () => {
    switch (status) {
      case 'monitoring':
        return { text: '监听中', color: 'bg-green-500', pulse: true };
      case 'connecting':
        return { text: '连接中', color: 'bg-yellow-500', pulse: true };
      case 'error':
        return { text: '连接错误', color: 'bg-red-500', pulse: false };
      default:
        return { text: '未连接', color: 'bg-gray-400', pulse: false };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Video className="w-8 h-8 text-douyin-pink" />
          <h1 className="text-2xl font-bold text-gray-800">抖音直播监听器</h1>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg">
            <span className="text-xs text-gray-500">API:</span>
            <div className={`w-2 h-2 rounded-full ${apiReady ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-xs font-medium text-gray-700">{apiReady ? '就绪' : '未就绪'}</span>
          </div>
          
          <div className="flex items-center gap-3 px-3 py-1.5 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">{statusInfo.text}</span>
            <div className={`w-3 h-3 rounded-full ${statusInfo.color} ${
              statusInfo.pulse ? 'animate-pulse' : ''
            }`} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;