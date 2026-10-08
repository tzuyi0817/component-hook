import { dirname, resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import vueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { msw } from 'msw/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import './scripts/build-info/index.ts';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    tailwindcss(),
    vueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), 'src/locales/**'),
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svg-icons')],
    }),
    msw(),
    visualizer({ gzipSize: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
  build: {
    rolldownOptions: {
      treeshake: {
        manualPureFunctions: ['console.log'],
      },
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        entryFileNames: 'entries/[name].[hash].js',
        codeSplitting: {
          groups: [
            {
              name: 'core',
              test: /node_modules[\\/](?:vue|vue-router|pinia|pinia-plugin-persistedstate|vue-i18n)[\\/]/,
            },
            {
              name: 'vendor',
              test: /node_modules[\\/]axios[\\/]|unplugin-vue-i18n[\\/]messages/,
            },
          ],
        },
      },
    },
  },
});
