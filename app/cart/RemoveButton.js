'use client';

import { useRouter } from 'next/navigation';
import { removeCakeFromCart } from './actions';

export default function RemoveFromCart(props) {
  const router = useRouter();

  return (
    <form
      action={async () => {
        router.refresh();
        await removeCakeFromCart(props.cakeId);
      }}
    >
      <button>Remove</button>
    </form>
  );
}
