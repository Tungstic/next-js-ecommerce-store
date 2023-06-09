import { getCakes } from '../../database/cakes';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import CheckoutButton from './CheckoutButton';
import findOrderedCakes from './findOrderedCakes';
import getTotalPrice from './getTotalPrice';
import styles from './page.module.scss';
import RemoveFromCart from './RemoveButton';

export const dynamic = 'force-dynamic';

export default async function CartPage() {
  const cakes = await getCakes();
  // get all current cakes added to cart as a cookie
  const cakeQuantityCookie = getCookie('cart');

  // get the same as an array of objects
  const cakeQuantities = !cakeQuantityCookie
    ? []
    : parseJson(cakeQuantityCookie);

  // get an array of only those cakes that are in the cart + their quantities
  const order = [];
  findOrderedCakes(order, cakeQuantities, cakes);

  /*   function getSubtotal() {
    let sum = 0;
    if (order.length > 0) {
      order.map((obj) => {
        sum = obj.price * obj.quantity;
        return sum;
      });
    }
  }

  const subTotal = getSubtotal(); */

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
                <div>{`${item.name} cake €`}</div>
                <div>{item.price}</div>
                <div data-test-id={`cart-product-quantity-${item.id}`}>
                  {item.quantity}
                </div>
                <div>Subtotal: {item.price * item.quantity}</div>

                <RemoveFromCart
                  cakeId={item.id}
                  data-test-id={`cart-product-remove-${item.id}`}
                />
              </li>
            );
          })}
        </ul>
      )}
      <div className={styles.total} data-test-id="cart-total">
        {totalPrice}
      </div>
      {order.length > 0 ? (
        <CheckoutButton data-test-id="cart-checkout" />
      ) : (
        <div style={{ fontSize: '1.2rem' }}>Nothing to checkout</div>
      )}
    </main>
  );
}
