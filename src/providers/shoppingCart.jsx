import { createContext, useState } from "react";

export const ShoppingCartContext = createContext(null);

export function ShoppingCartProvider(props) {
  const getLocalCart = JSON.parse(localStorage.getItem("cart"));

  const [cartItems, setCartItems] = useState(getLocalCart ? getLocalCart : []);

  function addItem(item) {
    setCartItems((prevState) => {
      const newState = [...prevState, item];
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    });
  }

  function removeItem(item) {
    const indexToRemove = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (indexToRemove === -1) {
      return;
    }
    const indexAfterIndexToRemove = indexToRemove + 1;
    const newCart = [
      ...cartItems.slice(0, indexToRemove),
      ...cartItems.slice(indexAfterIndexToRemove),
    ];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartItems(newCart);
  }

  const totalItems = cartItems.length;

  return (
    <ShoppingCartContext.Provider
      value={{ totalItems, cartItems, addItem, removeItem }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
}
