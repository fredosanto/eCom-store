import { useShoppingCartProvider } from "../providers/shoppingCart";

export default function CartItem({ cartItem }) {
  const { removeItem } = useShoppingCartProvider();
  return (
    <>
      <div
        //   key={cartItem.index + cartItem.id}
        className="flex gap-4 items-center justify-center p-2"
      >
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
          {cartItem.price >= cartItem.discountedPrice ? (
            <div className="flex gap-2">
              <p className="inline-block text-sm">{cartItem.discountedPrice}</p>
              <p className="inline-block line-through text-sm">
                {cartItem.price}
              </p>
            </div>
          ) : (
            <div className="inline-block text-sm">{cartItem.price}</div>
          )}
          <button
            className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 transition-colors"
            onClick={() => removeItem(cartItem)}
          >
            Remove
          </button>
        </div>
      </div>
      <hr className="max-w-md my-4" />
    </>
  );
}
