# TimeStamp - YouTube Timestamp Management System

A comprehensive solution for bookmarking and managing specific timestamps in YouTube videos, featuring both a Chrome browser extension and a React web application.

## 🎯 Project Overview

This dual-purpose project provides tools for YouTube timestamp management, allowing users to save important moments in videos and navigate back to them instantly. It combines a Chrome extension for immediate use while watching videos and a React web application for broader functionality.

## 🏗️ Project Structure

### Chrome Extension (TimeMark)
- **Location**: `/TimeMark/` directory
- **Purpose**: Browser extension for YouTube timestamp bookmarking
- **Manifest**: Version 3 (latest Chrome extension standard)

### React Web Application
- **Location**: Root directory
- **Purpose**: Web interface for timestamp management
- **Framework**: React 18 + TypeScript + Vite

## ✨ Key Features

### Chrome Extension Features
- 📌 **Save Timestamps**: Bookmark the current moment in any YouTube video with one click
- 🎯 **Quick Navigation**: Click any saved bookmark to jump directly to that timestamp
- 🎬 **Auto-Play**: Videos automatically start playing from your bookmarked timestamp
- 🖼️ **Visual Bookmarks**: See video thumbnails and titles for easy identification
- 🗑️ **Easy Management**: Delete individual bookmarks or clear all at once
- ⏰ **Timestamp Display**: See formatted timestamps (MM:SS or HH:MM:SS)
- 📅 **Relative Dates**: Know when each bookmark was created

### Web Application Features
- Modern React interface with comprehensive UI components
- Responsive design with Tailwind CSS
- Full-featured component library (shadcn/ui)
- TypeScript for type safety
- Form handling with validation

## 🛠️ Complete Tech Stack

### **Core Technologies**
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 5.4.19** - Fast build tool and development server

### **Styling & UI Framework**
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Modern component library built on Radix UI
- **Radix UI** - Headless UI components for accessibility (20+ components)
- **Lucide React 0.462.0** - Beautiful icon library
- **CSS Variables** - Custom theming system

### **State Management & Data**
- **TanStack Query 5.83.0** - Server state management
- **React Router DOM 6.30.1** - Client-side routing
- **React Hook Form 7.61.1** - Performant forms
- **Zod 3.25.76** - Schema validation

### **UI Components & Libraries**
- **Radix UI Components**: Accordion, Alert Dialog, Avatar, Badge, Button, Calendar, Card, Carousel, Chart, Checkbox, Dialog, Dropdown Menu, Form, Input, Label, Navigation Menu, Popover, Progress, Select, Table, Tabs, Toast, Tooltip
- **Embla Carousel React 8.6.0** - Carousel component
- **React Day Picker 8.10.1** - Date picker
- **React Resizable Panels 2.1.9** - Resizable panel layouts
- **Recharts 2.15.4** - Chart library
- **Sonner 1.7.4** - Toast notifications
- **Vaul 0.9.9** - Drawer component

### **Utility Libraries**
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 2.6.0** - Tailwind class merging
- **class-variance-authority 0.7.1** - Component variant management
- **date-fns 3.6.0** - Date manipulation
- **cmdk 1.1.1** - Command palette component

### **Development Tools**
- **ESLint 9.32.0** - JavaScript/TypeScript linting
- **TypeScript ESLint 8.38.0** - TypeScript-specific linting
- **React Hooks ESLint Plugin** - React hooks linting
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing
- **SWC** - Fast TypeScript/JavaScript compiler

### **Chrome Extension Stack**
- **Manifest V3** - Latest Chrome extension standard
- **Vanilla JavaScript** - No external dependencies
- **Chrome APIs**: Storage, Tabs, ActiveTab
- **Content Scripts** - YouTube page interaction
- **Service Worker** - Background processing
- **Local Storage** - Bookmark persistence

### **Build & Configuration**
- **Vite** - Fast build tool with HMR
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **PostCSS** - CSS processing pipeline
- **ESLint** - Code quality and consistency

## 🚀 Getting Started

### Prerequisites
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Development Setup

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd TimeStamp

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

### Chrome Extension Installation

1. **Download the Extension**
   - Navigate to the `TimeMark/` folder

2. **Load in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the TimeMark folder

3. **Start Using**
   - Pin the extension for easy access
   - Navigate to any YouTube video
   - Click the extension icon to bookmark timestamps

## 📱 Browser Compatibility

- Google Chrome (recommended)
- Microsoft Edge (Chromium-based)
- Brave Browser
- Any Chromium-based browser with extension support

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 User Experience

- **Extension**: Dark-themed, modern interface with smooth animations
- **Web App**: Clean, professional UI with comprehensive component library
- **Storage**: Local storage for persistence across sessions
- **Privacy**: No external data transmission, all data stored locally

## 🔒 Privacy & Security

- All data is stored locally on your device
- No data is sent to external servers
- No tracking or analytics
- Only accesses YouTube.com pages
- No external dependencies in the extension

## 🐛 Troubleshooting

**Extension Issues:**
- Extension icon is grayed out: Make sure you're on a YouTube video page
- Bookmark button is disabled: Ensure the video is playing or loaded
- Bookmarks not appearing: Check storage permissions

**Web App Issues:**
- Check Node.js version compatibility
- Clear npm cache if installation issues occur
- Ensure all dependencies are properly installed

## 🚀 Deployment

### Web Application
Build the project for production:

```sh
npm run build
```

The built files will be in the `dist/` directory and can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🔮 Future Enhancements

- Export/import bookmarks
- Add notes to bookmarks
- Search and filter bookmarks
- Organize bookmarks by playlist or category
- Keyboard shortcuts
- Sync across devices
- Enhanced web interface for bookmark management

## 📝 Development

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Workflow

- Use your preferred IDE (VS Code, WebStorm, etc.)
- Follow the existing code style and patterns
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is open source and available for personal and educational use.

---

Made with ❤️ for YouTube enthusiasts who want to remember important moments in videos!
