import type { PropsWithChildren } from 'react';
import React from 'react';
import { cn } from '@/shared/helpers/cn';
import { Typography } from './components/typography';

type BadgeProps = {
  className?: string;
} & PropsWithChildren;
export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <Typography
      className={cn([
        'bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium capitalize',
        className,
      ])}
    >
      {children}
    </Typography>
  );
};
