# AI Project Builder - Landing Page User Testing

A clean, responsive landing page designed for user testing different AI project entry points. Built with vanilla HTML, CSS, and JavaScript for fast loading and easy deployment to GitHub Pages.

## 🎯 Purpose

This landing page helps understand user preferences for different AI project entry points by testing 5 distinct pathways:

1. **Start From Scratch** - Use MyAI Builder to create projects from the ground up
2. **Learn First** - Follow articles and documentation to understand basics
3. **Watch & Learn** - Watch video tutorials for step-by-step project building
4. **Use a Template** - Start with prebuilt templates and customize them
5. **Chat to Build** - Chat with AI to guide project building

## 🚀 Features

- **Pure Frontend** - No frameworks, just HTML/CSS/JavaScript
- **Mobile Responsive** - Works seamlessly on all device sizes
- **A/B Testing Ready** - Support for multiple layout variations
- **Analytics Tracking** - Built-in user interaction tracking
- **Fast Loading** - Optimized for quick page loads (<2 seconds)
- **Accessibility** - Keyboard navigation and screen reader support
- **GitHub Pages Ready** - Deploy instantly to GitHub Pages

## 📁 File Structure

```
acquisition-prototype/
├── index.html          # Main landing page
├── styles.css          # Responsive styling with A/B test layouts
├── script.js           # User tracking and interactions
├── README.md           # This documentation
└── instructions.txt    # Original project requirements
```

## 🎨 Layout Variations

The page supports three layout variations for A/B testing:

### Grid Layout (Default)
- Responsive grid of cards
- Equal visual weight for all options
- Best for desktop viewing

### List Layout
- Vertical stack with horizontal cards
- Better for mobile and focused reading
- Access via: `?layout=list`

### Carousel Layout
- Horizontal scrolling cards
- Touch/swipe support
- Access via: `?layout=carousel`

## 🔧 Local Development

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd acquisition-prototype
   ```

2. **Serve locally**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📊 User Testing

### Analytics Tracking

The page automatically tracks:
- **Page loads** with device info
- **Click events** with timing data
- **Hover events** for engagement metrics
- **Layout version** for A/B test analysis
- **Session duration** and interaction patterns

### Accessing Data

```javascript
// In browser console
exportUserData(); // View current session data

// Switch layouts for testing
abTestUtils.switchLayout('list');     // Switch to list layout
abTestUtils.switchLayout('carousel'); // Switch to carousel layout
abTestUtils.switchLayout('grid');     // Switch to grid layout

// Generate test URLs
console.log(abTestUtils.generateTestUrls());
```

### Testing URLs

- **Grid Layout**: `index.html?layout=grid`
- **List Layout**: `index.html?layout=list`
- **Carousel Layout**: `index.html?layout=carousel`

## 🚀 Deployment

### GitHub Pages

1. **Push to repository**
   ```bash
   git add .
   git commit -m "Add landing page files"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose `main` branch and `/ (root)` folder
   - Save settings

3. **Access your site**
   ```
   https://[username].github.io/[repository-name]/
   ```

### Other Platforms

- **Netlify**: Drag and drop the files or connect to GitHub
- **Vercel**: Import the repository and deploy
- **Surge.sh**: Run `npx surge` in the project directory

## 📈 Performance

The page is optimized for:
- **Fast loading** (<2 seconds target)
- **Minimal JavaScript** (no external dependencies)
- **Optimized animations** (respects reduced motion preferences)
- **Efficient CSS** (single stylesheet, minimal redundancy)

## 🛠 Customization

### Changing Content

Edit `index.html`:
- Update option titles, descriptions, and CTAs
- Modify header text and tagline
- Add or remove option cards

### Styling Changes

Edit `styles.css`:
- Modify color scheme
- Adjust spacing and typography
- Add new layout variations
- Update responsive breakpoints

### Analytics Integration

Edit `script.js`:
- Replace console logging with real analytics
- Add Google Analytics or other tracking services
- Customize event tracking parameters

## 🔍 Browser Support

- **Modern browsers** (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- **Mobile browsers** (iOS Safari 12+, Chrome Mobile 60+)
- **Progressive enhancement** for older browsers

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Full grid layout)
- **Tablet**: 768px-1199px (Responsive grid)
- **Mobile**: 480px-767px (Single column)
- **Small Mobile**: <480px (Compact layout)

## 🎯 User Testing Best Practices

1. **Test all layouts** with different user groups
2. **Measure engagement** time and click-through rates
3. **A/B test** different content variations
4. **Monitor performance** across devices
5. **Collect qualitative feedback** alongside quantitative data

## 🔧 Development Notes

- No build process required
- Compatible with all static hosting platforms
- Easy to modify without technical expertise
- Minimal dependencies for maximum compatibility

## 📄 License

This project is created for user testing purposes. Modify and use as needed for your testing requirements.

---

**Ready to test?** Open `index.html` in your browser and start collecting user interaction data! 