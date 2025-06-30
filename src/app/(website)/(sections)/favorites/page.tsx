import React from 'react';
import { FavoritePokemonsList } from '@/features/pokemon/components/favorite-pokemons-list';
import { Heading } from '@/ui/core/components/heading';

export default function FavoritePokemons() {
  return (
    <section className="flex flex-col gap-2">
      <header>
        <Heading gradient variant="h2" className="text-center">
          Favorite Pokémon
        </Heading>
      </header>
      <FavoritePokemonsList />
    </section>
  );
};
