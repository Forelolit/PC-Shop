import styles from './ProductsBlock.module.scss';
import { ProductDetails } from '@components/index';
import { useProducts } from '@hooks/useProducts';
import { Container, Typography } from '@ui/index';
import { path } from '@utils/constants/constants';
import type { FC } from 'react';

export const ProductsBlock: FC = () => {
  const { products, isError, isLoading } = useProducts();

  return (
    <section className={styles.wrapper}>
      <Container>
        <Typography variant="h2">Готовые наборы</Typography>

        {isError && <Typography variant="h3">Ошибка загрузки данных</Typography>}
        {isLoading && <Typography variant="h3">Загрузка</Typography>}

        <div className={styles.content}>
          {products?.map((item) => (
            <ProductDetails
              key={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              price={item.price}
              discountPercentage={item.discountPercentage}
              link={`${path.product}/${item.id}/${item.title.split(' ').join('-')}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
