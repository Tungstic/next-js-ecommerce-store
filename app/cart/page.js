import { cakes } from '../../database/cakes';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default function CartPage() {
  // get all current cakes added to cart as a cookie
  const cakeQuantityCookie = getCookie('nameOfCookie');

  // get the same as an array of json objects

  const cakeQuantities = !cakeQuantityCookie
    ? []
    : parseJson(cakeQuantityCookie);

  // get an array of only those cakes that are in the cart
  function findOrderedCakes() {
    let orderedCakes = cakeQuantities.map((cakeQuantity) => cakeQuantity.id);
    let order = [];
    for (let i = 0; i < orderedCakes.length; i++) {
      order.push(cakes.find((cake) => cake.id === orderedCakes[i]));
    }
    return order;
  }

  console.log(findOrderedCakes());

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
