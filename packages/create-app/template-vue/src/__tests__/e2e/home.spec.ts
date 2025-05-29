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

test('click Vue logo open Vue official website blank tab', async ({ page }) => {
  const link = page.getByLabel(/vue link/i);

  await expect(link).toBeVisible();
  const [popup] = await Promise.all([page.waitForEvent('popup'), link.evaluate((node: HTMLElement) => node.click())]);

  await popup.waitForLoadState();
  await expect(popup).toHaveTitle('Vue.js - The Progressive JavaScript Framework | Vue.js');
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

test('click create-vue link open Vue quick start blank tab', async ({ page }) => {
  const link = page.getByRole('link', { name: 'create-vue' });

  await expect(link).toBeVisible();
  const [popup] = await Promise.all([page.waitForEvent('popup'), link.evaluate((node: HTMLElement) => node.click())]);

  await popup.waitForLoadState();
  await expect(popup).toHaveTitle('Quick Start | Vue.js');
});

test('click Volar link open language-tools github blank tab', async ({ page }) => {
  const link = page.getByRole('link', { name: 'Volar' });

  await expect(link).toBeVisible();
  const [popup] = await Promise.all([page.waitForEvent('popup'), link.evaluate((node: HTMLElement) => node.click())]);

  await popup.waitForLoadState();
  await expect(popup).toHaveTitle(
    'GitHub - vuejs/language-tools: ⚡ High-performance Vue language tooling based-on Volar.js',
  );
});
