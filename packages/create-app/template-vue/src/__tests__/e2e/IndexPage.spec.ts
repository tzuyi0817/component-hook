import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('click Vite logo open Vite official website blank tab', async ({ page, context }) => {
  await page.getByRole('link', { name: 'Vite logo' }).click();
  const newPage = await context.waitForEvent('page');
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle('Vite | Next Generation Frontend Tooling');
});

test('click Vue logo open Vue official website blank tab', async ({ page, context }) => {
  await page.getByTitle('#icon-vue').click();
  const newPage = await context.waitForEvent('page');
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle('Vue.js - The Progressive JavaScript Framework | Vue.js');
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

test('click create-vue link open Vue quick start blank tab', async ({ page, context }) => {
  await page.getByRole('link', { name: 'create-vue' }).click();
  const newPage = await context.waitForEvent('page');
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle('Quick Start | Vue.js');
});

test('click Volar link open language-tools github blank tab', async ({ page, context }) => {
  await page.getByRole('link', { name: 'Volar' }).click();
  const newPage = await context.waitForEvent('page');
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle(
    'GitHub - vuejs/language-tools: ⚡ High-performance Vue language tooling based-on Volar.js',
  );
});
