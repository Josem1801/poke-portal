export const TYPOGRAPHY_VARIANTS = {
  body: 'leading-relaxed',
  subtitle: 'leading-normal font-medium',
  caption: 'leading-tight text-sm',
  overline: 'uppercase tracking-wider text-xs font-semibold',
};

export const TYPOGRAPHY_SIZES = {
  'sm': 'text-sm',
  'base': 'text-base',
  'lg': 'text-lg',
  'xl': 'text-base md:text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl md:text-6xl',
};

export type TypographyVariants = keyof typeof TYPOGRAPHY_VARIANTS;
export type TypographySizes = keyof typeof TYPOGRAPHY_SIZES;
export type TypographyTags = 'span' | 'p';
