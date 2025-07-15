import { RootLayout } from '@/lib/components/layout/root-layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import '@/styles/globals.css';
import '@/styles/hero.css';

export default function App({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>Lotu5</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {loaded ? (
        <RootLayout>
          <Component {...pageProps} />
          <Toaster />
        </RootLayout>
      ) : null}
    </>
  );
}
