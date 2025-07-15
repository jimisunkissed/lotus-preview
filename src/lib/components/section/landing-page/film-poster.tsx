import { cn } from '@/lib/utils';
import { MoveDown } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

export function FilmPoster(): React.ReactNode {
  const [active, setActive] = useState<number>(0);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filmList: { name: string; year: number; image: string }[] = [
    {
      name: 'Kashmir',
      year: 1975,
      image:
        'https://images.unsplash.com/photo-1682685797498-3bad2c6e161a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Us & Them',
      year: 1973,
      image:
        'https://images.unsplash.com/photo-1525711857929-4272fb4a040f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Under the Bridge',
      year: 1991,
      image:
        'https://images.unsplash.com/photo-1599180464074-55ee95f48d4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Stairway to Heaven',
      year: 1973,
      image:
        'https://images.unsplash.com/photo-1573844697731-d1995a92643e?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Over the Hills and Far Away',
      year: 1973,
      image:
        'https://plus.unsplash.com/premium_photo-1732738245018-c0a68b1bf192?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const handleMouseEnter = (i: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setActive(i);
    }, 200);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col h-[100dvh] w-[100dvw] px-10 py-12 bg-black overflow-hidden">
      <img
        key={active}
        src={filmList[active].image}
        className="absolute top-0 left-0 h-full w-full object-cover animate-unblur transition-all duration-500"
      />

      <div className="relative z-0 flex flex-col mt-auto -gap-0.5">
        {filmList.map((film, i) => (
          <article key={i} className="group w-full text-white" onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={handleMouseLeave}>
            <div className="flex w-fit gap-4 cursor-pointer">
              <strong className={cn('text-7xl font-medium', active === i ? 'text-neutral-300' : 'text-white')}>{film.name}</strong>
              <p className={cn('mt-1 font-medium', active === i ? 'text-neutral-300' : 'text-white')}>{film.year}</p>
            </div>
          </article>
        ))}
      </div>

      <MoveDown className="absolute bottom-[40px] right-[20px] min-h-12 min-w-12 text-white" strokeWidth={1} />
    </div>
  );
}
