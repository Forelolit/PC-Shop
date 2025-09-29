export type ITSize = 'big' | 'regular' | 'small';
export type ITVariant = 'regular' | 'icon' | 'outline';
export type ITColor = 'primary' | 'red' | 'green' | 'white';

export interface ButtonProps {
  children: React.ReactNode;
  size?: ITSize;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  variant?: ITVariant;
  color?: ITColor;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
