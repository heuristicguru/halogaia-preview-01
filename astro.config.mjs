import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://heuristicguru.github.io/halogaia-preview-01',
  base: '/halogaia-preview-01/',   // 👈 must exactly match your repo name
  integrations: [tailwind(), sitemap()],
  output: 'static'
});
