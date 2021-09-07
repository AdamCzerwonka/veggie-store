import React from "react";
import { FaCartPlus } from "react-icons/fa";
import ProductModel from "./../models/product";

const Product: React.FC<ProductProps> = ({ item, addProductToCart }) => {
  console.log(item.photo.name);

  return (
    <div className="product">
      <img
        src={`http://localhost:5000/api/photos/${item.photo.name}`}
        alt="Just patatoes"
      />
      <p className="product__title">{item.name}</p>
      <p className="product__description">{item.description}</p>
      <div className="product__button" onClick={() => addProductToCart(item)}>
        <FaCartPlus className="product_button_icon" />
        {item.price.toFixed(2)}$
      </div>
    </div>
  );
};

interface ProductProps {
  item: ProductModel;
  addProductToCart: Function;
}

export default Product;
