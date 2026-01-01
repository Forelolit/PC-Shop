import styles from './ProductDetails.module.scss';
import { type FC } from 'react';
import { Typography } from '@ui/typography';
import type { ProductDetailsProps } from '../types/types';
import { ProductPrice } from '@components/productPrice';
import { Button } from '@ui/button';
import { HeartIcon, ShoppingBasketIcon, Star } from 'lucide-react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { useProductsStore } from '@store/useProductsStore';
import { toast } from 'react-toastify';

export const ProductDetails: FC<ProductDetailsProps> = ({
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
            {item.thumbnail && <img src={item.thumbnail ?? '/'} alt={`${item.title}, image`} />}
            {!item.thumbnail && <div className={styles.skeleton}>No image</div>}
          </div>
        </Link>

        <Link to={link} className={styles.linkTitle}>
          <Typography className={styles.title} weight="semiBold" truncate={30}>
            {item.title}
          </Typography>
        </Link>

        <ProductPrice price={item.price} discountPercentage={item.discountPercentage} />

        <Typography className={styles.rating}>
          <Star fill="#ffee8c" />
          {item.rating}
        </Typography>

        <div className={styles.buttons}>
          {activeFavorite ? (
            <Button
              variant="icon"
              color="red"
              onClick={() => {
                addToFavorite(item);
                toast('♥ Вы убрали из избранного');
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
                toast('♥ Вы добавили в избранное');
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
                toast('🛒 Вы убрали из корзины');
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
                toast('🛒 Вы добавили в корзину');
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
