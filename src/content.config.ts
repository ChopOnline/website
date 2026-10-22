import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(50).max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('ChopOnline'),
    tags: z.array(z.string()).default([]),
    // Short Q&A pairs rendered on the page and as FAQPage schema (AEO)
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
