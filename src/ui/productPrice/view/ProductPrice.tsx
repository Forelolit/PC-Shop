import styles from './ProductPrice.module.scss';
import type { ProductPriceProps } from '../types/types';
import type { FC } from 'react';
import { Typography } from '@ui/typography';
import { priceAfterDiscount } from '@utils/helpers/helpers';

export const ProductPrice: FC<ProductPriceProps> = ({ price, discount }) => {
  return (
    <div className={styles.priceBlock}>
      {!discount && <Typography variant="h4">{price} Сом</Typography>}
      {discount && <Typography variant="h4">{priceAfterDiscount(price, discount)} Сом</Typography>}
      {discount && (
        <>
          <Typography color="grey" variant="p">
            <s>{price}</s>
          </Typography>

          <Typography className={styles.sale} color="white" variant="h5">
            {discount}% Sale
          </Typography>
        </>
      )}
    </div>
  );
};
