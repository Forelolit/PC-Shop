import { productsApi } from '@api/useGetAllProducts';
import { useQuery } from '@tanstack/react-query';

export const useProducts = (pageNumber: number, limit: number) => {
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['products', { pageNumber }],
    queryFn: () => productsApi.useGetAll(pageNumber, limit),
  });

  return { products, isLoading, isError, refetch };
};

export const useProductsById = (id: number) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products', { id }],
    queryFn: () => productsApi.useGetById(id),
  });

  return { product, isLoading, isError };
};
