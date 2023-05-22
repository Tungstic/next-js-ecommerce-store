import { cakes } from '../../database/cakes';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './page.module.scss';

export default function CartPage() {
  // get all current cakes added to cart as a cookie
  const cakeQuantityCookie = getCookie('nameOfCookie');

  // get the same as an array of objects
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
  findOrderedCakes();

  // get the total price of all cakes (price and quantity are numbers)
  function getTotalPrice() {
    if (order.length > 0) {
      const eachCakePrice = order.map((obj) => {
        return obj.price * obj.quantity;
      });
      return eachCakePrice.reduce((acc, currentValue) => {
        return acc + currentValue;
      });
    } else {
      return '0';
    }
  }
  const totalPrice = getTotalPrice();

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
      <div data-test-id="cart-total">Total price is: {` €${totalPrice}`}</div>
      <button data-test-id="cart-checkout">Checkout button</button>
    </main>
  );
}
