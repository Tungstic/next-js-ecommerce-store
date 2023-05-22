'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function addCakeToCart(cakeId, quantity) {
  const cakeQuantityCookie = getCookie('cart');

  const cakeQuantities = !cakeQuantityCookie
    ? []
    : parseJson(cakeQuantityCookie);

  const cakeToUpdate = cakeQuantities.find((cakeQuantity) => {
    return cakeQuantity.id === cakeId;
  });

  if (cakeToUpdate) {
    cakeToUpdate.quantity = quantity;
  } else {
    cakeQuantities.push({
      id: cakeId,
      quantity,
    });
  }

  await cookies().set('cart', JSON.stringify(cakeQuantities));
}
