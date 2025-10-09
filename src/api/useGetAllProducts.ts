import { useQuery } from '@tanstack/react-query';
import { $api } from '@utils/lib/requester';
import type { Products } from 'types/types';

export const productsApi = {
  useGetAll: () =>
    useQuery<Products[]>({
      queryKey: ['products'],
      queryFn: async () => {
        const res = await $api.get<{ products: Products[] }>(`/products`);
        return res.data.products;
      },
    }),
  useGetById: (id: number) =>
    useQuery<Products>({
      queryKey: ['product', id],
      queryFn: async () => {
        const res = await $api.get<Products>(`/products/${id}`);
        return res.data;
      },
    }),
};
