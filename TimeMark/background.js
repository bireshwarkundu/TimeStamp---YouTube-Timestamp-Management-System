// Background service worker for the extension

// Listen for extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('TimeMark extension installed');
});

// Handle messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Can add background processing logic here if needed
  return true;
});

// Optional: Listen for tab updates to detect YouTube navigation
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && tab.url.includes('youtube.com/watch')) {
    // Could inject content script or perform other actions
  }
});
