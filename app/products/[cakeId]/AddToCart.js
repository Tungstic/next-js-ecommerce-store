'use client';

import { useState } from 'react';
import { addCakeToCart } from './actions';

// import {useRouter} from

export default function AddToCart() {
  // declare state variable for quantity
  const [quantity, setQuantity] = useState(1);

  return (
    <form action={async () => addCakeToCart()}>
      <label>
        Quantity (maximum 10, if you need more, please contact us)
        <input
          data-test-id="product-quantity"
          value={quantity}
          onChange={(event) => {
            setQuantity(event.currentTarget.valueAsNumber);
          }}
        />
      </label>
      <button data-test-id="product-add-to-cart">Add to cart</button>
    </form>
  );
}
