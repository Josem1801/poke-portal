import React from 'react';
import ErrorPage from '@/ui/core/error-page';

export default function NotFound() {
  return (
    <ErrorPage statusCode={404} />
  );
}
