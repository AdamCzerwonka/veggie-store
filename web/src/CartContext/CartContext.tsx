import { createContext, useState, useEffect } from "react";
import CartModel from "../models/cart";
import IInitialState from "./IInitialState";

const initialState: IInitialState = {
  cart: [],
  addToCart: () => {},
  deleteItem: (item: CartModel) => {},
  editItem: (item: CartModel) => {},
  clearCart: () => {},
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
    const itemInCart = cart.find((entry) => entry.productId === item.productId);

    if (itemInCart) {
      const cartCopy = cart.slice();
      const index = cartCopy.indexOf(itemInCart);
      cartCopy[index].amount += item.amount;
      setCart(cartCopy);
    } else {
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  const deleteItem = (item: CartModel) => {
    const filteredCart = cart.filter(
      (cartItem) => cartItem.productId !== item.productId
    );
    setCart(filteredCart);
  };

  const editItem = (item: CartModel) => {
    const itemInCart = cart.find((entry) => entry.productId === item.productId);

    if (itemInCart) {
      const cartCopy = cart.slice();
      const index = cartCopy.indexOf(itemInCart);
      cartCopy[index].amount = item.amount;
      setCart(cartCopy);
    } else {
      return;
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteItem, editItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
