/**
 * Configuration for Mermaid diagrams
 */
document.addEventListener('DOMContentLoaded', function() {
  // Check if mermaid loaded properly
  if (typeof mermaid === 'undefined') {
      console.warn('Mermaid library not loaded. Adding fallback content.');
      const diagrams = document.querySelectorAll('.mermaid');
      diagrams.forEach(function(diagram) {
          const fallback = document.createElement('div');
          fallback.className = 'mermaid-fallback';
          fallback.innerHTML = '<p>Diagram content (Mermaid visualization not available)</p>' + 
                              '<p><small>' + diagram.textContent + '</small></p>';
          diagram.parentNode.replaceChild(fallback, diagram);
      });
  } else {
      // Initialize mermaid with robust error handling
      try {
          mermaid.initialize({ 
              startOnLoad: true,
              theme: 'dark',
              securityLevel: 'loose',
              themeCSS: `
                  .node rect { fill: #2d2d2d; stroke: #4a9eff; }
                  .node circle { fill: #2d2d2d; stroke: #4a9eff; }
                  .node polygon { fill: #2d2d2d; stroke: #4a9eff; }
                  .edgeLabel { background-color: #2d2d2d; color: #ffffff; }
                  .edgePath { stroke: #4a9eff; }
                  .cluster rect { fill: #1a1a1a; stroke: #404040; }
                  .cluster text { fill: #ffffff; }
                  .label { color: #ffffff; }
                  .nodeLabel { color: #ffffff; }
                  .edgeLabel { color: #ffffff; }
                  .titleText { color: #ffffff; }
                  .section { color: #ffffff; }
                  .sectionTitle { color: #ffffff; }
                  .subSection { color: #ffffff; }
                  .subSectionTitle { color: #ffffff; }
                  .note { fill: #2d2d2d; stroke: #ffa726; }
                  .noteText { color: #ffffff; }
              `,
              logLevel: 'error',
              fontFamily: 'Arial, sans-serif'
          });
          console.log('Mermaid initialized successfully');
      } catch(e) {
          console.error('Failed to initialize Mermaid:', e);
      }
  }
  
  // Check if mermaid failed to load after 3 seconds
  setTimeout(function() {
      if (typeof mermaid === 'undefined') {
          console.warn('Mermaid CDN load failed, attempting backup source');
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/mermaid@10.5.0/dist/mermaid.min.js';
          script.onload = function() {
              console.log('Backup Mermaid script loaded');
              // Re-initialize after backup loaded
              mermaid.initialize({ 
                  startOnLoad: true,
                  theme: 'dark',
                  securityLevel: 'loose',
                  themeCSS: `
                      .node rect { fill: #2d2d2d; stroke: #4a9eff; }
                      .node circle { fill: #2d2d2d; stroke: #4a9eff; }
                      .node polygon { fill: #2d2d2d; stroke: #4a9eff; }
                      .edgeLabel { background-color: #2d2d2d; color: #ffffff; }
                      .edgePath { stroke: #4a9eff; }
                      .cluster rect { fill: #1a1a1a; stroke: #404040; }
                      .cluster text { fill: #ffffff; }
                      .label { color: #ffffff; }
                      .nodeLabel { color: #ffffff; }
                      .edgeLabel { color: #ffffff; }
                      .titleText { color: #ffffff; }
                      .section { color: #ffffff; }
                      .sectionTitle { color: #ffffff; }
                      .subSection { color: #ffffff; }
                      .subSectionTitle { color: #ffffff; }
                      .note { fill: #2d2d2d; stroke: #ffa726; }
                      .noteText { color: #ffffff; }
                  `
              });
              mermaid.init(undefined, document.querySelectorAll('.mermaid'));
          };
          document.body.appendChild(script);
      }
  }, 3000);
});