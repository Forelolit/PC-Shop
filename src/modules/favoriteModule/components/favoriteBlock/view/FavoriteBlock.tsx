import { useAuthStore } from '@store/useAuthStore';
import styles from './FavoriteBlock.module.scss';
import { DropdownFilter, ProductDetails } from '@components/index';
import { useProductsStore } from '@store/useProductsStore';
import { Typography, Container } from '@ui/index';
import { path } from '@utils/constants/constants';
import { useState, type FC, type SetStateAction } from 'react';
import type { Products } from 'types/types';

export const FavoriteBlock: FC = () => {
  const favorite = useProductsStore((state) => state.favoriteProducts);
  const isAuth = useAuthStore((state) => state.isAuth);
  const favoriteActive = favorite.length ? true : false;
  const [filteredCart, setFilteredCart] = useState(favorite);

  const handleChange = (filtered: SetStateAction<Products[]>) => {
    setFilteredCart(filtered);
  };

  return (
    <section className={styles.wrapper}>
      <Container>
        <Typography variant="h2">Ваши избранные</Typography>

        <DropdownFilter
          onChange={handleChange}
          filterArray={favorite}
          disabled={!favoriteActive}
          className={styles.filters}
        />

        {!isAuth && <Typography variant="h3">Сначала войдите в аккаунт</Typography>}

        {isAuth && (
          <ul className={styles.list}>
            {!favorite.length && (
              <Typography variant="h3" className={styles.empty}>
                Здесь будут ваши избранные товары
              </Typography>
            )}
            {filteredCart.map((item, index) => (
              <li key={index}>
                <ProductDetails
                  key={item.id}
                  item={item}
                  link={`${path.product}/${item.id}/${item.title.split(' ').join('-')}`}
                />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};
