import styles from './Footer.module.scss';
import { Container, Typography } from '@ui/index';
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Typography transform="uppercase" align="center" variant="h5" weight="medium">
          Made by Aki
        </Typography>
      </Container>
    </footer>
  );
};
