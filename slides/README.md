# Slide HTML Files

This directory contains individual HTML files for each slide in the Knowledge Graph presentation. Each file contains only the content portion of the slide, not the full HTML structure.

## File Naming Convention

Files are named following this pattern:
`slide-XX-descriptive-name.html`

Where:
- `XX` is the two-digit slide number (e.g., 01, 02, etc.)
- `descriptive-name` is a brief description of the slide content

## Slide Content Structure

Each slide file contains only the HTML content to be inserted into the slide container in the main `index.html` file. This typically includes:

- Headings
- Paragraphs
- Lists
- Tables
- Mermaid diagram code
- Image references

The slide files do not include:
- `<!DOCTYPE>` declarations
- `<html>`, `<head>`, or `<body>` tags
- CSS or JavaScript (these are in separate files)

## Modifying Slides

To modify a slide:

1. Edit the corresponding HTML file in this directory
2. If your slide contains a Mermaid diagram, consider updating the corresponding `.mmd` file in the `assets/diagrams/` directory
3. Refresh the presentation in your browser to see the changes

## Slide Types

The slides use several layout types that are defined in the CSS:

- `slide-title`: For title slides (centered content)
- `slide-diagram`: For slides featuring large diagrams
- `slide-table`: For slides with tables as the main content
- `slide-list`: For slides primarily containing lists
- `slide-split`: For slides with two-column layout

These classes are applied to the slide containers in the main `index.html` file, not in these individual slide content files.

## Adding New Slides

To add a new slide:

1. Create a new HTML file in this directory following the naming convention
2. Add the slide reference to the `slideMap` object in the main `index.html` file
3. Add a corresponding slide container `<div>` in the main `index.html` file
4. Update the total slide count in the JavaScript if necessary