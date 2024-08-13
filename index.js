import * as fs from 'fs';
import { fetchFromAPI } from './api.js';
import { generateMessage } from './messages.js';
import { getRandomRangeBetween, delay } from './utils.js';

let processedThreadLinks = [];

const CONFIG = {
  apiBaseUrl: 'https://api.starsarena.com/threads/feed/my',
  pageSize: 20,
  maxRetries: 3,
  longDelay: 10 * 60 * 1000, // 10 minutes
  shortDelay: 5000, // 5 seconds
  exponentialBackoff: 4000, // 4 seconds
  maxBackoff: 32000 // 32 seconds
};

function saveProcessedThreadLinks() {
  fs.writeFileSync('processedThreadLinks.json', JSON.stringify(processedThreadLinks));
}

function loadProcessedThreadLinks() {
  if (fs.existsSync('processedThreadLinks.json')) {
    const data = fs.readFileSync('processedThreadLinks.json', 'utf8');
    processedThreadLinks = JSON.parse(data);
  }
}

const cleanupAndExit = async () => {
  console.log('Saving processed thread links...');
  fs.writeFileSync('processedThreadLinks.json', JSON.stringify(processedThreadLinks));
  console.log('Exiting...');
  process.exit(0);
};

async function fetchAllPosts() {
  const posts = [];
  const { count, threads } = await fetchFromAPI(`${CONFIG.apiBaseUrl}?page=1&pageSize=${CONFIG.pageSize}`);
  posts.push(...threads);
  const numberOfPages = Math.ceil(count / CONFIG.pageSize);
  for (let i = 2; i <= numberOfPages; i++) {
    const { threads } = await fetchFromAPI(`${CONFIG.apiBaseUrl}?page=${i}&pageSize=${CONFIG.pageSize}`);
    posts.push(...threads);
  }
  return posts;
}

function formatPosts(posts) {
  return posts.reduce((acc, post) => {
    if (!post?.content || !post?.user) {
      console.log('Post is missing content or user:', post);
      return acc;
    }

    const targetPost = post.repost || post;
  
    if (!targetPost.content || !targetPost.user) {
      console.log('Repost is missing content or user:', targetPost);
      return acc;
    }
  
    acc.push({
      id: post.repost ? post.repostId : post.id,
      userId: targetPost.user.id,
      message: generateMessage(),
    });
  
    return acc;
  }, []);
}

async function likeAndComment(post) {
  await fetchFromAPI('threads/like', {
    method: 'POST',
    body: { threadId: post.id }
  });
  await fetchFromAPI('threads/answer', {
    method: 'POST',
    body: { content: `<div>${post.message}</div>`, threadId: post.id, userId: post.userId, files: [] }
  });
  processedThreadLinks.push(post.id);
  console.log(`Commented on post ${post.id}`);
  await delay(getRandomRangeBetween(4000, 12000));
}

async function likeAndCommentWithRetry(post, attempt = 1) {
  try {
    await likeAndComment(post);
  } catch (err) {
    console.log(`Error commenting on post ${post.id}: ${err.message}`);
    if (err.message.includes('You are blocked by this user')) {
      console.log(`Skipping post ${post.id} as you are blocked by the user.`);
      processedThreadLinks.push(post.id); // Mark as processed to skip in the future
      saveProcessedThreadLinks();
      return;
    }
    if (attempt <= CONFIG.maxRetries) {
      const delayTime = Math.min(CONFIG.exponentialBackoff * 2 ** (attempt - 1), CONFIG.maxBackoff);
      console.log(`Retrying post ${post.id} in ${delayTime}ms (Attempt ${attempt}/${CONFIG.maxRetries})`);
      await delay(delayTime);
      await likeAndCommentWithRetry(post, attempt + 1);
    } else {
      console.log(`Failed to comment on post ${post.id} after ${CONFIG.maxRetries} attempts.`);
    }
  }
}

async function fetchAllPostsAndComment() {
  let retryCount = 0;
  while (true) {
    try {
      const posts = await fetchAllPosts();
      const formattedPosts = formatPosts(posts);
      const uniqueFormattedPosts = Array.from(new Map(formattedPosts.map(post => [post.id, post])).values());
      const filteredPosts = uniqueFormattedPosts.filter(post => !processedThreadLinks.includes(post.id));
      for (const post of filteredPosts) {
        await likeAndCommentWithRetry(post);
        saveProcessedThreadLinks(); // Mark post as processed after handling
      }
    } catch (error) {
      console.error('Error scraping threads:', error);
      retryCount++;
      if (retryCount >= CONFIG.maxRetries) {
        console.log('Reached max retries. Waiting 10 minutes before retrying...');
        await delay(CONFIG.longDelay);
        retryCount = 0;
      } else {
        console.log(`Retrying... (Attempt ${retryCount}/${CONFIG.maxRetries})`);
        await delay(CONFIG.shortDelay);
      }
    }
    await delay(getRandomRangeBetween(10000, 20000));
    saveProcessedThreadLinks(); // Save at the end of each iteration
  }
}

async function startBot() {
  loadProcessedThreadLinks();
  process.on('SIGINT', cleanupAndExit);
  try {
    await fetchAllPostsAndComment();
  } catch (error) {
    console.error('Error scraping website:', error);
  } finally {
    await cleanupAndExit();
  }
}

startBot();
