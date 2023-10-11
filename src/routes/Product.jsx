import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShoppingCartProvider } from "../providers/shoppingCart";

export default function Product() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  //   const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;
  let { id } = useParams();
  const { addItem, removeItem } = useShoppingCartProvider();

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

  if (isLoading || !product) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(product);

  return (
    <>
      <>
        <div>SKU {product.id}</div>
        <div>{product.title}</div>
        <img src={product.imageUrl} alt={product.title} />
        <div>{product.price}</div>
        <button
          className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 transition-colors"
          onClick={() => addItem(product.id)}
        >
          Add to cart
        </button>
        <button
          className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 transition-colors"
          onClick={() => removeItem(product.id)}
        >
          Remove
        </button>
      </>
    </>
  );
}
