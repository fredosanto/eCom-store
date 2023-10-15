import { useContext } from "react";
import { ShoppingCartContext } from "./shoppingCart";

export function useShoppingCartProvider() {
  const context = useContext(ShoppingCartContext);
  if (context === null)
    throw new Error(
      "useShoppingCartProvider must be used inside a ShoppingCartProvider"
    );
  return context;
}
