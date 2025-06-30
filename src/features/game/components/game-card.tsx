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
        'group w-96 grid gap-4 relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 pt-10 transition-all duration-300',
        'hover:bg-gray-800/70  hover:border-gray-600/50 hover:shadow-2xl',
      ])}
    >
      <div className="size-24 mx-auto grid place-items-center rounded-2xl bg-red-500/10 backdrop-blur-2xl ">
        <GameController className="size-10" />
      </div>
      <Typography size="xl" className="capitalize text-white text-center font-bold">
        {game.name}
      </Typography>
    </div>
  );
};
