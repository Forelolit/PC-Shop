import { productsApi } from '@api/useGetAllProducts';
import styles from './ProductBlock.module.scss';
import { CustomSwiper, ProductPrice } from '@components/index';
import { Button, Container, Typography } from '@ui/index';
import type { FC } from 'react';
import { Link, useParams } from 'react-router';

export const ProductBlock: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: item, status } = productsApi.useGetById(Number(id));

  return (
    <section className={styles.wrapper}>
      <Container>
        {status === 'error' && <Typography variant="h3">Ошибка загрузки данных</Typography>}
        {status === 'pending' && <Typography variant="h3">Загрузка</Typography>}

        <div key={item?.id} className={styles.productContent}>
          <CustomSwiper
            arrItems={
              item?.images?.map((img, index) => ({
                id: index,
                image: img,
              })) ?? []
            }
            className={styles.swiper}
            slidesPerView={1}
            swiperVariant="gallery"
          />

          <div className={styles.productInfo}>
            <Typography variant="h4" weight="semiBold">
              {item?.title}
            </Typography>
            <Typography>Бренд: {item?.brand}</Typography>
            <Typography>Категория: {item?.category}</Typography>
            <Typography>Рейтинг: {item?.rating}</Typography>
            <Typography>Кол-во: {item?.stock}</Typography>
            <Typography>Описание: {item?.description}</Typography>

            <ProductPrice price={item?.price ?? 0} discountPercentage={item?.discountPercentage} />

            <Link to={'https://example.com'} target="_blank">
              <Button size="big">Купить</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
