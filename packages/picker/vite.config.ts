import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

const patchCssFile: Plugin = {
  name: 'patch-css-file',
  apply: 'build',
  writeBundle(_, bundle) {
    const file = 'picker.es.js';

    if (!bundle[file]) return;
    const outDir = path.resolve('dist');
    const filePath = path.resolve(outDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    fs.writeFileSync(filePath, `import "./index.css";\n${content}`);
  },
};

const { FRAMEWORK } = process.env;
const isVue = FRAMEWORK === 'vue';

export default defineConfig({
  plugins: [
    isVue ? vue() : react(),
    dts({
      rollupTypes: true,
    }),
    patchCssFile,
  ],
  base: './',
  optimizeDeps: {
    include: ['typescript'],
  },
  resolve: {
    alias: {
      '@shared': fileURLToPath(new URL('src/shared', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: `src/${FRAMEWORK}/index.ts`,
      name: 'picker',
      fileName: format => `${FRAMEWORK}-picker.${format}.js`,
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
        globals: isVue ? { vue: 'Vue' } : { react: 'React', 'react-dom': 'ReactDOM' },
      },
      external: isVue ? ['vue'] : ['react', 'react-dom'],
    },
  },
});
