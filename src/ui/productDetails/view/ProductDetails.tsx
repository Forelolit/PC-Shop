import styles from './ProductDetails.module.scss';
import type { FC } from 'react';
import { Typography } from '@ui/typography';
import type { ProductDetailsProps } from '../types/types';

const priceAfterDiscount = (price: number, discount: number) => {
  return price * (1 - discount / 100);
};

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
      <div className={styles.priceBlock}>
        {!discount && <Typography>{price} Сом</Typography>}
        {discount && <Typography>{priceAfterDiscount(price, discount)} Сом</Typography>}
        {discount && (
          <>
            <Typography color="grey">
              <s>{price}</s>
            </Typography>
            <Typography className={styles.sale} color="white">
              {discount}% Sale
            </Typography>
          </>
        )}
      </div>
    </article>
  );
};
