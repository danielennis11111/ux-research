# AI Project Builder - Landing Page User Testing

A clean, responsive landing page designed for user testing different AI project entry points. Built with vanilla HTML, CSS, and JavaScript for fast loading and deployed to GitHub Pages.

🌐 **Live Site**: [https://danielennis11111.github.io/ux-research/](https://danielennis11111.github.io/ux-research/)

## 🎯 Purpose

This landing page helps understand user preferences for different AI project entry points by testing 5 distinct pathways with real working links:

1. **Start From Scratch** - [ASU AI Platform](https://platform-beta.aiml.asu.edu/) for creating projects from the ground up
2. **Learn First** - [ASU AI Documentation](https://ai.asu.edu/technical-foundation/articles-and-documentation) with articles and guides
3. **Watch & Learn** - [Video tutorials](https://drive.google.com/file/d/1PjQ7xnUmFoj2BoOK9X9969LemSSVQorA/view?usp=sharing) for step-by-step learning
4. **Use a Template** - [GPT Marketplace](https://danielennis11111.github.io/gpt-marketplace/#/marketplace) with prebuilt templates
5. **Chat to Build** - [ASU AI Builder](https://app-beta.aiml.asu.edu/d127e308d80943adb9493ce1e3dac300) for AI-guided project creation

## 🚀 Features

- **Live & Functional** - Real working links to ASU AI platforms
- **Pure Frontend** - No frameworks, just HTML/CSS/JavaScript
- **Mobile Responsive** - Works seamlessly on all device sizes
- **A/B Testing Ready** - Support for multiple layout variations
- **Analytics Tracking** - Built-in user interaction tracking
- **Fast Loading** - Optimized for quick page loads (<2 seconds)
- **Accessibility** - Keyboard navigation and screen reader support
- **Deployed to GitHub Pages** - Live and ready for user testing

## 📁 File Structure

```
ux-research/
├── index.html          # Main landing page with working links
├── styles.css          # Responsive styling with A/B test layouts
├── script.js           # User tracking and real navigation
├── README.md           # This documentation
└── instructions.txt    # Original project requirements
```

## 🌐 Live Deployment

**Primary URL**: [https://danielennis11111.github.io/ux-research/](https://danielennis11111.github.io/ux-research/)

**Repository**: [https://github.com/danielennis11111/ux-research](https://github.com/danielennis11111/ux-research)

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

- **Grid Layout**: [https://danielennis11111.github.io/ux-research/?layout=grid](https://danielennis11111.github.io/ux-research/?layout=grid)
- **List Layout**: [https://danielennis11111.github.io/ux-research/?layout=list](https://danielennis11111.github.io/ux-research/?layout=list)
- **Carousel Layout**: [https://danielennis11111.github.io/ux-research/?layout=carousel](https://danielennis11111.github.io/ux-research/?layout=carousel)

## 🚀 Deployment Status

✅ **Successfully Deployed to GitHub Pages**

The site is live and fully functional at [https://danielennis11111.github.io/ux-research/](https://danielennis11111.github.io/ux-research/)

### Deployment Details
- **Repository**: [danielennis11111/ux-research](https://github.com/danielennis11111/ux-research)
- **Branch**: `main`
- **Deploy Method**: Automated GitHub Actions → GitHub Pages
- **Auto-Deploy**: ✅ Triggers on every push to main
- **Status**: Live and ready for user testing

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

## 🎯 Ready for User Testing!

**Live Site**: [https://danielennis11111.github.io/ux-research/](https://danielennis11111.github.io/ux-research/)

The landing page is fully deployed and ready to collect real user interaction data. Each click takes users to actual ASU AI platforms while tracking their preferences for UX research analysis.

### Quick Start for Testing:
1. Visit the live site
2. Try different layouts using the URL parameters
3. Check browser console for analytics data
4. Share with test users to gather insights

**Last Updated**: June 2025 