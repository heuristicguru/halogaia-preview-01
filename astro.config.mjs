import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Set these to your GitHub Pages details before deploying
export default defineConfig({
  site: 'https://heuristicguru.github.io/halogaia-preview-01',
  base: '/halogaia-preview-01/',
  integrations: [tailwind(), sitemap()],
  output: 'static'
});
