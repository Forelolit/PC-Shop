export interface PaginationControlsProps {
  className: string;
  page: number;
  pages?: number;
  next: () => void;
  prev: () => void;
  onChange: (page: number) => void;
  disableNext?: boolean;
  disablePrev?: boolean;
}
