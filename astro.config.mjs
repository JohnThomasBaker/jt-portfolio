// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL?.trim() || undefined;

if (site && !/^https?:\/\//.test(site)) {
  throw new Error('SITE_URL must begin with http:// or https://');
}

// https://astro.build/config
export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  devToolbar: { enabled: false },
});
