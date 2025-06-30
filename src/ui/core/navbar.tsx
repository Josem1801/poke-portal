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
    <div className={cn([
      'max-w-fit inset-x-0 gap-10 md:gap-40 mx-auto top-6 border-white/15 backdrop-blur-md border rounded-full px-10 absolute z-[999] py-2 text-sm bg-white/20 flex justify-between items-center',
      navbarStatus.value && 'rounded-b-none rounded-t-md',
    ])}
    >
      <Link href="/">
        <Image width={125} height={20} className="aspect-auto size-auto max-w-80" src="/assets/logo.png" alt="PokePortal" />
      </Link>
      <nav>
        <ul className={cn([
          'items-center gap-6 hidden sm:flex',
          navbarStatus.value && 'absolute flex flex-col w-[calc(100%+2px)] z-[999] rounded-b-sm -bottom-48 -left-px border-x border-t-0 py-3 border-white/15 bg-white/20 backdrop-blur-2xl ',
        ])}
        >
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
      <Button onClick={navbarStatus.toggle} variant="icon" className="bg-transparent hover:bg-transparent block sm:hidden">
        <Menu />
      </Button>
    </div>
  );
};
