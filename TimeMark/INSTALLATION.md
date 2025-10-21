# TimeMark Installation Guide

## Quick Start (3 Easy Steps)

### Step 1: Download the Extension
- Download all files from the TimeMark folder
- Keep all files together in the same folder

### Step 2: Load into Chrome
1. Open Chrome browser
2. Type `chrome://extensions/` in the address bar and press Enter
3. Enable **Developer mode** by clicking the toggle in the top-right corner
4. Click **"Load unpacked"** button
5. Select the **TimeMark folder** (the folder containing all the extension files)

### Step 3: Start Using
1. You should see the TimeMark icon appear in your extensions bar
2. Pin it for easy access (click the puzzle icon → click the pin next to TimeMark)
3. Navigate to any YouTube video
4. Click the TimeMark icon to start bookmarking!

## File Structure

Your TimeMark folder should contain these files:
```
TimeMark/
├── manifest.json          (Extension configuration)
├── popup.html            (Extension popup UI)
├── popup.js              (Popup functionality)
├── content.js            (YouTube page integration)
├── background.js         (Background service worker)
├── styles.css            (Extension styling)
├── icon16.png            (Small icon)
├── icon48.png            (Medium icon)
├── icon128.png           (Large icon)
├── README.md             (Documentation)
└── INSTALLATION.md       (This file)
```

## Verifying Installation

After loading the extension, you should see:
- ✅ TimeMark listed in chrome://extensions/
- ✅ Extension icon in your browser toolbar
- ✅ No error messages in the extensions page

## Using the Extension

### To Bookmark a Timestamp:
1. Play any YouTube video
2. Pause at the moment you want to remember
3. Click the TimeMark extension icon
4. Click the red bookmark button (top-right of popup)
5. Done! Your timestamp is saved

### To Jump to a Bookmark:
1. Click the TimeMark extension icon
2. Click on any saved bookmark
3. The video will open and play from that exact moment

## Troubleshooting

### Extension icon is gray/disabled
- **Solution**: Make sure you're on a YouTube video page (youtube.com/watch?v=...)
- Try refreshing the page

### Can't click the bookmark button
- **Solution**: Wait for the video to fully load
- Try pausing and playing the video once

### Extension not appearing after installation
- **Solution**: 
  - Make sure Developer mode is enabled
  - Check if you selected the correct folder (should contain manifest.json)
  - Look for error messages in chrome://extensions/

### Bookmarks not saving
- **Solution**: 
  - Check extension permissions in chrome://extensions/
  - Make sure the extension has storage permission

### Extension disappeared after Chrome restart
- **Solution**: Unpacked extensions may disappear after updates
  - Just reload the extension following Step 2 above
  - Consider packaging the extension for permanent use

## Advanced: Packaging for Permanent Use

If you want the extension to persist without needing to reload:

1. Go to chrome://extensions/
2. Click **"Pack extension"**
3. Select the TimeMark folder
4. Chrome will create a .crx file and a .pem key file
5. Keep the .pem file safe for future updates
6. Install the .crx file by dragging it to chrome://extensions/

## Browser Compatibility

This extension works with:
- ✅ Google Chrome (recommended)
- ✅ Microsoft Edge
- ✅ Brave Browser
- ✅ Any Chromium-based browser

## Privacy & Permissions

TimeMark requires minimal permissions:
- **Storage**: To save your bookmarks locally
- **Tabs**: To open bookmarked videos
- **YouTube.com access**: To interact with videos

**No data leaves your computer** - everything is stored locally!

## Need Help?

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify all files are present in the folder
3. Try removing and reinstalling the extension
4. Check Chrome's console for error messages (F12 → Console tab)

---

Enjoy using TimeMark! 🎬⏰
