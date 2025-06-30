import type { PropsWithChildren } from 'react';
import React from 'react';

import { Navbar } from '@/ui/core/navbar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh w-full bg-gray-500 text-white">
      <Navbar />
      {children}
    </div>
  );
}
