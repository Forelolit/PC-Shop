import { useProductsById } from '@hooks/useProducts';
import styles from './ProductBlock.module.scss';
import { CustomSwiper, ProductPrice } from '@components/index';
import { Button, Container, Spinner, Typography } from '@ui/index';
import type { FC } from 'react';
import { Link, useParams } from 'react-router';

export const ProductBlock: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, isError, isLoading } = useProductsById(Number(id));

  return (
    <section className={styles.wrapper}>
      <Container>
        {isError && (
          <Typography variant="h3" align="center">
            Ошибка загрузки данных
          </Typography>
        )}

        <div key={product?.id} className={styles.productContent}>
          {isLoading ? (
            <div className={styles.loading}>
              <Spinner />
            </div>
          ) : (
            <CustomSwiper
              arrItems={
                product?.images?.map((img, index) => ({
                  id: index,
                  image: img,
                })) ?? []
              }
              className={styles.swiper}
              slidesPerView={1}
              swiperVariant="gallery"
            />
          )}

          <div className={styles.productInfo}>
            <Typography variant="h4" weight="semiBold">
              {product?.title}
            </Typography>
            <Typography>Бренд: {product?.brand}</Typography>
            <Typography>Категория: {product?.category}</Typography>
            <Typography>Рейтинг: {product?.rating}</Typography>
            <Typography>Кол-во: {product?.stock}</Typography>
            <Typography>Описание: {product?.description}</Typography>

            <ProductPrice
              price={product?.price ?? 0}
              discountPercentage={product?.discountPercentage}
            />

            <Link to={'https://example.com'} target="_blank">
              <Button size="big">Купить</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
