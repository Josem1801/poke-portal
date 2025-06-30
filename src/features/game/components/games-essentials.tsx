import React from 'react';

import { useGamesQuery } from '../api/use-games';
import { GameCard } from './game-card';

const GAMES_LIMIT = 3;
export const GamesEssentials = async () => {
  const gamesQuery = await useGamesQuery.fetcher({
    limit: GAMES_LIMIT,
  });
  return (
    <div className="flex flex-wrap justify-evenly gap-4 *:w-full *:max-w-80">
      {gamesQuery?.results?.map(game => (
        <GameCard key={game.name} game={game} />
      ))}
    </div>
  );
};
