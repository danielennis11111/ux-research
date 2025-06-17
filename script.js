// Analytics and User Interaction Tracking
class UserTestingTracker {
    constructor() {
        this.sessionId = this.generateSessionId();
        this.startTime = Date.now();
        this.interactions = [];
        this.layoutVersion = this.getLayoutVersion();
        
        this.init();
    }
    
    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    getLayoutVersion() {
        // Check URL parameters for A/B testing
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('layout') || 'grid';
    }
    
    init() {
        this.setupClickTracking();
        this.setupLayoutSwitching();
        this.trackPageLoad();
        this.setupKeyboardNavigation();
    }
    
    trackPageLoad() {
        this.logEvent('page_load', {
            layout_version: this.layoutVersion,
            user_agent: navigator.userAgent,
            screen_size: `${window.screen.width}x${window.screen.height}`,
            viewport_size: `${window.innerWidth}x${window.innerHeight}`
        });
    }
    
    setupClickTracking() {
        // Define the actual destination URLs
        const destinations = {
            'scratch': 'https://platform-beta.aiml.asu.edu/',
            'learn-first': 'https://ai.asu.edu/technical-foundation/articles-and-documentation',
            'watch-learn': 'https://drive.google.com/file/d/1PjQ7xnUmFoj2BoOK9X9969LemSSVQorA/view?usp=sharing',
            'template': 'https://danielennis11111.github.io/gpt-marketplace/#/marketplace',
            'chat-build': 'https://app-beta.aiml.asu.edu/d127e308d80943adb9493ce1e3dac300'
        };

        document.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const option = e.currentTarget.dataset.option;
                const cardTitle = e.currentTarget.querySelector('h3').textContent;
                const destination = destinations[option];
                
                this.logEvent('option_click', {
                    option: option,
                    title: cardTitle,
                    destination: destination,
                    layout_version: this.layoutVersion,
                    time_on_page: Date.now() - this.startTime
                });
                
                // Add visual feedback
                this.showClickFeedback(e.currentTarget);
                
                // Navigate to actual destination
                this.navigateToDestination(option, destination);
            });
            
            // Track hover events for engagement metrics
            card.addEventListener('mouseenter', (e) => {
                const option = e.currentTarget.dataset.option;
                this.logEvent('option_hover', {
                    option: option,
                    time_on_page: Date.now() - this.startTime
                });
            });
        });
    }
    
    setupLayoutSwitching() {
        const container = document.getElementById('optionsContainer');
        const layoutVersion = this.layoutVersion;
        
        // Apply layout based on URL parameter or default
        switch(layoutVersion) {
            case 'list':
                container.className = 'options-list';
                this.adjustListLayout();
                break;
            case 'carousel':
                container.className = 'options-carousel';
                this.setupCarouselControls();
                break;
            default:
                container.className = 'options-grid';
        }
    }
    
    adjustListLayout() {
        // Restructure cards for list layout
        document.querySelectorAll('.option-card').forEach(card => {
            const content = card.innerHTML;
            card.innerHTML = `
                <div class="icon">${card.querySelector('.icon').innerHTML}</div>
                <div class="content">
                    ${content.replace(/<div class="icon">.*?<\/div>/s, '')}
                </div>
            `;
        });
    }
    
    setupCarouselControls() {
        // Add touch/swipe support for carousel
        let isDown = false;
        let startX;
        let scrollLeft;
        const container = document.getElementById('optionsContainer');
        
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        
        container.addEventListener('mouseleave', () => {
            isDown = false;
        });
        
        container.addEventListener('mouseup', () => {
            isDown = false;
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
    }
    
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                // Enhanced tab navigation tracking
                this.logEvent('keyboard_navigation', {
                    key: e.key,
                    target: e.target.dataset.option || 'unknown'
                });
            }
            
            if (e.key === 'Enter' && e.target.classList.contains('option-card')) {
                e.target.click();
            }
        });
    }
    
    showClickFeedback(element) {
        element.style.transform = 'scale(0.95)';
        setTimeout(() => {
            element.style.transform = '';
        }, 150);
    }
    
    navigateToDestination(option, destination) {
        // Show loading state
        document.body.classList.add('loading');
        
        // Brief delay for visual feedback, then navigate
        setTimeout(() => {
            if (destination) {
                // Open in new tab to preserve the testing page
                window.open(destination, '_blank');
            } else {
                console.warn(`No destination defined for option: ${option}`);
            }
            document.body.classList.remove('loading');
        }, 300);
    }
    
    logEvent(eventType, data) {
        const event = {
            session_id: this.sessionId,
            timestamp: Date.now(),
            event_type: eventType,
            ...data
        };
        
        this.interactions.push(event);
        
        // Console log for development (replace with actual analytics in production)
        console.log('User Interaction:', event);
        
        // Store in localStorage for persistence
        this.saveToStorage();
        
        // Send to analytics service (placeholder)
        this.sendToAnalytics(event);
    }
    
    saveToStorage() {
        try {
            localStorage.setItem('userTestingData', JSON.stringify({
                sessionId: this.sessionId,
                interactions: this.interactions
            }));
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
    }
    
    sendToAnalytics(event) {
        // Placeholder for real analytics service
        // Example: Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', event.event_type, {
                custom_parameter_1: event.option,
                custom_parameter_2: event.layout_version
            });
        }
        
        // Example: Custom analytics endpoint
        /*
        fetch('/api/analytics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event)
        }).catch(console.error);
        */
    }
    
    // Export data for analysis
    exportData() {
        return {
            sessionId: this.sessionId,
            layoutVersion: this.layoutVersion,
            totalInteractions: this.interactions.length,
            sessionDuration: Date.now() - this.startTime,
            interactions: this.interactions
        };
    }
}

// Performance monitoring
const performanceMonitor = {
    measurePageLoad() {
        window.addEventListener('load', () => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            console.log('Page Load Performance:', {
                pageLoadTime: pageLoadTime + 'ms',
                domContentLoaded: (perfData.domContentLoadedEventEnd - perfData.navigationStart) + 'ms',
                firstPaint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint')?.startTime + 'ms'
            });
        });
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize user testing tracker
    window.userTracker = new UserTestingTracker();
    
    // Initialize performance monitoring
    performanceMonitor.measurePageLoad();
    
    // Add smooth scrolling for carousel
    if (window.userTracker.layoutVersion === 'carousel') {
        document.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', (e) => {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        });
    }
    
    // Add loading states
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Utility functions for A/B testing
const abTestUtils = {
    // Get current test variant
    getVariant() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('variant') || 'A';
    },
    
    // Switch layout for testing
    switchLayout(layout) {
        const url = new URL(window.location);
        url.searchParams.set('layout', layout);
        window.location.href = url.toString();
    },
    
    // Generate test URLs
    generateTestUrls() {
        const baseUrl = window.location.origin + window.location.pathname;
        return {
            grid: baseUrl + '?layout=grid',
            list: baseUrl + '?layout=list',
            carousel: baseUrl + '?layout=carousel'
        };
    }
};

// Expose utilities for console testing
window.abTestUtils = abTestUtils;

// Export session data function for testing
window.exportUserData = () => {
    if (window.userTracker) {
        const data = window.userTracker.exportData();
        console.log('User Testing Data:', data);
        return data;
    }
}; 