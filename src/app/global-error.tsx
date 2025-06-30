'use client';

import ErrorPage from '@/ui/core/error-page';

export default function GlobalError() {
  return (
    <html lang="es">
      <body>
        <ErrorPage statusCode={404} />
      </body>
    </html>
  );
}
