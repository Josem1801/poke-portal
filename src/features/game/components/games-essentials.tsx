'use client';
import React from 'react';
import { useGamesQuery } from '../api/use-games';
import { GameCard } from './game-card';

const GAMES_LIMIT = 3;
export const GamesEssentials = () => {
  const gamesQuery = useGamesQuery();
  return (
    <div className="flex gap-4">
      {
        gamesQuery.data?.results.slice(0, GAMES_LIMIT).map((game, idx) => (
          <GameCard key={idx} game={game} />
        ))
      }
    </div>
  );
};
