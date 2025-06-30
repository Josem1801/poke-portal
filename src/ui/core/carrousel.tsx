'use client';

import type { ReactNode } from 'react';
import React, { useCallback, useEffect, useState } from 'react';

import { cn } from '@/shared/helpers/cn';
import { useBoolean } from '@/shared/hooks/use-boolean';

import { ArrowLeft } from '../icons/arrow-left';
import { ArrowRight } from '../icons/arrow-right';
import { Button } from './components/button';

type CarrouselProps = {
  children: ReactNode;
  autoplayDelay?: number;
};

export const Carrousel = ({
  children,
  autoplayDelay = 5_000,
}: CarrouselProps) => {
  const [index, setIndex] = useState(0);
  const isHovered = useBoolean(false);

  const items = React.Children.toArray(children);
  const total = items.length;

  const isPrevDisabled = total <= 1;
  const isNextDisabled = total <= 1;

  const handlePrevious = () => {
    setIndex((prev) => {
      return (prev - 1 + total) % total;
    });
  };

  const handleNext = useCallback(() => {
    setIndex(prev => (prev + 1) % total);
  }, [total]);

  const handleGoTo = (index: number) => {
    setIndex(index);
  };

  useEffect(() => {
    if (isHovered.value) {
      return;
    }

    const interval = setInterval(handleNext, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplayDelay, handleNext, isHovered.value]);

  return (
    <div
      className="relative flex w-full flex-col items-center justify-center gap-4"
      onMouseEnter={isHovered.setTrue}
      onMouseLeave={isHovered.setFalse}
    >
      <Button
        className="absolute left-8 z-50"
        variant="icon"
        onClick={handlePrevious}
        disabled={isPrevDisabled}
      >
        <ArrowLeft className="size-8 sm:size-10" />
      </Button>

      <div className="relative w-full">
        {items.map((child, i) => (
          <div
            key={i}
            className={cn([
              'transition-opacity duration-1000 ease-in-out',
              i === index
                ? 'opacity-100'
                : 'pointer-events-none h-0 overflow-hidden opacity-0',
            ])}
          >
            {child}
          </div>
        ))}
      </div>

      <Button
        className="absolute right-8 z-50"
        variant="icon"
        onClick={handleNext}
        disabled={isNextDisabled}
      >
        <ArrowRight className="size-8 sm:size-10" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 flex h-fit w-fit gap-2">
        {items.map((_, i) => {
          const isActive = i === index;
          return (
            <Button
              key={i}
              variant="icon"
              onClick={() => handleGoTo(i)}
              className={cn(isActive && 'scale-110 bg-white hover:bg-white')}
            />
          );
        })}
      </div>
    </div>
  );
};
