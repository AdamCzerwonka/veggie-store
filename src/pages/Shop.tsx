import React from "react";
import Product from "./../components/Product";

import ProductModel from "./../models/product";

import "./../static/styles/Shop.scss";

const Shop = () => {
  const products: ProductModel[] = [
    new ProductModel(
      1,
      "Patatoes",
      "Just patatoes",
      "static/media/patatoes.6895aa3f.jpg",
      1.5
    ),
    new ProductModel(
      2,
      "Patatoes",
      "Just patatoes",
      "static/media/patatoes.6895aa3f.jpg",
      1.5
    ),
    new ProductModel(
      3,
      "Patatoes",
      "Just patatoes",
      "static/media/patatoes.6895aa3f.jpg",
      1.5
    ),
    new ProductModel(
      4,
      "Patatoes",
      "Just patatoes",
      "static/media/patatoes.6895aa3f.jpg",
      1.5
    ),
    new ProductModel(
      5,
      "Patatoes",
      "Just patatoes",
      "static/media/patatoes.6895aa3f.jpg",
      1.5
    ),
    new ProductModel(
      6,
      "Patatoes",
      "Just patatoes",
      "static/media/patatoes.6895aa3f.jpg",
      1.5
    ),
    new ProductModel(
      7,
      "Patatoes",
      "Just patatoes",
      "static/media/patatoes.6895aa3f.jpg",
      1.5
    ),
    new ProductModel(
      8,
      "Patatoes",
      "Just patatoes",
      "static/media/patatoes.6895aa3f.jpg",
      1.5
    ),
    new ProductModel(
      9,
      "Patatoes",
      "Just patatoes",
      "static/media/patatoes.6895aa3f.jpg",
      1.5
    ),
    new ProductModel(
      10,
      "Patatoes",
      "Just patatoes",
      "static/media/patatoes.6895aa3f.jpg",
      1.5
    ),
  ];

  return (
    <div className="shop__container">
      <div className="products__grid">
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
