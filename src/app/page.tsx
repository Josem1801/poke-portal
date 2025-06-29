import React from 'react';
import { PokemonCarrousel } from '@/features/pokemon/components/pokemon-carrousel';
import { Navbar } from '@/ui/core/navbar';

export const metadata = {
  title: 'Inicio | PokePortal',
};

export default function App() {
  return (
    <div className="bg-gray-500 text-white w-full">
      <section className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-red-800/20 to-transparent" />
        <div className="w-full relative max-w-6xl mx-auto py-40">
          <Navbar />
          <PokemonCarrousel />
        </div>

      </section>

    </div>
  );
}
