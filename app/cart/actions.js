'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function removeCakeFromCart(cakeId) {
  const cakeQuantityCookie = getCookie('nameOfCookie');

  const cakeQuantities = !cakeQuantityCookie
    ? []
    : parseJson(cakeQuantityCookie);

  const cakeToRemove = cakeQuantities.findIndex((obj) => {
    return obj.id === cakeId;
  });

  console.log(cakeToRemove);

  cakeQuantities.splice(cakeToRemove, 1);

  await cookies().set('nameOfCookie', JSON.stringify(cakeQuantities));
}
