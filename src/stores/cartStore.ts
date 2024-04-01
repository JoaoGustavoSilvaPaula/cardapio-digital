import { create } from 'zustand';
import { ProductType } from '../types/productType';

type CartStore = {
  itensCount: number;
  cart: ProductType[];
  addToCart: (item: ProductType) => void;
  removeFromCart: (id: number) => void;
};

export const useCartStore = create<CartStore>((set) => {
  return {
    itensCount: 0,
    cart: [],
    addToCart: (item) =>
      set((state) => ({ cart: [...state.cart, item], itensCount: state.itensCount + 1 })),
    removeFromCart: (id) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
        itensCount: state.itensCount - 1,
      })),
  };
});
