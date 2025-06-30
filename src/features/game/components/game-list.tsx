import React from 'react';
import { useGamesQuery } from '../api/use-games';
import { GameCard } from './game-card';

export const GamesList = async () => {
  const gamesQuery = await useGamesQuery.fetcher({
    limit: 100,
  });

  return (

    <div className="flex h-fit min-h-dvh w-full justify-evenly gap-8 flex-wrap *:max-w-72 py-20">
      {
        gamesQuery.results.map(game => (
          <GameCard key={game.name} game={game} />
        ))
      }
    </div>
  );
};
