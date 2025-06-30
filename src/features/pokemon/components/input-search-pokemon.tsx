'use client';
import React, { useMemo } from 'react';
import { InputSearch } from '@/ui/core/components/input-search';
import { SpinnerLinear } from '@/ui/core/components/load-indicator';
import { usePokemonByName } from '../api/use-pokemon-by-name';
import { usePokemonNamesQuery } from '../api/use-pokemon-names';
import { usePokemonStore } from '../store';
import { PokemonCard } from './pokemon-card/pokemon-card';
import { PokemonList } from './pokemon-list/pokemon-list';

export const InputSearchPokemon = () => {
  const setSearchPokemon = usePokemonStore(store => store.actions.setSearch);
  const searchPokemon = usePokemonStore(store => store.state.search);

  const pokemon = usePokemonByName({
    variables: {
      name: searchPokemon,
    },
    enabled: !!searchPokemon,
  });
  const pokemonNamesQuery = usePokemonNamesQuery({
    variables: {
      limit: 10_000,
    },
  });

  const pokemonNameOptions = useMemo(() => {
    return pokemonNamesQuery.data?.results.map(pokemon => ({
      label: pokemon.name,
      value: pokemon.name,
    })) ?? [];
  }, [pokemonNamesQuery.data]);

  const handleSelectPokemon = (option: unknown) => {
    const pokemonOption = option as { value: string };
    setSearchPokemon(pokemonOption?.value ?? null);
  };

  return (
    <div className="flex flex-col gap-20">
      <InputSearch isClearable onChange={handleSelectPokemon} options={pokemonNameOptions} placeholder="Search a pokemon" />
      {
        searchPokemon?.length
          ? (
              <div className="flex w-full justify-center">
                {pokemon.isLoading ? <SpinnerLinear /> : null }
                {!pokemon.isLoading && pokemon.data && <PokemonCard pokemon={pokemon.data} />}
              </div>
            )
          : <PokemonList />
      }
    </div>
  );
};
