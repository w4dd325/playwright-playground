import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Should fetch a random joke', async ({ request }) => {
  const baseUrl = 'https://api.chucknorris.io/jokes/random';
  const response = await request.get(baseUrl);
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('value');
  expect(typeof responseBody.value).toBe('string');
  expect(responseBody.value.length).toBeGreaterThan(0);
});
