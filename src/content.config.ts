import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'it']),
    slugId: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    readingTime: z.number().default(3),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'it']),
    slugId: z.string(),
    category: z.enum(['Data Visualization', 'Data Science', 'Machine Learning']),
    tags: z.array(z.string()),
    image: z.string(),
    externalUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
