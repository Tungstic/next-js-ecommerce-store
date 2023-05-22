import { cakes } from '../../database/cakes';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './page.module.scss';

export default function CartPage() {
  // get all current cakes added to cart as a cookie
  const cakeQuantityCookie = getCookie('nameOfCookie');

  // get the same as an array of json objects

  const cakeQuantities = !cakeQuantityCookie
    ? []
    : parseJson(cakeQuantityCookie);

  // get an array of only those cakes that are in the cart
  const order = [];
  function findOrderedCakes() {
    const orderedCakes = cakeQuantities.map((cakeQuantity) => cakeQuantity.id);

    for (let i = 0; i < orderedCakes.length; i++) {
      order.push(cakes.find((cake) => cake.id === orderedCakes[i]));
    }
    return order;
  }
  findOrderedCakes();

  return (
    <main>
      <h1>Shopping cart</h1>
      <ul>
        {order.map((item) => {
          return (
            <li
              data-test-id={`cart-product-${item.id}`}
              className={styles.cakeItem}
              key={`cake ${item.id}`}
            >
              {`${item.name} cake €`}
              {item.price}
              <button>Remove</button>
            </li>
          );
        })}
      </ul>
      <div>Total price</div>
      <button>Checkout button</button>
    </main>
  );
}
