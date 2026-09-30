import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

const workspaceAliases = [
  {
    find: /^@component-hook\/eslint-plugin$/,
    replacement: fileURLToPath(new URL('packages/eslint-plugin/index.ts', import.meta.url)),
  },
];

export default defineConfig({
  plugins: [vue(), react()],
  resolve: {
    alias: workspaceAliases,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.ts?(x)'],
    exclude: ['packages/create-app/template-*/**', '**/dist', '**/node_modules'],
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      exclude: ['internal', '**/dist', '**/*.config.?(c){js,ts}', 'packages/create-app/template-*/**'],
    },
  },
});
