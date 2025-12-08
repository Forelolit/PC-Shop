import styles from './CartBlock.module.scss';
import { ProductDetails } from '@components/index';
import { useAuthStore } from '@store/useAuthStore';
import { Typography, Container, Dropdown } from '@ui/index';
import type { FC } from 'react';

const cartItems = ['sdaf', 'asdf', 'as;ldifjkaoi', 'asdfadfasd'];
const optionItems = [
  {
    id: 1,
    label: 'first',
  },
  {
    id: 2,
    label: 'second',
  },
  {
    id: 3,
    label: 'third',
  },
  {
    id: 4,
    label: 'fourth',
  },
];

export const CartBlock: FC = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <section className={styles.wrapper}>
      <Container>
        <Typography variant="h2">Your cart</Typography>

        <Dropdown options={optionItems} title="Filter" className={styles.filters} />

        {!isAuth && <Typography variant="h3">Сначала войдите в аккаунт</Typography>}

        {isAuth && (
          <ul className={styles.list}>
            {cartItems.map((item, index) => (
              <li key={index}>
                <ProductDetails price={1000} title={item} thumbnail={''} link="" />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};
