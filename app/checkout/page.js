import { getCakes } from '../../database/cakes';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import UserInfoForm from './UserInfoForm';

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
      <div>Your total is: €{totalPrice}</div>
      <div>
        Please fill out and submit the form by clicking "Confirm order" button
      </div>

      <UserInfoForm />
    </main>
  );
}
