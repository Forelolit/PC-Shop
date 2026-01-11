import styles from './Button.module.scss';
import type { ButtonProps } from '../types/types';
import { type FC } from 'react';
import { Typography } from '@ui/typography';
import classNames from 'classnames';

export const Button: FC<ButtonProps> = ({
  children,
  size = 'regular',
  variant = 'regular',
  color = 'primary',
  fullWidth,
  disabled,
  onClick,
  icon,
  className = '',
}) => {
  const sizeMap = {
    big: 'h3',
    small: 'h5',
    regular: 'h4',
  } as const;

  const classNamedGenerated = classNames(
    className,
    styles.button,
    styles[size],
    styles[`variant${variant}`],
    styles[color],
    disabled && styles.disabled,
    fullWidth && styles.fullWidth
  );

  return (
    <button className={classNamedGenerated} disabled={disabled} onClick={onClick}>
      <Typography
        color={variant === 'outline' ? 'black' : 'white'}
        variant={sizeMap[size] ?? sizeMap.regular}
        align={fullWidth ? 'center' : 'left'}
      >
        {children}
        {icon}
      </Typography>
    </button>
  );
};
