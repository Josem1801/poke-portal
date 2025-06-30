'use client';
import React, { Fragment, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { normalizePages } from '@/shared/helpers/normalize-pages';
import { SpinnerLinear } from '@/ui/core/components/load-indicator';
import { usePokemonsQuery } from '../../api/use-pokemons';
import { PokemonCard } from '../pokemon-card/pokemon-card';

export const PokemonList = () => {
  const { data, hasNextPage, isFetchingNextPage, isFetching, isLoading, fetchNextPage } = usePokemonsQuery({
    variables: {
      limit: 9,
    },
  });

  const { ref, inView } = useInView({
    threshold: 0.5,
    skip: !hasNextPage,
    delay: 500,
  });

  const isLoadingMore = useMemo(
    () => isFetching && isFetchingNextPage,
    [isFetching, isFetchingNextPage],
  );

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetching, fetchNextPage]);

  const pokemons = useMemo(() => normalizePages(data?.pages ?? []), [data]);

  if (isLoading) {
    return <SpinnerLinear className="mx-auto my-10" />;
  }

  return (
    <Fragment>
      <div className="flex min-h-dvh justify-evenly gap-8 flex-wrap py-20">
        {
          pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </div>
      {isLoadingMore && <SpinnerLinear className="mx-auto" />}
      {!isLoading && <div ref={ref} className="h-12" />}
    </Fragment>
  );
};
