import { $api } from '@utils/lib/requester';
import type { Products } from 'types/types';

export const productsApi = {
  useGetAll: async (pageNumber: number, limit: number) => {
    const offset = pageNumber * limit;
    const res = await $api.get<{ products: Products[] }>(`/products?limit=${limit}&skip=${offset}`);
    return res.data.products;
  },
  useGetById: async (id: number) => {
    const res = await $api.get<Products>(`/products/${id}`);
    return res.data;
  },
};
