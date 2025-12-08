import styles from './Footer.module.scss';
import { Container, Typography } from '@ui/index';
import type { FC } from 'react';

export const Footer: FC = () => {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <Container>
        <Typography transform="uppercase" align="center" variant="h5" weight="medium">
          ©{date.getFullYear()} - Made by Aki
        </Typography>
      </Container>
    </footer>
  );
};
