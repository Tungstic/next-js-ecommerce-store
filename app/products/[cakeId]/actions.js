'use server';

import { cookies } from 'next/dist/client/components/headers';

export async function addCakeToCart(quantity) {
  // logic for getting cookies
  // maybe console.log allCookies to know what it is

  const newCookie = cookies().set('nameOfCookie', quantity);
}
