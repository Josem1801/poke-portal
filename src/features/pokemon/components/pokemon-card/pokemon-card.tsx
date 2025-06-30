import type { MouseEvent } from 'react';
import type { Pokemon } from '../../api/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/shared/helpers/cn';
import { Badge } from '@/ui/core/badge';
import { Button } from '@/ui/core/components/button';
import { Typography } from '@/ui/core/components/typography';
import { HeartFill } from '@/ui/icons/heart-fill';
import { HeartOutline } from '@/ui/icons/heart-outline';
import { usePokemonStore } from '../../store';
import { POKEMON_TYPE_COLOR } from './pokemon-card.const';

type PokemonCardProps = {
  pokemon: Pokemon;
  onFavorite?: (data: Pokemon) => void;
  isFavorite?: boolean;
};

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const pokemonStore = usePokemonStore();

  const isFavorite = pokemonStore.actions.isFavorite(pokemon.id);
  const FavoriteIcon = isFavorite ? HeartFill : HeartOutline;
  const imageUrl = pokemon?.sprites?.front_default ?? '';

  const handleFavorite = (e: MouseEvent) => {
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
    <Link
      href={`/pokemons/${pokemon.id}`}
      className={cn([
        'group w-96 h-fit relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 pt-10 cursor-pointer transition-all duration-300  overflow-hidden',
        'hover:bg-gray-800/70  hover:border-gray-600/50 hover:scale-105 hover:shadow-2xl',
      ])}
    >
      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full font-mono font-medium">
        #
        {pokemon.id.toString().padStart(3, '0')}
      </div>
      <Button
        onClick={handleFavorite}
        variant="icon"
        className={cn([
          'absolute right-4 top-4 z-90',
          isFavorite && 'bg-red-500 hover:bg-red-500',
        ])}
      >
        <FavoriteIcon width={26} height={26} />
      </Button>
      <div className="w-full h-52 relative">
        <Image alt={pokemon.name} fill={true} className="object-contain z-10!" src={imageUrl} />
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
