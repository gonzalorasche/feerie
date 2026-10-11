// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// En GitHub Actions (Pages de proyecto) el sitio vive bajo /feerie.
// Cuando se conecte feerie.com: sacar GITHUB_PAGES del workflow y volver a site feerie.com.
const onPages = !!process.env.GITHUB_PAGES;

export default defineConfig({
  site: onPages ? 'https://gonzalorasche.github.io' : 'https://feerie.com',
  base: onPages ? '/feerie' : '/',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  vite: {
    plugins: [tailwindcss()],
  },
});
