'use client';

import Link from 'next/link';

import React, { Fragment } from 'react';

import { Button } from '@/ui/core/components/button';
import { Typography } from '@/ui/core/components/typography';

import { usePokemonStore } from '../store';
import { PokemonCard } from './pokemon-card/pokemon-card';

export const FavoritePokemonsList = () => {
  const pokemonStore = usePokemonStore();

  const pokemonList = pokemonStore.actions.getFavoritesList();
  const withoutPokemons = !pokemonList.length;

  return (
    <Fragment>
      <Typography className="mb-10 text-center text-gray-400">
        You have &nbsp;
        {pokemonList.length}
        &nbsp; favorite Pokémon
      </Typography>
      {withoutPokemons
        ? (
            <div className="grid place-items-center gap-10 text-center text-gray-400">
              <Typography className="max-w-96">
                Start exploring Pokémon and click the heart icon to add them to your
                favorites collection!
              </Typography>
              <Link passHref href="/pokemons" className="mx-auto">
                <Button>Explore All Pokémon</Button>
              </Link>
            </div>
          )
        : null}
      <div className="flex h-fit min-h-dvh flex-wrap justify-between gap-8 py-20 *:max-w-72">
        {pokemonList.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Fragment>
  );
};
