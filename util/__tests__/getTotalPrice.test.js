import { expect, test } from '@jest/globals';
import getTotalPrice from '../../app/cart/getTotalPrice';

test('add subtotal of each cake to get final total', () => {
  const cake1 = { id: 1, name: 'name1', price: 10, quantity: 1 };
  const cake2 = { id: 2, name: 'name2', price: 20, quantity: 2 };
  const order = [cake1, cake2];

  const total = getTotalPrice(order);

  expect(total).toBe(50);
});

test('show total of 0 if order is empty', () => {
  const order = [];
  const total = getTotalPrice(order);

  expect(total).toBe('0');
});
