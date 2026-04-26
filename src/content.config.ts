import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const job = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/job' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    companyUrl: z.string().url().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kind: z.string(),
    year: z.string(),
    blurb: z.string(),
    url: z.string().url(),
    role: z.string(),
    stack: z.array(z.string()).default([]),
    shot: z.string().optional(),
    order: z.number().default(0),
    asciiFallback: z.string().optional(),
  }),
});

export const collections = { blog, job, projects };
