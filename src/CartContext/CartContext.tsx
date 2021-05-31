import { createContext, useState, useEffect } from "react";
import CartModel from "../models/cart";
import IInitialState from "./IInitialState";

const initialState: IInitialState = {
  cart: [],
  addToCart: () => {},
  loadCart: () => {},
};

export const CartContext = createContext(initialState);

const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState(initialState.cart);

  useEffect(() => {
    const sessionJSON = localStorage.getItem("cart");
    if (sessionJSON !== null) {
      const cartInSession = JSON.parse(sessionJSON);
      setCart(cartInSession);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartModel) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const loadCart = () => {
    console.log("asdsasad");

    const sessionJSON = localStorage.getItem("cart");

    console.log(sessionJSON);

    if (sessionJSON !== null) {
      const cartInSession: CartModel[] = JSON.parse(sessionJSON);

      setCart((prevCart) => [...cartInSession]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, loadCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
