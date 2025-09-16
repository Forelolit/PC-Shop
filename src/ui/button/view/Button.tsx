import styles from './Button.module.scss';
import type { ButtonProps } from '../types/types';
import type { FC } from 'react';
import { Typography } from '@ui/typography';

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className={styles.button}>
      <Typography color="white">{children}</Typography>
    </button>
  );
};
