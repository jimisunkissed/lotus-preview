import { RootLayout } from '@/lib/components/layout/root-layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import { Toaster } from 'sonner';
import '@/styles/globals.css';
import '@/styles/keyframes.css';
import { AuthProvider } from '@/lib/components/provider/auth-provider';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [loaded, setLoaded] = useState<boolean>(false);

  const theme = useMemo(() => (pathname.startsWith('/watch') ? 'dark' : 'light'), [pathname]);

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
        <ThemeProvider attribute="class" forcedTheme={theme} enableSystem={false}>
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
