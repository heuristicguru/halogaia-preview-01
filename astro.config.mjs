import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Set these to your GitHub Pages details before deploying
export default defineConfig({
  site: 'https://example.github.io/your-repo',
  base: '/your-repo/',
  integrations: [tailwind(), sitemap()],
  output: 'static'
});
