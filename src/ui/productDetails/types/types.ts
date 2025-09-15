import type { Products } from 'types/types';

export type ProductDetailsProps = Pick<Products, 'price' | 'discount' | 'name' | 'thumbnail'>;
