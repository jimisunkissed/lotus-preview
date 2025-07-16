import { MainButton } from '@/lib/components/button/main-button';
import { MainSearch } from '@/lib/components/form/main-search';
import { MainFooter } from '@/lib/components/navigation/main-footer';
import { MainNavbar } from '@/lib/components/navigation/main-navbar';
import { cn } from '@/lib/utils';
import { IBM_Plex_Sans } from 'next/font/google';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useRef, useState } from 'react';

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

  const show: boolean = useMemo(() => scrollPosition < 0.2 || direction === 'up', [scrollPosition, direction]);
  const dark: boolean = useMemo(() => scrollPosition > 0.6 || pathname !== '/', [scrollPosition, pathname]);

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

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={cn(ibmPlexSans.className, 'relative flex flex-col w-screen tracking-tight bg-white')}>
      <div className="relative z-10">
        <MainButton show={show} dark={dark} />
        <MainNavbar show={show} dark={dark} setExpand={setExpand} />
        <MainSearch expand={expand} setExpand={setExpand} />
      </div>

      <div className="relative z-0">
        {children}
        <MainFooter />
      </div>
    </div>
  );
}
