import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/__tests__/unit/**/*.test.ts'],
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      exclude: ['docs/**', '**/*.config.cjs'],
    },
  },
});
