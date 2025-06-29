'use client';
import React from 'react';
import { usePokemonsListByNameQuery } from '../api/use-pokemon-list-by-name';
import { PokemonCard } from './pokemon-card/pokemon-card';

const CHARACTERS_ESSENTIALS = [
  'pikachu',
  'bulbasaur',
  'charmander',
];

export const CharactersEssentials = () => {
  const pokemons = usePokemonsListByNameQuery({
    variables: {
      names: CHARACTERS_ESSENTIALS,
    },
  });
  return (
    <div className="flex justify-between gap-4">
      {pokemons.data?.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
