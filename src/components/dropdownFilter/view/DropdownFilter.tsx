import { type FC } from 'react';
import { Dropdown } from '@ui/dropdown';
import type { DropdownFilterProps } from '../types/types';
import { filter } from '@utils/constants/constants';

export const DropdownFilter: FC<DropdownFilterProps> = ({
  className = '',
  filterArray,
  disabled,
  onChange,
}) => {
  const getValue = (value: string) => {
    filterHandler(value);
  };

  const filterHandler = (filterValue: string) => {
    switch (filterValue) {
      case filter[0].value: {
        console.log(filter[0].value);
        const copy = [...filterArray];
        onChange(copy);
        break;
      }
      case filter[1].value: {
        console.log(filter[1].value);
        const reversed = [...filterArray].reverse();
        onChange(reversed);
        break;
      }
      case filter[2].value: {
        console.log(filter[2].value);
        const biggestPrice = [...filterArray].sort((a, b) => b.price - a.price);
        onChange(biggestPrice);
        break;
      }
      case filter[3].value: {
        console.log(filter[3].value);
        const lowestPrice = [...filterArray].sort((a, b) => -b.price - -a.price);
        onChange(lowestPrice);
        break;
      }
      case filter[4].value: {
        console.log(filter[4].value);
        const bestRating = [...filterArray].sort((a, b) => b.rating - a.rating);
        onChange(bestRating);
        break;
      }
      default:
        console.error('error: Nothing to filter');
        break;
    }
  };

  return (
    <Dropdown
      options={filter}
      getValue={getValue}
      title="Фильтр"
      className={className}
      disabled={disabled}
    />
  );
};
