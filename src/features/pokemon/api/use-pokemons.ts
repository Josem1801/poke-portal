import type { AxiosError } from 'axios';

import type { Pokemon } from './types';
import { createInfiniteQuery } from 'react-query-kit';
import { API } from '@/shared/config/api';
import { usePokemonByName } from './use-pokemon-by-name';

type Variables = { limit?: number };

type ResponseWithName = {
  results: Array<{
    name: string;
    url: string;
  }>;
} & Omit<Response, 'results'>;

export type Response = {
  results: Array<Pokemon>;
  count: number;
  next: string | null;
  previous: string | null;
};

export const usePokemonsQuery = createInfiniteQuery<Response, Variables, AxiosError>({
  queryKey: ['pokemon'],
  fetcher: async ({ limit = 10 }, { pageParam }) => {
    const pokemonNames = await API.get<ResponseWithName>('/pokemon', {
      params: {
        limit,
        offset: pageParam,
      },
    }).then(({ data }) => data);

    const pokemonDetails = await Promise.all(pokemonNames.results.map(async (pokemon) => {
      return await usePokemonByName.fetcher({ name: pokemon.name.toLowerCase() });
    }));

    return {
      ...pokemonNames,
      results: pokemonDetails,
    };
  },
  getNextPageParam: (lastPage: Response) => lastPage.next,
  initialPageParam: 0,

});
