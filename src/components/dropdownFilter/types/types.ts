import type { SetStateAction } from 'react';
import type { Products } from 'types/types';

export interface DropdownFilterProps {
  className?: string;
  filterArray: Products[];
  disabled?: boolean;
  onChange: (items: SetStateAction<Products[]>) => void;
}
