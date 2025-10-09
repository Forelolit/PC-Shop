export interface CustomSwiperProps {
  arrItems: { id: number; image: string; link?: string }[];
  swiperVariant: 'banner' | 'gallery';
  slidesPerView?: number;
  className?: string;
  center?: boolean;
  speed?: number;
  delay?: number;
}
