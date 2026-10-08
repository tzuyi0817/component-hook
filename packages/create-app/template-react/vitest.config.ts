import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['src/**/*.test.tsx'],
      setupFiles: ['./vitest.setup.ts'],
      coverage: {
        provider: 'v8',
        include: ['!src/main.tsx', 'src/**/*.tsx', 'src/**/*.ts'],
      },
    },
  }),
);
