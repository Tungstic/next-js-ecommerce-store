'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { addCakeToCart } from './actions';
import styles from './addToCart.module.scss';

type Props = {
  cakeId: number;
};

export default function AddToCart(props: Props) {
  // declare state variable for quantity
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  function incrementCake() {
    setQuantity(quantity + 1);
  }
  function decrementCake() {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  }

  /*   function typeInQuantity(event: FormEvent<HTMLInputElement>) {
    if (Number(event.currentTarget.value) >= 1) {
      setQuantity(Number(event.currentTarget.value));
    }
  } */

  return (
    <>
      <label className={styles.moreOrLessCake}>
        Quantity
        <button
          aria-label="Add 1 to cake quantity"
          onClick={() => incrementCake()}
        >
          +
        </button>
        <input
          name="show-quantity"
          data-test-id="product-quantity"
          value={quantity}
          onChange={(event) => {
            Number(event.currentTarget.value) >= 0
              ? setQuantity(Number(event.currentTarget.value))
              : setQuantity(1);
          }}
        />
        <button
          aria-label="Subtract 1 from cake quantity"
          onClick={() => decrementCake()}
        >
          -
        </button>
      </label>
      <form
        name="cake-to-cookies"
        action={async () => {
          router.refresh();
          await addCakeToCart(props.cakeId, quantity);
        }}
      >
        <button data-test-id="product-add-to-cart">Add to cart</button>
      </form>
    </>
  );
}
