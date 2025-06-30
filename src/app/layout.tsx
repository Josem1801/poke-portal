import type { Metadata } from 'next';

import { ReactQueryProvider } from '@/shared/providers';
import '@/ui/global.css';

export const metadata: Metadata = {
  openGraph: {
    title: 'PokePortal – Pokémon Explorer',
    description: 'Explore and favorite Pokémon with this responsive web app powered by PokeAPI.',
    url: 'https://poke-portal-gamma.vercel.app',
    siteName: 'PokePortal',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PokePortal – Pokémon Explorer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {props.children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
