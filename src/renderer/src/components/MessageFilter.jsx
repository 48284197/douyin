import React from 'react';
import { Filter, MessageCircle, Gift, Heart, UserPlus, Share2 } from 'lucide-react';

const MessageFilter = ({ filters, onFilterChange }) => {
  const filterOptions = [
    { key: 'chat', label: '聊天', icon: MessageCircle, color: 'text-blue-500' },
    { key: 'gift', label: '礼物', icon: Gift, color: 'text-orange-500' },
    { key: 'like', label: '点赞', icon: Heart, color: 'text-red-500' },
    { key: 'member', label: '成员', icon: UserPlus, color: 'text-green-500' },
    { key: 'social', label: '社交', icon: Share2, color: 'text-purple-500' },
  ];

  return (
    <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">消息过滤:</span>
      </div>
      
      <div className="flex gap-2">
        {filterOptions.map(({ key, label, icon: Icon, color }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key, !filters[key])}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm transition-all ${
              filters[key]
                ? 'bg-white shadow-sm border border-gray-200'
                : 'bg-transparent text-gray-500 hover:bg-gray-100'
            }`}
          >
            <Icon className={`w-4 h-4 ${filters[key] ? color : 'text-gray-400'}`} />
            <span className={filters[key] ? 'text-gray-800' : 'text-gray-500'}>
              {label}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={() => {
          const allEnabled = Object.values(filters).every(Boolean);
          const newFilters = {};
          filterOptions.forEach(({ key }) => {
            newFilters[key] = !allEnabled;
          });
          Object.keys(newFilters).forEach(key => {
            onFilterChange(key, newFilters[key]);
          });
        }}
        className="ml-auto px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
      >
        {Object.values(filters).every(Boolean) ? '全部取消' : '全部选择'}
      </button>
    </div>
  );
};

export default MessageFilter;