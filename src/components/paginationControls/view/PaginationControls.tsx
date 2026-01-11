import styles from './PaginationControls.module.scss';
import { Button } from '@ui/button';
import type { FC } from 'react';
import type { PaginationControlsProps } from '../types/types';
import classNames from 'classnames';

//FIXME Сделать полноценный компонент

export const PaginationControls: FC<PaginationControlsProps> = ({
  className = '',
  page,
  pages = 0,
  next,
  prev,
  onChange,
  disableNext,
  disablePrev,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.controls}>
        <Button size="small" onClick={prev} disabled={disablePrev}>
          Prev
        </Button>
        <span className={styles.pageNumber}>{page}</span>
        <span className={styles.separator} />
        <div className={styles.buttonsList}>
          {pageNumbers.map((pageNumber, index) => (
            <Button
              size="small"
              variant={pageNumber === page ? 'regular' : 'outline'}
              key={index}
              onClick={() => onChange(pageNumber)}
            >
              {pageNumber}
            </Button>
          ))}
        </div>
        <Button size="small" onClick={next} disabled={disableNext}>
          Next
        </Button>
      </div>
    </div>
  );
};
