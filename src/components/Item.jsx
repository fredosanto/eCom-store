import { Link } from "react-router-dom";
import useDiscount from "../hooks/useDiscount";

export default function Item({ id, title, price, discount, img }) {
  const percentAmount = useDiscount(price, discount);
  const showPercent = percentAmount > 0;

  return (
    <div
      key={id}
      className="text-center text-black bg-[#fff6ec] hover:bg-black hover:text-white p-5 rounded-xl hover:scale-[1.02] transition duration-500  "
    >
      <div className="container relative aspect-square ">
        <img src={img} alt={title} className="aspect-square object-cover" />
        {showPercent ? (
          <div className="absolute top-0 right-0 bg-red-600 text-white p-3">
            {percentAmount + "%"}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="text-left py-2">
        <h3 className="text-md">{title}</h3>
        <p
          className={
            "text-2xl font-bold " + (showPercent ? "text-red-600" : "")
          }
        >
          {discount}
        </p>
        {showPercent ? (
          <p className="text-sm">
            Before <span className="line-through">{price}</span>
          </p>
        ) : (
          <p className="text-sm">News</p>
        )}
      </div>
      <div>
        <Link to={`product/${id}`}>
          <button className="bg-teal-500 text-black px-5 py-1 w-full rounded-md transition ease-in-out hover:bg-teal-300  duration-300">
            View
          </button>
        </Link>
      </div>
    </div>
  );
}
