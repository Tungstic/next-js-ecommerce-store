'use client';

import { useState } from 'react';
import { addCakeToCart } from './actions';

// import {useRouter} from

export default function AddToCart() {
  // declare state variable for quantity
  const [quantity, setQuantity] = useState(1);

  function incrementCake() {
    if (quantity >= 10) {
      return quantity;
    }
    setQuantity(quantity + 1);
  }
  function decrementCake() {
    if (quantity <= 1) {
      return quantity;
    }
    setQuantity(quantity - 1);
  }

  return (
    <>
      <label>
        Quantity
        <button onClick={incrementCake}>+</button>
        <input data-test-id="product-quantity" value={quantity} />
        <button onClick={decrementCake}>-</button>
      </label>
      <form action={async () => addCakeToCart(quantity)}>
        <button data-test-id="product-add-to-cart">Add to cart</button>
      </form>
    </>
  );
}
