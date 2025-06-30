import type { Pokemon } from '../../api/types';
import Image from 'next/image';
import React from 'react';
import { cn } from '@/shared/helpers/cn';
import { Badge } from '@/ui/core/badge';
import { Typography } from '@/ui/core/components/typography';
import { FavoritePokemonButton } from '../favorite-pokemon-button';
import { POKEMON_TYPE_BACKGROUND } from './pokemon-detail.const';

type Props = {
  pokemon: Pokemon;
};

export const PokemonDetail = ({ pokemon }: Props) => {
  const type = pokemon.types?.[0]?.type.name ?? 'normal';
  const imageUrl = pokemon.sprites?.other?.['official-artwork']?.front_default
    ?? pokemon.sprites?.front_default ?? '';

  const height = pokemon.height ? (pokemon.height / 10).toFixed(1) : '?';
  const weight = pokemon.weight ? (pokemon.weight / 10).toFixed(1) : '?';
  return (
    <section
      key={pokemon.id}
      className={cn([
        'px-8 md:px-20 mx-5 bg-gradient-to-br py-10 relative h-fit md:h-[400px] rounded-2xl',
        POKEMON_TYPE_BACKGROUND[type],
      ])}
    >

      {/* Background */}
      <div className="absolute inset-0 opacity-10 h-full">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-6 h-6 bg-white rounded-full"></div>
      </div>
      {/* ---------------- */}
      <FavoritePokemonButton pokemon={pokemon} className="absolute right-6 top-6 md:right-10 md:top-8 z-90" />
      <div className="flex flex-col md:grid  md:grid-cols-2 place-items-center z-50">
        <Image alt={pokemon.name} width={300} height={300} className="object-contain animate-float" src={imageUrl} />

        <div className="flex flex-col w-full gap-5 justify-center">
          <Typography className="font-mono text-white">
            #
            {pokemon.id.toString().padStart(3, '0')}
          </Typography>
          <Typography size="3xl" className="text-white font-bold capitalize">
            {pokemon.name}
          </Typography>
          {pokemon.types && (
            <div className="flex gap-3">
              {pokemon.types.map(type => (
                <Badge key={type.type.name}>
                  {type.type.name}
                </Badge>
              ))}
            </div>
          )}
          <div className="w-full grid grid-cols-2 gap-4">
            <Badge className="grid gap-2 rounded-lg">
              <Typography>Height</Typography>
              <Typography className="font-bold" size="lg">
                {height}
                {' '}
                m
              </Typography>
            </Badge>
            <Badge className="grid gap-2 rounded-lg">
              <Typography>Height</Typography>
              <Typography className="font-bold" size="lg">
                {weight}
                {' '}
                Kg
              </Typography>
            </Badge>
          </div>
        </div>

      </div>
    </section>
  );
};
