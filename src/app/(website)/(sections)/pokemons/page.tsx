import React from 'react';
import { InputSearchPokemon } from '@/features/pokemon/components/input-search-pokemon';
import { Heading } from '@/ui/core/components/heading';

export const metadata = {
  title: 'PokePortal | Explore All Pokémon',
  description: 'Find detailed stats, types, evolutions, and abilities for every Pokémon in the full Pokédex.',
  keywords: ['PokePortal', 'Pokémon', 'Pokédex', 'Pokémon List', 'Types', 'Abilities', 'Next.js'],
};

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
