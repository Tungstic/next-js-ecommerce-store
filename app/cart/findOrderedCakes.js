export default function findOrderedCakes(order, cookieArray, cakesFromDB) {
  for (let i = 0; i < cookieArray.length; i++) {
    const orderedCake = cakesFromDB.find(
      (cake) => cake.id === cookieArray[i]['id'],
    );
    if (orderedCake.id === cookieArray[i]['id']) {
      order.push({ ...orderedCake, quantity: cookieArray[i]['quantity'] });
    }
  }
  return order;
}
