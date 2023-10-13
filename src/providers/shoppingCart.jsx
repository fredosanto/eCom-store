import { useContext, createContext, useState, useEffect } from "react";

const Context = createContext(null);

function ShoppingCartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addItem(id) {
    setCartItems((prevState) => [...prevState, id]);
    // localStorage.setItem("cart", JSON.stringify(id));
    console.log(id);
    console.log("addItem", cartItems);
  }

  // ['lampe', 'lampe', 'c']

  function removeItem(id) {
    const idIndex = cartItems.findIndex((item) => item === id);
    if (idIndex === -1) {
      return;
    }
    console.log(idIndex);
    const newCart = [
      ...cartItems.slice(0, idIndex),
      ...cartItems.slice(idIndex + 1),
    ];
    console.log("new cart", { newCart });
    setCartItems(newCart);
  }

  const totalItems = cartItems.length;
  console.log("cart", cartItems);
  localStorage.setItem("cart", JSON.stringify(cartItems));

  return (
    <Context.Provider value={{ totalItems, cartItems, addItem, removeItem }}>
      {props.children}
    </Context.Provider>
  );
}

function useShoppingCartProvider() {
  const context = useContext(Context);
  if (context === null)
    throw new Error(
      "useShoppingCartProvider must be used inside a ShoppingCartProvider"
    );
  return context;
}

export { ShoppingCartProvider, useShoppingCartProvider };
