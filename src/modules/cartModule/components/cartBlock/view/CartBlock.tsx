import styles from './CartBlock.module.scss';
import { Typography, Container, ProductDetails, Dropdown } from '@ui/index';
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
  return (
    <section className={styles.wrapper}>
      <Container>
        <Typography variant="h2">Cart page</Typography>

        <Dropdown options={optionItems} title="Filter" className={styles.filters} />

        <ul className={styles.list}>
          {cartItems.map((item, index) => (
            <ProductDetails key={index} price={1000} name={item} thumbnail={''} link="" />
          ))}
        </ul>
      </Container>
    </section>
  );
};
