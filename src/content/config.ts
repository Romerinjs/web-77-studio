import { defineCollection, z } from 'astro:content';

const modulesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    headline: z.string().optional(),
    subheadline: z.string().optional(),
    module: z.string().optional(),
    whatsappMessage: z.string().optional(),
    seoDescription: z.string().optional()
  })
});

export const collections = {
  modules: modulesCollection
};
