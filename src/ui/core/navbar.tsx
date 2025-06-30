'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FavoritesPokemonCount } from '@/features/pokemon/components/favorites-pokemon-count';
import { cn } from '@/shared/helpers/cn';
import { Typography } from './components/typography';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/pokemons', label: 'Pokémon' },
  { path: '/games', label: 'Games' },
  { path: '/favorites', label: 'Favorites' },
];

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="max-w-fit inset-x-0 gap-40 mx-auto top-6 border-white/15 backdrop-blur-md border rounded-full px-10 absolute z-50 h-16 text-sm bg-white/20 flex justify-between items-center">
      <Link href="/">
        <Image width={150} height={20} src="/assets/logo.png" alt="PokePortal" />
      </Link>
      <nav>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = item.path === pathname;
            const isFavorite = item.path === '/favorites';
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={cn([
                    'font-semibold text-white hover:underline relative',
                    isActive && 'underline',
                  ])}
                >
                  <Typography size="xl">{item.label}</Typography>
                  {
                    isFavorite ? <FavoritesPokemonCount classNames="absolute -top-5 -right-5" /> : null
                  }
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
