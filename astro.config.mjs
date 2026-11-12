import { readdirSync } from 'node:fs';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { externalLinks } from './src/lib/external-links';

const SITE = 'https://www.vicusbass.com';
const SERVICES_EN = `${SITE}/services`;
const SERVICES_RO = `${SITE}/ro/servicii`;
const TOP_LEVEL_SLASHED =
  /^https:\/\/www\.vicusbass\.com\/(services|projects|cv|blog|contact|ro\/servicii)\/$/;

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
      // Astro 7 also auto-discovers the on-demand top-level routes, but with a
      // trailing slash ("/cv/"). Keep only the slashless canonical versions below.
      filter: (page) => !TOP_LEVEL_SLASHED.test(page),
      // /services and /ro/servicii are translations of each other.
      serialize(item) {
        if (item.url === SERVICES_EN || item.url === SERVICES_RO) {
          item.links = [
            { url: SERVICES_EN, lang: 'en' },
            { url: SERVICES_RO, lang: 'ro' },
          ];
        }
        return item;
      },
      // The six top-level routes render on demand (cookie-based theme), so the
      // sitemap can't auto-discover them from the static build output. List them
      // explicitly. Detail routes (/blog/*, /projects/*) stay prerendered and
      // are picked up automatically.
      customPages: [
        `${SITE}/`,
        SERVICES_EN,
        SERVICES_RO,
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
