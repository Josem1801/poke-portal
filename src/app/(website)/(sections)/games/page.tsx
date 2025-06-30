import React from 'react';
import { GamesList } from '@/features/game/components/game-list';
import { Heading } from '@/ui/core/components/heading';

export const metadata = {
  title: 'PokePortal | All Pokémon Games by Generation',
  description: 'Discover every Pokémon video game ever released, organized by generation with release info and more.',
  keywords: ['PokePortal', 'Pokémon Games', 'Pokémon Generations', 'Game List', 'Pokémon History', 'Next.js'],
};

export default function Games() {
  return (
    <section className="flex flex-col gap-2">
      <header>
        <Heading gradient variant="h2" className="text-center">
          Games Collention
        </Heading>
      </header>
      <GamesList />
    </section>
  );
};
