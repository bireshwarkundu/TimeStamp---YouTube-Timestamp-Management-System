// Utility function to format seconds to MM:SS or HH:MM:SS
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// Format date to relative time
function formatDate(timestamp) {
  const now = new Date();
  const date = new Date(timestamp);
  const diff = now - date;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return 'Just now';
}

// Show toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'success-toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Load and display bookmarks
async function loadBookmarks() {
  const result = await chrome.storage.local.get(['bookmarks']);
  const bookmarks = result.bookmarks || [];
  
  const bookmarksList = document.getElementById('bookmarksList');
  const clearAllBtn = document.getElementById('clearAllBtn');
  
  if (bookmarks.length === 0) {
    bookmarksList.innerHTML = `
      <div class="empty-state">
        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
        </svg>
        <p class="empty-text">No bookmarks yet</p>
        <p class="empty-subtext">Open a YouTube video and click the bookmark button above</p>
      </div>
    `;
    clearAllBtn.classList.add('hidden');
    return;
  }
  
  clearAllBtn.classList.remove('hidden');
  
  // Group bookmarks by videoId
  const groupedBookmarks = {};
  bookmarks.forEach((bookmark, index) => {
    bookmark.originalIndex = index;
    if (!groupedBookmarks[bookmark.videoId]) {
      groupedBookmarks[bookmark.videoId] = {
        title: bookmark.title,
        videoId: bookmark.videoId,
        videoUrl: bookmark.videoUrl,
        thumbnail: bookmark.thumbnail,
        timestamps: []
      };
    }
    groupedBookmarks[bookmark.videoId].timestamps.push(bookmark);
  });
  
  // Sort groups by most recent timestamp
  const sortedGroups = Object.values(groupedBookmarks).sort((a, b) => {
    const latestA = Math.max(...a.timestamps.map(t => t.timestamp));
    const latestB = Math.max(...b.timestamps.map(t => t.timestamp));
    return latestB - latestA;
  });
  
  bookmarksList.innerHTML = sortedGroups.map(group => {
    // Sort timestamps within each video (newest first)
    group.timestamps.sort((a, b) => b.timestamp - a.timestamp);
    
    return `
    <div class="bookmark-card">
      <div class="bookmark-content">
        <div class="video-thumbnail" data-video-url="${group.videoUrl}" data-time="0">
          <img src="${group.thumbnail}" alt="${group.title}">
          <div class="play-overlay">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div class="bookmark-info">
          <div class="bookmark-title">${group.title}</div>
          <div class="timestamps-list">
            ${group.timestamps.map(bookmark => `
              <div class="timestamp-item" data-index="${bookmark.originalIndex}">
                <div class="timestamp-row">
                  <span class="timestamp clickable" data-video-url="${bookmark.videoUrl}" data-time="${bookmark.time}">${formatTime(bookmark.time)}</span>
                  <span class="timestamp-date">${formatDate(bookmark.timestamp)}</span>
                  <div class="bookmark-actions">
                    <button class="edit-btn" data-index="${bookmark.originalIndex}" title="Edit notes">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </button>
                    <button class="delete-btn" data-index="${bookmark.originalIndex}" title="Delete bookmark">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                    </button>
                  </div>
                </div>
                ${bookmark.notes ? `<div class="bookmark-notes">${bookmark.notes}</div>` : ''}
                <div class="bookmark-notes-edit hidden" data-index="${bookmark.originalIndex}">
                  <textarea class="notes-input" placeholder="Add notes..." rows="2">${bookmark.notes || ''}</textarea>
                  <div class="notes-edit-actions">
                    <button class="save-notes-btn" data-index="${bookmark.originalIndex}">Save</button>
                    <button class="cancel-notes-btn" data-index="${bookmark.originalIndex}">Cancel</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  }).join('');
  
  // Add click handlers for timestamps and thumbnails
  document.querySelectorAll('.timestamp.clickable').forEach(element => {
    element.addEventListener('click', async (e) => {
      e.stopPropagation();
      const videoUrl = element.dataset.videoUrl;
      const time = Math.floor(parseFloat(element.dataset.time));
      
      // Find or create YouTube tab and navigate to timestamp
      const tabs = await chrome.tabs.query({});
      let youtubeTab = tabs.find(tab => tab.url && tab.url.includes('youtube.com/watch'));
      
      const url = `${videoUrl}&t=${time}s`;
      
      if (youtubeTab) {
        await chrome.tabs.update(youtubeTab.id, { url, active: true });
      } else {
        await chrome.tabs.create({ url });
      }
      
      window.close();
    });
  });
  
  // Add click handlers for video thumbnails
  document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Get the thumbnail element even if clicking on child elements
      const thumbnailEl = e.currentTarget;
      const videoUrl = thumbnailEl.dataset.videoUrl;
      const time = thumbnailEl.dataset.time || '0';
      
      // Find or create YouTube tab and navigate to timestamp
      const tabs = await chrome.tabs.query({});
      let youtubeTab = tabs.find(tab => tab.url && tab.url.includes('youtube.com/watch'));
      
      const url = time === '0' ? videoUrl : `${videoUrl}&t=${Math.floor(parseFloat(time))}s`;
      
      if (youtubeTab) {
        await chrome.tabs.update(youtubeTab.id, { url, active: true });
      } else {
        await chrome.tabs.create({ url });
      }
      
      window.close();
    });
  });
  
  // Add click handlers for edit buttons
  document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const index = parseInt(btn.dataset.index);
      const timestampItem = document.querySelector(`.timestamp-item[data-index="${index}"]`);
      const notesDisplay = timestampItem.querySelector('.bookmark-notes');
      const notesEdit = timestampItem.querySelector('.bookmark-notes-edit');
      
      if (notesDisplay) notesDisplay.classList.add('hidden');
      notesEdit.classList.remove('hidden');
      notesEdit.querySelector('.notes-input').focus();
    });
  });
  
  // Add click handlers for save notes buttons
  document.querySelectorAll('.save-notes-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const index = parseInt(btn.dataset.index);
      const timestampItem = document.querySelector(`.timestamp-item[data-index="${index}"]`);
      const notesInput = timestampItem.querySelector('.notes-input');
      
      bookmarks[index].notes = notesInput.value.trim();
      await chrome.storage.local.set({ bookmarks });
      loadBookmarks();
      showToast('Notes saved');
    });
  });
  
  // Add click handlers for cancel notes buttons
  document.querySelectorAll('.cancel-notes-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const index = parseInt(btn.dataset.index);
      const timestampItem = document.querySelector(`.timestamp-item[data-index="${index}"]`);
      const notesDisplay = timestampItem.querySelector('.bookmark-notes');
      const notesEdit = timestampItem.querySelector('.bookmark-notes-edit');
      
      notesEdit.classList.add('hidden');
      if (notesDisplay) notesDisplay.classList.remove('hidden');
    });
  });
  
  // Add click handlers for delete buttons
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const index = parseInt(btn.dataset.index);
      bookmarks.splice(index, 1);
      await chrome.storage.local.set({ bookmarks });
      loadBookmarks();
      showToast('Bookmark deleted');
    });
  });
}

// Update current video info
async function updateCurrentVideo() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  // Hide all messages first
  document.getElementById('currentVideo').classList.add('hidden');
  document.getElementById('notYouTubeMessage').classList.add('hidden');
  document.getElementById('refreshMessage').classList.add('hidden');
  
  if (!tab || !tab.url || !tab.url.includes('youtube.com/watch')) {
    document.getElementById('notYouTubeMessage').classList.remove('hidden');
    document.getElementById('bookmarkBtn').disabled = true;
    return;
  }
  
  try {
    const response = await chrome.tabs.sendMessage(tab.id, { action: 'getVideoInfo' });
    
    if (response && response.videoInfo) {
      const { title, currentTime, thumbnail } = response.videoInfo;
      
      document.getElementById('currentVideo').classList.remove('hidden');
      document.getElementById('currentTitle').textContent = title;
      document.getElementById('currentTime').textContent = formatTime(currentTime);
      document.getElementById('currentThumbnail').src = thumbnail;
      document.getElementById('bookmarkBtn').disabled = false;
      return;
    }
  } catch (error) {
    console.log('Content script not ready:', error);
    document.getElementById('refreshMessage').classList.remove('hidden');
    document.getElementById('bookmarkBtn').disabled = true;
  }
}

// Bookmark current timestamp
document.getElementById('bookmarkBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  if (tab && tab.url && tab.url.includes('youtube.com/watch')) {
    try {
      const response = await chrome.tabs.sendMessage(tab.id, { action: 'getVideoInfo' });
      
      if (response && response.videoInfo) {
        const { title, videoId, currentTime, thumbnail } = response.videoInfo;
        
        const bookmark = {
          title,
          videoId,
          videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
          time: currentTime,
          thumbnail,
          timestamp: Date.now(),
          notes: ''
        };
        
        const result = await chrome.storage.local.get(['bookmarks']);
        const bookmarks = result.bookmarks || [];
        bookmarks.push(bookmark);
        await chrome.storage.local.set({ bookmarks });
        
        showToast('Bookmark saved!');
        loadBookmarks();
        updateCurrentVideo();
      }
    } catch (error) {
      showToast('Please refresh the YouTube page and try again');
    }
  }
});

// Clear all bookmarks
document.getElementById('clearAllBtn').addEventListener('click', async () => {
  if (confirm('Are you sure you want to delete all bookmarks?')) {
    await chrome.storage.local.set({ bookmarks: [] });
    loadBookmarks();
    showToast('All bookmarks cleared');
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadBookmarks();
  updateCurrentVideo();
});
