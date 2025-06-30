import type { Pokemon } from '../api/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  favorites: Record<number, Pokemon>;
  search: string;
};

type Actions = {
  addToFavorites: (pokemon: Pokemon) => void;
  removeFromFavorites: (pokemonId: number) => void;
  isFavorite: (pokemonId: number) => boolean;
  getFavoritesList: () => Pokemon[];
  setSearch: (value: string) => void;
};

type PokemonStore = {
  state: State;
  actions: Actions;
};

const defaultStore: State = {
  favorites: {},
  search: '',
};

export const usePokemonStore = create<PokemonStore>()(
  persist(
    (set, get) => ({
      state: defaultStore,
      actions: {
        addToFavorites: pokemon =>
          set(store => ({
            state: {
              ...store.state,
              favorites: {
                ...store.state.favorites,
                [pokemon.id]: pokemon,
              },
            },
          })),
        removeFromFavorites: pokemonId =>
          set((store) => {
            const updated = { ...store.state.favorites };
            delete updated[pokemonId];
            return {
              state: {
                ...store.state,
                favorites: updated,
              },
            };
          }),
        isFavorite: (pokemonId) => {
          return !!get().state.favorites[pokemonId];
        },
        getFavoritesList: () => {
          return Object.values(get().state.favorites);
        },
        setSearch: (value: string) =>
          set(store => ({
            state: {
              ...store.state,
              search: value,
            },
          })),
      },
    }),
    {
      name: 'pokemon-store',
      partialize: store => ({
        state: {
          favorites: store.state.favorites,
          search: store.state.search,
        },
      }),
    },
  ),
);
