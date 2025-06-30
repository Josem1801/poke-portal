import React from 'react';

import { useGamesQuery } from '../api/use-games';
import { GameCard } from './game-card';

export const GamesList = async () => {
  const gamesQuery = await useGamesQuery.fetcher({
    limit: 100,
  });

  return (
    <div className="flex h-fit min-h-dvh w-full flex-wrap justify-evenly gap-8 py-20 *:max-w-72">
      {gamesQuery.results.map(game => (
        <GameCard key={game.name} game={game} />
      ))}
    </div>
  );
};
