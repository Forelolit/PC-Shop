import styles from './AboutUsBlock.module.scss';
import { Container, Typography } from '@ui/index';
import type { FC } from 'react';

export const AboutUsBlock: FC = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Typography variant="h2">About us</Typography>
      </Container>
    </section>
  );
};
