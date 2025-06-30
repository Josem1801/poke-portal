import type { AxiosError } from 'axios';

import type { Pokemon } from './types';

import { createInfiniteQuery } from 'react-query-kit';
import { usePokemonByName } from './use-pokemon-by-name';
import { usePokemonNamesQuery } from './use-pokemon-names';

type Variables = { limit?: number };

export type Response = {
  results: Array<Pokemon>;
  count: number;
  next: string | null;
  previous: string | null;
};

const LIMIT = 10;

export const usePokemonsQuery = createInfiniteQuery<
  Response,
  Variables,
  AxiosError
>({
  queryKey: ['pokemons'],
  fetcher: async ({ limit = LIMIT }, ctx) => {
    const pokemonNames = await usePokemonNamesQuery.fetcher({
      limit,
      offset: ctx?.pageParam,
    });

    const pokemonDetails = await Promise.all(
      pokemonNames.results.map(async (pokemon) => {
        return await usePokemonByName.fetcher({
          name: pokemon.name.toLowerCase(),
        });
      }),
    );

    return {
      ...pokemonNames,
      results: pokemonDetails ?? [],
    };
  },
  initialPageParam: 0,
  getNextPageParam: ({ next, count }: Response) => {
    const parsedUrl = new URL(next ?? '');
    const offset = Number(parsedUrl.searchParams.get('offset')) - 10;

    const skipCount = offset ?? 0;
    if (count < skipCount + LIMIT) {
      return undefined;
    }
    return skipCount + LIMIT;
  },
});
