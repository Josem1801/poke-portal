'use client';

import React from 'react';
import { normalizePages } from '@/shared/helpers/normalize-pages';
import { Carrousel } from '@/ui/core/carrousel';
import { usePokemonsQuery } from '../../api/use-pokemons';
import { PokemonCarrouselItem } from './pokemon-carrousel.item';

const CARROUSEL_ITEMS = 5;

export const PokemonCarrousel = () => {
  const pokemonsQuery = usePokemonsQuery({
    variables: {
      limit: CARROUSEL_ITEMS,
    },
  });
  const pokemons = normalizePages(pokemonsQuery.data?.pages ?? []);
  return (
    <Carrousel>
      {pokemons?.map(pokemon => (
        <PokemonCarrouselItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </Carrousel>
  );
};
