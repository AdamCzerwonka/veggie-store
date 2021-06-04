import { FaCartPlus } from "react-icons/fa";
import exmplPhoto from "./../static/img/patatoes.jpg";
import ProductModel from "./../models/product";

const Product = ({ item, addProductToCart }: ProductProps) => {
  return (
    <div className="product">
      <img src={exmplPhoto} alt="Just patatoes" />
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
