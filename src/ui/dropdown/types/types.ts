import type React from 'react';

export interface DropdownProps {
  options: { id: number; label: string; link?: string }[];
  title?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
  variant?: 'border' | 'text';
}
