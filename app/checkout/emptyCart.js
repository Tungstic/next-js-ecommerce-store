'use server';

import { cookies } from 'next/headers';

/* import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json'; */

export async function emptyCart() {
  await cookies().set({
    name: 'cart',
    value: '',
  });
}
