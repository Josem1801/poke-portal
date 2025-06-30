import { cn } from '@/shared/helpers/cn';

type Props = {
  className?: string;
};

/**
 * 🌀 SpinnerLinear – Customizable circular loader.
 *
 * Customize using Tailwind classes:
 * - `border-t-*` → Spinner's primary color (top border).
 * - `size-*` → Size of the spinner.
 * - `border-*` → Background border color (rest of the circle).
 *
 * Example:
 * <SpinnerLinear className="w-6 h-6 border-2 border-t-blue-500 border-gray-200" />
 */
export const SpinnerLinear = ({ className }: Props) => {
  return (
    <div
      className={cn([
        'aspect-square size-10 animate-spin rounded-full border-4 border-gray-500 border-t-red-500',
        className,
      ])}
    />
  );
};
