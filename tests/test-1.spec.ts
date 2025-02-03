import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('heading', { name: 'Playwright enables reliable' }).click();
  await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' }).locator('span')).toBeVisible();
  await expect(page.locator('h1')).toMatchAriaSnapshot(`- heading "Playwright enables reliable end-to-end testing for modern web apps." [level=1]`);
});