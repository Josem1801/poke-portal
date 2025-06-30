import type { AxiosError } from 'axios';
import type { Game } from './types';

import { createQuery } from 'react-query-kit';

import { API } from '@/shared/config/api';

type Variables = void;

type Response = {
  results: Array<Game>;
};

export const useGamesQuery = createQuery<Response, Variables, AxiosError>({
  queryKey: ['games'],
  fetcher: async () => {
    const { data } = await API.get<Response>(`/version`);
    return data;
  },
});
