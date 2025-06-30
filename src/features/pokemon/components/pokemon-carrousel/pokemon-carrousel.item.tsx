import type { Pokemon } from '../../api/types';
import Image from 'next/image';

import Link from 'next/link';
import { Badge } from '@/ui/core/badge';
import { Button } from '@/ui/core/components/button';

import { Typography } from '@/ui/core/components/typography';
import { POKEMON_DESCRIPTIONS } from './pokemon-carrousel.const';

type PokemonCarrouselItemProps = {
  pokemon: Pokemon;
};

export const PokemonCarrouselItem = ({
  pokemon,
}: PokemonCarrouselItemProps) => {
  const imageUrl
    = pokemon?.sprites?.other?.['official-artwork']?.front_default
      || pokemon?.sprites?.front_default
      || '';
  return (
    <div className="relative mx-5 h-fit min-h-[650px] overflow-hidden rounded-2xl px-4 sm:min-h-96 sm:px-20">
      {/* Background */}
      <div className="absolute inset-0 h-full opacity-10">
        <div className="absolute top-10 left-10 h-20 w-20 rounded-full border-2 border-white"></div>
        <div className="absolute right-10 bottom-10 h-16 w-16 rounded-full border-2 border-white"></div>
        <div className="absolute top-1/2 left-1/4 h-4 w-4 rounded-full bg-white"></div>
        <div className="absolute bottom-1/4 left-1/2 h-6 w-6 rounded-full bg-white"></div>
      </div>
      {/* ---------------- */}

      <div className="relative z-50 flex flex-col items-center justify-between sm:flex-row">
        <div className="flex flex-col justify-center gap-5">
          <Typography className="font-mono text-white">
            #
            {pokemon.id.toString().padStart(3, '0')}
          </Typography>
          <Typography size="3xl" className="font-bold text-white capitalize">
            {pokemon.name}
          </Typography>
          {pokemon.types && (
            <div className="flex gap-3">
              {pokemon.types.map(type => (
                <Badge key={type.type.name}>{type.type.name}</Badge>
              ))}
            </div>
          )}
          <Typography size="xl" className="max-w-md">
            {POKEMON_DESCRIPTIONS[pokemon.id]}
          </Typography>
          <Link
            passHref
            href={`/pokemons/${pokemon.id}`}
            className="absolute right-0 -bottom-14 z-50 sm:static"
          >
            <Button size="lg">View Details</Button>
          </Link>
        </div>
        <Image
          alt={pokemon.name}
          width={300}
          height={300}
          className="animate-float object-contain"
          src={imageUrl}
        />
      </div>
    </div>
  );
};
