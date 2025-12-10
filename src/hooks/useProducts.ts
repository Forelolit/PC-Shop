import { productsApi } from '@api/useGetAllProducts';
import { useProductsStore } from '@store/useProductsStore';
import { useEffect } from 'react';

interface useProductsArgs {
  quantity: number;
}

export const useProducts = ({ quantity }: useProductsArgs) => {
  const setProducts = useProductsStore((state) => state.setProducts);
  const { data, isLoading, isError } = productsApi.useGetAll();

  useEffect(() => {
    if (data) setProducts(data);
  }, [data, setProducts]);

  const products = useProductsStore((state) => state.products).slice(0, quantity);

  return { products, isLoading, isError };
};
