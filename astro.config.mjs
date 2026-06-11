import { readdirSync } from 'node:fs';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

const SITE = 'https://www.vicusbass.com';

// Blog posts render on demand (cookie-based theme), so the sitemap can't
// auto-discover them from the static build. Derive their URLs from the content
// directory so new posts are picked up automatically.
const blogPages = readdirSync('./src/content/blog')
  .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
  .map((f) => `${SITE}/blog/${f.replace(/\.mdx?$/, '')}/`);

export default defineConfig({
  site: SITE,
  adapter: vercel(),
  markdown: {
    // Open external links in a new tab with a safe rel attribute.
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]],
  },
  integrations: [
    sitemap({
      // The five top-level routes render on demand (cookie-based theme), so the
      // sitemap can't auto-discover them from the static build output. List them
      // explicitly. Detail routes (/blog/*, /projects/*) stay prerendered and
      // are picked up automatically.
      customPages: [
        `${SITE}/`,
        `${SITE}/projects`,
        `${SITE}/cv`,
        `${SITE}/blog`,
        `${SITE}/contact`,
        ...blogPages,
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
