import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { dtsOptions, libEntry, outDir, rollupExternal, rollupGlobals, vitePlugin } from '../../internal/build-config';

export default defineConfig({
  plugins: [vitePlugin(), dts(dtsOptions), visualizer({ gzipSize: true })],
  base: './',
  optimizeDeps: {
    include: ['typescript'],
  },
  build: {
    lib: {
      entry: libEntry,
      name: 'pdf-canvas',
      fileName: format => `pdf-canvas.${format}.js`,
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
