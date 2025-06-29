import type { TypographySizes, TypographyTags, TypographyVariants } from './typography.const';
import React from 'react';
import { cn } from '@/shared/helpers/cn';
import { TYPOGRAPHY_SIZES, TYPOGRAPHY_VARIANTS } from './typography.const';

type TypographyProps = {
  children: React.ReactNode;
  variant?: TypographyVariants;
  size?: TypographySizes;
  className?: string;
  as?: TypographyTags;
};

export const Typography = (props: TypographyProps) => {
  const { as, variant = 'body', size = 'base', className, children } = props;

  const Component = as || 'h1';

  return (
    <Component className={cn([
      TYPOGRAPHY_VARIANTS[variant],
      TYPOGRAPHY_SIZES[size],
      className,
    ])}
    >
      { children}
    </Component>
  );
};
