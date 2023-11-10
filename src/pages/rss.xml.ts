import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection('blog');
  const sortedPosts = blog
    .filter((p) => p.data.draft !== true)
    .sort(
      (a, b) =>
        new Date(b.data.date).valueOf() -
        new Date(a.data.date).valueOf()
    );
  return rss({
    title: 'PhD20',
    description: 'Ideas and resources for Dungeons & Dragons and other tabletop roleplaying games',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
          'img',
          'pre',
          'code',
          'span',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
        ]),
        allowedAttributes: { img: ['src', 'alt'] },
        allowedSchemes: ['data', 'http', 'https'],
        allowedIframeHostnames: ['www.youtube.com'],
      }),
    })),
  });
}
