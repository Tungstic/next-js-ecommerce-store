import { expect, test } from '@jest/globals';
import findOrderedCakes from '../../app/cart/findOrderedCakes';

test('combine cakes from DB with their quantity if ordered', () => {
  const order = [];
  const cookieArray = [
    { id: 1, quantity: 1 },
    { id: 2, quantity: 2 },
  ];
  const cake1 = { id: 1, name: 'name1', price: 10 };
  const cake2 = { id: 2, name: 'name2', price: 20 };
  const cakesFromDB = [cake1, cake2];

  const result = findOrderedCakes(order, cookieArray, cakesFromDB);

  expect(result).toStrictEqual([
    { id: 1, name: 'name1', price: 10, quantity: 1 },
    { id: 2, name: 'name2', price: 20, quantity: 2 },
  ]);
});
