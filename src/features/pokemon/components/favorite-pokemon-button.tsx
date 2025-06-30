'use client';

import type { MouseEvent } from 'react';
import type { Pokemon } from '../api/types';

import React from 'react';
import { cn } from '@/shared/helpers/cn';
import { Button } from '@/ui/core/components/button';
import { HeartFill } from '@/ui/icons/heart-fill';

import { HeartOutline } from '@/ui/icons/heart-outline';
import { usePokemonStore } from '../store';

type Props = {
  className?: string;
  pokemon: Pokemon;
};

export const FavoritePokemonButton = ({ className, pokemon }: Props) => {
  const pokemonStore = usePokemonStore();

  const isFavorite = pokemonStore.actions.isFavorite(pokemon.id);
  const FavoriteIcon = isFavorite ? HeartFill : HeartOutline;

  const handleFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const { addToFavorites, removeFromFavorites } = pokemonStore.actions;
    if (isFavorite) {
      removeFromFavorites(pokemon.id);
    } else {
      addToFavorites(pokemon);
    }
  };

  return (
    <Button
      onClick={handleFavorite}
      variant="icon"
      className={cn([isFavorite && 'bg-red-500 hover:bg-red-500', className])}
    >
      <FavoriteIcon width={26} height={26} />
    </Button>
  );
};
