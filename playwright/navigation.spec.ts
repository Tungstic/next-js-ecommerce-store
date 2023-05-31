import { expect, test } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('http://localhost:3000/products');

  await expect(page.locator('[data-test-id^="product"]')).toHaveCount(6);
});
