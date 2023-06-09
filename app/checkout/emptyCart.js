'use server';

import { cookies } from 'next/headers';

export async function emptyCart() {
  await cookies().set({
    name: 'cart',
    value: '',
    maxAge: -1,
  });
}
