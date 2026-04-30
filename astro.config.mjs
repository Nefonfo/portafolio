import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE_PATH,
  integrations: [tailwind()],
});
