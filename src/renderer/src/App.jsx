import React, { useState, useEffect } from 'react';
import { Play, Square, Download, Trash2, Users, MessageCircle, Clock, TrendingUp, ExternalLink } from 'lucide-react';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import CommentsSection from './components/CommentsSection';
import StatsSection from './components/StatsSection';
import LiveStats from './components/LiveStats';
import MessageFilter from './components/MessageFilter';
import GiftStats from './components/GiftStats';
import ConnectionStatus from './components/ConnectionStatus';
import ErrorBoundary from './components/ErrorBoundary';

import MiniWindow from './components/MiniWindow';

function App() {

  
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [liveUrl, setLiveUrl] = useState('https://live.douyin.com/730184441361');
  const [comments, setComments] = useState([]);
  const [stats, setStats] = useState({
    totalComments: 0,
    onlineUsers: 0,
    duration: '00:00:00'
  });
  const [status, setStatus] = useState('offline');
  const [messageFilters, setMessageFilters] = useState({
    chat: true,
    gift: true,
    like: true,
    member: true,
    social: true
  });

  const [debugInfo, setDebugInfo] = useState([]);
  const [lastCommentTime, setLastCommentTime] = useState(null);
  const [miniWindowOpen, setMiniWindowOpen] = useState(false);

  const addDebugInfo = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setDebugInfo(prev => [`[${timestamp}] ${message}`, ...prev].slice(0, 10));
    console.log(`[DEBUG] ${message}`);
  };

  useEffect(() => {
    addDebugInfo('App 组件开始初始化');
    addDebugInfo(`window.electronAPI 存在: ${!!window.electronAPI}`);
    addDebugInfo(`window.preloadLoaded: ${window.preloadLoaded || 'undefined'}`);
    
    // 页面刷新前确认
    const handleBeforeUnload = (event) => {
      if (isMonitoring) {
        // 阻止默认的刷新行为
        event.preventDefault();
        event.returnValue = '正在监听直播中，确定要刷新页面吗？这将停止当前监听。';
        
        // 在用户确认后停止监听
        // 注意：由于 beforeunload 的限制，这里只能设置提示信息
        // 实际的停止操作会在页面卸载时自动处理
        return '正在监听直播中，确定要刷新页面吗？这将停止当前监听。';
      }
    };

    // 页面卸载时停止监听
    const handleUnload = () => {
      if (isMonitoring && window.electronAPI) {
        // 同步停止监听（不等待异步结果）
        window.electronAPI.stopMonitoring().catch(console.error);
      }
    };

    window.addEventListener('unload', handleUnload);
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // 同步初始化 electronAPI
    if (window.electronAPI) {
      addDebugInfo('electronAPI 对象属性: ' + Object.keys(window.electronAPI).join(', '));
      addDebugInfo('✅ Electron API 同步加载完成');
      
      // 监听新评论
      window.electronAPI.onNewComment((comment) => {
        console.log('📨 收到新评论:', comment);
        addDebugInfo(`收到新评论: ${comment.username} - ${comment.message_type}`);
        setComments(prev => [comment, ...prev].slice(0, 1000)); // 保持最新1000条
        setLastCommentTime(Date.now());
        setStats(prev => ({
          ...prev,
          totalComments: prev.totalComments + 1
        }));
      });

      // 监听状态变化
      window.electronAPI.onStatusChange((newStatus) => {
        console.log('📡 状态变化:', newStatus);
        addDebugInfo(`状态变化: ${newStatus.status}`);
        setStatus(newStatus.status);
        
        // 更新监听状态
        if (newStatus.status === 'monitoring') {
          setIsMonitoring(true);
        } else if (newStatus.status === 'stopped') {
          setIsMonitoring(false);
        }
        
        if (newStatus.onlineUsers !== undefined) {
          setStats(prev => ({
            ...prev,
            onlineUsers: newStatus.onlineUsers
          }));
        }
      });

      // 监听菜单操作
      window.electronAPI.onMenuAction((action) => {
        if (action === 'start') {
          if (!liveUrl.trim()) {
            alert('请输入直播间URL');
            return;
          }
          handleStartMonitoring();
        } else if (action === 'stop') {
          handleStopMonitoring();
        }
      });
    } else {
      addDebugInfo('⏳ Electron API 未就绪');
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
      if (window.electronAPI) {
        window.electronAPI.removeAllListeners('new-comment');
        window.electronAPI.removeAllListeners('status-change');
        window.electronAPI.removeAllListeners('menu-start-monitoring');
        window.electronAPI.removeAllListeners('menu-stop-monitoring');
      }
    };
  }, [liveUrl]);

  const handleStartMonitoring = async () => {
    if (!liveUrl.trim()) {
      alert('请输入直播间URL');
      return;
    }

    // 检查 electronAPI 是否可用
    if (!window.electronAPI) {
      alert('Electron API 未就绪，请稍后重试');
      return;
    }

    try {
      setStatus('connecting');
      addDebugInfo('🚀 开始启动监听: ' + liveUrl);
      console.log('🚀 开始启动监听...');
      
      const result = await window.electronAPI.startMonitoring(liveUrl);
      console.log('📡 监听启动结果:', result);
      addDebugInfo(`监听启动结果: ${result.success ? '成功' : '失败 - ' + result.error}`);
      
      if (result.success) {
        setIsMonitoring(true);
        setStatus('monitoring');
        addDebugInfo('✅ 监听启动成功，等待数据...');
        console.log('✅ 监听启动成功');
      } else {
        setStatus('error');
        addDebugInfo('❌ 启动失败: ' + result.error);
        alert(`启动失败: ${result.error}`);
        console.error('❌ 监听启动失败:', result.error);
      }
    } catch (error) {
      setStatus('error');
      addDebugInfo('❌ 启动异常: ' + error.message);
      alert(`启动失败: ${error.message}`);
      console.error('❌ 监听启动异常:', error);
    }
  };

  const handleStopMonitoring = async () => {
    if (!window.electronAPI) {
      alert('Electron API 未就绪');
      return;
    }

    try {
      console.log('🛑 开始停止监听...');
      const result = await window.electronAPI.stopMonitoring();
      console.log('📡 停止监听结果:', result);
      
      if (result.success) {
        setIsMonitoring(false);
        setStatus('offline');
        console.log('✅ 监听已停止');
        
        // 停止监听时关闭小窗
        try {
          await window.electronAPI.closeMiniWindow();
          console.log('🪟 小窗已关闭');
        } catch (miniWindowError) {
          console.log('🪟 小窗关闭失败或未打开:', miniWindowError.message);
        }
      } else {
        alert(`停止失败: ${result.error}`);
        console.error('❌ 停止监听失败:', result.error);
      }
    } catch (error) {
      alert(`停止失败: ${error.message}`);
      console.error('❌ 停止监听异常:', error);
    }
  };

  const handleClearComments = () => {
    setComments([]);
    setStats(prev => ({ ...prev, totalComments: 0 }));
  };

  const handleExportComments = async () => {
    try {
      const result = await window.electronAPI.exportComments('json');
      if (result.success) {
        // 触发下载
        const blob = new Blob([JSON.stringify(result.data, null, 2)], {
          type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `douyin-comments-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
      } else {
        alert(`导出失败: ${result.error}`);
      }
    } catch (error) {
      alert(`导出失败: ${error.message}`);
    }
  };

  const handleFilterChange = (filterKey, enabled) => {
    setMessageFilters(prev => ({
      ...prev,
      [filterKey]: enabled
    }));
  };

  const handleOpenMiniWindow = async () => {
    try {
      if (!window.electronAPI) {
        alert('Electron API 未就绪');
        return;
      }

      // 从URL中提取房间ID作为窗口标题
      const extractRoomId = (url) => {
        try {
          const match = url.match(/live\.douyin\.com\/(\d+)/);
          return match ? match[1] : '直播间';
        } catch {
          return '直播间';
        }
      };

      const roomId = extractRoomId(liveUrl);
      const windowTitle = `直播间${roomId}`;

      const result = await window.electronAPI.createMiniWindow({
        width: 400,
        height: 500,
        backgroundColor: '#80000000', // 半透明黑色背景
        title: windowTitle
      });

      if (result.success) {
        setMiniWindowOpen(true);
        addDebugInfo('弹幕小窗口创建成功');
      } else {
        alert(`创建弹幕小窗口失败: ${result.error}`);
      }
    } catch (error) {
      console.error('创建弹幕小窗口失败:', error);
      alert(`创建弹幕小窗口失败: ${error.message}`);
    }
  };

  // 过滤评论 - 添加安全检查
  const filteredComments = Array.isArray(comments) 
    ? comments.filter(comment => 
        comment && 
        typeof comment === 'object' && 
        messageFilters[comment.message_type] !== false
      )
    : [];

  // 检查是否是小窗口路由
  if (window.location.hash === '#/mini-window') {
    return <MiniWindow />;
  }



  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <Header status={status} apiReady={true} />
      
      <ControlPanel
        liveUrl={liveUrl}
        setLiveUrl={setLiveUrl}
        isMonitoring={isMonitoring}
        onStart={handleStartMonitoring}
        onStop={handleStopMonitoring}
        stats={stats}
      />
      
      {/* 弹幕小窗按钮 - 始终显示 */}
      <div className="px-4 pb-2">
        <button
          onClick={handleOpenMiniWindow}
          disabled={!isMonitoring}
          className={`font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg ${
            isMonitoring 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          title={!isMonitoring ? '请先开始监听直播' : '打开弹幕小窗'}
        >
          <MessageCircle className="w-5 h-5" />
          <span>弹幕小窗</span>
        </button>
      </div>

      <main className="flex-1 flex flex-col gap-4 p-4 min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* <LiveStats comments={comments} isMonitoring={isMonitoring} /> */}
          <ConnectionStatus 
            status={status}
            isMonitoring={isMonitoring}
            commentsCount={comments.length}
            lastCommentTime={lastCommentTime}
          />
        </div>
        
        <MessageFilter 
          filters={messageFilters} 
          onFilterChange={handleFilterChange} 
        />
        
        <div className="flex-1 flex gap-4 min-h-0">
          <ErrorBoundary>
            <CommentsSection
              comments={filteredComments}
              onClear={handleClearComments}
              onExport={handleExportComments}
            />
          </ErrorBoundary>
          
          <div className="flex flex-col gap-4 w-80">
            <ErrorBoundary>
              <StatsSection comments={filteredComments} />
            </ErrorBoundary>
            <ErrorBoundary>
              <GiftStats comments={filteredComments} />
            </ErrorBoundary>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;