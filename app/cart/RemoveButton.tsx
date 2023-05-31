'use client';

import { useRouter } from 'next/navigation';
import { removeCakeFromCart } from './actions';

type Props = {
  cakeId: number;
};

export default function RemoveFromCart(props: Props) {
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
