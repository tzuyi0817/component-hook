import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import './scripts/build-info/index.ts';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svg-icons')],
    }),
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
              test: /node_modules[\\/](?:react|react-dom|react-i18next|react-router-dom|zustand|i18next)[\\/]/,
            },
            {
              name: 'vendor',
              test: /node_modules[\\/]axios[\\/]/,
            },
          ],
        },
      },
    },
  },
});
