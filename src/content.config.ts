import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    index: z.number(),
    category: z.string(),
    year: z.string(),
    client: z.string(),
    role: z.string(),
    location: z.string(),
    overview: z.object({
      intro: z.string(),
      body: z.string(),
    }),
    technicalSpec: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })),
    archiveVisuals: z.array(z.object({
      src: z.string(),
      badge: z.string(),
      caption: z.string(),
      label: z.string(),
    })),
    heroImage: z.string().optional(),
    image: z.string().optional(),
  }),
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/experiments' }),
  schema: z.object({
    title: z.string(),
    index: z.number(),
    status: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    github: z.string().optional(),
    website: z.string().optional(),
  }),
});

export const collections = { projects, experiments };
