import { MainSearch } from '@/lib/components/form/main-search';
import { MainFooter } from '@/lib/components/navigation/main-footer';
import { MainNavbar } from '@/lib/components/navigation/main-navbar';
import { cn } from '@/lib/utils';
import { IBM_Plex_Sans } from 'next/font/google';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { ShopNavbar } from '@/lib/components/navigation/shop-navbar';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export function RootLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  const { pathname } = useRouter();
  const [expand, setExpand] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const isShop: boolean = useMemo(() => pathname.startsWith('/shop') || pathname === '/shop', [pathname]);
  const show: boolean = useMemo(
    () => (!isShop ? scrollPosition < 0.2 || direction === 'up' : scrollPosition < 0.05),
    [isShop, scrollPosition, direction]
  );
  const dark: boolean = useMemo(() => scrollPosition > 0.6 || ['/films', '/television', '/docs'].includes(pathname), [scrollPosition, pathname]);

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

    if (open) {
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
  }, [open]);

  return (
    <div className={cn(ibmPlexSans.className, 'relative flex flex-col w-screen tracking-tight')}>
      {!isShop ? (
        <div className="fixed top-0 left-0 h-[100dvh] w-[100dvw] bg-white" />
      ) : (
        <div className="fixed top-0 left-0 h-[100dvh] w-[100dvw] bg-neutral-100" />
      )}

      {!pathname.startsWith('/shop') ? (
        <nav className="relative z-10">
          <MainNavbar show={show} dark={dark} open={open} setOpen={setOpen} setExpand={setExpand} />
          <MainSearch expand={expand} setExpand={setExpand} />
        </nav>
      ) : (
        <nav className="sticky z-10 top-0 left-0 w-full">
          <ShopNavbar show={show} open={open} setOpen={setOpen} setExpand={setExpand} />
        </nav>
      )}

      <div className="relative z-0">
        {children}
        <div className="relative z-10">
          <MainFooter />
        </div>
      </div>
    </div>
  );
}
