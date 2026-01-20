import { $api } from '@utils/lib/requester';
import type { Products, ProductsResponse } from 'types/types';

export const productsApi = {
  useGetAll: async (
    page: number,
    limit: number | 'unset',
    filters: { brand?: string; category?: string } = {}
  ) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit === 'unset' ? '' : limit.toString(),
      ...filters,
    });

    const res = await $api.get<ProductsResponse>(`/products/?${params.toString()}`);
    return res.data;
  },
  useGetById: async (id: number) => {
    const res = await $api.get<Products>(`/products/${id}`);
    return res.data;
  },
};
