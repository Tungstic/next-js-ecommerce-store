'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { addCakeToCart } from './actions';
import styles from './addToCart.module.scss';

type Props = {
  cakeId: number;
};

export default function AddToCart(props: Props) {
  // declare state variable for quantity
  const [quantity, setQuantity] = useState('1');
  const router = useRouter();
  /*
  function incrementCake() {
    setQuantity(quantity + 1);
  }
  function decrementCake() {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  } */

  console.log(typeof quantity);

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const result = event.target.value.replace(/\D/g, '');

    setQuantity(result);
  }

  return (
    <>
      <label className={styles.moreOrLessCake}>
        Quantity
        {/*     <button
          aria-label="Add 1 to cake quantity"
          onClick={() => incrementCake()}
        >
          +
        </button> */}
        <input
          name="show-quantity"
          data-test-id="product-quantity"
          value={quantity}
          onChange={handleInput}
        />
        {/* <button
          aria-label="Subtract 1 from cake quantity"
          onClick={() => decrementCake()}
        >
          -
        </button> */}
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
