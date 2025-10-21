# TimeMark - YouTube Timestamp Bookmarks

A Chrome extension that allows you to bookmark specific timestamps in YouTube videos and navigate back to them instantly.

## Features

- 📌 **Save Timestamps**: Bookmark the current moment in any YouTube video with one click
- 🎯 **Quick Navigation**: Click any saved bookmark to jump directly to that timestamp
- 🎬 **Auto-Play**: Videos automatically start playing from your bookmarked timestamp
- 🖼️ **Visual Bookmarks**: See video thumbnails and titles for easy identification
- 🗑️ **Easy Management**: Delete individual bookmarks or clear all at once
- ⏰ **Timestamp Display**: See formatted timestamps (MM:SS or HH:MM:SS)
- 📅 **Relative Dates**: Know when each bookmark was created

## Installation

1. **Download the Extension**
   - Download and extract the TimeMark folder

2. **Load in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the TimeMark folder

3. **Start Using**
   - Pin the extension for easy access
   - Navigate to any YouTube video
   - Click the extension icon to bookmark timestamps

## How to Use

### Bookmarking a Timestamp

1. Play any YouTube video
2. Pause or play at the moment you want to bookmark
3. Click the TimeMark extension icon
4. Click the red bookmark button (top right)
5. Your timestamp is saved!

### Navigating to a Bookmark

1. Click the TimeMark extension icon
2. Click on any saved bookmark card
3. The video will open and play from that exact timestamp

### Managing Bookmarks

- **Delete Individual**: Click the trash icon on any bookmark
- **Clear All**: Click "Clear All" button at the top (requires confirmation)

## Features in Detail

- **Current Video Info**: See the currently playing video and timestamp in the extension
- **Beautiful UI**: Modern, dark-themed interface with smooth animations
- **Persistent Storage**: All bookmarks are saved locally and persist across browser sessions
- **Smart Sorting**: Bookmarks are automatically sorted by creation date (newest first)
- **Thumbnail Preview**: Visual identification with YouTube video thumbnails
- **Hover Effects**: Interactive hover states show play overlay on thumbnails

## Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Storage**: Chrome's local storage API
- **Permissions**: Only requires access to YouTube.com and local storage
- **Content Script**: Lightweight script that runs only on YouTube watch pages
- **No External Dependencies**: Pure JavaScript, HTML, and CSS

## Privacy

- All data is stored locally on your device
- No data is sent to external servers
- No tracking or analytics
- Only accesses YouTube.com pages

## Browser Compatibility

- Google Chrome (recommended)
- Microsoft Edge (Chromium-based)
- Brave Browser
- Any Chromium-based browser with extension support

## Troubleshooting

**Extension icon is grayed out**
- Make sure you're on a YouTube video page (youtube.com/watch)
- Refresh the page if needed

**Bookmark button is disabled**
- Ensure the video is playing or loaded
- Try refreshing the YouTube page

**Bookmarks not appearing**
- Check that you've granted storage permissions
- Try reloading the extension

## Future Enhancements

Possible features for future versions:
- Export/import bookmarks
- Add notes to bookmarks
- Search and filter bookmarks
- Organize bookmarks by playlist or category
- Keyboard shortcuts
- Sync across devices

## Support

For issues, questions, or suggestions, please create an issue on the project repository.

## License

This project is open source and available for personal and educational use.

---

Made with ❤️ for YouTube enthusiasts who want to remember important moments in videos!
