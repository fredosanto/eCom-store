export function useCalculateSubTotal(cartArr) {
  const totalPricePerItemArray = cartArr.map((element) => {
    let actualPrice =
      element.price > element.discountedPrice
        ? element.discountedPrice
        : element.price;
    let total = actualPrice * element.quantity;
    return Number(total.toFixed(2));
  });
  const subTotal = totalPricePerItemArray.reduce((total, amount) => {
    return total + amount;
  }, 0);
  return Number(subTotal.toFixed(2));
}
