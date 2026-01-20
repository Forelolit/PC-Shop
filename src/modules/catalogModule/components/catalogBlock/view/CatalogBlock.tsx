import { PaginationControls } from '@components/paginationControls';
import styles from './CatalogBlock.module.scss';
import { ProductDetails } from '@components/index';
import { useProducts } from '@hooks/useProducts';
import { Container, Typography } from '@ui/index';
import { path } from '@utils/constants/constants';
import { useState, type FC } from 'react';

export const CatalogBlock: FC = () => {
  const [page, setPage] = useState(1);
  const { data, isError, isLoading } = useProducts(page, 'unset', { category: 'laptops' });

  const getPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <section className={styles.wrapper}>
      <Container>
        <Typography variant="h2">Каталог</Typography>

        <PaginationControls
          onChange={getPage}
          pages={data?.products?.length}
          page={page}
          prev={() => setPage((old) => old - 1)}
          next={() => setPage((old) => old + 1)}
          disablePrev={!data?.hasPrevPage}
          disableNext={!data?.hasNextPage}
          className={styles.pagination}
        />

        {isError && (
          <Typography align="center" variant="h3">
            Ошибка загрузки данных
          </Typography>
        )}
        {isLoading && (
          <Typography align="center" variant="h3">
            Загрузка
          </Typography>
        )}

        <ul className={styles.list}>
          {data?.products?.map((item) => (
            <li key={item.id}>
              <ProductDetails
                item={item}
                cardOrientation="horizontal"
                link={`${path.product}/${item.id}/${item.title.split(' ').join('-')}`}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
