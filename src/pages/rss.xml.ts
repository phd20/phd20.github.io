import rss from '@astrojs/rss';
import { blog } from '../lib/markdoc/frontmatter.schema';
import { readAll } from '../lib/markdoc/read';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../config';
import Markdoc from '@markdoc/markdoc';
import sanitizeHtml from 'sanitize-html';

export const get = async () => {
  const posts = await readAll({
    directory: 'blog',
    frontmatterSchema: blog,
  });

  const sortedPosts = posts
    .filter((p) => p.frontmatter.draft !== true)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).valueOf() -
        new Date(a.frontmatter.date).valueOf()
    );

  let baseUrl = SITE_URL;
  // removing trailing slash if found
  // https://example.com/ => https://example.com
  baseUrl = baseUrl.replace(/\/+$/g, '');

  const rssItems = sortedPosts.map(
    ({ frontmatter, slug, content: postContent }) => {
      if (frontmatter.external) {
        const title = frontmatter.title;
        const pubDate = frontmatter.date;
        const link = frontmatter.url;

        return {
          title,
          pubDate,
          link,
        };
      }

      const title = frontmatter.title;
      const pubDate = frontmatter.date;
      const description = frontmatter.description;
      const link = `${baseUrl}/blog/${slug}`;
      const content = sanitizeHtml(Markdoc.renderers.html(postContent), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([
          'img',
          'pre',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
        ]),
        allowedAttributes: { img: ['src'] },
        allowedSchemes: ['data', 'http', 'https'],
        allowedIframeHostnames: ['www.youtube.com', 'www.twitter.com'],
      });

      return {
        title,
        pubDate,
        description,
        link,
        content,
      };
    }
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: baseUrl,
    items: rssItems,
  });
};
