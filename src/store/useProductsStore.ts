import type { Products } from 'types/types';
import { create } from 'zustand';

interface ProductsState {
  products: Products[];
  setProducts: (products: Products[]) => void;
  addProduct: (product: Products) => void;
  clearProducts: () => void;
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  clearProducts: () => set({ products: [] }),
}));
