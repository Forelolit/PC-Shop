import { productsApi } from '@api/useGetAllProducts';
import { useQuery } from '@tanstack/react-query';

export const useProducts = (
  pageNumber: number,
  limit: number | 'unset',
  filters?: { brand?: string; category?: string }
) => {
  return useQuery({
    queryKey: ['products', { pageNumber }],
    queryFn: () => productsApi.useGetAll(pageNumber, limit, filters),
  });
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
