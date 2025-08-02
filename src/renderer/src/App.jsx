import React, { useState, useEffect } from 'react';
import { Play, Square, Download, Trash2, Users, MessageCircle, Clock, TrendingUp } from 'lucide-react';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import CommentsSection from './components/CommentsSection';
import StatsSection from './components/StatsSection';
import LiveStats from './components/LiveStats';
import MessageFilter from './components/MessageFilter';

function App() {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [liveUrl, setLiveUrl] = useState('https://live.douyin.com/143040673633');
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
  const [apiReady, setApiReady] = useState(false);
  const [debugInfo, setDebugInfo] = useState([]);

  const addDebugInfo = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setDebugInfo(prev => [`[${timestamp}] ${message}`, ...prev].slice(0, 10));
    console.log(`[DEBUG] ${message}`);
  };

  useEffect(() => {
    addDebugInfo('App 组件开始初始化');
    addDebugInfo(`window.electronAPI 存在: ${!!window.electronAPI}`);
    addDebugInfo(`window.preloadTest: ${window.preloadTest || 'undefined'}`);
    
    if (window.electronAPI) {
      addDebugInfo('electronAPI 对象属性: ' + Object.keys(window.electronAPI).join(', '));
      
      // 测试简单的 API
      if (window.electronAPI.test) {
        try {
          const testResult = window.electronAPI.test();
          addDebugInfo('API 测试结果: ' + testResult);
        } catch (error) {
          addDebugInfo('API 测试失败: ' + error.message);
        }
      }
    }
    // 等待 electronAPI 就绪
    const checkElectronAPI = () => {
      if (window.electronAPI) {
        addDebugInfo('✅ Electron API 已就绪');
        setApiReady(true);
        
        // 监听新评论
        window.electronAPI.onNewComment((comment) => {
          console.log('📨 收到新评论:', comment);
          setComments(prev => [comment, ...prev].slice(0, 1000)); // 保持最新1000条
          setStats(prev => ({
            ...prev,
            totalComments: prev.totalComments + 1
          }));
        });

        // 监听状态变化
        window.electronAPI.onStatusChange((newStatus) => {
          console.log('📡 状态变化:', newStatus);
          setStatus(newStatus.status);
          setIsMonitoring(newStatus.status === 'monitoring');
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
        addDebugInfo('⏳ 等待 Electron API 就绪...');
        setTimeout(checkElectronAPI, 100);
      }
    };
    
    checkElectronAPI();

    return () => {
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
    if (!window.electronAPI || !apiReady) {
      alert('Electron API 未就绪，请稍后重试');
      return;
    }

    try {
      setStatus('connecting');
      console.log('🚀 开始启动监听...');
      
      const result = await window.electronAPI.startMonitoring(liveUrl);
      console.log('📡 监听启动结果:', result);
      
      if (result.success) {
        setIsMonitoring(true);
        setStatus('monitoring');
        console.log('✅ 监听启动成功');
      } else {
        setStatus('error');
        alert(`启动失败: ${result.error}`);
        console.error('❌ 监听启动失败:', result.error);
      }
    } catch (error) {
      setStatus('error');
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

  // 过滤评论
  const filteredComments = comments.filter(comment => 
    messageFilters[comment.message_type] !== false
  );

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <Header status={status} apiReady={apiReady} />
      
      <ControlPanel
        liveUrl={liveUrl}
        setLiveUrl={setLiveUrl}
        isMonitoring={isMonitoring}
        onStart={handleStartMonitoring}
        onStop={handleStopMonitoring}
        stats={stats}
      />

      <main className="flex-1 flex flex-col gap-4 p-4 min-h-0">
        {/* 调试信息面板 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-blue-800 font-medium mb-2">🔧 调试信息</h3>
          <div className="flex gap-2 mb-2">
            <button 
              onClick={async () => {
                try {
                  const result = await window.electronAPI.getComments({ limit: 10 });
                  addDebugInfo(`获取评论结果: ${result.success ? result.data.length + '条' : result.error}`);
                  if (result.success && result.data.length > 0) {
                    setComments(result.data);
                  }
                } catch (error) {
                  addDebugInfo('获取评论失败: ' + error.message);
                }
              }}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
            >
              测试获取评论
            </button>
            <button 
              onClick={() => {
                addDebugInfo('当前评论数量: ' + comments.length);
                addDebugInfo('API状态: ' + (apiReady ? '就绪' : '未就绪'));
                addDebugInfo('监听状态: ' + status);
              }}
              className="px-3 py-1 bg-green-500 text-white rounded text-sm"
            >
              检查状态
            </button>
          </div>
          <div className="text-sm text-blue-700 space-y-1 max-h-32 overflow-y-auto">
            {debugInfo.map((info, index) => (
              <div key={index} className="font-mono text-xs">{info}</div>
            ))}
          </div>
        </div>
        
        <LiveStats comments={comments} isMonitoring={isMonitoring} />
        
        <MessageFilter 
          filters={messageFilters} 
          onFilterChange={handleFilterChange} 
        />
        
        <div className="flex-1 flex gap-4 min-h-0">
          <CommentsSection
            comments={filteredComments}
            onClear={handleClearComments}
            onExport={handleExportComments}
          />
          
          <StatsSection comments={filteredComments} />
        </div>
      </main>
    </div>
  );
}

export default App;