# Knowledge Graph Presentation

## Overview
A modular, interactive web-based presentation on Knowledge Graph Technical Architecture. This project contains a complete slide deck with diagrams, tables, and rich content highlighting modern graph technology concepts and implementations.

## Getting Started

### Quick Start
1. Download or clone this repository
2. Open `index.html` in any modern web browser (Chrome, Firefox, Safari, or Edge)
3. Navigate through slides using keyboard arrows or on-screen controls

No server or installation required - works completely offline!

### Keyboard Shortcuts
- **Right Arrow / Down Arrow / Space**: Next slide
- **Left Arrow / Up Arrow**: Previous slide
- **F** or **F11**: Toggle fullscreen mode
- **Home**: Go to first slide
- **End**: Go to last slide

## Complete Directory Structure
```
kg-presentation-html/
├── assets/
│   ├── diagrams/
│   │   ├── architectural-layers.mmd
│   │   ├── construction-methodologies.mmd
│   │   ├── enterprise-knowledge-domain.mmd
│   │   ├── evolution-timeline.mmd
│   │   ├── example-architecture.mmd
│   │   ├── future-trends.mmd
│   │   ├── implementation-roadmap.mmd
│   │   ├── maturity-model.mmd
│   │   └── README.md
│   └── images/
│       ├── causal-graph.svg
│       ├── knowledge-graph-components.svg
│       └── README.md
├── css/
│   ├── main.css
│   ├── mermaid-custom.css
│   ├── print.css
│   └── theme-dark.css
├── js/
│   ├── fullscreen.js
│   ├── mermaid-config.js
│   ├── navigation.js
│   └── utilities.js
├── slides/
│   ├── README.md
│   ├── slide-01-title.html                     # Title slide
│   ├── slide-02-table-of-contents.html         # Table of contents
│   ├── slide-03-core-components.html           # Core Components
│   ├── slide-04-knowledge-graph-example.html   # Knowledge Graph Example
│   ├── slide-05-data-models-comparison.html    # Data Models Comparison
│   ├── slide-06-maturity-model.html            # Knowledge Graph Maturity Model
│   ├── slide-07-architectural-layers.html      # Architectural Layers
│   ├── slide-08-vs-traditional-databases.html  # Knowledge Graphs vs Traditional Databases
│   ├── slide-09-construction-methodologies.html # Construction Methodologies
│   ├── slide-10-pattern-query-examples.html    # Pattern-Based Query Example
│   ├── slide-11-path-based-query.html          # Path-Based Query - Power of Traversal
│   ├── slide-12-healthcare-application.html    # Industry Application - Healthcare
│   ├── slide-13-financial-services.html        # Industry Application - Financial Services
│   ├── slide-14-root-cause-analysis.html       # Root Cause Analysis Capabilities
│   ├── slide-15-implementation-roadmap.html    # Implementation Roadmap
│   ├── slide-16-technical-considerations.html  # Technical Implementation Considerations
│   ├── slide-17-future-trends.html             # Future Trends
│   ├── slide-18-example-architecture.html      # Example Architecture
│   ├── slide-19-evolution-timeline.html        # Knowledge Graph Evolution Timeline
│   ├── slide-20-key-benefits.html              # Key Benefits - Practical Impact
│   └── slide-21-conclusion.html                # Conclusion & Resources
├── index.html
└── README.md
```

## Content Overview

This Knowledge Graph presentation covers:

1. **Introduction & Basics**
   - Core components and architectural layers
   - Knowledge graph examples and data models
   - Maturity models for implementation

2. **Technical Deep Dive**
   - Comparison with traditional databases
   - Construction methodologies
   - Query examples (SPARQL and Cypher)

3. **Industry Applications**
   - Healthcare and financial services use cases
   - Root cause analysis capabilities
   - Implementation roadmap

4. **Future & Conclusions**
   - Emerging trends in knowledge graph technology
   - Example architecture
   - Evolution timeline and practical benefits

## Modifying the Presentation

### Editing Existing Slides
1. Navigate to the `slides/` directory
2. Open the specific slide file (e.g., `slide-04.html`) in any text editor
3. Modify the HTML content as needed
4. Save the file and refresh the presentation in your browser

### Adding New Slides
1. Create a new HTML file in the `slides/` directory following the naming convention (e.g., `slide-22-appendix.html`)
2. Copy the structure from an existing slide of similar type
3. Update the slide ID and content
4. Add the new slide filename to the `slideMappings` object in `js/navigation.js`
5. Increase the `totalSlides` value in `js/navigation.js` 

### Editing Diagrams
Mermaid diagrams are stored in two places:
1. Inline within each slide's HTML for rendering
2. As separate `.mmd` files in `assets/diagrams/` for backup and reference

To edit a diagram:
1. Modify the Mermaid code within the slide HTML
2. Consider updating the corresponding `.mmd` file in the assets directory
3. For complex diagrams, you can use the [Mermaid Live Editor](https://mermaid.live/) to preview changes

## Technical Notes

### Responsive Design
- Automatically adapts to different screen sizes
- Optimized for both landscape and portrait orientations
- Works on desktop, tablet, and mobile devices

### Printing Support
- CSS is optimized for printing to PDF
- Each slide prints on a separate page
- Print styles maintain readability in black and white

### Browser Compatibility
Tested and working on:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Dependencies
- [Mermaid.js](https://mermaid.js.org/) (v10.6.1) - For rendering diagrams
- All other functionality uses native HTML, CSS, and JavaScript

## License
This presentation is available for use under MIT license.

---

Created by David Xu | Last Updated: March 2025