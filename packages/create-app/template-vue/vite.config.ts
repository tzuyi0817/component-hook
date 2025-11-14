import { dirname, resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import vueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import './scripts/build-info';

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
    visualizer({ gzipSize: true }),
  ],
  esbuild: {
    pure: ['console.log'],
    drop: ['debugger'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        entryFileNames: 'entries/[name].[hash].js',
        manualChunks: {
          core: ['vue', 'vue-router', 'pinia', 'pinia-plugin-persistedstate', 'vue-i18n'],
          vender: ['axios', '@intlify/unplugin-vue-i18n/messages'],
        },
      },
    },
  },
});
