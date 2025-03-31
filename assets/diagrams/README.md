# Mermaid Diagram Files

This directory contains the source files for all Mermaid diagrams used in the presentation. These files serve as a backup and reference for the diagrams that are rendered directly in the HTML slides.

## File Naming Convention

Files are named according to the content they represent:

- `architectural-layers.mmd`: Technical architecture layers diagram
- `construction-methodologies.mmd`: Knowledge graph construction methods
- `enterprise-knowledge-domain.mmd`: Example enterprise knowledge domain
- `evolution-timeline.mmd`: Knowledge graph historical evolution
- `example-architecture.mmd`: Detailed example architecture
- `future-trends.mmd`: Future trends mindmap
- `implementation-roadmap.mmd`: Implementation phases diagram
- `maturity-model.mmd`: Knowledge graph maturity model

## Editing Diagrams

You can edit these files in any text editor. For preview and visual editing, we recommend using:

1. [Mermaid Live Editor](https://mermaid.live/) - An online editor with instant preview
2. VS Code with the Mermaid extension

After editing, update both:
1. The `.mmd` file in this directory
2. The corresponding HTML slide file in the `slides/` directory

## Diagram Types Used

- `flowchart`: For architecture and methodology diagrams
- `graph`: For knowledge graph structure examples
- `timeline`: For evolution timeline
- `mindmap`: For future trends

## Style Guidelines

All diagrams follow these styling conventions:
- Primary nodes: `fill:#1a2b3c,stroke:#4a9eff`
- Secondary nodes: `fill:#2d2d2d,stroke:#ffa726`
- Subgraphs: `fill:#1a1a1a,stroke:#404040,color:#ffffff`