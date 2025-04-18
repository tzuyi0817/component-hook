import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/__tests__/e2e',
  /* If gets stuck during the test, it will fail if it exceeds the timeout time. */
  timeout: 30 * 1000,
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'pnpm dev:mock',
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        ...devices['Macbook Pro'],
      },
    },

    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        ...devices['Macbook 11'],
      },
    },

    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        ...devices['iPhone SE'],
      },
    },
  ],
});
