# Learned project guidance

## Scope

Learned is a proof-of-concept visual learning experience with two parts:

- `site/` is a static presentation and demo site, including the slide deck, the `/try/` preview, downloads, images, and the built app under `site/app/`.
- `webapp/` is the source for the installable React progressive web app. It uses Vite, a hash-based route resolver, local sample content, and a landscape slide viewer.

This is not a production learning platform. Deck generation, source checking, upload extraction, and accounts are not implemented. Settings are device-local. The sample network-protocol lesson is draft content and has not been reviewed by a lecturer.

## Project map

- `webapp/src/screens/`: app screens.
- `webapp/src/viewer/`: slide rendering and landscape viewer.
- `webapp/src/data.js`: sample deck, narration, side pages, review cards, and quiz.
- `webapp/src/theme.jsx` and `webapp/src/shell.css`: shared visual system and app shell.
- `webapp/src/routes.js`: screen discovery and route aliases.
- `site/present.js`, `site/present.css`, `site/qr.js`: presentation behavior and styling.
- `site/try/`: standalone browser demo wrapper.
- `README.md`: local setup, project map, and hosting notes; `wrangler.jsonc`: Cloudflare Worker static-assets configuration. Confirm which deployment target is intended before publishing because the README documents distinct Pages and Worker workflows.

## Working conventions

- Keep changes within the existing React/Vite app and static-site structure unless the requested feature requires a larger change.
- Treat lesson claims and numeric figures as draft until checked against reliable sources. Preserve source references alongside educational content and avoid presenting estimates as verified facts.
- `site/app/` is generated output from the webapp build. Make source changes in `webapp/`, then rebuild before updating the packaged app in `site/app/`.
- Root ZIP files are ignored by `.gitignore`; do not add generated ZIP archives to version control.
- Use the npm scripts in `webapp/package.json`: `npm run dev`, `npm run build`, and `npm run preview`.
- Follow the README deployment notes only after resolving the intended Cloudflare product and deployment method.

## Collaboration

The project owner is the human author. Codex may assist with implementation and maintenance as an AI collaborator. When requested, credit Codex in commit metadata using the co-author identity supplied by the project owner; co-author credit does not grant repository access.
