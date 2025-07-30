import React, { useState, useEffect } from 'react';
import { Play, Square, Download, Trash2, Users, MessageCircle, Clock, TrendingUp } from 'lucide-react';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import CommentsSection from './components/CommentsSection';
import StatsSection from './components/StatsSection';

function App() {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [liveUrl, setLiveUrl] = useState('');
  const [comments, setComments] = useState([]);
  const [stats, setStats] = useState({
    totalComments: 0,
    onlineUsers: 0,
    duration: '00:00:00'
  });
  const [status, setStatus] = useState('offline');

  useEffect(() => {
    // 监听新评论
    window.electronAPI?.onNewComment((comment) => {
      setComments(prev => [comment, ...prev].slice(0, 1000)); // 保持最新1000条
      setStats(prev => ({
        ...prev,
        totalComments: prev.totalComments + 1
      }));
    });

    // 监听状态变化
    window.electronAPI?.onStatusChange((newStatus) => {
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
    window.electronAPI?.onMenuAction((action) => {
      if (action === 'start') {
        handleStartMonitoring();
      } else if (action === 'stop') {
        handleStopMonitoring();
      }
    });

    return () => {
      window.electronAPI?.removeAllListeners('new-comment');
      window.electronAPI?.removeAllListeners('status-change');
      window.electronAPI?.removeAllListeners('menu-start-monitoring');
      window.electronAPI?.removeAllListeners('menu-stop-monitoring');
    };
  }, []);

  const handleStartMonitoring = async () => {
    if (!liveUrl.trim()) {
      alert('请输入直播间URL');
      return;
    }

    try {
      const result = await window.electronAPI.startMonitoring(liveUrl);
      if (result.success) {
        setIsMonitoring(true);
        setStatus('connecting');
      } else {
        alert(`启动失败: ${result.error}`);
      }
    } catch (error) {
      alert(`启动失败: ${error.message}`);
    }
  };

  const handleStopMonitoring = async () => {
    try {
      const result = await window.electronAPI.stopMonitoring();
      if (result.success) {
        setIsMonitoring(false);
        setStatus('offline');
      } else {
        alert(`停止失败: ${result.error}`);
      }
    } catch (error) {
      alert(`停止失败: ${error.message}`);
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

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <Header status={status} />
      
      <ControlPanel
        liveUrl={liveUrl}
        setLiveUrl={setLiveUrl}
        isMonitoring={isMonitoring}
        onStart={handleStartMonitoring}
        onStop={handleStopMonitoring}
        stats={stats}
      />

      <main className="flex-1 flex gap-4 p-4 min-h-0">
        <CommentsSection
          comments={comments}
          onClear={handleClearComments}
          onExport={handleExportComments}
        />
        
        <StatsSection comments={comments} />
      </main>
    </div>
  );
}

export default App;