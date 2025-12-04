import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    year: z.string(),
    thumbnail: z.string().optional(),
    metrics: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  'case-studies': caseStudies,
};
