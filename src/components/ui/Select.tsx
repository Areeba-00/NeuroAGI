import { cn } from '@/lib/utils';
import { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string; disabled?: boolean }[];
}

export const Select = ({ className, options, ...restProps }: SelectProps) => {
  return (
    <select
      {...restProps}
      className={cn(
        'bg-light-secondary dark:bg-dark-secondary px-3 py-2 flex items-center overflow-hidden',
        'border border-light-200/30 dark:border-dark-300/30',
        'text-black dark:text-white rounded-lg text-sm',
        'hover:border-light-accent/50 dark:hover:border-dark-accent/50',
        'focus:outline-none focus:ring-2 focus:ring-light-accent/30 dark:focus:ring-dark-accent/30',
        'transition-all duration-200',
        className,
      )}
    >
      {options.map(({ label, value, disabled }) => {
        return (
          <option key={value} value={value} disabled={disabled}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;