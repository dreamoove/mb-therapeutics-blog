import { defineConfig } from 'astro/config';
import rss from '@astrojs/rss';

export default defineConfig({
  site: 'https://blog.mb-therapeutics.com',
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  }
});
