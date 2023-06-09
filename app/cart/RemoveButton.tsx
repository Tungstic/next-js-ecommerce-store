'use client';

import { useRouter } from 'next/navigation';
import { removeCakeFromCart } from './actions';

type Props = {
  cakeId: number;
};

export default function RemoveFromCart(props: Props) {
  const router = useRouter();

  return (
    <button
      data-test-id={`cart-product-remove-${props.cakeId}`}
      onClick={async () => {
        router.refresh();
        await removeCakeFromCart(props.cakeId);
      }}
    >
      Remove
    </button>
  );
}
