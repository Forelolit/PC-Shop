import { productsApi } from '@api/useGetAllProducts';
import { useProductsStore } from '@store/useProductsStore';
import { useEffect } from 'react';

export const useProducts = () => {
  const setProducts = useProductsStore((state) => state.setProducts);
  const { data, isLoading, isError } = productsApi.useGetAll();

  useEffect(() => {
    if (data) setProducts(data);
  }, [data, setProducts]);

  const products = useProductsStore((state) => state.products);

  return { products, isLoading, isError };
};
