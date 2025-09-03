import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, Settings, Pin, PinOff, MessageCircle, User, Gift, Palette } from 'lucide-react';

function MiniWindow() {
  const [backgroundColor, setBackgroundColor] = useState('#80000000');
  const [showSettings, setShowSettings] = useState(false);
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(true);
  const [opacity, setOpacity] = useState(0.5);
  const [customColor, setCustomColor] = useState('#000000');
  const [windowSize, setWindowSize] = useState({ width: 400, height: 500 });
  const [isDragging, setIsDragging] = useState(false);
  const [comments, setComments] = useState([]);
  const dragOffsetRef = useRef({ x: 0, y: 0 }); // 鼠标相对于窗口左上角的偏移
  const lastMoveTimeRef = useRef(0);
  const moveThrottleMs = 16; // 约60fps的更新频率

  useEffect(() => {
    // 设置窗口样式
    document.body.style.backgroundColor = 'transparent';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.body.style.userSelect = 'none'; // 防止文本选择
    document.body.style.webkitUserSelect = 'none';
    
    // 添加拖动时的样式优化
    const style = document.createElement('style');
    style.textContent = `
      * {
        -webkit-user-drag: none;
        -webkit-app-region: no-drag;
      }
      .dragging {
        cursor: grabbing !important;
      }
      .dragging button {
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  const handleClose = async () => {
    try {
      console.log('点击关闭按钮');
      if (window.electronAPI) {
        console.log('调用 closeMiniWindow API');
        const result = await window.electronAPI.closeMiniWindow();
        console.log('关闭结果:', result);
        if (result && result.success) {
          console.log('小窗口关闭成功');
        } else {
          console.error('关闭失败:', result);
        }
      } else {
        console.error('electronAPI 不可用');
      }
    } catch (error) {
      console.error('关闭小窗口失败:', error);
    }
  };

  const handleToggleAlwaysOnTop = async () => {
    try {
      if (window.electronAPI) {
        const newValue = !isAlwaysOnTop;
        await window.electronAPI.setMiniWindowAlwaysOnTop(newValue);
        setIsAlwaysOnTop(newValue);
      }
    } catch (error) {
      console.error('设置置顶失败:', error);
    }
  };

  const handleBackgroundChange = async (newColor) => {
    try {
      if (window.electronAPI) {
        await window.electronAPI.setMiniWindowBackground(newColor);
        setBackgroundColor(newColor);
      }
    } catch (error) {
      console.error('设置背景失败:', error);
    }
  };

  const handleOpacityChange = (newOpacity) => {
    setOpacity(newOpacity);
    const alpha = Math.round(newOpacity * 255).toString(16).padStart(2, '0');
    const newColor = customColor + alpha;
    handleBackgroundChange(newColor);
  };

  const handleCustomColorChange = (color) => {
    setCustomColor(color);
    const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0');
    const newColor = color + alpha;
    handleBackgroundChange(newColor);
  };

  const handleSizeChange = async (width, height) => {
    try {
      if (window.electronAPI) {
        await window.electronAPI.setMiniWindowSize(width, height);
        setWindowSize({ width, height });
      }
    } catch (error) {
      console.error('设置窗口大小失败:', error);
    }
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    
    const now = Date.now();
    // 时间节流 - 限制更新频率
    if (now - lastMoveTimeRef.current < moveThrottleMs) {
      return;
    }
    lastMoveTimeRef.current = now;
    
    // 使用屏幕坐标计算新的窗口位置
    const newWindowX = e.screenX - dragOffsetRef.current.x;
    const newWindowY = e.screenY - dragOffsetRef.current.y;
    
    // 直接设置窗口位置，不需要阈值判断
    window.electronAPI.setMiniWindowPosition(newWindowX, newWindowY);
  }, [isDragging, moveThrottleMs]);

  const handleMouseUp = useCallback(() => {
    console.log('结束拖拽');
    setIsDragging(false);
    // 移除拖动样式
    document.body.classList.remove('dragging');
  }, []);

  const handleMouseDown = async (e) => {
    // 只有点击标题栏区域才开始拖拽，排除按钮区域
    if (e.target.closest('button')) {
      console.log('点击了按钮，不启动拖拽');
      return;
    }
    
    console.log('开始拖拽', e.clientX, e.clientY);
    
    // 获取当前窗口位置信息
    const boundsResult = await window.electronAPI.getMiniWindowBounds();
    if (boundsResult.success) {
      const { x: windowX, y: windowY } = boundsResult.data;
      // 计算鼠标相对于窗口左上角的偏移量
      dragOffsetRef.current = {
        x: e.screenX - windowX,
        y: e.screenY - windowY
      };
    } else {
      console.error('获取窗口边界失败:', boundsResult.error);
      dragOffsetRef.current = { x: 0, y: 0 };
    }
    
    setIsDragging(true);
    
    // 添加拖动样式
    document.body.classList.add('dragging');
    
    // 防止文本选择
    e.preventDefault();
  };

  // 监听评论数据
  useEffect(() => {
    const handleNewComment = (comment) => {
      console.log('🪟 小窗收到新评论:', comment);
      setComments(prev => [comment, ...prev].slice(0, 50)); // 只保留最新的50条评论
    };

    if (window.electronAPI && window.electronAPI.onNewComment) {
      window.electronAPI.onNewComment(handleNewComment);
    }

    // 清理函数
    return () => {
      if (window.electronAPI && window.electronAPI.removeAllListeners) {
        window.electronAPI.removeAllListeners('new-comment');
      }
    };
  }, []);

  // 设置窗口样式
  useEffect(() => {
    if (window.electronAPI) {
      window.electronAPI.setWindowStyle({
        backgroundColor,
        alwaysOnTop: isAlwaysOnTop
      });
    }
  }, [backgroundColor, isAlwaysOnTop]);

  // 使用useEffect来管理全局事件监听
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // 组件卸载时清理事件监听
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const presetColors = [
    { name: '透明黑', value: '#80000000' },
    { name: '透明白', value: '#80ffffff' },
    { name: '透明蓝', value: '#800066ff' },
    { name: '透明绿', value: '#8000ff66' },
    { name: '透明红', value: '#80ff0066' },
    { name: '透明紫', value: '#80ff00ff' },
  ];

  const presetSizes = [
    { name: '小', width: 300, height: 200 },
    { name: '中', width: 400, height: 300 },
    { name: '大', width: 600, height: 400 },
  ];

  return (
    <div 
      className="w-full h-screen bg-transparent overflow-hidden flex items-center justify-center"
      style={{ 
        backgroundColor: 'transparent',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* 主内容区域 */}
      <div 
        className="w-full max-w-md h-full max-h-screen flex flex-col mx-auto"
        style={{ 
          backgroundColor: backgroundColor,
          backdropFilter: 'blur(5px)'
        }}
      >
        {/* 标题栏 */}
        <div 
          className="flex items-center justify-between p-2 bg-black bg-opacity-20 backdrop-blur-sm border-b border-white border-opacity-20 cursor-move select-none"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-white text-sm font-medium">小窗口</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <button
              onClick={handleToggleAlwaysOnTop}
              className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
              title={isAlwaysOnTop ? '取消置顶' : '设置置顶'}
            >
              {isAlwaysOnTop ? (
                <Pin className="w-4 h-4 text-white" />
              ) : (
                <PinOff className="w-4 h-4 text-white" />
              )}
            </button>
            
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
              title="设置"
            >
              <Settings className="w-4 h-4 text-white" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log('关闭按钮被点击');
                handleClose();
              }}
              className="p-1 hover:bg-red-500 hover:bg-opacity-80 rounded transition-colors"
              title="关闭"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* 设置面板 */}
        {showSettings && (
          <div className="absolute top-12 right-2 w-48 bg-black bg-opacity-80 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-20 z-10">
            <h3 className="text-white text-sm font-medium mb-3">窗口设置</h3>
            
            {/* 透明度控制 */}
            <div>
              <label className="text-white text-xs mb-2 block">透明度: {Math.round(opacity * 100)}%</label>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={opacity}
                onChange={(e) => handleOpacityChange(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        )}

        {/* 主要内容区域 */}
        <div className="flex-1 overflow-hidden">
          {comments.length > 0 ? (
            <div className="h-full overflow-y-auto p-4 space-y-3">
              {comments.map((comment, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-20">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-white text-sm font-medium truncate">
                          {comment.username || '匿名用户'}
                        </span>
                        {comment.isGift && (
                          <Gift className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-white text-sm opacity-90 break-words">
                        {comment.message}
                      </p>
                      {comment.timestamp && (
                        <span className="text-white text-xs opacity-60 mt-1 block">
                          {new Date(comment.timestamp).toLocaleTimeString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center p-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-white text-lg font-medium mb-2">等待评论</h2>
                <p className="text-white text-sm opacity-80 mb-4">
                  评论将在这里实时显示
                </p>
                <div className="text-white text-xs opacity-60">
                  <p>• 支持拖拽移动窗口</p>
                  <p>• 可调节透明度和颜色</p>
                  <p>• 实时显示最新评论</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MiniWindow;