import React, { useState, useContext } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import CartModel from "../models/cart";
import { ProductsContext } from "./../ProductsContext";

const CartItem: React.FC<ICartItemProps> = ({
  cartItem,
  deleteItem,
  editItem,
}) => {
  const { products } = useContext(ProductsContext);

  const [amount, setAmount] = useState(cartItem.amount);

  const productItem = products.find(
    (product) => product.id === cartItem.productId
  );

  if (!productItem) {
    return <></>;
  }

  const decreaseAmount = () => {
    const amountCopy = amount;
    setAmount(amount - 0.5);
    const newCartItem = new CartModel(cartItem.productId, amountCopy - 0.5);
    editItem(newCartItem);
  };
  const validateAmountInput = () => {};
  const increaceAmount = () => {
    const amountCopy = amount;
    setAmount(amount + 0.5);
    const newCartItem = new CartModel(cartItem.productId, amountCopy + 0.5);
    editItem(newCartItem);
  };

  return (
    <div className="cart__item">
      <div className="item__title">{productItem.name}</div>
      <div className="item__amount">
        <div className="amount">
          <FaMinus className="amount__icon" onClick={decreaseAmount} />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            onBlur={validateAmountInput}
          />
          <FaPlus className="amount__icon" onClick={increaceAmount} />
        </div>
      </div>
      <div className="item__price">
        {(cartItem.amount * productItem.price).toFixed(2)}$
      </div>
      <div className="item__delete">
        <FaTrash onClick={() => deleteItem(cartItem)} />
      </div>
    </div>
  );
};

interface ICartItemProps {
  cartItem: CartModel;
  deleteItem: Function;
  editItem: Function;
  setCartTotal: Function;
}

export default CartItem;
