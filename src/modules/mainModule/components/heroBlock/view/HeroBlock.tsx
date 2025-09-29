import styles from './HeroBlock.module.scss';
import type { FC } from 'react';
import { CustomSwiper } from '@ui/customSwiper';

const arrItems = [
  {
    id: 1,
    image:
      'https://vrlatech.com/wp-content/uploads/slider/cache/f7466631d70080d7600de1521015e38d/sAltakfA.jpg',
    link: 'https://example.com',
  },
  {
    id: 2,
    image: 'https://artline.ua/storage/images/news/94/ru/1280_news_1598619740574478_0.webp',
    link: 'https://example.com',
  },
  {
    id: 3,
    image: 'https://dlcdnwebimgs.asus.com/gain/94F198CA-BABA-4F6F-89C6-A3F282F63D92/fwebp',
    link: 'https://example.com',
  },
];

export const HeroBlock: FC = () => {
  return (
    <section className={styles.wrapper}>
      <CustomSwiper swiperVariant="banner" arrItems={arrItems} delay={3500} speed={3000} />
    </section>
  );
};
