import { expect, test } from '@jest/globals';
import updateCookie from '../../app/products/[cakeId]/updateCookie';

test('update cookie quantity in the cart', () => {
  const cookieObject = { id: 1, quantity: 2 };
  const cookieArray = [cookieObject];
  const cakeId = 1;
  const quantity = 4;

  updateCookie(cookieObject, cookieArray, cakeId, quantity);

  expect(cookieObject).toStrictEqual({
    id: 1,
    quantity: 6,
  });
});

test('add new cake to cookie array', () => {
  const cookieObject = undefined;
  const cookieArrayEmpty = [];
  const cakeId = 1;
  const quantity = 3;

  updateCookie(cookieObject, cookieArrayEmpty, cakeId, quantity);

  expect(cookieArrayEmpty).toStrictEqual([{ id: 1, quantity: 3 }]);
});
