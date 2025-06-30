import type { PropsWithChildren } from 'react';
import Link from 'next/link';

import React from 'react';

import { Button } from '@/ui/core/components/button';
import { ArrowLeft } from '@/ui/icons/arrow-left';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-32 sm:px-10">
      <Link passHref href="/" className="w-fit">
        <Button as="a" variant="link" className="hover:underline">
          <ArrowLeft />
          {' '}
          Back to home
        </Button>
      </Link>
      {children}
    </div>
  );
}
