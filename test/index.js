import {DouyinCrawler} from '../src/crawler/crawler.js';




// 创建爬虫实例
const d = new DouyinCrawler();

// 添加事件监听
d.on('status-change', (data) => {
  console.log('状态变化:', data);
});

d.on('new-comment', (comment) => {
  if (comment.message_type === 'gift') {
    console.log('🎁 礼物消息:', {
      用户: comment.username,
      礼物: comment.gift?.name || '未知礼物',
      数量: comment.gift?.count || 1,
      连击: comment.gift?.comboCount || 1,
      钻石价值: comment.gift?.diamondCount || 0,
      内容: comment.content
    });
  } else if (comment.message_type === 'chat') {
    console.log('💬 聊天消息:', {
      用户: comment.username,
      内容: comment.content
    });
  } else if (comment.message_type === 'like') {
    console.log('👍 点赞消息:', {
      用户: comment.username,
      点赞数: comment.count || 1,
      内容: comment.content
    });
  } else if (comment.message_type === 'member') {
    console.log('👥 成员消息:', {
      用户: comment.username,
      动作: comment.content
    });
  } else {
    console.log(`📝 ${comment.message_type} 消息:`, {
      用户: comment.username,
      内容: comment.content
    });
  }
});

try {
  await d.startMonitoring('https://live.douyin.com/730184441361');

} catch (error) {
  console.error('启动失败:', error.message);
  process.exit(1);
}
