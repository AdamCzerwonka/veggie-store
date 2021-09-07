import CartModel from "./../models/cart";

export default interface IInitialState {
  cart: CartModel[];
  addToCart(item: CartModel): void;
  deleteItem(item: CartModel): void;
  editItem(item: CartModel): void;
  clearCart(): void;
}
