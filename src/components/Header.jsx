import { Link } from "react-router-dom";
import { CartIcon } from "./icons/cart";
import { useShoppingCartProvider } from "../providers/useShoppingCartProvider";

export default function Header() {
  // const [inCartCount, setInCartCount] = useState(0);
  const { totalItems } = useShoppingCartProvider();
  return (
    <header className="flex justify-between bg-black text-white p-3">
      <div className="text-xl font-extrabold p-2 m-2 uppercase">
        <Link to="/"> eCom Store</Link>
      </div>
      <div className="p-2 m-2 relative rounded-xl transition ease-in-out hover:bg-sky-300 hover:text-black duration-30 ">
        <Link to={"/cart"}>
          <CartIcon />
          <div className="container w-4 bg-red-600 text-white rounded-full text-center font-bold text-xs absolute right-0 top-0">
            {totalItems}
          </div>
        </Link>
      </div>
    </header>
  );
}
