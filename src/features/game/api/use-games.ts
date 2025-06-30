import type { AxiosError } from 'axios';

import type { Game } from './types';

import { createQuery } from 'react-query-kit';

import { API } from '@/shared/config/api';

type Variables = {
  limit?: number;
  offset?: number;
} | void;

type Response = {
  results: Array<Game>;
};

export const useGamesQuery = createQuery<Response, Variables, AxiosError>({
  queryKey: ['games'],
  fetcher: async (params) => {
    const { data } = await API.get<Response>(`/version`, {
      params,
    });
    return data;
  },
});
