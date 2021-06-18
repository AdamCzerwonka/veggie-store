import React, { useState, useContext } from "react";
import Product from "./../components/Product";
import Modal from "./../components/Modal";
import { CartContext } from "./../CartContext";
import { ProductsContext } from "./../ProductsContext";

import ProductModel from "./../models/product";

import "./../static/styles/Shop.scss";
import CartModel from "../models/cart";

const Shop: React.FC = () => {
  const modalProductDefaultValue = new ProductModel(0, "", "", { name: "" }, 0);
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState<ProductModel>(
    modalProductDefaultValue
  );
  const { addToCart } = useContext(CartContext);
  const { products, isLoading } = useContext(ProductsContext);

  const openModal = (product: ProductModel) => {
    setShowModal(true);
    setModalProduct(product);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalProduct(modalProductDefaultValue);
  };

  const pushItemToCart = (cartItem: CartModel) => {
    addToCart(cartItem);
    closeModal();
  };

  return (
    <div className="shop__container">
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        product={modalProduct}
        addToCart={pushItemToCart}
      />
      <div className="products__grid">
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          products.map((product) => (
            <Product
              key={product.id}
              item={product}
              addProductToCart={openModal}
            />
          ))}
      </div>
    </div>
  );
};

export default Shop;
