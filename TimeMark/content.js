// Content script that runs on YouTube pages

// Function to get video information
function getVideoInfo() {
  try {
    const video = document.querySelector('video');
    if (!video) return null;

    const videoId = new URLSearchParams(window.location.search).get('v');
    const title = document.querySelector('h1.ytd-watch-metadata yt-formatted-string')?.textContent || 
                  document.querySelector('h1 .title')?.textContent || 
                  'YouTube Video';
    
    const currentTime = video.currentTime;
    const thumbnail = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;

    return {
      videoId,
      title: title.trim(),
      currentTime,
      thumbnail
    };
  } catch (error) {
    console.error('Error getting video info:', error);
    return null;
  }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getVideoInfo') {
    const videoInfo = getVideoInfo();
    sendResponse({ videoInfo });
  }
  return true;
});

// Listen for URL changes (for single-page app navigation)
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    // Video changed, could notify popup if needed
  }
}).observe(document, { subtree: true, childList: true });
