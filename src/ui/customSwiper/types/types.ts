type ITSwiperVariant = 'banner' | 'gallery';

export interface CustomSwiperProps {
  arrItems: { id: number; image: string; link?: string }[];
  swiperVariant: ITSwiperVariant;
  slidesPerView?: number;
  className?: string;
  center?: boolean;
  speed?: number;
  delay?: number;
}
