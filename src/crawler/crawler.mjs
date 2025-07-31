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
    // 保存当前直播间URL
    this.currentLiveUrl = liveUrl;
    
    try {
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
    // await this.setupWebSocketListener();

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

    //监听dom变化
    await this.domChange();



  }



  //获取最后一条评论
  async domChange() {
    console.log('开始监听DOM变化')
    if (!this.page) {
      return
    }
    
    try {
      // 等待页面加载完成
      await this.page.waitForSelector('body', { timeout: 10000 });
      
      // 在页面中注入DOM监听脚本
      await this.page.evaluateOnNewDocument(() => {
        // 防止重复注入
        if (window.douyinDOMObserver) {
          return;
        }
        
        window.douyinDOMObserver = true;
        
        // 等待DOM加载完成后开始监听
        const startObserver = () => {
          // 评论区可能的选择器
          const commentSelectors = [
            '.webcast-chatroom___content-with-emoji-text',
            '[data-e2e="comment-list"]',
            '.comment-list',
            '.webcast-chatroom___item',
            '.webcast-chatroom___content',
            '[class*="comment"]',
            '[class*="chat"]',
            '[class*="message"]'
          ];
          
          let commentContainer  = document.querySelector('.webcast-chatroom___list');;
          
      

          
          // 创建MutationObserver
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              // 监听新增的节点
              if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach((node) => {
                  if (node.nodeType === Node.ELEMENT_NODE) {
                    // 检查是否是评论相关的元素
                    const isCommentElement = (
                      node.classList.contains('.webcast-chatroom___content-with-emoji-text')
                    );

                    console.log(isCommentElement)
                      return
                    if (isCommentElement) {
                      console.log('检测到新的评论元素:', node);
                      
                      // 提取评论文本
                      const commentText = node.textContent.trim();
                      if (commentText && commentText.length > 0) {
                        console.log('提取到评论文本:', commentText);
                        
                        // 触发自定义事件
                        const event = new CustomEvent('newComment', {
                          detail: {
                            text: commentText,
                            element: node,
                            timestamp: Date.now()
                          }
                        });
                        document.dispatchEvent(event);
                      }
                    }
                  }
                });
              }
              
              // 监听文本内容变化
              if (mutation.type === 'characterData') {
                const text = mutation.target.textContent.trim();
                if (text && text.length > 0) {
                  console.log('检测到文本变化:', text);
                }
              }
            });
          });
          
          // 开始观察
          observer.observe(commentContainer, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: false
          });
          
         
        };
        
        // 如果DOM已加载完成，立即开始监听
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', startObserver);
        } else {
          startObserver();
        }
      });
      
      // 监听页面中的自定义评论事件
      await this.page.exposeFunction('handleDOMComment', (commentData) => {
        console.log('DOM监听到新评论:', commentData);
        
        // 构造评论对象
        const comment = {
          content: commentData.text,
          user: {
            nickname: '未知用户',
            id: 'dom_user_' + Date.now()
          },
          timestamp: commentData.timestamp,
          source: 'dom'
        };
        
        // 处理评论
        this.handleNewComment(comment);
      });
      
      // 在页面中监听自定义事件
      await this.page.evaluate(() => {
        document.addEventListener('newComment', (event) => {
          if (window.handleDOMComment) {
            window.handleDOMComment(event.detail);
          }
        });
      });
      
      console.log('✅ DOM变化监听器设置完成');
      
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
      
      // 过滤过短或过长的评论
      if (comment.content.length < 2 || comment.content.length > 500) {
        return;
      }
      
      // 标准化评论对象
      const standardComment = {
        id: `dom_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        username: comment.user?.nickname || comment.username || '匿名用户',
        content: comment.content.trim(),
        timestamp: comment.timestamp || Date.now(),
        source: comment.source || 'dom',
        live_url: this.currentLiveUrl || '',
        user_id: comment.user?.id || comment.user_id || '',
        level: comment.user?.level || comment.level || 0
      };
      
      console.log('🎯 DOM捕获新评论:', {
        username: standardComment.username,
        content: standardComment.content.substring(0, 50) + (standardComment.content.length > 50 ? '...' : '')
      });
      
      // 保存到数据库
      if (this.database) {
        this.database.saveComment(standardComment).catch((err) => {
          console.error('保存评论到数据库失败:', err.message);
        });
      }
      
      // 发射事件
      this.emit('new-comment', standardComment);
      
    } catch (error) {
      console.error('处理新评论失败:', error.message);
    }
  }

}