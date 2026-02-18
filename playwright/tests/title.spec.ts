import { test, expect } from '@playwright/test';

test('playwright.dev: заголовок страницы соответствует ожидаемому', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
});
