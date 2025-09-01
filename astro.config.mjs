import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://example.github.io/halogaia-redesign',
  base: '/halogaia-redesign/',
  integrations: [tailwind(), sitemap()],
  output: 'static'
});
