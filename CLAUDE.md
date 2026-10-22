# choponline.co.uk: rules for Claude

Static Astro 5 blog. Posts are Markdown in `src/content/blog/`; the schema is in `src/content.config.ts` (the build fails on bad frontmatter).

## Publishing
- Never push straight to `main`. Branch → commit → PR → Vercel preview → Rav (or Jas) merges.
- Run `npm run build` before opening a PR.
- Images go in `public/images/<post-slug>/` (keep them under ~300KB, descriptive file names, alt text always).

## Post structure (SEO + AEO)
1. **Title** = the question or search phrase a person actually types (≤70 chars).
2. **Opening 2 sentences** answer it directly. No preamble.
3. **H2s phrased as questions**; the first 1–2 sentences under each H2 answer it on their own (quotable without context).
4. One claim per sentence; name things explicitly (no "it"/"this" pointing back).
5. Lists for steps, tables for comparisons, real numbers with sources.
6. **`faq` frontmatter**: 3–5 real follow-up questions; answers ≤50 words. Rendered on the page and as FAQ schema.
7. Link to the relevant ChopOnline product or Etsy listing once, naturally; disclose own products plainly.
8. UK English. `updatedDate` whenever facts change.
9. No invented stats, reviews or testimonials.
10. Answer under each H2 in about 40–60 words before any detail; keep the core answer in the top third of the page.
11. Link every statistic to its source inline, and say when a source is a company survey rather than official data.
12. Author is always ChopOnline, never an AI persona.

Content plan and the evidence behind these rules: `docs/content-plan.md`.
