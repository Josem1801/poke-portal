import React from 'react';

import { cn } from '@/shared/helpers/cn';
import { Typography } from '@/ui/core/components/typography';

import { usePokemonStore } from '../store';

const LIMIT = 9;

type Props = {
  classNames?: string;
};

export const FavoritesPokemonCount = ({ classNames }: Props) => {
  const pokemonStore = usePokemonStore();
  const favoriteCount = Object.keys(pokemonStore.state.favorites).length;

  if (!favoriteCount) {
    return null;
  }

  const formatted = favoriteCount > LIMIT ? `+${LIMIT}` : favoriteCount;

  return (
    <Typography
      size="sm"
      className={cn([
        'grid h-6 w-6 place-items-center rounded-full bg-red-500 p-0 text-white',
        classNames,
      ])}
    >
      {formatted}
    </Typography>
  );
};
