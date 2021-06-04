import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import ProductModel from "../models/product";
import CartModel from "../models/cart";

import "./../static/styles/Modal.scss";

const Modal = ({ showModal, closeModal, product, addToCart }: IModelProps) => {
  const [amount, setAmount] = useState(0.5);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setAmount(0.5);
    setPrice(0.5 * product.price);
  }, [product]);

  useEffect(() => {
    setPrice(amount * product.price);
  }, [amount, product.price]);

  const increaceAmount = () => {
    setAmount(amount + 0.5);
  };

  const decreaseAmount = () => {
    if (amount === 0.5) {
      return;
    }
    setAmount(amount - 0.5);
  };

  const validateAmountInput = () => {
    if (amount < 0.5) {
      setAmount(0.5);
    }
  };

  const addToCartHandler = () => {
    const cartItem = new CartModel(product.id, amount);

    addToCart(cartItem);
  };

  return (
    <div className="modal" style={showModal ? { display: "block" } : {}}>
      <div className="model__body">
        <div className="modal__body__header">
          <h1>Modal Header</h1>
          <span className="header__close" onClick={() => closeModal()}>
            &times;
          </span>
        </div>
        <div className="modal__body__content">
          <div className="content__left">
            <img src={product.img} alt="" />
          </div>
          <div className="content__right">
            <div className="top">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
            <div className="bottom">
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
              <div className="modal__button" onClick={addToCartHandler}>
                Add to cart {price.toFixed(2)}$
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IModelProps {
  showModal: boolean;
  closeModal: Function;
  product: ProductModel;
  addToCart: Function;
}

export default Modal;
