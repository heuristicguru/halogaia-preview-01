export default defineConfig({
  site: 'https://heuristicguru.github.io/halogaia-preview-01',
  base: '/halogaia-preview-01/',
  integrations: [tailwind(), sitemap()],
  output: 'static'
});
