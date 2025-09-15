import type { FC } from 'react';
import styles from './HeroBlock.module.scss';

export const HeroBlock: FC = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.swiper}>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </div>
      </div>
    </section>
  );
};
