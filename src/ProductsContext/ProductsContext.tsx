import { createContext, useState, useEffect } from "react";
import ProductModel from "../models/product";
import IInitialState from "./IInitalState";

const initialState: IInitialState = {
  products: [],
};

export const ProductsContext = createContext(initialState);

const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState(initialState.products);

  useEffect(() => {
    const productsTmp: ProductModel[] = [
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
    setProducts(productsTmp);
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
