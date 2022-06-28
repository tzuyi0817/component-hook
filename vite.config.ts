import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import typescript from '@rollup/plugin-typescript';
import dts from 'vite-plugin-dts';

const resolvePath = (str: string) => resolve(__dirname, str);

export default defineConfig({
  plugins: [
    typescript({ tsconfig: './tsconfig.json'}),
    vue(),
    dts(),
  ],
  base: "./",
  resolve: {
    alias: {
      "@": resolvePath("src"),
    }
  },
  build: {
    lib: {
      entry: resolvePath("src/index.ts"),
      name: 'vue3-picker',
      fileName: (format) => `vue3-picker.${format}.js`
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        sourcemap: false,
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
