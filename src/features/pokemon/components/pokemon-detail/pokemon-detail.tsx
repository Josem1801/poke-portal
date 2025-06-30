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
  const imageUrl
    = pokemon.sprites?.other?.['official-artwork']?.front_default
      ?? pokemon.sprites?.front_default
      ?? '';

  const height = pokemon.height ? (pokemon.height / 10).toFixed(1) : '?';
  const weight = pokemon.weight ? (pokemon.weight / 10).toFixed(1) : '?';
  return (
    <section
      key={pokemon.id}
      className={cn([
        'relative mx-5 h-fit rounded-2xl bg-gradient-to-br px-8 py-10 md:h-[400px] md:px-20',
        POKEMON_TYPE_BACKGROUND[type],
      ])}
    >
      {/* Background */}
      <div className="absolute inset-0 h-full opacity-10">
        <div className="absolute top-10 left-10 h-20 w-20 rounded-full border-2 border-white"></div>
        <div className="absolute right-10 bottom-10 h-16 w-16 rounded-full border-2 border-white"></div>
        <div className="absolute top-1/2 left-1/4 h-4 w-4 rounded-full bg-white"></div>
        <div className="absolute bottom-1/4 left-1/2 h-6 w-6 rounded-full bg-white"></div>
      </div>
      {/* ---------------- */}
      <FavoritePokemonButton
        pokemon={pokemon}
        className="absolute top-6 right-6 z-90 md:top-8 md:right-10"
      />
      <div className="z-50 flex flex-col place-items-center md:grid md:grid-cols-2">
        <Image
          alt={pokemon.name}
          width={300}
          height={300}
          className="animate-float object-contain"
          src={imageUrl}
        />

        <div className="flex w-full flex-col justify-center gap-5">
          <Typography className="font-mono text-white">
            #
            {pokemon.id.toString().padStart(3, '0')}
          </Typography>
          <Typography size="3xl" className="font-bold text-white capitalize">
            {pokemon.name}
          </Typography>
          {pokemon.types && (
            <div className="flex gap-3">
              {pokemon.types.map(type => (
                <Badge key={type.type.name}>{type.type.name}</Badge>
              ))}
            </div>
          )}
          <div className="grid w-full grid-cols-2 gap-4">
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
