import type { AxiosError } from 'axios';

import type { Pokemon } from './types';

import { createQuery } from 'react-query-kit';

import { API } from '@/shared/config/api';

type Response = Pokemon;
type Variables = {
  id: string;
};

export const usePokemonById = createQuery<Response, Variables, AxiosError>({
  queryKey: ['pokemon'],
  fetcher: async ({ id }) => {
    const { data } = await API.get(`pokemon/${id}/`);
    return data;
  },
});
