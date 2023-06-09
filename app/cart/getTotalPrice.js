export default function getTotalPrice(order) {
  if (order.length > 0) {
    const eachCakePrice = order.map((obj) => {
      return obj.price * obj.quantity;
    });
    return eachCakePrice.reduce((acc, currentValue) => {
      return acc + currentValue;
    });
  } else {
    return parseInt('0');
  }
}
