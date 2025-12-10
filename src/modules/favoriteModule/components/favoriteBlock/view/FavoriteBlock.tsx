import { useAuthStore } from '@store/useAuthStore';
import styles from './FavoriteBlock.module.scss';
import { ProductDetails } from '@components/index';
import { useProductsStore } from '@store/useProductsStore';
import { Typography, Container, Dropdown } from '@ui/index';
import { path } from '@utils/constants/constants';
import type { FC } from 'react';

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
  const favoriteItems = useProductsStore((state) => state.favoriteProducts);
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <section className={styles.wrapper}>
      <Container>
        <Typography variant="h2">Your favorites</Typography>

        <Dropdown options={optionItems} title="Filter" className={styles.filters} />

        {!isAuth && <Typography variant="h3">Сначала войдите в аккаунт</Typography>}

        {isAuth && (
          <ul className={styles.list}>
            {!favoriteItems.length && (
              <Typography variant="h3" className={styles.empty}>
                Здесь будут ваши избранные товары
              </Typography>
            )}
            {favoriteItems.map((item, index) => (
              <li key={index}>
                <ProductDetails
                  key={item.id}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  price={item.price}
                  discountPercentage={item.discountPercentage}
                  link={`${path.product}/${item.id}/${item.title.split(' ').join('-')}`}
                  item={item}
                />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};
