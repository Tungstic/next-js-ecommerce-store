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

  // get an array of only those cakes that are in the cart + their quantities
  const order = [];
  function findOrderedCakes() {
    for (let i = 0; i < cakeQuantities.length; i++) {
      const orderedCake = cakes.find(
        (cake) => cake.id === cakeQuantities[i]['id'],
      );
      if (orderedCake.id === cakeQuantities[i]['id']) {
        order.push({ ...orderedCake, quantity: cakeQuantities[i]['quantity'] });
      }
    }
    return order;
  }

  console.log(findOrderedCakes());

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
              <div data-test-id={`cart-product-quantity-${item.id}`}>
                Quantity:
                {` ${item.quantity}`}
              </div>
            </li>
          );
        })}
      </ul>
      <div>Total price</div>
      <button>Checkout button</button>
    </main>
  );
}
