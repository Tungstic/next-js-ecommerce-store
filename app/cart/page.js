import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default function CartPage() {
  // get all current cakes added to cart as a cookie
  const cakeQuantityCookie = getCookie('nameOfCookie');

  // get the same as an array of objects

  const cakeQuantities = !cakeQuantityCookie
    ? []
    : parseJson(cakeQuantityCookie);

  console.log(cakeQuantities);

  return (
    <main>
      <h1>Shopping cart</h1>
      <ul>
        <li>
          Cake, quantity
          <div>{JSON.stringify(cakeQuantities)}</div>
          <button>Remove</button>
        </li>
      </ul>
      <div>Total price</div>
      <button>Checkout button</button>
    </main>
  );
}
