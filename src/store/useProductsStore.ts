import type { Products } from 'types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProductsState {
  products: Products[];
  cartProducts: Products[];
  favoriteProducts: Products[];
  setProducts: (products: Products[]) => void;
  addProduct: (product: Products) => void;
  addCartProduct: (product: Products) => void;
  addFavoriteProduct: (product: Products) => void;
}

export const useProductsStore = create<ProductsState>()(
  persist(
    (set) => ({
      products: [],
      cartProducts: [],
      favoriteProducts: [],
      setProducts: (products) => set({ products }),
      addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
      addCartProduct: (product) =>
        set((state) => {
          const exists = state.cartProducts.some((p) => p.id === product.id);

          return {
            cartProducts: exists
              ? state.cartProducts.filter((p) => p.id !== product.id)
              : [...state.cartProducts, product],
          };
        }),
      addFavoriteProduct: (product) =>
        set((state) => {
          const exists = state.favoriteProducts.some((p) => p.id === product.id);

          return {
            favoriteProducts: exists
              ? state.favoriteProducts.filter((p) => p.id !== product.id)
              : [...state.favoriteProducts, product],
          };
        }),
    }),
    {
      name: 'products',
      partialize: (state) => ({
        cartProducts: state.cartProducts,
        favoriteProducts: state.favoriteProducts,
      }),
    }
  )
);
