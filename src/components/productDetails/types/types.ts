import type { Products } from 'types/types';

export interface ProductDetailsProps {
  link?: string;
  cardOrientation?: 'vertical' | 'horizontal';
  item: Products;
}
