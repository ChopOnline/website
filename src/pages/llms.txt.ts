import type { APIRoute } from 'astro';
import { getPublishedPosts } from '../lib';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '../consts';

// Plain-text index for AI tools (llms.txt convention; low cost, unproven benefit).
export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();
  const lines = [
    `# ${SITE_NAME}`,
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    '## Blog',
    ...posts.map((p) => `- [${p.data.title}](${SITE_URL}/blog/${p.id}): ${p.data.description}`),
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
