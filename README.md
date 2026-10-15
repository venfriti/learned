# Learned

Learned is a proof-of-concept visual learning experience for phones. The repository contains a static presentation site and an installable React progressive web app (PWA) with a sample lesson on computer network protocols.

## Run the app locally

```powershell
cd webapp
npm install
npm run dev
```

To create and preview a production build, run `npm run build` and then `npm run preview` from `webapp/`.

## Project structure

- `site/`: static presentation, `/try/` demo, downloads, images, fonts, and the packaged app under `site/app/`.
- `webapp/`: React and Vite source for the installable app.
- `webapp/src/screens/`: app screens.
- `webapp/src/viewer/`: lesson slides and landscape player.
- `webapp/src/data.js`: sample lesson, narration, side pages, review cards, and quiz.
- `site/present.js` and `site/present.css`: browser-rendered presentation and its visual styles.
- `.agents/skills/`: reusable project guidance for app maintenance, browser-rendered presentations, and site publishing.

## Updating the packaged app

Make app changes in `webapp/`, then build from that directory with `npm run build`. Vite writes the production output to `webapp/dist/`. Update `site/app/` with the contents of that build before publishing the whole static site; retain `site/_headers`.

## Deployment

The repository has Cloudflare configuration for two different deployment paths. Choose the intended target before publishing:

- **Cloudflare Pages direct upload:** upload the `site/` directory as the site's assets. The homepage is the presentation; `/try/` opens the demo and `/app/` opens the installable app.
- **Cloudflare Workers static assets:** `wrangler.jsonc` points Wrangler at `./site` and configures `learned.venfriti.com` as a custom domain. Confirm the target account and domain before deploying with Wrangler.

These are separate Cloudflare products and workflows. Do not assume a Pages upload also applies the Wrangler Worker configuration. Before a release, check that the presentation links and QR code point to the intended production `/app/` URL. The `site/_headers` file contains cache settings and should stay in the uploaded site directory.

For a Pages direct upload, create a Pages project in the Cloudflare dashboard and choose direct upload of the `site/` directory. After deployment, open `/#17` and scan its QR code to confirm it opens the production `/app/` path. On a phone, open `/app/` and use **Add to Home Screen** to install the PWA.

## Prototype limits and content notes

Deck generation, source checking, real document text extraction, and accounts are not implemented. Settings are saved on the device. The computer network protocols lesson is draft content and has not been reviewed by a lecturer. The ₦600 per GB figure in the presentation is labeled as a team estimate and should be replaced with a cited source before it is presented as fact.
