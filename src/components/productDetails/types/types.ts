import type { Products } from 'types/types';

type ProductBase = Pick<Products, 'price' | 'discountPercentage' | 'title' | 'thumbnail'>;

export type ProductDetailsProps = ProductBase & {
  link?: string;
  cardOrientation?: 'vertical' | 'horizontal';
  item: Products;
};
