import type { Metadata } from 'next';

import { usePokemonByName } from '@/features/pokemon/api/use-pokemon-by-name';
import { usePokemonNamesQuery } from '@/features/pokemon/api/use-pokemon-names';
import { PokemonDetail } from '@/features/pokemon/components/pokemon-detail/pokemon-detail';
import { capitalize } from '@/shared/helpers/capitalize';

type Props = {
  params: Promise<{ name: string }>;
};

export const revalidate = 86_400; // 1 day

export async function generateStaticParams() {
  const pokemons = await usePokemonNamesQuery.fetcher({ limit: 10_000 });
  return pokemons.results.map(pokemon => ({ name: pokemon.name }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;

  const pokemon = await usePokemonByName.fetcher({ name });
  const description = `${pokemon.name} is a ${pokemon.types?.map(t => t.type.name).join(', ')} type Pokémon. View stats, abilities, and more!`;
  const image
    = pokemon.sprites?.other?.['official-artwork']?.front_default
      ?? pokemon.sprites?.front_default
      ?? '';
  const pokemonName = capitalize(pokemon.name);

  return {
    title: `${pokemonName} | PokePortal`,
    description,
    openGraph: {
      title: pokemonName,
      description: `Explore ${pokemonName}'s full Pokédex entry, including types, abilities, and evolutions.`,
      images: [
        {
          url: image,
          width: 400,
          height: 400,
          alt: pokemonName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pokemonName,
      description: `Explore ${pokemonName}'s full Pokédex entry, including types, abilities, and evolutions.`,
      images: [image],
    },
  };
}

export default async function Page({ params }: Props) {
  const { name } = await params;
  const pokemon = await usePokemonByName.fetcher({ name });

  return (
    <main>
      <PokemonDetail pokemon={pokemon} />
    </main>
  );
}
