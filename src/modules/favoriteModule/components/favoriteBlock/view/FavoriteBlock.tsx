import styles from './FavoriteBlock.module.scss';
import { ProductDetails } from '@components/index';
import { Typography, Container, Dropdown } from '@ui/index';
import type { FC } from 'react';

const favoriteItems = ['sdaf', 'asdf', 'as;ldifjkaoi', 'asdfadfasd'];
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

export const FavoriteBlock: FC = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Typography variant="h2">Your favorites</Typography>

        <Dropdown options={optionItems} title="Filter" className={styles.filters} />

        <ul className={styles.list}>
          {favoriteItems.map((item, index) => (
            <li key={index}>
              <ProductDetails price={1000} title={item} thumbnail={''} link="" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
