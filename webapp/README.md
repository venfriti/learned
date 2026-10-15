# Learning app (proof of concept)

Installable phone web app (PWA) built from the redesign: three tabs (Learn, Review, Me), a full-screen landscape slide player with side pages, and sample content on Computer Network Protocols.

## Run
    npm install
    npm run dev        # development
    npm run build && npm run preview

## Structure
- `src/theme.jsx`: colours, fonts, shared components (one identity everywhere).
- `src/data.js`: the sample lesson, side pages, review cards and quiz. Draft content, not yet reviewed by a lecturer.
- `src/screens/*.jsx`: Learn (Main), NewDeck, Building, Deck, DeckDone, Review, Quiz, Me, FirstRun.
- `src/viewer/`: Slides.jsx (7 slides on an 844x326 stage) and Viewer.jsx (landscape player: side panel, narration, progress).
- `src/routes.js`, `src/main.jsx`: hash router (`#/Name?prop=value`).

## Known gaps
- Deck generation, source checking, real upload text extraction and accounts are not built; screens use sample data.
- Settings are saved on the device only.
- Fonts: Sora, IBM Plex Sans, IBM Plex Mono (bundled through @fontsource, so they work offline).
