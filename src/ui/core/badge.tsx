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
        'rounded-full bg-white/20 px-4 py-2 font-medium text-white capitalize backdrop-blur-sm',
        className,
      ])}
    >
      {children}
    </Typography>
  );
};
