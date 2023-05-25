// get the total price of all cakes (price and quantity are numbers)
export default function getTotalPrice(orderArray) {
  if (orderArray.length > 0) {
    const eachCakePrice = orderArray.map((obj) => {
      return obj.price * obj.quantity;
    });
    return eachCakePrice.reduce((acc, currentValue) => {
      return acc + currentValue;
    });
  } else {
    return '0';
  }
}
