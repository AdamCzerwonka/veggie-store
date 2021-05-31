import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import exmplPhoto from "./../static/img/patatoes.jpg";
import ProductModel from "./../models/product";
import { CartContext } from "./../CartContext";
import CartModel from "../models/cart";

const Product = ({ item }: ProductProps) => {
  const { addToCart } = useContext(CartContext);

  const addProductToCart = () => {
    const newItem = new CartModel(item.id, 2);
    addToCart(newItem);
  };

  return (
    <div className="product">
      <img src={exmplPhoto} alt="Just patatoes" />
      <p className="product__title">{item.name}</p>
      <p className="product__description">{item.description}</p>
      <div className="product__button" onClick={addProductToCart}>
        <FaCartPlus className="product_button_icon" />
        {item.price.toFixed(2)}$
      </div>
    </div>
  );
};

interface ProductProps {
  item: ProductModel;
}

export default Product;
