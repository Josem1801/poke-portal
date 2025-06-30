import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/ui/core/components/button';
import { ArrowLeft } from '@/ui/icons/arrow-left';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="py-32 max-w-6xl mx-auto px-6 sm:px-10 flex flex-col gap-6">
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
