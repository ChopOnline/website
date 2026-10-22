import rss from '@astrojs/rss';
import { getPublishedPosts } from '../lib';
import { SITE_NAME, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const posts = await getPublishedPosts();
  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}`,
    })),
  });
}
