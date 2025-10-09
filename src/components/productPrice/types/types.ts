import type { Products } from 'types/types';

export type ProductPriceProps = Pick<Products, 'price' | 'discountPercentage'>;
