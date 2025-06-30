import React from 'react';
import { usePokemonsListByNameQuery } from '../api/use-pokemon-list-by-name';
import { PokemonCard } from './pokemon-card/pokemon-card';

const CHARACTERS_ESSENTIALS = [
  'pikachu',
  'bulbasaur',
  'charmander',
];

export const CharactersEssentials = async () => {
  const pokemons = await usePokemonsListByNameQuery.fetcher({
    names: CHARACTERS_ESSENTIALS,
  });
  return (
    <div className="flex justify-between gap-4">
      {pokemons?.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
