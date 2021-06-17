import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "./../components/CartItem";
import { CartContext } from "./../CartContext";
import { ProductsContext } from "./../ProductsContext";
import { FaArrowRight } from "react-icons/fa";

import "./../static/styles/Cart.scss";
import CartModel from "../models/cart";

const Cart: React.FC = () => {
  const { cart, deleteItem, editItem } = useContext(CartContext);
  const { getProductPrice } = useContext(ProductsContext);
  const [cartTotal, setCartTotal] = useState(0);

  const deleteItemFromCart = (item: CartModel): void => {
    deleteItem(item);
  };

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      const productPrice = getProductPrice(item.productId);
      sum += item.amount * productPrice;
    });
    setCartTotal(sum);
  }, [cart, getProductPrice]);

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
              setCartTotal={setCartTotal}
            />
          ))}
        </div>
        <div className="cart__total">Total: {cartTotal.toFixed(2)}$</div>
        <Link to="/order">
          <div className="cart__button__next">
            Order <FaArrowRight className="button__icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
