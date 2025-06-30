'use client';

import type { Pokemon } from '../../api/types';

import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import { cn } from '@/shared/helpers/cn';
import { Badge } from '@/ui/core/badge';

import { Typography } from '@/ui/core/components/typography';
import { FavoritePokemonButton } from '../favorite-pokemon-button';
import { POKEMON_TYPE_COLOR } from './pokemon-card.const';

type PokemonCardProps = {
  pokemon: Pokemon;
  onFavorite?: (data: Pokemon) => void;
  isFavorite?: boolean;
};

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const imageUrl
    = pokemon?.sprites?.front_default ?? pokemon?.sprites?.front_female ?? '';

  return (
    <Link
      href={`/pokemons/${pokemon.name}`}
      className={cn([
        'group relative h-fit w-full max-w-96 cursor-pointer overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/50 p-5 pt-10 backdrop-blur-sm transition-all duration-300',
        'hover:scale-105 hover:border-gray-600/50 hover:bg-gray-800/70 hover:shadow-2xl',
      ])}
    >
      <div className="absolute top-4 left-4 rounded-full bg-black/40 px-3 py-1 font-mono text-sm font-medium text-white backdrop-blur-sm">
        #
        {pokemon.id.toString().padStart(3, '0')}
      </div>

      <FavoritePokemonButton
        pokemon={pokemon}
        className="absolute top-4 right-4 z-90"
      />
      <div className="relative h-52 w-full">
        <Image
          alt={pokemon.name}
          fill={true}
          className="z-10! object-contain"
          src={imageUrl}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="grid gap-4 p-4">
        <Typography
          size="xl"
          className="text-center font-bold text-white capitalize"
        >
          {pokemon.name}
        </Typography>
        {/* Types */}
        <div className="flex flex-wrap justify-center gap-2">
          {pokemon.types?.map(({ type }) => (
            <Badge key={type.name} className={POKEMON_TYPE_COLOR[type.name]}>
              {type.name}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};
