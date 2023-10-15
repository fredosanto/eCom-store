import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <ul
      id="navbar"
      className="flex justify-center items-center  flex-wrap bg-[#fff0db] text-black"
    >
      <NavLink to="/">
        <li className="text-center uppercase p-4 min-w-[100px] cursor-pointer transition ease-in-out hover:bg-black hover:text-white duration-300">
          Home
        </li>
      </NavLink>
      <NavLink to="/contact">
        <li className="text-center uppercase p-4 min-w-[100px] cursor-pointer transition ease-in-out hover:bg-black hover:text-white duration-300">
          Contact
        </li>
      </NavLink>
      <NavLink to="/cart">
        <li className="text-center uppercase p-4 min-w-[100px] cursor-pointer transition ease-in-out hover:bg-black hover:text-white duration-300">
          Cart
        </li>
      </NavLink>
    </ul>
  );
}
