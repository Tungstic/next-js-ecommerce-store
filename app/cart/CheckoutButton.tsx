'use client';

import { useRouter } from 'next/navigation';

export default function CheckoutButton() {
  const router = useRouter();

  return (
    <button
      data-test-id="cart-checkout"
      type="button"
      onClick={() => router.push('/checkout')}
    >
      Go to checkout
    </button>
  );
}
