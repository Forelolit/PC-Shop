import styles from './ProductDetails.module.scss';
import type { FC } from 'react';
import { Typography } from '@ui/typography';
import type { ProductDetailsProps } from '../types/types';
import { ProductPrice } from '@ui/productPrice';

export const ProductDetails: FC<ProductDetailsProps> = ({
  name,
  price = 0,
  thumbnail,
  discount,
}) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={thumbnail ?? '/'} alt={`${name}, image`} />
      </div>

      <Typography className={styles.title} weight="semiBold">
        {name}
      </Typography>

      <ProductPrice price={price} discount={discount} />
    </article>
  );
};
