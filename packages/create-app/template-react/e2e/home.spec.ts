import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('click Vite logo open Vite official website blank tab', async ({ page }) => {
  const link = page.getByRole('link', { name: /vite logo/i });

  await expect(link).toBeVisible();
  const [popup] = await Promise.all([page.waitForEvent('popup'), link.evaluate((node: HTMLElement) => node.click())]);

  await popup.waitForLoadState();
  await expect(popup).toHaveTitle('Vite | Next Generation Frontend Tooling');
});

test('click React logo open React official website blank tab', async ({ page }) => {
  await page.addStyleTag({ content: `* { animation: none !important; }` });
  const link = page.getByLabel(/react link/i);

  await expect(link).toBeVisible();
  const [popup] = await Promise.all([page.waitForEvent('popup'), link.evaluate((node: HTMLElement) => node.click())]);

  await popup.waitForLoadState();
  await expect(popup).toHaveTitle('React');
});

test('homepage count button interact', async ({ page }) => {
  await page.getByRole('button', { name: 'count is 0' }).click();
  await expect(page.getByRole('button', { name: 'count is 1' })).toBeVisible();
  await page.getByRole('button', { name: 'count is 1' }).click();
  await expect(page.getByRole('button', { name: 'count is 2' })).toBeVisible();
});

test('locale change interact', async ({ page }) => {
  await page.getByRole('button', { name: 'English' }).click();
  await expect(page.getByRole('button', { name: '中文' })).toBeVisible();
  await page.getByRole('button', { name: '中文' }).click();
  await expect(page.getByRole('button', { name: 'English' })).toBeVisible();
});
