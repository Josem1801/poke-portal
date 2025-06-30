import React from 'react';
import { PokemonList } from '@/features/pokemon/components/pokemon-list/pokemon-list';
import { Heading } from '@/ui/core/components/heading';

export default function Pokemons() {
  return (
    <section className="flex flex-col gap-2">
      <header>
        <Heading gradient variant="h2" className="text-center">
          Pokémon Collention
        </Heading>
      </header>
      <PokemonList />
    </section>
  );
};
