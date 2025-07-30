import { RootLayout } from '@/lib/components/layout/root-layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import '@/styles/globals.css';
import '@/styles/keyframes.css';
import { AuthProvider } from '@/lib/components/provider/auth-provider';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>LOTU5</title>
        <link rel="icon" href="/vercel.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {loaded ? (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RootLayout>
            <Component {...pageProps} />
            <AuthProvider />
            <Toaster />
          </RootLayout>
        </ThemeProvider>
      ) : null}
    </>
  );
}
