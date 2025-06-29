import { CharactersEssentials } from '@/features/pokemon/components/characters-essentials';
import { PokemonCarrousel } from '@/features/pokemon/components/pokemon-carrousel';
import { Button } from '@/ui/core/components/button';
import { Heading } from '@/ui/core/components/heading';
import { Navbar } from '@/ui/core/navbar';
import { ArrowRight } from '@/ui/icons/arrow-right';

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
      <section className="py-40 gap-10 flex flex-col max-w-6xl mx-auto px-10 bg-gray-500 w-full">
        <header className="flex items-center justify-between">
          <Heading variant="h2">
            Characters Essentials
          </Heading>
          <Button variant="primary" className=" gap-2 flex">
            See all
            {' '}
            <ArrowRight />
          </Button>
        </header>
        <CharactersEssentials />
      </section>

    </div>
  );
}
