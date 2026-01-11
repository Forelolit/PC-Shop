import styles from './ProductPrice.module.scss';
import type { ProductPriceProps } from '../types/types';
import type { FC } from 'react';
import { Typography } from '@ui/typography';
import { priceAfterDiscount } from '@utils/helpers/helpers';

export const ProductPrice: FC<ProductPriceProps> = ({ price, discountPercentage }) => {
  return (
    <div className={styles.priceBlock}>
      {!discountPercentage && <Typography variant="h4">{price} Сом</Typography>}

      {discountPercentage && (
        <Typography variant="h4">
          {priceAfterDiscount(price, discountPercentage).toFixed(1)} Сом
        </Typography>
      )}

      {discountPercentage && discountPercentage > 0 && (
        <>
          <Typography color="grey" variant="p">
            <s>{Number(price).toFixed(1)}</s>
          </Typography>

          <Typography className={styles.sale} color="white" variant="h5">
            {discountPercentage.toFixed(1)}% Sale
          </Typography>
        </>
      )}
    </div>
  );
};
