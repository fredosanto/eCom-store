import { useEffect, useState } from "react";
import Item from "../components/Item";

const url = "https://api.noroff.dev/api/v1/online-shop";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchContent, setSearchContent] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();

      setProducts(json);
    }
    getData();
  }, []);

  const searchItems = products.filter((item) =>
    item.title.toLowerCase().includes(searchContent.toLowerCase())
  );

  return (
    <div className="p-2">
      <h1 className="text-black text-4xl font-bold my-4">Home</h1>
      <h2 className="text-black text-2xl my-4">All Products</h2>
      <div className="container">
        <input
          className="text-black bg-slate-100 p-2 border-2 border-slate-400 shadow-md rounded-md focus:outline-none focus:shadow-inner"
          placeholder="Search..."
          value={searchContent}
          onChange={(event) => {
            setSearchContent(event.target.value);
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 my-10 text-black  ">
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
    </div>
  );
}
