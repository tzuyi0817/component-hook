import { dirname, resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import vueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import packageJson from './package.json' with { type: 'json' };

process.env.VITE_APP_VERSION = packageJson.version;
process.env.NODE_ENV = process.env.MOCK ? 'mockServiceWorker' : process.env.NODE_ENV;
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = Date.now().toString();
}

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Components({
      dirs: ['src/components/common'],
      dts: 'src/components.d.ts',
    }),
    vueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), 'src/locales/**'),
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/images/svgIcons')],
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
      },
    },
  },
});
