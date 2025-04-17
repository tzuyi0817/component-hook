import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import dts from 'vite-plugin-dts';
import { FRAMEWORK, libEntry, outDir, rollupExternal, rollupGlobals, vitePlugin } from '../../internal/build-config';

const patchCssFile: Plugin = {
  name: 'patch-css-file',
  apply: 'build',
  writeBundle(_, bundle) {
    const file = 'picker.es.js';

    if (!bundle[file]) return;
    const dist = path.resolve('dist');
    const filePath = path.resolve(dist, `${FRAMEWORK}/${file}`);
    const content = fs.readFileSync(filePath, 'utf-8');

    fs.writeFileSync(filePath, `import "./index.css";\n${content}`);
  },
};

export default defineConfig({
  plugins: [
    vitePlugin(),
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
      entry: libEntry,
      name: 'picker',
      fileName: format => `picker.${format}.js`,
    },
    outDir,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
        globals: rollupGlobals,
      },
      external: rollupExternal,
    },
  },
});
