---
name: maintain-learned-app
description: Modify or extend the Learned React learning app, including screens, lesson data, and the slide viewer.
---

# Maintain the Learned app

Use this skill for changes to the React PWA in `webapp/`.

## Project-specific context

- The app is a Vite and React proof of concept. `webapp/src/main.jsx` reads hash routes and `webapp/src/routes.js` maps routes to screens.
- Screens live in `webapp/src/screens/`; the landscape lesson player is in `webapp/src/viewer/`.
- Shared design tokens and components are in `webapp/src/theme.jsx` and `webapp/src/shell.css`.
- Sample lesson, narration, cited side pages, review cards, and quiz content are in `webapp/src/data.js`.
- Features such as deck generation, source checking, account sync, and real document extraction do not exist yet. Keep UI claims consistent with this prototype scope.

## Guidance

- Prefer extending existing screens, route aliases, and shared theme components over introducing a second pattern for the same behavior.
- For browser-rendered slide layout, navigation, and low-transfer presentation design, read [presentations-as-code](../presentations-as-code/SKILL.md).
- Keep lesson source references near the claims they support. Treat the sample lesson and its figures as draft material unless independently verified.
- Preserve the PWA base path (`/app/`) and service worker behavior when changing Vite configuration or app entry points.
- `site/app/` contains the packaged build. When the requested change includes updating the static demo, rebuild from `webapp/` and make sure the generated app is the one placed there.

## Commands

Run from `webapp/`:

- `npm run dev` for local development.
- `npm run build` to create the production build.
- `npm run preview` to serve the build locally.
