import styles from './ProductDetails.module.scss';
import { useState, type FC } from 'react';
import { Typography } from '@ui/typography';
import type { ProductDetailsProps } from '../types/types';
import { ProductPrice } from '@ui/productPrice';
import { Button } from '@ui/button';
import { HeartIcon, ShoppingBasketIcon } from 'lucide-react';
import { Link } from 'react-router';

export const ProductDetails: FC<ProductDetailsProps> = ({
  name,
  price = 0,
  thumbnail,
  discount,
  link = '/',
}) => {
  const [activeFavorite, setActiveFavorite] = useState(false);
  const [activeCart, setActiveCart] = useState(false);

  return (
    <article className={styles.wrapper}>
      <Link to={link}>
        <div className={styles.imageWrapper}>
          <img src={thumbnail ?? '/'} alt={`${name}, image`} />
        </div>
      </Link>
      <div className={styles.buttons}>
        {activeFavorite ? (
          <Button variant="icon" color="red" onClick={() => setActiveFavorite(false)}>
            <HeartIcon color="white" />
          </Button>
        ) : (
          <Button variant="icon" color="white" onClick={() => setActiveFavorite(true)}>
            <HeartIcon color="#ef4444" />
          </Button>
        )}

        {activeCart ? (
          <Button variant="icon" color="green" onClick={() => setActiveCart(false)}>
            <ShoppingBasketIcon color="white" />
          </Button>
        ) : (
          <Button variant="icon" color="white" onClick={() => setActiveCart(true)}>
            <ShoppingBasketIcon color="#10b981" />
          </Button>
        )}
      </div>

      <Typography className={styles.title} weight="semiBold">
        {name}
      </Typography>

      <ProductPrice price={price} discount={discount} />
    </article>
  );
};
