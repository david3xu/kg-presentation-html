/**
 * Utility functions for the presentation
 */
document.addEventListener('DOMContentLoaded', function() {
  // Function to update time
  function updateTime() {
      const now = new Date();
      const timeElement = document.getElementById('current-time');
      if (timeElement) {
          timeElement.textContent = now.toLocaleTimeString();
      }
  }
  
  // Initialize time updater if element exists
  const timeElement = document.getElementById('current-time');
  if (timeElement) {
      setInterval(updateTime, 1000);
      updateTime();
  }
  
  // Function to check if an element is in viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
  
  // Function to load slides dynamically
  window.loadSlide = function(slideNumber) {
      const slidesContainer = document.querySelector('.container');
      if (!slidesContainer) return;
      
      const slidesMapping = {
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
      
      if (!slidesMapping[slideNumber]) return;
      
      fetch(`slides/${slidesMapping[slideNumber]}`)
          .then(response => response.text())
          .then(html => {
              const slideDiv = document.createElement('div');
              slideDiv.id = `slide-${slideNumber}`;
              slideDiv.className = 'slide';
              slideDiv.innerHTML = html;
              slidesContainer.appendChild(slideDiv);
              
              // Reinitialize mermaid for new slide if needed
              if (typeof mermaid !== 'undefined' && slideDiv.querySelector('.mermaid')) {
                  mermaid.init(undefined, slideDiv.querySelectorAll('.mermaid'));
              }
          })
          .catch(error => {
              console.error('Error loading slide:', error);
          });
  };
  
  // Add slide navigation dots
  function createNavigationDots() {
      const totalSlides = 21; // Set the total number of slides
      const body = document.body;
      
      const navDots = document.createElement('div');
      navDots.className = 'slide-nav';
      
      for (let i = 1; i <= totalSlides; i++) {
          const dot = document.createElement('a');
          dot.href = `#slide-${i}`;
          dot.setAttribute('title', `Slide ${i}`);
          navDots.appendChild(dot);
      }
      
      body.appendChild(navDots);
  }
  
  // Create navigation dots
  createNavigationDots();
});