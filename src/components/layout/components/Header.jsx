import { Link } from "react-router-dom";
import { CartIcon } from "./icons/cart";
import { useState } from "react";

export default function Header() {
  const [inCartCount, setInCartCount] = useState(0);
  return (
    <header className="flex justify-between bg-sky-950 p-3">
      <div className="text-xl font-extrabold bg-green-300 p-2 m-2">
        <Link to="/"> Logo</Link>
      </div>
      <div className="p-2 m-2 relative">
        <CartIcon />
        <div className="container w-4 bg-red-600 rounded-full text-center font-bold text-xs absolute right-0 top-0">
          {inCartCount}
        </div>
      </div>
    </header>
  );
}
