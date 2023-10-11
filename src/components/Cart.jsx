import { useShoppingCartProvider } from "../providers/shoppingCart";

export default function Cart() {
  const { removeItem } = useShoppingCartProvider();
  const { cartItems } = useShoppingCartProvider();
  console.log(cartItems);
  return (
    <>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item}</h2>
          <button
            className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 transition-colors"
            onClick={() => removeItem(item)}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
}
