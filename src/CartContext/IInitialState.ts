import CartModel from "./../models/cart";

export default interface IInitialState {
  cart: CartModel[];
  addToCart(item: CartModel): void;
  loadCart(): void;
}
