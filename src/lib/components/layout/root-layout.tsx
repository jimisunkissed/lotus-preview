import { MainButton } from '@/lib/components/button/main-button';
import { MainSearch } from '@/lib/components/form/main-search';
import { MainNavbar } from '@/lib/components/navigation/main-navbar';
import { cn } from '@/lib/utils';
import { IBM_Plex_Sans } from 'next/font/google';
import React, { useEffect, useMemo, useRef, useState } from 'react';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export function RootLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  const [expand, setExpand] = useState<boolean>(false);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const show: boolean = useMemo(() => scrollPosition < 0.2 || direction === 'up', [scrollPosition, direction]);
  const dark: boolean = useMemo(() => scrollPosition > 0.6, [scrollPosition]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let ticking: boolean = false;
    let wheelTicking: boolean = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollPosition(scrollElement.scrollTop / window.innerHeight);
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

    scrollElement.addEventListener('scroll', handleScroll);
    scrollElement.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
      scrollElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className={cn(ibmPlexSans.className, 'h-screen max-h-screen w-screen tracking-tight bg-white overflow-y-auto')}
    >
      <MainButton show={show} dark={dark} />
      <MainNavbar show={show} dark={dark} setExpand={setExpand} scrollRef={scrollRef} />
      <MainSearch expand={expand} setExpand={setExpand} />
      {children}
    </div>
  );
}
