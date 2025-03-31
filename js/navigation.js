/**
 * Handles navigation between slides
 */
document.addEventListener('DOMContentLoaded', function() {
    // Slide mapping configuration
    const slideMappings = {
        1: "slide-01-title.html",
        2: "slide-02-table-of-contents.html",
        3: "slide-03-core-components.html",
        4: "slide-04-knowledge-graph-example.html",
        5: "slide-05-data-models-comparison.html",
        6: "slide-06-maturity-model.html",
        7: "slide-07-architectural-layers.html",
        8: "slide-08-vs-traditional-databases.html",
        9: "slide-09-construction-methodologies.html",
        10: "slide-10-pattern-query-examples.html",
        11: "slide-11-path-based-query.html",
        12: "slide-12-healthcare-application.html",
        13: "slide-13-financial-services.html",
        14: "slide-14-root-cause-analysis.html",
        15: "slide-15-implementation-roadmap.html",
        16: "slide-16-technical-considerations.html",
        17: "slide-17-future-trends.html",
        18: "slide-18-example-architecture.html",
        19: "slide-19-evolution-timeline.html",
        20: "slide-20-key-benefits.html",
        21: "slide-21-conclusion.html"
    };
    
    const totalSlides = 21;
    let currentSlide = 1;
    
    // DOM elements
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.slide');
    const pageDisplay = document.getElementById('current-page');
    
    // Function to update slide heights
    function updateSlideHeights() {
        const viewportHeight = window.innerHeight;
        const headerHeight = document.querySelector('.presentation-header').offsetHeight;
        const footerHeight = document.querySelector('.presentation-footer').offsetHeight;
        const availableHeight = viewportHeight - (headerHeight + footerHeight);
        
        slides.forEach(slide => {
            slide.style.minHeight = `${availableHeight}px`;
            slide.style.height = `${availableHeight}px`;
        });
    }

    // Update slide heights on load and resize
    updateSlideHeights();
    window.addEventListener('resize', updateSlideHeights);

    // Function to update page number
    function updatePageNumber() {
        if (!pageDisplay) return;
        
        const scrollPosition = slidesWrapper.scrollTop;
        const slideHeight = window.innerHeight;
        currentSlide = Math.round(scrollPosition / slideHeight) + 1;
        pageDisplay.textContent = Math.min(currentSlide, totalSlides);
        
        // Update URL hash
        window.location.hash = `slide-${currentSlide}`;
        
        // Update navigation dots
        updateNavDots();
    }

    // Function to update navigation dots
    function updateNavDots() {
        const navDots = document.querySelectorAll('.slide-nav a');
        navDots.forEach(dot => {
            dot.classList.remove('active');
            const slideNum = dot.getAttribute('href').replace('#slide-', '');
            if (parseInt(slideNum) === currentSlide) {
                dot.classList.add('active');
            }
        });
    }

    // Add scroll event listener with debouncing
    let scrollTimeout;
    if (slidesWrapper) {
        slidesWrapper.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(updatePageNumber, 10);
        });
    }

    // Initial update
    updatePageNumber();

    // Update on window resize
    window.addEventListener('resize', updatePageNumber);
    
    // Navigation dots event handlers
    const navDots = document.querySelectorAll('.slide-nav a');
    navDots.forEach(dot => {
        dot.addEventListener('click', e => {
            e.preventDefault();
            const targetId = dot.getAttribute('href');
            const targetSlide = document.querySelector(targetId);
            if (targetSlide) {
                targetSlide.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Next slide: Right Arrow / Down Arrow / Space
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
            e.preventDefault();
            if (currentSlide < totalSlides) {
                const nextSlide = document.getElementById(`slide-${currentSlide + 1}`);
                if (nextSlide) {
                    nextSlide.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
        
        // Previous slide: Left Arrow / Up Arrow
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            if (currentSlide > 1) {
                const prevSlide = document.getElementById(`slide-${currentSlide - 1}`);
                if (prevSlide) {
                    prevSlide.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
        
        // Home key: Go to first slide
        if (e.key === 'Home') {
            e.preventDefault();
            const firstSlide = document.getElementById('slide-1');
            if (firstSlide) {
                firstSlide.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        // End key: Go to last slide
        if (e.key === 'End') {
            e.preventDefault();
            const lastSlide = document.getElementById(`slide-${totalSlides}`);
            if (lastSlide) {
                lastSlide.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
    
    // Check if URL has a hash and scroll to that slide
    if (window.location.hash) {
        const targetSlide = document.querySelector(window.location.hash);
        if (targetSlide) {
            setTimeout(() => {
                targetSlide.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        }
    }
});