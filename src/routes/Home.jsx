import { useEffect, useState } from "react";
import Item from "../components/layout/components/Item";

const url = "https://api.noroff.dev/api/v1/online-shop";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();

      console.log(json);
      setProducts(json);
    }
    getData();
  }, []);

  return (
    <>
      <h1 className="text-black text-4xl font-bold my-6">Home</h1>
      <h2 className="text-black text-2xl">Products</h2>
      <input type="text" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 p-2 text-black  ">
        {products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            discount={product.discountedPrice}
            img={product.imageUrl}
          />
        ))}
      </div>
    </>
  );
}
