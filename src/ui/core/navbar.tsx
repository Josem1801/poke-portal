'use client';

import Image from 'next/image';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { FavoritesPokemonCount } from '@/features/pokemon/components/favorites-pokemon-count';
import { cn } from '@/shared/helpers/cn';
import { useBoolean } from '@/shared/hooks/use-boolean';

import { Menu } from '../icons/menu';
import { Button } from './components/button';
import { Typography } from './components/typography';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/pokemons', label: 'Pokémon' },
  { path: '/games', label: 'Games' },
  { path: '/favorites', label: 'Favorites' },
];

export const Navbar = () => {
  const navbarStatus = useBoolean();
  const pathname = usePathname();
  return (
    <div
      className={cn([
        'absolute inset-x-0 top-6 z-[99999] mx-auto flex max-w-fit items-center justify-between gap-10 rounded-full border border-white/15 bg-white/20 px-10 py-2 text-sm backdrop-blur-md md:gap-40',
        navbarStatus.value && 'rounded-t-md rounded-b-none',
      ])}
    >
      <Link href="/">
        <Image
          width={125}
          height={20}
          className="aspect-auto size-auto max-w-80"
          src="/assets/logo.png"
          alt="PokePortal"
        />
      </Link>
      <nav>
        <ul
          className={cn([
            'hidden items-center gap-6 sm:flex',
            navbarStatus.value
            && 'absolute -bottom-52 -left-px z-[99999] border-b flex w-[calc(100%+2px)] flex-col rounded-b-sm border-x border-t-0 border-white/15 bg-gray-500 pt-4 pb-6 backdrop-blur-2xl',
          ])}
        >
          {navItems.map((item) => {
            const isActive = item.path === pathname;
            const isFavorite = item.path === '/favorites';
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={navbarStatus.setFalse}
                  className={cn([
                    'relative font-semibold text-white hover:underline',
                    isActive && 'underline',
                  ])}
                >
                  <Typography size="xl">{item.label}</Typography>
                  {isFavorite
                    ? (
                        <FavoritesPokemonCount classNames="absolute -top-5 -right-5" />
                      )
                    : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Button
        onClick={navbarStatus.toggle}
        variant="icon"
        className="block bg-transparent hover:bg-transparent sm:hidden"
      >
        <Menu />
      </Button>
    </div>
  );
};
