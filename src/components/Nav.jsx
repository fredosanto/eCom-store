import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="flex items-center justify-around flex-wrap bg-sky-300 text-black p-5">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
  );
}
