import { cakes } from '../../database/cakes';
import { getCookie } from '../../util/cookies';
import getTotalPrice from '../../util/GetTotalPrice';
import { parseJson } from '../../util/json';
import CheckoutButton from './CheckoutButton';
import styles from './page.module.scss';
import RemoveFromCart from './RemoveButton';

export default function CartPage() {
  // get all current cakes added to cart as a cookie
  const cakeQuantityCookie = getCookie('cart');

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

  // get total price of the current order
  const totalPrice = getTotalPrice(order);

  return (
    <main>
      <h1>Shopping cart</h1>
      {order.length > 0 && (
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
                <div data-test-id={`cart-product-quantity-${item.id}`}>
                  Quantity:
                  {` ${item.quantity}`}
                </div>
                <RemoveFromCart
                  cakeId={item.id}
                  data-test-id={`cart-product-remove-${item.id}`}
                />
              </li>
            );
          })}
        </ul>
      )}
      <div data-test-id="cart-total">Total price is: {` €${totalPrice}`}</div>
      {order.length > 0 ? (
        <CheckoutButton data-test-id="cart-checkout" />
      ) : (
        'nothing to checkout'
      )}
    </main>
  );
}
