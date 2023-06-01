import { expect, test } from '@playwright/test';

test('checkout test', async ({ page }) => {
  await page.goto('http://localhost:3000/checkout');

  await page.getByTestId('checkout-first-name').fill('first name');
  await page.getByTestId('checkout-last-name').fill('last name');
  await page.getByTestId('checkout-email').fill('email');
  await page.getByTestId('checkout-address').fill('address');
  await page.getByTestId('checkout-city').fill('city');
  await page.getByTestId('checkout-postal-code').fill('postal');
  await page.getByTestId('checkout-country').fill('country');
  await page.getByTestId('checkout-credit-card').fill('credit');
  await page.getByTestId('checkout-expiration-date').fill('date');
  await page.getByTestId('checkout-security-code').fill('code');

  await expect(page.getByTestId('checkout-confirm-order')).not.toBeDisabled();

  await page.getByTestId('checkout-confirm-order').click();
  // await page.waitForURL('http://localhost:3000/checkout/thank-you');
  await page.goto('http://localhost:3000/checkout/thank-you');
  await expect(page).toHaveURL('http://localhost:3000/checkout/thank-you');
});
