import { useContext } from "react";
import CartItem from "./../components/CartItem";
import { CartContext } from "./../CartContext";

import "./../static/styles/Cart.scss";
import CartModel from "../models/cart";

const Cart = () => {
  const { cart, deleteItem, editItem } = useContext(CartContext);

  const deleteItemFromCart = (item: CartModel): void => {
    deleteItem(item);
  };

  return (
    <div className="cart__container">
      <div className="cart__content">
        <h1>Your cart</h1>
        <div className="cart__list">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              cartItem={item}
              deleteItem={deleteItemFromCart}
              editItem={editItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
