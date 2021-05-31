import React from "react";
import { FaCartPlus } from "react-icons/fa";
import exmplPhoto from "./../static/img/patatoes.jpg";

const Product = () => {
  return (
    <div className="product">
      <img src={exmplPhoto} alt="Just patatoes" />
      <p className="product__title">Organic patatoes</p>
      <p className="product__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam dolorum
        reprehenderit provident alias nemo saepe repellendus omnis eaque velit
        eligendi quaerat sit voluptas accusantium minus, vero dolor odit et
        quam.
      </p>
      <div className="pruduct__button">
        <FaCartPlus className="product_button_icon" />
        1.50$
      </div>
    </div>
  );
};

export default Product;
