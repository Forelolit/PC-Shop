import styles from './ProductBlock.module.scss';
import { Button, Container, ProductPrice, Typography } from '@ui/index';
import type { FC } from 'react';
import { useParams } from 'react-router';

const items = [
  {
    id: 1,
    to: 'PC-ULTRA-1000',
    label: 'PC ULTRA 1000',
    image:
      'https://assets.corsair.com/image/upload/f_auto,q_auto/products/Systems/a7500/CS-9050135-NA/CORSAIR_VENGEANCE_a7500_NAUTILUS_RENDER_01.png',
    price: 44000,
    discount: null,
  },
  {
    id: 2,
    to: 'PC-ULTRA-3000',
    label: 'PC ULTRA 3000',
    image:
      'https://www.memorypc.eu/media/0d/c5/1a/1751628433/563472-05-1751628431-secondlast-1751628432.webp',
    price: 77000,
    discount: 15,
  },
  {
    id: 3,
    to: 'PC-ULTRA-4000',
    label: 'PC ULTRA 4000',
    image:
      'https://nzxt.com/cdn/shop/files/player-1-ww-09-04-24-hero-black-badge.png?v=1747249354&width=2048',
    price: 90000,
    discount: 20,
  },
  {
    id: 4,
    to: 'PC-ULTRA-2000',
    label: 'PC ULTRA 2000',
    image: 'https://m.media-amazon.com/images/I/7128GOUxSCL.jpg',
    price: 55000,
    discount: null,
  },
];

export const ProductBlock: FC = () => {
  const params = useParams();
  return (
    <section className={styles.wrapper}>
      <Container>
        {items.map(
          (item) =>
            item.id.toString() === params.id && (
              <div key={item.id} className={styles.productContent}>
                <div className={styles.swiper}>
                  <div className={styles.imageWrapper}>
                    <img src={item.image} alt={`${item.label}, image`} />
                  </div>
                </div>

                <div className={styles.productInfo}>
                  <Typography>{item.label}</Typography>
                  <ProductPrice price={item.price} discount={item.discount} />
                  <Button>Купить</Button>
                </div>
              </div>
            )
        )}
      </Container>
    </section>
  );
};
