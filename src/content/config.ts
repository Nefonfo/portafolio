import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    company: z.string(),
    period: z.string(),
    location: z.string(),
    role: z.string(),
    tags: z.array(z.string()),
  }),
});

const education = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    period: z.string(),
    institution: z.string(),
    degree: z.string(),
  }),
});

export const collections = { experience, education };
