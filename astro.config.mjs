// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import bookshop from '@bookshop/astro-bookshop';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), bookshop()],

  vite: {
    plugins: [tailwindcss()]
  }
});