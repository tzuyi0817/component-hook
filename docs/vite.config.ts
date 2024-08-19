import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { pickerPackage, pdfCanvasPackage } from '../internal/paths';

export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
    }),
  ],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '@component-hook/picker': pickerPackage,
      '@component-hook/pdf-canvas': pdfCanvasPackage,
    },
  },
});
