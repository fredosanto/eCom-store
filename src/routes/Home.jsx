import { useEffect, useState } from "react";

const url = "https://api.noroff.dev/api/v1/online-shop";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();

      setProducts(json);
    }
    getData();
  }, []);

  return (
    <>
      <h1 className="text-black text-4xl font-bold my-6">Home</h1>
      <h2 className="text-black text-2xl">Products</h2>
      <div className="grid grid-cols-4 gap-5 p-2 text-black  ">
        {products.map((product) => (
          <div key={product.id} className="text-center bg-sky-300 p-5">
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <div>
              <button className="bg-emerald-500 px-5 py-1 mx-2">+</button>
              <button className="bg-red-500 px-5 py-1 mx-2">-</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
