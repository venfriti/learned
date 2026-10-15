---
name: publish-learned-site
description: Prepare or publish the Learned presentation site and its embedded app to the configured hosting target.
---

# Prepare the Learned site for publishing

Use this skill when preparing a release or deploying the static presentation site and embedded PWA.

## Project-specific context

- `site/` is the static site root. It contains the presentation, `/try/` page, downloads, fonts, images, and the built PWA at `/app/`.
- `webapp/` is the app source. Build it there before packaging changes into `site/app/`.
- `README.md` documents a Cloudflare Pages direct-upload option using the `site/` folder.
- `wrangler.jsonc` describes a Cloudflare Worker static-assets deployment and a custom domain. This differs from the Pages instructions; determine the intended product and deployment method before any live publish.

## Release guidance

- Review the current source and README deployment notes before changing generated files.
- Build the PWA from `webapp/` when app source has changed, and ensure `site/app/` contains that build before publishing the whole site.
- For browser-first slide decks, follow the project skill [presentations-as-code](../presentations-as-code/SKILL.md): render structured slide content on the device with HTML/CSS/JS, and measure the shipped payload before publishing.
- Retain `site/_headers` in the static output.
- Confirm the production origin and app path before validating QR destinations, links, or custom-domain configuration.
- The presentation and sample lesson identify themselves as a proof of concept. Do not remove that context or imply draft claims have been externally validated.
- Do not publish or push a release unless the user has authorized that external action.
