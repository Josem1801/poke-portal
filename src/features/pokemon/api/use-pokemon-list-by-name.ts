import type { AxiosError } from 'axios';

import type { Pokemon } from './types';
import { createQuery } from 'react-query-kit';
import { usePokemonByName } from './use-pokemon-by-name';

type Variables = { names: Array<string> };

export type Response = Array<Pokemon>;

export const usePokemonsListByNameQuery = createQuery<Response, Variables, AxiosError>({
  queryKey: ['pokemon'],
  fetcher: async ({ names }) => {
    return await Promise.all(names.map(async (pokemon) => {
      return await usePokemonByName.fetcher({ name: pokemon });
    }));
  },

});
