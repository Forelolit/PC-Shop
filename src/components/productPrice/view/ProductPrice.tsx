import styles from './ProductPrice.module.scss';
import type { ProductPriceProps } from '../types/types';
import type { FC } from 'react';
import { Typography } from '@ui/typography';
import { priceAfterDiscount } from '@utils/helpers/helpers';

export const ProductPrice: FC<ProductPriceProps> = ({ price, discountPercentage }) => {
  const hasDiscount = Boolean(discountPercentage && discountPercentage > 0);

  return (
    <div className={styles.priceBlock}>
      {!hasDiscount && <Typography variant="h4">{Number(price).toFixed(1)} Сом</Typography>}

      {hasDiscount && (
        <>
          <Typography variant="h4">
            {priceAfterDiscount(price, discountPercentage!).toFixed(1)} Сом
          </Typography>

          <Typography color="grey" variant="p">
            <s>{Number(price).toFixed(1)}</s>
          </Typography>

          <Typography className={styles.sale} color="white" variant="h5">
            {discountPercentage!.toFixed(1)}% Sale
          </Typography>
        </>
      )}
    </div>
  );
};
