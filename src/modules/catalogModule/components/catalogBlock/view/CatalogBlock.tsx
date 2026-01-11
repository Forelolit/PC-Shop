import { PaginationControls } from '@components/paginationControls';
import styles from './CatalogBlock.module.scss';
import { ProductDetails } from '@components/index';
import { useProducts } from '@hooks/useProducts';
import { Container, Typography } from '@ui/index';
import { path } from '@utils/constants/constants';
import { useEffect, useState, type FC } from 'react';

export const CatalogBlock: FC = () => {
  const [page, setPage] = useState(0);
  const { products, isError, isLoading } = useProducts(page, 10);

  const pageValidate = page + 1;

  useEffect(() => {
    if (page < 0) {
      setPage(products?.length ?? page);
    } else if (page > (products?.length ?? page)) {
      setPage(0);
    }
  }, [page, products?.length, setPage]);

  const prevPageHandler = () => {
    let prevPage = page;
    setPage((prevPage -= 1));
  };

  const nextPageHandler = () => {
    let nextPage = page;
    setPage((nextPage += 1));
  };

  const getPage = (page: number) => {
    setPage(page - 1);
  };

  return (
    <section className={styles.wrapper}>
      <Container>
        <Typography variant="h2">Catalog</Typography>

        <PaginationControls
          onChange={getPage}
          pages={products?.length}
          page={pageValidate}
          prev={prevPageHandler}
          next={nextPageHandler}
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
          {products?.map((item) => (
            <li key={item.id}>
              <ProductDetails
                item={item}
                cardOrientation="horizontal"
                link={`${path.product}/${item.id}/${item.title.split(' ').join('-')}`}
              />
            </li>
          ))}
        </ul>

        <PaginationControls
          onChange={getPage}
          pages={products?.length}
          page={pageValidate}
          prev={prevPageHandler}
          next={nextPageHandler}
          className={styles.pagination}
        />
      </Container>
    </section>
  );
};
