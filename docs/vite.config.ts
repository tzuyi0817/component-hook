import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { pdfCanvasPackage, pickerPackage, reactPlayground } from '../internal/paths';

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
      '@component-hook/picker': `${pickerPackage}/src`,
      '@component-hook/pdf-canvas': `${pdfCanvasPackage}/src`,
      '@react-playground': reactPlayground,
    },
  },
});
