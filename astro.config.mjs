import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // The site's public address. Canonical URLs, Open Graph URLs and the sitemap
  // are all built from this, so when the real domain is ready, change it here only.
  site: 'https://forge-website-d6f.pages.dev',

  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});
