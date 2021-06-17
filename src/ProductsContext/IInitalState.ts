import ProductModel from "../models/product";

export default interface IInitialState {
  products: ProductModel[];
  isLoading: boolean;
  getProductPrice(id: number): number;
}
