import { defineConfig, type Plugin } from 'vite';
import path from 'node:path';
import fs from 'node:fs';
import vue from '@vitejs/plugin-vue';
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

export default defineConfig({
  plugins: [
    vue(),
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
      entry: 'index.ts',
      name: 'picker',
      fileName: format => `picker.${format}.js`,
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
        globals: {
          vue: 'Vue',
        },
      },
      external: ['vue'],
    },
  },
});
