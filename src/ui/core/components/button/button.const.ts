export const BUTTON_VARIANTS = {
  primary:
    'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white shadow-lg hover:shadow-xl hover:scale-105',
  secondary:
    'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600',
  outline:
    'border-2 border-red-500 hover:border-red-400 text-red-500 hover:text-white hover:bg-red-500 bg-transparent',
  link: 'bg-gradient-to-r from-red-600/20 to-red-500/20 text-red-400 font-semibold',
  ghost: 'text-gray-300 hover:text-white hover:bg-gray-800/50',
  icon: 'bg-white/20 aspect-square backdrop-blur-sm text-white p-2! rounded-full hover:bg-white/30 duration-200',
  white:
    'bg-white text-red-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gray-50',
};

export const BUTTON_SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-4 py-2 sm:px-6 sm:py-3 text-base',
  lg: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg',
};

export type ButtonVariants = keyof typeof BUTTON_VARIANTS;
export type ButtonSizes = keyof typeof BUTTON_SIZES;
export type ButtonTags = 'button' | 'a';
