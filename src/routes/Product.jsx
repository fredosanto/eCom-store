import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShoppingCartProvider } from "../providers/useShoppingCartProvider";
import Reviews from "../components/Reviews";
import "../styles/review.css";

export default function Product() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  //   const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;
  let { id } = useParams();
  const { addItem } = useShoppingCartProvider();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setProduct(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  // console.log(product);

  if (isLoading || !product) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  let comments = [];
  product.reviews.map((review) => comments.push(review));

  return (
    <div>
      <div className="flex flex-col lg:flex-row mt-10 mb-52 mx-auto content-start items-start gap-5 max-w-screen-xl">
        <div className="container basis-1/2 mx-auto">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="aspect-square object-cover max-h-96 mx-auto "
          />
        </div>
        <div className="basis-1/2 mx-auto xs:max-h-96">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-slate-400">SKU: {product.id}</p>
          <hr className="max-w-md my-4" />
          <div className="flex justify-between align-middle max-w-md my-4">
            <div className="my-auto">
              {product.price > product.discountedPrice ? (
                <div>
                  <p className="text-red-600 text-2xl font-bold">
                    {product.discountedPrice} NOK
                  </p>
                  <p className="line-through text-xl">{product.price} NOK</p>
                </div>
              ) : (
                <p className="text-black text-2xl font-bold">
                  {product.price} NOK
                </p>
              )}
            </div>
            <button
              className="bg-teal-500 px-5 py-3 rounded-md max-w-xs transition ease-in-out hover:bg-teal-300 duration-300"
              onClick={() => addItem(product)}
            >
              Add to cart
            </button>
          </div>
          <hr className="max-w-md my-4" />
          <h2 className="font-semibold">Description:</h2>
          <p className="max-w-xs">{product.description}</p>
          <hr className="max-w-md my-4" />
          <div className="max-w-xs">
            <p className="font-semibold">Reviews</p>
            <input
              id="expandCollapse"
              className="appearance-none my-4"
              type="checkbox"
              defaultChecked={open}
              onChange={() => setOpen(!open)}
            />
            {comments.length <= 0 ? (
              <div>No reviews</div>
            ) : (
              <label
                htmlFor="expandCollapse"
                className="cursor-pointer p-2 bg-black text-white rounded-md transition ease-in-out hover:bg-teal-300 hover:text-black duration-300"
              >
                {open ? "Show +" : "Hide -"}
              </label>
            )}
            {/* <label
              htmlFor="expandCollapse"
              className="cursor-pointer p-2 bg-black text-white rounded-md transition ease-in-out hover:bg-teal-300 hover:text-black duration-300"
            >
              {open ? "Show +" : "Hide -"}
            </label> */}
            <div id="reviewBox" className={`${!open ? "block" : "hidden"}`}>
              {comments.map((comment) => (
                <Reviews
                  key={comment.id}
                  username={comment.username}
                  rating={comment.rating}
                  description={comment.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
