import styles from './CustomSwiper.module.scss';
import { type FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { CustomSwiperProps } from '../types/types';
import { Link } from 'react-router';
import classNames from 'classnames';

export const CustomSwiper: FC<CustomSwiperProps> = ({
  swiperVariant = 'banner',
  slidesPerView = 1,
  arrItems,
  className,
  center,
  delay = 2000,
  speed = 2000,
}) => {
  return (
    <>
      {swiperVariant === 'banner' ? (
        <Swiper
          className={className}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          allowTouchMove={false}
          navigation
          pagination={{ clickable: true }}
          speed={speed}
          autoplay={{
            delay: delay,
          }}
          loop
        >
          {arrItems.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={item.link ?? '/'}>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={`adds image ${item.image}`} draggable={false} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          className={classNames(className, styles.swiperGallery)}
          modules={[Pagination, Navigation]}
          slidesPerView={slidesPerView}
          centeredSlides={center}
          pagination={{ clickable: true }}
          navigation
        >
          {arrItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.imageGalleryWrapper}>
                <img src={item.image} alt={`image ${item.id}`} draggable={false} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
