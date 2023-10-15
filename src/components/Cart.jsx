import CartItem from "./CartItem";
import { useShoppingCartProvider } from "../providers/useShoppingCartProvider";
import { useCalculateSubTotal } from "../hooks/useCalculateSubTotal";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems } = useShoppingCartProvider();

  let bundledCartItems = [];
  cartItems.forEach((cartItem) => {
    // bundledCartItems is empty, add the item, and add quantity property
    if (bundledCartItems.length === 0) {
      bundledCartItems.push({ ...cartItem, quantity: 1 });
      return;
    }
    const existingItemIndex = bundledCartItems.findIndex(
      (bundleItems) => bundleItems.id === cartItem.id
    );
    // item exists in bundledCartItems, don't push, just update quantity
    if (existingItemIndex !== -1) {
      bundledCartItems[existingItemIndex].quantity =
        bundledCartItems[existingItemIndex].quantity + 1;
      return;
    }
    // item doesn't exist in bundledCartItems, add item and quantity property
    bundledCartItems.push({ ...cartItem, quantity: 1 });
  });

  const subTotal = useCalculateSubTotal(bundledCartItems);
  const freeShipping = subTotal >= 800 || subTotal === 0;
  const shippingPrice = freeShipping ? 0 : 49;
  const total = (
    useCalculateSubTotal(bundledCartItems) + shippingPrice
  ).toFixed(2);

  function handleCheckout() {
    localStorage.clear();

    // window.location.reload();
  }

  return (
    <>
      <div className="flex my-10 flex-col md:flex-row">
        {cartItems.length <= 0 ? (
          <div className="uppercase font-bold m-auto">Empty cart</div>
        ) : (
          <div className="flex flex-col gap-5 basis-1/2">
            {bundledCartItems.map((item, i) => (
              <CartItem key={`${item.id}-${i}`} cartItem={item} />
            ))}
          </div>
        )}
        <div className="flex flex-col py-2 px-5 bg-slate-100 w-72  gap-2 mx-auto my-20 order-first md:order-last">
          <h1 className="text-2xl m-auto font-bold underline">Order Summary</h1>
          <p className="text-xs text-center">
            Free shipping on order above 799 NOK
          </p>
          <div className="flex justify-between">
            <p className="inline-block">Subtotal</p>
            <p className="inline-block">{subTotal} NOK</p>
          </div>
          <div className="flex justify-between">
            <p className="inline-block">Shipping</p>
            <p className="inline-block">{shippingPrice} NOK</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="inline-block">Total</p>
            <p className="inline-block">{total} NOK</p>
          </div>
          <hr />

          <button
            disabled={bundledCartItems.length > 0 ? false : true}
            onClick={handleCheckout}
            className={
              "bg-teal-500 rounded-md transition ease-in-out  duration-300 " +
              (bundledCartItems.length > 0
                ? "bg-teal-500 hover:bg-teal-300"
                : "bg-slate-300")
            }
          >
            {bundledCartItems.length > 0 ? (
              <Link to="/checkout" className="block px-5 py-3">
                Checkout
              </Link>
            ) : (
              "Empty cart"
            )}
          </button>
        </div>
      </div>
    </>
  );
}
