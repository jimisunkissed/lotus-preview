import { MainSearch } from '@/lib/components/form/main-search';
import { MainFooter } from '@/lib/components/navigation/main-footer';
import { MainNavbar } from '@/lib/components/navigation/main-navbar';
import { cn } from '@/lib/utils';
import { IBM_Plex_Sans } from 'next/font/google';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { ShopNavbar } from '@/lib/components/navigation/shop-navbar';
import { useLayoutStore } from '@/hooks/layout-store';
import { WatchNavbar } from '@/lib/components/navigation/watch-navbar';
import { StreamModal } from '@/lib/components/modal/stream-modal';
import { useTheme } from 'next-themes';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export function RootLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  const { pathname } = useRouter();
  const { openMenu, openAuth, setAnimated, setShowNavbar, setDarkNavbar } = useLayoutStore();
  const { setTheme } = useTheme();
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);

  const pathGroup = useMemo(() => {
    if (pathname.startsWith('/shop') || pathname === '/shop') return 'shop';
    if (pathname.startsWith('/watch') || pathname === '/watch') return 'watch';
    else return 'main';
  }, [pathname]);

  useEffect(() => {
    let ticking: boolean = false;
    let wheelTicking: boolean = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY / window.innerHeight;
          setScrollPosition(scrollPosition);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!wheelTicking) {
        requestAnimationFrame(() => {
          setDirection(e.deltaY > 0 ? 'down' : 'up');
          wheelTicking = false;
        });
        wheelTicking = true;
      }
    };

    if (openMenu || openAuth) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';

      window.addEventListener('wheel', handleWheel, { passive: true });
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    handleScroll();

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [openMenu, openAuth]);

  useEffect(() => {
    setAnimated(false);
    setTimeout(() => {
      setAnimated(true);
    }, 300);

    if (pathname.startsWith('/watch')) setTheme('dark');
    else setTheme('light');
  }, [pathname]);

  useEffect(() => {
    setShowNavbar(pathGroup !== 'shop' ? scrollPosition < 0.2 || direction === 'up' : scrollPosition < 0.05);
  }, [pathGroup, scrollPosition, direction]);

  useEffect(() => {
    setDarkNavbar(
      scrollPosition > 0.6 ||
        ['/[slug]', '/films', '/series', '/docs'].includes(pathname) ||
        ['/account'].some((path) => pathname.startsWith(path))
    );
  }, [scrollPosition, pathname]);

  return (
    <>
      <div className={cn(ibmPlexSans.className, 'relative flex flex-col w-screen tracking-tight')}>
        <div
          className={cn(
            'fixed top-0 left-0 h-[100dvh] w-[100dvw]',
            pathGroup === 'shop' ? 'bg-neutral-100' : pathGroup === 'watch' ? 'bg-black text-white' : 'bg-white'
          )}
        />

        {pathname.startsWith('/shop') ? (
          <nav className="sticky z-10 top-0 left-0 w-full">
            <ShopNavbar />
          </nav>
        ) : pathname.startsWith('/watch') ? (
          <nav className="relative z-10">
            <WatchNavbar />
            <StreamModal />
          </nav>
        ) : (
          <nav className="relative z-10">
            <MainNavbar />
            <MainSearch />
          </nav>
        )}

        <div className="relative z-0">
          {children}
          {!pathname.startsWith('/watch') && (
            <div className="relative z-10">
              <MainFooter />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
