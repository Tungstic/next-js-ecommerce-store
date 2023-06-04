'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import updateCookie from './updateCookie';

export async function addCakeToCart(cakeId, quantity) {
  const cakeQuantityCookie = getCookie('cart');

  const cakeQuantities = !cakeQuantityCookie
    ? []
    : parseJson(cakeQuantityCookie);

  const cakeToUpdate = cakeQuantities.find((cakeQuantity) => {
    return cakeQuantity.id === cakeId;
  });

  // check if cake's in the cart: if not, add; if yes, update its quantity
  updateCookie(cakeToUpdate, cakeQuantities, cakeId, quantity);

  await cookies().set('cart', JSON.stringify(cakeQuantities));
}
