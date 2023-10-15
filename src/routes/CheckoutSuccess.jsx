import { Link } from "react-router-dom";

export default function CheckoutSuccess() {
  return (
    <div className="h-screen flex justify-center items-start">
      <div className="flex flex-col gap-2 bg-slate-100 border-slate-600 border-2 rounded-md p-10 mt-20 text-center">
        <h1>Success!</h1>
        <p>Your order has been placed and your cart is cleared.</p>
        <Link
          to="/"
          className="bg-teal-500 text-black p-2 w-full rounded-md transition ease-in-out hover:bg-teal-300  duration-300"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  );
}
