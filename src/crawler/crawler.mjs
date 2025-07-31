import puppeteer from 'puppeteer';
import { EventEmitter } from 'events';

export class DouyinCrawler extends EventEmitter {
  constructor(database) {
    super();
    this.database = database;
    this.browser = null;
    this.page = null;
    this.isMonitoring = false;
    this.healthCheckInterval = null;
    this.commentPollingInterval = null;
  }

  async startMonitoring(liveUrl) {
    try {
      this.currentLiveUrl = liveUrl;
      this.emit('status-change', { status: 'connecting' });
    } catch (error) {
      console.error('发射状态变化事件失败:', error.message);
    }

    // 启动浏览器
    let browserRetryCount = 0;
    const maxBrowserRetries = 3;

    while (browserRetryCount < maxBrowserRetries) {
      try {
        // 检测是否在 Electron 环境中运行
        const isElectron = typeof process !== 'undefined' && process.versions && process.versions.electron;

        const launchOptions = {
          headless: 'new',
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage'
          ],
          timeout: 15000,
          ignoreHTTPSErrors: true,
          defaultViewport: null
        };

        // 如果不在 Electron 环境中，尝试使用系统 Chrome
        if (!isElectron) {
          try {
            // 尝试使用系统安装的 Chrome
            launchOptions.executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
          } catch (error) {
            // 如果找不到系统 Chrome，使用默认的 Chromium
            console.log('未找到系统 Chrome，使用默认 Chromium');
          }
        }

        this.browser = await puppeteer.launch(launchOptions);
        break; // 成功启动则跳出循环
      } catch (browserError) {
        browserRetryCount++;
        console.log(`浏览器启动失败 (${browserRetryCount}/${maxBrowserRetries}):`, browserError.message);

        if (browserRetryCount >= maxBrowserRetries) {
          throw new Error(`浏览器启动失败，已重试 ${maxBrowserRetries} 次: ${browserError.message}`);
        } else {
          // 等待一段时间后重试
          await new Promise(resolve => setTimeout(resolve, 2000 * browserRetryCount));
        }
      }
    }

    // 创建新页面
    this.page = await this.browser.newPage();
    this.page.setDefaultTimeout(15000);
    this.page.setDefaultNavigationTimeout(15000);

    // 设置用户代理
    await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    // 监听网络请求，捕获评论数据
    await this.page.setRequestInterception(true);

    this.page.on('request', (request) => {
      request.continue();
    });



    // 监听WebSocket消息
    await this.setupWebSocketListener();

    // 基础错误监听
    this.page.on('error', (error) => {
      console.error('页面错误:', error.message);
    });

    // 访问直播间
    console.log('正在访问直播间:', liveUrl);
    await this.page.goto(liveUrl, {
      waitUntil: 'domcontentloaded',
      timeout: 15000
    });
    console.log('✅ 成功访问直播间');

    // 等待页面加载完成
    await this.page.waitForTimeout(3000);


    this.isMonitoring = true;
    this.emit('status-change', { status: 'monitoring' });

    console.log('✅ 开始监听直播间:', liveUrl);



  }

  // 设置WebSocket监听器
  async setupWebSocketListener() {
    try {
      // 获取CDP会话
      const client = await this.page.target().createCDPSession();

      // 启用网络域
      await client.send('Network.enable');

      // 监听WebSocket创建
      client.on('Network.webSocketCreated', (params) => {
        console.log('WebSocket创建:', params.url);
      });

      // 监听WebSocket帧发送
      client.on('Network.webSocketFrameSent', (params) => {
        try {
          //获取使用dom获取
          // 可以在这里解析发送的消息
        } catch (error) {

        }
      });

      // 监听WebSocket帧接收
      client.on('Network.webSocketFrameReceived', async (params) => {
        this.getLastComment()
      });

      // 监听WebSocket关闭
      client.on('Network.webSocketClosed', (params) => {
        console.log('WebSocket关闭:', params.requestId);
      });

      console.log('✅ WebSocket监听器设置完成');
    } catch (error) {
      console.error('设置WebSocket监听器失败:', error.message);
    }
  }

  // 设置DOM监听器来实时获取评论
  async getLastComment() {
    console.log('设置DOM评论监听器')
    if (!this.page) {
      return
    }

    try {
      // 等待页面加载完成
      await this.page.waitForSelector('body', {
        timeout: 10000
      });

      // 在页面中注入评论监听脚本
      await this.page.evaluateOnNewDocument(() => {
        // 防止重复注入
        if (window.douyinCommentObserver) {
          return;
        }

        window.douyinCommentObserver = true;

        // 评论选择器列表（抖音可能的评论区选择器）
        const commentSelectors = [
          '[data-e2e="comment-list"]',
          '.webcast-chatroom___content-with-emoji-text',
          '.webcast-chatroom___content-wrapper',
          '[class*="comment"]',
          '[class*="chat"]',
          '[class*="message"]',
          '.live-comment-item',
          '.comment-item',
          '.chat-item'
        ];

        // 查找评论容器
        function findCommentContainer() {
          for (const selector of commentSelectors) {
            const container = document.querySelector(selector);
            if (container) {
              console.log('找到评论容器:', selector);
              return container;
            }
          }
          
          // 如果没找到，尝试通过文本内容查找
          const allDivs = document.querySelectorAll('div');
          for (const div of allDivs) {
            if (div.children.length > 5 && div.scrollHeight > div.clientHeight) {
              console.log('通过滚动特征找到可能的评论容器');
              return div;
            }
          }
          
          return null;
        }

        // 提取评论信息
        function extractCommentInfo(element) {
          try {
            const textContent = element.textContent || element.innerText || '';
            
            // 过滤掉空内容和过短的内容
            if (!textContent.trim() || textContent.trim().length < 2) {
              return null;
            }

            // 尝试提取用户名和评论内容
            let username = '匿名用户';
            let content = textContent.trim();
            
            // 查找用户名元素
            const usernameSelectors = [
              '[class*="username"]',
              '[class*="nickname"]',
              '[class*="user"]',
              '.name',
              'span:first-child',
              'div:first-child'
            ];
            
            for (const selector of usernameSelectors) {
              const usernameEl = element.querySelector(selector);
              if (usernameEl && usernameEl.textContent.trim()) {
                username = usernameEl.textContent.trim();
                // 从内容中移除用户名部分
                content = content.replace(username, '').trim();
                break;
              }
            }

            // 如果内容为空，使用原始文本
            if (!content) {
              content = textContent.trim();
            }

            return {
              username,
              content,
              timestamp: Date.now(),
              element: element
            };
          } catch (error) {
            console.error('提取评论信息失败:', error);
            return null;
          }
        }

        // 处理新评论
        function handleNewComment(comment) {
          if (!comment || !comment.content) return;
          
          // 发送到主进程
          if (window.electronAPI) {
            window.electronAPI.onNewComment(comment);
          }
          
          // 也可以通过自定义事件发送
          window.dispatchEvent(new CustomEvent('douyinNewComment', {
            detail: comment
          }));
          
          console.log('检测到新评论:', comment);
        }

        // 已处理的评论元素集合
        const processedElements = new WeakSet();

        // 扫描现有评论
        function scanExistingComments(container) {
          const commentElements = container.querySelectorAll('div, span, p');
          
          commentElements.forEach(element => {
            if (processedElements.has(element)) return;
            
            const comment = extractCommentInfo(element);
            if (comment) {
              processedElements.add(element);
              handleNewComment(comment);
            }
          });
        }

        // 设置MutationObserver
        function setupCommentObserver() {
          const container = findCommentContainer();
          
          if (!container) {
            console.log('未找到评论容器，5秒后重试');
            setTimeout(setupCommentObserver, 5000);
            return;
          }

          console.log('开始监听评论容器:', container);
          
          // 先扫描现有评论
          scanExistingComments(container);

          // 创建观察器
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              // 处理新增的节点
              mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                  // 检查新增节点本身
                  if (!processedElements.has(node)) {
                    const comment = extractCommentInfo(node);
                    if (comment) {
                      processedElements.add(node);
                      handleNewComment(comment);
                    }
                  }
                  
                  // 检查新增节点的子元素
                  const childElements = node.querySelectorAll('div, span, p');
                  childElements.forEach(child => {
                    if (!processedElements.has(child)) {
                      const comment = extractCommentInfo(child);
                      if (comment) {
                        processedElements.add(child);
                        handleNewComment(comment);
                      }
                    }
                  });
                }
              });
            });
          });

          // 开始观察
          observer.observe(container, {
            childList: true,
            subtree: true,
            characterData: true
          });

          // 定期重新扫描（备用机制）
          setInterval(() => {
            scanExistingComments(container);
          }, 10000);

          console.log('✅ 评论监听器设置完成');
        }

        // 页面加载完成后开始监听
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', setupCommentObserver);
        } else {
          setupCommentObserver();
        }
      });

      // 监听页面中的自定义评论事件
      await this.page.exposeFunction('handleDouyinComment', (comment) => {
        this.handleNewComment(comment);
      });

      // 在页面中添加事件监听
      await this.page.evaluate(() => {
        window.addEventListener('douyinNewComment', (event) => {
          if (window.handleDouyinComment) {
            window.handleDouyinComment(event.detail);
          }
        });
      });

      console.log('✅ DOM评论监听器设置完成');
      
    } catch (error) {
      console.error('设置DOM监听器失败:', error.message);
    }
  }

  // 处理新评论
  handleNewComment(comment) {
    try {
      if (!comment || !comment.content) {
        return;
      }

      // 过滤重复评论和无效内容
      if (comment.content.length < 2 || comment.content.length > 500) {
        return;
      }

      // 构造标准评论对象
      const standardComment = {
        id: `dom_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        username: comment.username || '匿名用户',
        content: comment.content.trim(),
        timestamp: comment.timestamp || Date.now(),
        source: 'dom',
        live_url: this.currentLiveUrl || '',
        user_id: comment.user_id || '',
        level: comment.level || 0
      };

      console.log('🎯 DOM捕获新评论:', {
        username: standardComment.username,
        content: standardComment.content.substring(0, 50) + (standardComment.content.length > 50 ? '...' : '')
      });

      // 发送到数据库
      if (this.database) {
        this.database.addComment(standardComment).catch(err => {
          console.error('保存评论到数据库失败:', err.message);
        });
      }

      // 发送事件
      this.emit('new-comment', standardComment);
      
    } catch (error) {
      console.error('处理新评论失败:', error.message);
    }
  }

  // 停止监听
  async stopMonitoring() {
    try {
      this.isMonitoring = false;
      
      if (this.page) {
        // 清理页面中的监听器
        await this.page.evaluate(() => {
          if (window.douyinCommentObserver) {
            window.douyinCommentObserver = false;
          }
        }).catch(() => {});
        
        await this.page.close().catch(() => {});
        this.page = null;
      }
      
      if (this.browser) {
        await this.browser.close().catch(() => {});
        this.browser = null;
      }
      
      this.emit('status-change', { status: 'offline' });
      console.log('✅ 监听已停止');
      
    } catch (error) {
      console.error('停止监听失败:', error.message);
    }
  }

}