export interface DropdownProps {
  options: { id: number; label: string; link?: string; value: string }[];
  title?: string;
  className?: string;
  variant?: 'border' | 'text';
  disabled?: boolean;
  onClick?: (e: unknown) => void;
  getValue: (value: string) => void;
}
