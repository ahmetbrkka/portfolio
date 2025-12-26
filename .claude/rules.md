# Portfolio Construction Rules

## Core Principles

1. **Radical Simplicity** - Minimal code, maximum clarity
2. **Data-Driven** - Content in `js/content.js`, config in `CONFIG`
3. **DRY Code** - Zero duplication, reusable utilities
4. **No Dependencies** - Pure HTML/CSS/JS
5. **Variables Only** - No hardcoded values

---

## Architecture

**Single-page scroll:**
- Sections: Hero, About (with skills), Work (experiences + selected work), Contact
- No routing, no animations, no frameworks
- Content rendered from `js/content.js`

**File Structure:**
- `index.html` - Minimal skeleton (~50 lines)
- `css/styles.css` - All styles with CSS variables (~550 lines)
- `js/content.js` - Content data + CONFIG constants
- `js/main.js` - Utility functions + render logic (~130 lines)

---

## Code Rules

### HTML
- Empty containers only (populated by JS)
- No inline styles
- Semantic tags

### CSS
- CSS variables for all values (colors, spacing, typography)
- No magic numbers
- No duplicate rules
- Hidden scrollbar (cross-browser)
- Responsive overflow control

### JavaScript
**Utilities:**
- `createElement()` - Generate HTML elements
- `createLink()` - Generate links with attributes
- `joinArray()` - Join arrays with separator
- `mapToHTML()` - Map arrays to HTML

**CONFIG Object:**
- SVG icons
- Link attributes
- ARIA labels

**No:**
- Hardcoded strings/values
- Duplicate logic
- Inline HTML in multiple places

---

## Responsive

- Mobile-first fluid design
- `clamp()` for responsive sizing
- Tested: 320px → 8K
- Hidden scrollbar maintained

---

## Forbidden

- Duplicate code
- Hardcoded values
- Magic numbers
- Build process
- Dependencies
- Emojis
- Animations
