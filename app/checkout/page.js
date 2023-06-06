import { getCakes } from '../../database/cakes';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import findOrderedCakes from '../cart/findOrderedCakes';
import getTotalPrice from '../cart/getTotalPrice';
import UserInfoForm from './UserInfoForm';

export const dynamic = 'force-dynamic';

export default async function CheckoutPage() {
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

  // get total price of the current order
  const totalPrice = getTotalPrice(order);

  return (
    <main>
      <div>Your total is: €{totalPrice}</div>
      <div>
        Please fill out and submit the form by clicking "Confirm order" button
      </div>

      <UserInfoForm />
    </main>
  );
}
