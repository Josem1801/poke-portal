import Link from 'next/link';
import { GamesEssentials } from '@/features/game/components/games-essentials';
import { CharactersEssentials } from '@/features/pokemon/components/characters-essentials';
import { PokemonCarrousel } from '@/features/pokemon/components/pokemon-carrousel';
import { Button } from '@/ui/core/components/button';
import { Heading } from '@/ui/core/components/heading';
import { ArrowRight } from '@/ui/icons/arrow-right';

export const metadata = {
  title: 'PokePortal | Explore all Pokémon',
  description: 'Find detailed stats, types, and abilities for every Pokémon.',
  keywords: ['PokePortal', 'Pokémon', 'Pokédex', 'Next.js'],
};

export default function App() {
  return (
    <div className="bg-gray-500 text-white w-full">
      <section className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-red-800/20 to-transparent" />
        <div className="w-full relative max-w-6xl min-h-[850px] mx-auto py-40 sm:py-60">
          <PokemonCarrousel />
        </div>

      </section>
      <section className="pt-40 gap-10 flex flex-col max-w-6xl mx-auto px-10 bg-gray-500 w-full">
        <header className="flex items-center ">
          <Heading variant="h2" className="flex-1">
            Characters Essentials
          </Heading>
          <Link passHref href="/pokemons">
            <Button as="a" variant="primary" className="w-fit gap-2 flex">
              See all
              {' '}
              <ArrowRight />
            </Button>
          </Link>
        </header>
        <CharactersEssentials />
      </section>
      <section className="pt-40 pb-80 gap-10 flex flex-col max-w-6xl mx-auto px-10 bg-gray-500 w-full">
        <header className="flex items-center ">
          <Heading variant="h3" className="flex-1">
            Game Essentials
          </Heading>
          <Link passHref href="/games">
            <Button variant="primary" className=" gap-2 flex">
              See all
              {' '}
              <ArrowRight />
            </Button>
          </Link>

        </header>
        <GamesEssentials />
      </section>
    </div>
  );
}
