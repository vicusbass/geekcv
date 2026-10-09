import { readdirSync } from 'node:fs';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { externalLinks } from './src/lib/external-links';

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
  // Astro 7 defaults to 'jsx', which drops whitespace between inline elements
  // ("$ cd /work" → "$cd /work"). The templates rely on HTML whitespace rules.
  compressHTML: true,
  image: {
    // Rasterize SVG project shots (whale.svg) to webp/png like Astro 6 did; the
    // OG card needs a PNG. Safe here: every source lives in src/assets.
    dangerouslyProcessSVG: true,
  },
  markdown: {
    // Open external links in a new tab with a safe rel attribute.
    processor: satteri({ hastPlugins: [externalLinks] }),
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
