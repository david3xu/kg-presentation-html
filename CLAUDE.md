# Knowledge Graph Presentation Guidelines

## Running the Presentation
- Open `index.html` in any modern browser to view the presentation
- No build process required - works completely offline
- Keyboard navigation: arrows (next/prev), F (fullscreen), Home/End (first/last slide)

## Code Style Guidelines
- **HTML**: Modular slide files with semantic markup and consistent class naming using kebab-case
- **CSS**: Component-based organization with descriptive class names using kebab-case
- **JavaScript**: 
  - ES6 features (const/let, arrow functions, template literals)
  - Error handling with try/catch blocks and console error logging
  - Function-based approach with event listeners
  - JSDoc-style comments for file descriptions

## File Organization
- Keep slides in `/slides` directory with proper numbering
- Mermaid diagrams in both slides (for rendering) and `/assets/diagrams` (as reference)
- JavaScript is organized by functionality into separate files

## Content Modification
- Edit slides in the `/slides` directory
- When adding new slides, update `slideMappings` object and `totalSlides` in `js/navigation.js`
- Use [Mermaid Live Editor](https://mermaid.live/) for diagram changes
- Follow existing naming conventions and file structure

## Technical Context
- Vanilla JS/HTML/CSS presentation with Mermaid.js for diagrams
- Responsive design supporting all modern browsers and mobile devices