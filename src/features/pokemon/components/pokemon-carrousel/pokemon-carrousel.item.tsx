import type { Pokemon } from '../../api/types';
import Image from 'next/image';
import { Badge } from '@/ui/core/badge';
import { Button } from '@/ui/core/components/button';
import { Heading } from '@/ui/core/components/heading';
import { Typography } from '@/ui/core/components/typography';
import { POKEMON_DESCRIPTIONS } from './pokemon-carrousel.const';

type PokemonCarrouselItemProps = {
  pokemon: Pokemon;
};

export const PokemonCarrouselItem = ({ pokemon }: PokemonCarrouselItemProps) => {
  const imageUrl = pokemon?.sprites?.other?.['official-artwork']?.front_default
    || pokemon?.sprites?.front_default || '/assets/default.png';
  return (
    <div key={pokemon.id} className="px-20 mx-5 py-10 relative h-96 rounded-2xl overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-6 h-6 bg-white rounded-full"></div>
      </div>
      {/* ---------------- */}

      <div className="flex justify-between">
        <div className="flex flex-col gap-5 justify-center">
          <Typography className="font-mono text-white">
            #
            {pokemon.id.toString().padStart(3, '0')}
          </Typography>
          <Heading variant="h2" className="text-white capitalize">
            {pokemon.name}
          </Heading>
          {pokemon.types && (
            <div className="flex gap-3">
              {pokemon.types.map(type => (
                <Badge key={type.type.name}>
                  {type.type.name}
                </Badge>
              ))}
            </div>
          )}
          <Typography size="xl">
            {POKEMON_DESCRIPTIONS[pokemon.name]}
          </Typography>
          <Button size="lg" variant="white">
            View Details
          </Button>
        </div>
        <Image alt={pokemon.name} width={250} height={250} className="object-cover animate-float" src={imageUrl} />
      </div>
    </div>
  );
};
