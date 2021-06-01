import { useState } from "react";
import Product from "./../components/Product";
import Modal from "./../components/Modal";

import ProductModel from "./../models/product";

import "./../static/styles/Shop.scss";

const Shop = () => {
  const modalProductDefaultValue = new ProductModel(0, "", "", "", 0);
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState<ProductModel>(
    modalProductDefaultValue
  );

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
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem ex sed
      voluptate dolorum cumque tenetur a, voluptatum maiores inventore. Non
      perferendis ipsa nostrum earum doloribus veniam distinctio magnam
      quisquam.`,
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

  const addToCart = (product: ProductModel) => {
    setShowModal(true);
    setModalProduct(product);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalProduct(modalProductDefaultValue);
  };

  return (
    <div className="shop__container">
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        product={modalProduct}
      />
      <div className="products__grid">
        {products.map((product) => (
          <Product
            key={product.id}
            item={product}
            addProductToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
