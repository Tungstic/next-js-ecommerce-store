// check if cake's in the cart: if not, add; if yes, update its quantity
// written separately for a Jest test

export default function updateCookie(
  cookieObject,
  cookieArray,
  cakeId,
  quantity,
) {
  if (cookieObject) {
    cookieObject.quantity = cookieObject.quantity + quantity;
  } else {
    cookieArray.push({
      id: cakeId,
      quantity,
    });
  }
}
