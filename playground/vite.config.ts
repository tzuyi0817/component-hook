import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

const currentUrl = new URL(import.meta.url);
const rootDir = resolve(fileURLToPath(currentUrl), '..', '..');

export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '@component-hook/picker': resolve(rootDir, 'packages/picker/index.ts'),
    },
  },
});
