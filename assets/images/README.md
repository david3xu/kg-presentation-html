# Image Files

This directory contains SVG images used in the Knowledge Graph presentation.

## Files

- `causal-graph.svg`: Illustration of causal relationships for root cause analysis
- `knowledge-graph-components.svg`: Visual representation of basic knowledge graph components

## Image Guidelines

All images follow these design guidelines:

1. **Format**: SVG for scalability across different screen sizes and devices
2. **Color Scheme**: Consistent with the presentation's dark theme
   - Background: #2d2d2d
   - Primary elements: #1a2b3c with #4a9eff stroke
   - Secondary elements: #2d2d2d with #ffa726 stroke
   - Text: White (#ffffff) or light blue (#4a9eff) for titles
3. **Styling**: Clean, minimalist approach with sufficient contrast
4. **Text**: Arial font family for consistency with slides
5. **Accessibility**: High contrast between elements and text

## Usage

These images are referenced in the slide HTML files using relative paths, for example:

```html
<img src="assets/images/knowledge-graph-components.svg" alt="Knowledge Graph Components">
```

## Editing

These SVG files can be edited with:
- Adobe Illustrator
- Inkscape (free, open-source)
- Any text editor (SVGs are XML-based)

When editing, please maintain the established color scheme and styling for consistency.