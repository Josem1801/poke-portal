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
  const imageUrl = pokemon?.sprites?.front_default ?? pokemon?.sprites?.front_female ?? '';

  return (
    <Link
      href={`/pokemons/${pokemon.name}`}
      className={cn([
        'group w-full max-w-96 h-fit relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 pt-10 cursor-pointer transition-all duration-300  overflow-hidden',
        'hover:bg-gray-800/70  hover:border-gray-600/50 hover:scale-105 hover:shadow-2xl',
      ])}
    >
      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full font-mono font-medium">
        #
        {pokemon.id.toString().padStart(3, '0')}
      </div>

      <FavoritePokemonButton pokemon={pokemon} className="absolute right-4 top-4 z-90" />
      <div className="w-full h-52 relative">
        <Image alt={pokemon.name} fill={true} className="object-contain z-10!" src={imageUrl} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="p-4 gap-4 grid">
        <Typography size="xl" className="capitalize text-white text-center font-bold">
          {pokemon.name}
        </Typography>
        {/* Types */}
        <div className="flex justify-center gap-2 flex-wrap">
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
