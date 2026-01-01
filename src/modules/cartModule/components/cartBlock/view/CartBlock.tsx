import styles from './CartBlock.module.scss';
import { DropdownFilter, ProductDetails } from '@components/index';
import { useAuthStore } from '@store/useAuthStore';
import { useProductsStore } from '@store/useProductsStore';
import { Typography, Container } from '@ui/index';
import { path } from '@utils/constants/constants';
import { useState, type FC, type SetStateAction } from 'react';
import type { Products } from 'types/types';

export const CartBlock: FC = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const cart = useProductsStore((state) => state.cartProducts);
  const cartActive = cart.length ? true : false;
  const [filteredCart, setFilteredCart] = useState(cart);

  const handleChange = (filtered: SetStateAction<Products[]>) => {
    setFilteredCart(filtered);
  };

  return (
    <section className={styles.wrapper}>
      <Container>
        <Typography variant="h2">Ваша корзина</Typography>

        <DropdownFilter
          onChange={handleChange}
          filterArray={cart}
          disabled={!cartActive}
          className={styles.filters}
        />

        {!isAuth && <Typography variant="h3">Сначала войдите в аккаунт</Typography>}

        {isAuth && (
          <ul className={styles.list}>
            {!cart.length && (
              <Typography variant="h3" className={styles.empty}>
                Здесь будут ваши товары
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
