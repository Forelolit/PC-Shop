import { type FC } from 'react';
import styles from './Container.module.scss';
import classNames from 'classnames';
import type { ContainerProps } from '../types/types';

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={classNames(styles.container, className)}>{children}</div>;
};
