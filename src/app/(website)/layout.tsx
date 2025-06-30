import type { PropsWithChildren } from 'react';
import React from 'react';
import { Navbar } from '@/ui/core/navbar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-gray-500 min-h-dvh text-white w-full">
      <Navbar />
      {children}
    </div>
  );
}
