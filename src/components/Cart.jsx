import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useShoppingCartProvider } from "../providers/shoppingCart";

export default function Cart() {
  const { cartItems } = useShoppingCartProvider();
  console.log(cartItems.index);

  // const getCart = localStorage.getItem("cart");
  // const myItem = JSON.parse(getCart);

  return (
    <>
      <div className="flex my-10 flex-col md:flex-row">
        {cartItems.length <= 0 ? (
          <div className="uppercase font-bold m-auto">Empty cart</div>
        ) : (
          <div className="flex flex-col gap-5 basis-1/2">
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
        )}
        <div className="flex flex-col  gap-2 rounded-lg mx-auto  order-first md:order-last justify-center my-20">
          <h1 className="text-2xl font-bold">Order Summary</h1>
          <div className="flex justify-between">
            <p className="inline-block">Subtotal</p>
            <p className="inline-block">- NOK</p>
          </div>
          <div className="flex justify-between">
            <p className="inline-block">Shipping</p>
            <p className="inline-block">- NOK</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p className="inline-block">Total</p>
            <p className="inline-block">- NOK</p>
          </div>
          <hr />
          <Link to="/" className="text-center">
            <button className="bg-teal-500 px-5 py-3 rounded-md max-w-xs transition ease-in-out hover:bg-teal-300 duration-300">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
