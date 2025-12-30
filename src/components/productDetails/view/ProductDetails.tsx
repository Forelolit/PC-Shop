import styles from './ProductDetails.module.scss';
import { type FC } from 'react';
import { Typography } from '@ui/typography';
import type { ProductDetailsProps } from '../types/types';
import { ProductPrice } from '@components/productPrice';
import { Button } from '@ui/button';
import { HeartIcon, ShoppingBasketIcon } from 'lucide-react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { useProductsStore } from '@store/useProductsStore';

export const ProductDetails: FC<ProductDetailsProps> = ({
  title,
  price = 0,
  thumbnail,
  discountPercentage,
  link = '/',
  cardOrientation = 'vertical',
  item,
}) => {
  const addToCard = useProductsStore((state) => state.addCartProduct);
  const addToFavorite = useProductsStore((state) => state.addFavoriteProduct);

  const activeCart = useProductsStore((state) => state.cartProducts.some((p) => p.id === item.id));
  const activeFavorite = useProductsStore((state) =>
    state.favoriteProducts.some((p) => p.id === item.id)
  );

  return (
    <>
      <article
        className={classNames(
          styles.wrapper,
          cardOrientation === 'vertical' ? styles.vertical : styles.horizontal
        )}
      >
        <Link to={link} className={styles.linkImage}>
          <div className={styles.imageWrapper}>
            {thumbnail && <img src={thumbnail ?? '/'} alt={`${title}, image`} />}
            {!thumbnail && <div className={styles.skeleton}>No image</div>}
          </div>
        </Link>

        <Link to={link} className={styles.linkTitle}>
          <Typography className={styles.title} weight="semiBold" truncate={30}>
            {title}
          </Typography>
        </Link>

        <ProductPrice price={price} discountPercentage={discountPercentage} />

        <div className={styles.buttons}>
          {activeFavorite ? (
            <Button
              variant="icon"
              color="red"
              onClick={() => {
                addToFavorite(item);
              }}
            >
              <HeartIcon color="white" />
            </Button>
          ) : (
            <Button
              variant="icon"
              color="white"
              onClick={() => {
                addToFavorite(item);
              }}
            >
              <HeartIcon color="#ef4444" />
            </Button>
          )}

          {activeCart ? (
            <Button
              variant="icon"
              color="green"
              onClick={() => {
                addToCard(item);
              }}
            >
              <ShoppingBasketIcon color="white" />
            </Button>
          ) : (
            <Button
              variant="icon"
              color="white"
              onClick={() => {
                addToCard(item);
              }}
            >
              <ShoppingBasketIcon color="#10b981" />
            </Button>
          )}
        </div>
      </article>
    </>
  );
};
