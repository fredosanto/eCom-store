import { useShoppingCartProvider } from "../providers/useShoppingCartProvider";

export default function CartItem({ cartItem }) {
  const { addItem, removeItem } = useShoppingCartProvider();
  return (
    <>
      <div className="flex gap-4 items-center justify-center p-2">
        <div className="aspect-square max-h-32">
          <img
            src={cartItem.imageUrl}
            alt={cartItem.title}
            className="object-cover aspect-square"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-medium">{cartItem.title}</p>
          <p className="text-gray-400 text-xs">{cartItem.id}</p>
          {cartItem.price > cartItem.discountedPrice ? (
            <div className="flex gap-2">
              <p className="inline-block text-sm">{cartItem.discountedPrice}</p>
              <p className="inline-block line-through text-sm">
                {cartItem.price}
              </p>
            </div>
          ) : (
            <div className="inline-block text-sm">{cartItem.price}</div>
          )}
          <p>Quantity: {cartItem.quantity}</p>
          <div className="flex gap-2">
            <button
              className="basis-1/2 bg-sky-300 p-2 rounded-md hover:bg-sky-500 transition-colors duration-300"
              onClick={() => addItem(cartItem)}
            >
              Add
            </button>
            <button
              className="basis-1/2 bg-rose-300 p-2 rounded-md hover:bg-rose-500 transition-colors duration-300"
              onClick={() => removeItem(cartItem)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <hr className="max-w-md my-4" />
    </>
  );
}
