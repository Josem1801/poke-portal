import React from 'react';
import { InputSearchPokemon } from '@/features/pokemon/components/input-search-pokemon';
import { Heading } from '@/ui/core/components/heading';

export default function Pokemons() {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <Heading gradient variant="h2" className="text-center">
          Pokémon Collention
        </Heading>
      </header>
      <InputSearchPokemon />
    </section>
  );
};
