import type { Products } from 'types/types';

type ProductBase = Pick<Products, 'price' | 'discount' | 'name' | 'thumbnail'>;

export type ProductDetailsProps = ProductBase & {
  link?: string;
};
