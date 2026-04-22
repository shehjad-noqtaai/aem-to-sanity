# AEM fixture set — David's Bridal

Captured by `packages/aem-to-sanity-core/scripts/capture-fixtures.ts`.
Replay these offline with `AEM_FIXTURES_DIR=examples/davids-bridal/fixtures/aem aem-extract`.

## URL → filename mapping

Each AEM URL is encoded as:

```
<baseUrl><relPath>   →   <relPath with "/" replaced by "__", leading "/" dropped>
```

Examples:

```
GET  /content/dbi.infinity.json              → content__dbi.infinity.json
GET  /content/dbi/en/home.infinity.json      → content__dbi__en__home.infinity.json
GET  /content/dbi.4.json                     → content__dbi.4.json
```

Non-200 responses (404, 300, 500) are stored in a sidecar file named
`<filename>.meta.json` with shape:

```json
{ "status": 300, "body": "..." }
{ "status": 404 }
```

A missing fixture (no body file, no meta) replays as 404 — fixture mode is closed-world.

## Captured URLs (24)

- `/apps/dbi/components/content/about/_cq_dialog.infinity.json`
- `/apps/dbi/components/content/carousel/_cq_dialog.infinity.json`
- `/apps/dbi/components/content/hero/_cq_dialog.infinity.json`
- `/content/dbi.infinity.json`
- `/content/dbi/en.infinity.json`
- `/content/dbi/en/500/jcr:content/image.infinity.json`
- `/content/dbi/en/FAQ/alterations-services/jcr:content/root/responsivegrid/faq_side_navigation.infinity.json`
- `/content/dbi/en/FAQ/alterations-store-services/jcr:content/root/responsivegrid/faq_side_navigation.infinity.json`
- `/content/dbi/en/FAQ/create-your-account/jcr:content/root/responsivegrid/faq_side_navigation.infinity.json`
- `/content/dbi/en/FAQ/creating-your-account/jcr:content/root/responsivegrid/faq_side_navigation.infinity.json`
- `/content/dbi/en/FAQ/managing-your-account/jcr:content/root/responsivegrid/faq_side_navigation.infinity.json`
- `/content/dbi/en/FAQ/order-status/jcr:content/root/responsivegrid/faq_side_navigation.infinity.json`
- `/content/dbi/en/about-us.infinity.json`
- `/content/dbi/en/categories/inspiration-page/jcr:content/root/responsivegrid/cq:responsive.infinity.json`
- `/content/dbi/en/homepage.infinity.json`
- `/content/dbi/en/homepage/jcr:content/image.infinity.json`
- `/content/dbi/en/homepage/jcr:content/root/responsivegrid/cq:responsive.infinity.json`
- `/content/dbi/en/inspiration-page/jcr:content/root/responsivegrid/cq:responsive.infinity.json`
- `/content/dbi/en/page-not-found/jcr:content/image.infinity.json`
- `/content/dbi/en/plp-static/jcr:content/image.infinity.json`
- `/content/dbi/en/product/jcr:content/products.infinity.json`
- `/content/dbi/en/stores.infinity.json`
- `/content/dbi/en/stores0/jcr:content/image.infinity.json`
- `/content/does-not-exist-abc123.infinity.json`

## Ambiguous (HTTP 300) responses (2)

- `/content/dbi.infinity.json`  → resolved to `/content/dbi.4.json` (depth 4)
- `/content/dbi/en.infinity.json`  → resolved to `/content/dbi/en.6.json` (depth 6)

## Regenerating

```
AEM_ENV=author AEM_AUTHOR_URL=... AEM_AUTHOR_USERNAME=... AEM_AUTHOR_PASSWORD=... \
  pnpm --filter aem-to-sanity-core tsx scripts/capture-fixtures.ts
```
