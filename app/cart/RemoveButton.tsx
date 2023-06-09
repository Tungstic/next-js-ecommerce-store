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
      onClick={async () => {
        router.refresh();
        await removeCakeFromCart(props.cakeId);
      }}
    >
      Remove
    </button>
  );
}
