import { useEffect, useState } from "react";
import Item from "../components/layout/components/Item";

const url = "https://api.noroff.dev/api/v1/online-shop";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchContent, setSearchContent] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();

      setProducts(json);
      console.log(json);
    }
    getData();
  }, []);

  const searchItems = products.filter((item) =>
    item.title.toLowerCase().includes(searchContent.toLowerCase())
  );

  return (
    <>
      <h1 className="text-black text-4xl font-bold my-6">Home</h1>
      <h2 className="text-black text-2xl">All Products</h2>
      <input
        className="text-black"
        value={searchContent}
        onChange={(event) => {
          setSearchContent(event.target.value);
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 p-2 text-black  ">
        {searchItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            discount={item.discountedPrice}
            img={item.imageUrl}
          />
        ))}
      </div>
    </>
  );
}
