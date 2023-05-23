'use client';

import { useRouter } from 'next/navigation';

export default function ConfirmOrderButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/checkout/thankYou')}>
      Confirm order
    </button>
  );
}
