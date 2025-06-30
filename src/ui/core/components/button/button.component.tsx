import type { ButtonSizes, ButtonTags, ButtonVariants } from './button.const';
import React from 'react';
import { cn } from '@/shared/helpers/cn';
import { BUTTON_SIZES, BUTTON_VARIANTS } from './button.const';

type ButtonProps = {
  as?: ButtonTags;
  children?: React.ReactNode;
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
        'cursor-pointer w-fit inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-xl',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        BUTTON_SIZES[size],
        BUTTON_VARIANTS[variant],
        className,
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {children}
    </button>
  );
};
