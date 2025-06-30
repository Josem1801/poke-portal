'use client';

import type { Game } from '../api/types';

import React from 'react';
import { cn } from '@/shared/helpers/cn';
import { Typography } from '@/ui/core/components/typography';

import { GameController } from '@/ui/icons/game-controller';

type PokemonCardProps = {
  game: Game;
};

export const GameCard = ({ game }: PokemonCardProps) => {
  return (
    <div
      className={cn([
        'group relative grid w-96 gap-4 rounded-2xl border border-gray-700/50 bg-gray-800/50 p-5 pt-10 backdrop-blur-sm transition-all duration-300',
        'hover:border-gray-600/50 hover:bg-gray-800/70 hover:shadow-2xl',
      ])}
    >
      <div className="mx-auto grid size-24 place-items-center rounded-2xl bg-red-500/10 backdrop-blur-2xl">
        <GameController className="size-10" />
      </div>
      <Typography
        size="xl"
        className="text-center font-bold text-white capitalize"
      >
        {game.name}
      </Typography>
    </div>
  );
};
