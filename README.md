# Portfolio

Personal portfolio website for Ahmet Burak Kara — [www.akara.engineer](https://www.akara.engineer)

## Quick Start

Edit content in [js/content.js](js/content.js), then test locally:

```bash
python3 -m http.server 8000
```

Visit `http://localhost:8000`

## Editing Content

All content (projects, experience, skills, contact) is configured in [js/content.js](js/content.js). No HTML changes needed.

**Add a project:**
```javascript
work: [{
  title: "Project Name",
  period: "2024-2025",
  stack: ["Python", "Docker"],
  description: "What you built..."
}]
```

**Update colors:** Edit CSS variables in [css/styles.css](css/styles.css)

**Replace CV:** Replace [assets/cv.pdf](assets/cv.pdf)

See [.claude/CLAUDE.md](.claude/CLAUDE.md) for detailed documentation.

## Deployment

Pushes to `main` branch automatically deploy to GitHub Pages.

## License

MIT
