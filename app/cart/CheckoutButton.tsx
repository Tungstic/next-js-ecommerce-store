'use client';

import { useRouter } from 'next/navigation';

export default function CheckoutButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/checkout')}>
      Go to checkout
    </button>
  );
}
