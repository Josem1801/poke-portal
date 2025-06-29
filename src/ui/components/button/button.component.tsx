import type { ButtonSizes, ButtonTags, ButtonVariants } from './button.const';
import React from 'react';
import { cn } from '@/shared/helpers/cn';
import { BUTTON_SIZES, BUTTON_VARIANTS } from './button.const';

type ButtonProps = {
  as?: ButtonTags;
  children: React.ReactNode;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled,
    ...rest
  } = props;

  return (
    <button
      type="button"
      className={cn(
        'cursor-pointer inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-xl',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'focus:outline-none focus:ring-2 focus:ring-red-500/50',
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        className,
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {children}
    </button>
  );
};
