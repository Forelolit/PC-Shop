import styles from './ProductBlock.module.scss';
import { Button, Container, CustomSwiper, ProductPrice, Typography } from '@ui/index';
import type { FC } from 'react';
import { Link, useParams } from 'react-router';

const items = [
  {
    id: 1,
    label: 'PC ULTRA 1000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor ligula, placerat sit amet dignissim ac, consectetur eu dui. Etiam sapien tortor, gravida sed risus et, condimentum faucibus nisi. Sed vel viverra mauris. Nam cursus, risus vel blandit hendrerit, augue nunc rutrum nisi, sit amet pellentesque nunc leo ut tortor. Nullam magna neque, iaculis a faucibus nec, dapibus ut ligula. Phasellus posuere porta neque viverra porta. Mauris et venenatis mi, eu aliquam ipsum. Fusce mollis vel risus et accumsan. Nulla rhoncus nulla leo, non placerat diam fringilla ac. Donec molestie facilisis nisi in semper. Quisque vestibulum consequat justo et maximus',
    images: [
      'https://assets.corsair.com/image/upload/f_auto,q_auto/products/Systems/a7500/CS-9050135-NA/CORSAIR_VENGEANCE_a7500_NAUTILUS_RENDER_01.png',
    ],
    price: 44000,
    discount: null,
    buyLink: 'https://example.com',
  },
  {
    id: 2,
    label: 'PC ULTRA 3000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor ligula, placerat sit amet dignissim ac, consectetur eu dui. Etiam sapien tortor, gravida sed risus et, condimentum faucibus nisi. Sed vel viverra mauris. Nam cursus, risus vel blandit hendrerit, augue nunc rutrum nisi, sit amet pellentesque nunc leo ut tortor. Nullam magna neque, iaculis a faucibus nec, dapibus ut ligula. Phasellus posuere porta neque viverra porta. Mauris et venenatis mi, eu aliquam ipsum. Fusce mollis vel risus et accumsan. Nulla rhoncus nulla leo, non placerat diam fringilla ac. Donec molestie facilisis nisi in semper. Quisque vestibulum consequat justo et maximus',
    images: [
      'https://www.memorypc.eu/media/0d/c5/1a/1751628433/563472-05-1751628431-secondlast-1751628432.webp',
      'https://www.memorypc.eu/media/0d/c5/1a/1751628433/563472-05-1751628431-secondlast-1751628432.webp',
      'https://www.memorypc.eu/media/0d/c5/1a/1751628433/563472-05-1751628431-secondlast-1751628432.webp',
    ],
    price: 77000,
    discount: 15,
    buyLink: 'https://example.com',
  },
  {
    id: 3,
    label: 'PC ULTRA 4000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor ligula, placerat sit amet dignissim ac, consectetur eu dui. Etiam sapien tortor, gravida sed risus et, condimentum faucibus nisi. Sed vel viverra mauris. Nam cursus, risus vel blandit hendrerit, augue nunc rutrum nisi, sit amet pellentesque nunc leo ut tortor. Nullam magna neque, iaculis a faucibus nec, dapibus ut ligula. Phasellus posuere porta neque viverra porta. Mauris et venenatis mi, eu aliquam ipsum. Fusce mollis vel risus et accumsan. Nulla rhoncus nulla leo, non placerat diam fringilla ac. Donec molestie facilisis nisi in semper. Quisque vestibulum consequat justo et maximus',
    images: [
      'https://nzxt.com/cdn/shop/files/player-1-ww-09-04-24-hero-black-badge.png?v=1747249354&width=2048',
    ],
    price: 90000,
    discount: 20,
    buyLink: 'https://example.com',
  },
  {
    id: 4,
    label: 'PC ULTRA 2000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor ligula, placerat sit amet dignissim ac, consectetur eu dui. Etiam sapien tortor, gravida sed risus et, condimentum faucibus nisi. Sed vel viverra mauris. Nam cursus, risus vel blandit hendrerit, augue nunc rutrum nisi, sit amet pellentesque nunc leo ut tortor. Nullam magna neque, iaculis a faucibus nec, dapibus ut ligula. Phasellus posuere porta neque viverra porta. Mauris et venenatis mi, eu aliquam ipsum. Fusce mollis vel risus et accumsan. Nulla rhoncus nulla leo, non placerat diam fringilla ac. Donec molestie facilisis nisi in semper. Quisque vestibulum consequat justo et maximus',
    images: ['https://m.media-amazon.com/images/I/7128GOUxSCL.jpg'],
    price: 55000,
    discount: null,
    buyLink: 'https://example.com',
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
                <CustomSwiper
                  arrItems={item.images.map((img, index) => ({
                    id: index,
                    image: img,
                  }))}
                  className={styles.swiper}
                  slidesPerView={1}
                  swiperVariant="gallery"
                />

                <div className={styles.productInfo}>
                  <Typography variant="h4" weight="semiBold">
                    {item.label}
                  </Typography>
                  <Typography>{item.description}</Typography>
                  <ProductPrice price={item.price} discount={item.discount} />
                  <Link to={item.buyLink}>
                    <Button size="big">Купить</Button>
                  </Link>
                </div>
              </div>
            )
        )}
      </Container>
    </section>
  );
};
