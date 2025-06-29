import type { HeadingVariants } from './heading.const';
import { cn } from '@/shared/helpers/cn';
import { HEADING_GRADIENT, HEADING_VARIANTS } from './heading.const';

type HeadingProps = {
  children: React.ReactNode;
  variant?: HeadingVariants;
  as?: HeadingVariants;
  className?: string;
  gradient?: boolean;
};

export const Heading = (props: HeadingProps) => {
  const { as, variant = 'h1', gradient = false, className, children } = props;

  const Component = as || 'h1';

  return (
    <Component className={cn([
      'font-bold leading-tight',
      HEADING_VARIANTS[variant],
      gradient ? HEADING_GRADIENT.visible : HEADING_GRADIENT.hidden,
      className,
    ])}
    >
      {children}
    </Component>
  );
};
