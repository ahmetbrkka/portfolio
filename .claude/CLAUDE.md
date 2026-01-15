# Portfolio User Guide

Personal portfolio for Ahmet Burak Kara at www.akara.engineer

---

## Edit Content

All content lives in `js/content.js`. Edit, save, refresh browser.

```javascript
const content = {
  hero: { name, statement },
  about: { text[], image, cvLink },
  work: [{ title, version, period, metadata, stack[], description, publications[] }],
  experiences: [{ title, company, period, location, description[] }],
  skills: { "Category": ["skill1", "skill2"] },
  contact: { email, linkedin, github }
}

// SVG icons, links, and labels in CONFIG object
```

---

## Common Tasks

**Add Work Item:**
```javascript
work: [{
  title: "Project Name",
  version: "v1.0",  // optional
  period: "2024-2025",
  metadata: "Company | Context",
  stack: ["Python", "Docker"],
  description: "What you built...",
  publications: [{ title: "Paper", url: "path.pdf" }]
}]
```

**Add Experience:**
```javascript
experiences: [{
  title: "Job Title",
  company: "Company Name",
  period: "Jan 2024 - Present",
  location: "City, Country",
  description: ["Point 1", "Point 2"]
}]
```

**Change Colors:**
Edit `:root` variables in `css/styles.css`

**Replace CV:**
Replace `assets/cv.pdf` (keep filename)

---

## Architecture

**Structure:**
- `index.html` - Minimal HTML skeleton
- `css/styles.css` - All styles with CSS variables
- `js/content.js` - All content + CONFIG constants
- `js/main.js` - Render functions + utilities

**Key Features:**
- No hardcoded values (use variables)
- Reusable utility functions
- No duplicate code
- Hidden scrollbar, responsive

---

## Local Testing

```bash
python3 -m http.server 8000
```

Open http://localhost:8000

---

## Deployment

Push to `main` → auto-deploys to www.akara.engineer via GitHub Pages
