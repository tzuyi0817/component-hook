import path from 'node:path';
import fs from 'node:fs';
import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

const { FRAMEWORK } = process.env;
const isVue = FRAMEWORK === 'vue';

const patchCssFile: Plugin = {
  name: 'patch-css-file',
  apply: 'build',
  writeBundle(_, bundle) {
    const file = 'picker.es.js';

    if (!bundle[file]) return;
    const outDir = path.resolve('dist');
    const filePath = path.resolve(outDir, `${FRAMEWORK}/${file}`);
    const content = fs.readFileSync(filePath, 'utf-8');

    fs.writeFileSync(filePath, `import "./index.css";\n${content}`);
  },
};

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
  build: {
    lib: {
      entry: `src/${FRAMEWORK}/index.ts`,
      name: 'picker',
      fileName: format => `picker.${format}.js`,
    },
    outDir: `dist/${FRAMEWORK}`,
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
