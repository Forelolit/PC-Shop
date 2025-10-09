import styles from './CatalogBlock.module.scss';
import { ProductDetails } from '@components/index';
import { useProducts } from '@hooks/useProducts';
import { Container, Typography } from '@ui/index';
import { path } from '@utils/constants/constants';
import type { FC } from 'react';

export const CatalogBlock: FC = () => {
  const { products, isError, isLoading } = useProducts();

  return (
    <section className={styles.wrapper}>
      <Container>
        <Typography variant="h2">Catalog</Typography>

        {isError && <Typography variant="h3">Ошибка загрузки данных</Typography>}
        {isLoading && <Typography variant="h3">Загрузка</Typography>}

        <ul className={styles.list}>
          {products?.map((item) => (
            <li key={item.id}>
              <ProductDetails
                price={item.price}
                title={item.title}
                thumbnail={item.thumbnail}
                link={`${path.product}/${item.id}/${item.title.split(' ').join('-')}`}
                discountPercentage={item.discountPercentage}
                cardOrientation="horizontal"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
