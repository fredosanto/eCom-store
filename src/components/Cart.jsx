import { Link } from "react-router-dom";
import { useShoppingCartProvider } from "../providers/shoppingCart";

export default function Cart() {
  const { removeItem } = useShoppingCartProvider();
  const { cartItems } = useShoppingCartProvider();
  console.log(cartItems);

  // const getCart = localStorage.getItem("cart");
  // const myItem = JSON.parse(getCart);

  return (
    <>
      <div className="flex">
        <div className="flex flex-col gap-5">
          {cartItems.map((item) => (
            <div
              key={item.index}
              className="grid grid-cols-3 gap-4 items-center"
            >
              <div className="aspect-square max-h-32">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover aspect-square"
                />
              </div>
              <div className="col-span-2">
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-400 text-xs">{item.id}</p>
                {item.price >= item.discountedPrice ? (
                  <div className="flex gap-2">
                    <p className="inline-block text-sm">
                      {item.discountedPrice}
                    </p>
                    <p className="inline-block line-through text-sm">
                      {item.price}
                    </p>
                  </div>
                ) : (
                  <div className="inline-block text-sm">{item.price}</div>
                )}
                <button
                  className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 transition-colors"
                  onClick={() => removeItem(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col mx-auto">
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
          <Link to="/">
            <button className="bg-teal-500 px-5 py-3 rounded-md max-w-xs transition ease-in-out hover:bg-teal-300 duration-300">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
// <>
//   <h1>Cart</h1>
//   {cartItems.map((item) => (
//     <div key={item.id}>
//       <h2>{item}</h2>
//       <button
//         className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 transition-colors"
//         onClick={() => removeItem(item)}
//       >
//         Remove
//       </button>
//     </div>
//   ))}
// </>
