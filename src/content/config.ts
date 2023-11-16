// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    title: z.string({
      required_error: "Required frontmatter missing: title",
      invalid_type_error: "title must be a string",
    }),
    date: z.date({
      required_error: "Required frontmatter missing: date",
      invalid_type_error:
        "date must be written in yyyy-mm-dd format without quotes: For example, Jan 22, 2000 should be written as 2000-01-22.",
    }),
    description: z.optional(z.string()),
    ogImagePath: z.optional(z.string()),
    ogImageAltText: z.optional(z.string()),
    ogImageWidth: z.optional(z.number()),
    ogImageHeight: z.optional(z.number()),
    canonicalUrl: z.optional(z.string()),
    tags: z.array(z.string()),
    external: z.optional(z.boolean()),
    published: z.optional(z.boolean()),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};