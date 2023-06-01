import { expect, test } from '@playwright/test';

test('cart test', async ({ page }) => {
  await page.goto('http://localhost:3000/products/6');

  await expect(page.getByTestId('product-add-to-cart')).toBeVisible();

  await page.getByTestId('product-add-to-cart').click();

  await expect(page.getByTestId('cart-count')).toContainText('1');

  await page.getByRole('button', { name: 'Quantity (max. 10) 1 -' }).click();
  await page.getByTestId('product-add-to-cart').click();

  await expect(page.getByTestId('cart-count')).toContainText('3');

  await page.goto('http://localhost:3000/cart');

  await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();
  await page.getByRole('button', { name: 'Remove' }).click();
  await expect(page.getByTestId('cart-count')).toContainText('0');
});
