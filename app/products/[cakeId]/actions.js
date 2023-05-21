'use server';

import { cookies } from 'next/dist/client/components/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function addCakeToCart(cakeId, quantity) {
  // logic for getting cookies
  // maybe console.log allCookies to know what it is

  const cakeQuantityCookie = getCookie('nameOfCookie');

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

  await cookies().set('nameOfCookie', JSON.stringify(cakeQuantities));
}
