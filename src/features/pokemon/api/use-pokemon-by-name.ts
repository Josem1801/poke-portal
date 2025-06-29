import type { AxiosError } from 'axios';
import type { Pokemon } from './types';
import { createQuery } from 'react-query-kit';
import { API } from '@/shared/config/api';

type Response = Pokemon;

type Variables = {
  name: string;
};

export const usePokemonByName = createQuery<
  Response,
  Variables,
  AxiosError
>({
  queryKey: ['pokemon'],
  fetcher: async ({ name }) => {
    name.toLowerCase();
    return API
      .get<Response>(`/pokemon/${name}`)
      .then(response => response.data);
  },
});
