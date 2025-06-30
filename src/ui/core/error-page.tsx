import React from 'react';
import { Button } from '@/ui/core/components/button';
import { Heading } from '@/ui/core/components/heading';
import { Typography } from '@/ui/core/components/typography';

type Props = {
  statusCode: number;
};
export default function ErrorPage({ statusCode }: Props) {
  return (
    <section className="min-h-dvh flex flex-col justify-center items-center bg-gray-500">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading className="mb-4 text-8xl tracking-tight font-extrabold text-primary-500">{statusCode}</Heading>
          <Typography as="p" size="2xl" className="mb-4 font-bold text-white">Something's missing.</Typography>
          <Typography as="p" size="lg" className="mb-4 font-light text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </Typography>
          <Button className="mx-auto">
            Back to Homepage
          </Button>
        </div>
      </div>
    </section>
  );
}
