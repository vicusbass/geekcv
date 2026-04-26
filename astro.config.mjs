import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vicusbass.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
