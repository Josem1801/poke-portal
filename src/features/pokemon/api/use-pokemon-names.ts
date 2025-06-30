import type { AxiosError } from 'axios';

import { createQuery } from 'react-query-kit';
import { API } from '@/shared/config/api';

type Variables = { limit?: number; offset?: number };

export type Response = {
  results: Array<{
    name: string;
    url: string;
  }>;
  count: number;
  next: string | null;
  previous: string | null;
};

export const usePokemonNamesQuery = createQuery<Response, Variables, AxiosError>({
  queryKey: ['pokemons'],
  fetcher: async (params) => {
    return await API.get('/pokemon', {
      params,
    }).then(({ data }) => data);
  },

});
