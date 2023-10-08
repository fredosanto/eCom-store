import { Link } from "react-router-dom";
import { CartIcon } from "./icons/cart";

export default function Header() {
  return (
    <header className="flex justify-between bg-sky-950 p-3">
      <div className="text-xl font-extrabold bg-green-300 p-2 m-2">
        <Link to="/"> Logo</Link>
      </div>
      <div className="p-2 m-2">
        <CartIcon />
      </div>
    </header>
  );
}
