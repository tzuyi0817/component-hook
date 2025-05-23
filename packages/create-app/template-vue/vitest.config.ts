import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['src/__tests__/unit/**/*.test.ts'],
      setupFiles: ['./vitest.setup.ts'],
      coverage: {
        provider: 'v8',
        include: ['!src/main.ts', 'src/**/*.ts', 'src/**/*.vue'],
      },
    },
  }),
);
