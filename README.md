# choponline.co.uk

ChopOnline's website and blog. Astro 5 static site, deployed on Vercel from `main`.

## Write a post
1. Copy `src/content/blog/example-post-template.md` to `src/content/blog/<url-slug>.md`.
2. Fill in the frontmatter (title ≤70 chars, description 50–160 chars, `pubDate`, optional `faq`), set `draft: false`.
3. Branch → commit → pull request. Vercel posts a preview link on the PR. Merge to publish.

Rules for structure (SEO + AI answers) are in `CLAUDE.md`.

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:4321. `npm run build` checks every post's frontmatter. Needs Node 20.3+ (Astro 5).

## What's built in
- Article (`BlogPosting`), breadcrumb and FAQ structured data on every post; Organization + WebSite on the home page
- `sitemap-index.xml`, `rss.xml`, `robots.txt` (all crawlers allowed), `llms.txt`
- Canonical URLs, Open Graph tags, UK English dates
