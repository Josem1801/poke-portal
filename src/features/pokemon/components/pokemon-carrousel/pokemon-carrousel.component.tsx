'use client';
import React from 'react';
import { Carrousel } from '@/ui/core/carrousel';
import { usePokemonsListByNameQuery } from '../../api/use-pokemon-list-by-name';
import { POKEMON_DESCRIPTIONS } from './pokemon-carrousel.const';
import { PokemonCarrouselItem } from './pokemon-carrousel.item';

export const PokemonCarrousel = () => {
  const pokemons = usePokemonsListByNameQuery({
    variables: {
      names: Object.keys(POKEMON_DESCRIPTIONS),
    },
  });
  return (
    <Carrousel>
      {pokemons.data?.map(pokemon => (
        <PokemonCarrouselItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </Carrousel>
  );
};
