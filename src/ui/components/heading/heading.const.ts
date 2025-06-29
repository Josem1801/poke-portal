export const HEADING_VARIANTS = {
  h1: 'text-4xl md:text-6xl lg:text-8xl',
  h2: 'text-3xl md:text-4xl lg:text-5xl',
  h3: 'text-2xl md:text-3xl lg:text-4xl',
  h4: 'text-xl md:text-2xl',
  h5: 'text-lg md:text-xl',
  h6: 'text-base md:text-lg',
};

export const HEADING_GRADIENT = {
  visible: 'bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent',
  hidden: 'text-inherit',
};

export type HeadingVariants = keyof typeof HEADING_VARIANTS;
