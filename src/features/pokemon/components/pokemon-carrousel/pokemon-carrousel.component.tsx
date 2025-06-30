import React from 'react';
import { Carrousel } from '@/ui/core/carrousel';
import { usePokemonsQuery } from '../../api/use-pokemons';
import { PokemonCarrouselItem } from './pokemon-carrousel.item';

const CARROUSEL_ITEMS = 5;

export const PokemonCarrousel = async () => {
  const pokemonsQuery = await usePokemonsQuery.fetcher({
    limit: CARROUSEL_ITEMS,
  });

  return (
    <Carrousel>
      {pokemonsQuery.results?.map(pokemon => (
        <PokemonCarrouselItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </Carrousel>
  );
};
