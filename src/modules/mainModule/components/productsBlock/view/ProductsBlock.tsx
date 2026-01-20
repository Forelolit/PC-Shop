import styles from './ProductsBlock.module.scss';
import { ProductDetails } from '@components/index';
import { useProducts } from '@hooks/useProducts';
import { Button, Container, Typography } from '@ui/index';
import { path } from '@utils/constants/constants';
import type { FC } from 'react';
import { Link } from 'react-router';

export const ProductsBlock: FC = () => {
  const { data, isError, isLoading } = useProducts(1, 6);

  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.title}>
          <Typography variant="h2">Готовые наборы</Typography>
          <Link to={path.catalog}>
            <Button size="small">Ещё</Button>
          </Link>
        </div>

        {isError && <Typography variant="h3">Ошибка загрузки данных</Typography>}
        {isLoading && <Typography variant="h3">Загрузка</Typography>}

        <div className={styles.content}>
          {data?.products?.map((item) => (
            <ProductDetails
              key={item.id}
              link={`${path.product}/${item.id}/${item.title.split(' ').join('-')}`}
              item={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
