---
name: presentations-as-code
description: Create or adapt browser-first presentations that render from HTML, CSS, and JavaScript on the device, with polished visuals and a small network payload.
---

# Render presentations on the device

Use this skill when a presentation should open and render in a browser or app instead of requiring a slide-file download.

## Design and implementation

- Keep slide content as structured data or lightweight markup, then render it with HTML and CSS. Use JavaScript for navigation, state, and interaction rather than baking each slide into a large image.
- Build a consistent visual system with a small palette, type scale, spacing rhythm, and a few reusable slide layouts. Use strong hierarchy, concise copy, and one main idea per slide.
- Prefer CSS, inline SVG, and simple DOM diagrams for charts, illustrations, and process flows. Use raster images only when the visual needs photographic detail; resize and compress them for their displayed dimensions.
- Make the layout adapt to phone, tablet, and desktop sizes. Support keyboard and touch navigation, visible focus, readable contrast, reduced-motion preferences, and semantic headings.
- Keep authored slide data separate from rendering and navigation code so content can be reviewed or changed without duplicating layout logic.

## Network and offline behavior

- Do not fetch a PPT/PDF or one image per slide just to display a deck. Transfer the compact content and renderer once; render slides locally.
- Bundle slides into a small number of resources instead of making a request for each slide. Defer optional media and below-the-fold material until it is needed.
- Use text, CSS, and vector shapes for data-heavy visuals. Avoid video and decorative media that do not materially improve understanding.
- Cache the renderer and essential deck content when the host app supports offline use.
- Measure the production build's compressed transfer size and request count. State actual measurements; do not promise a kilobyte budget without measuring the built output and its runtime requests.

## Learned project context

- The main presentation is implemented in `site/present.js` and styled in `site/present.css`; it currently builds slide DOM from JavaScript descriptors.
- The app's lesson player is in `webapp/src/viewer/`, with sample slide content in `webapp/src/data.js` and `webapp/src/viewer/Slides.jsx`.
- Preserve the project's concise, high-contrast visual style and cited source labels. Keep a downloadable export only when a user explicitly requests one; the browser experience should render without it.
