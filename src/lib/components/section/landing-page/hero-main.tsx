import { cn } from '@/lib/utils';
import { FilmsData } from '@/types/temp-picture';
import { format } from 'date-fns';
import { MoveDown } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export function HeroMain(): React.ReactNode {
  const [active, setActive] = useState<number>(0);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pictures = FilmsData.slice(0, 5);

  const handleMouseEnter = (i: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setActive(i);
    }, 100);
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
      <Image
        key={active}
        src={pictures[active].image_banner!}
        alt="Film Highlight"
        fill
        className="object-cover animate-unblur transition-all duration-500"
      />

      <div className="relative z-0 flex flex-col mt-auto -gap-0.5">
        {pictures.map((picture, i) => (
          <article key={i} className="group w-full text-white" onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={handleMouseLeave}>
            <div className="flex w-fit gap-4 cursor-pointer">
              <strong className={cn('text-7xl font-medium', active === i ? 'text-neutral-300' : 'text-white')}>{picture.title}</strong>
              <p className={cn('mt-1 font-medium', active === i ? 'text-neutral-300' : 'text-white')}>
                {format(new Date(picture.release_date), 'yyyy')}
              </p>
            </div>
          </article>
        ))}
      </div>

      <MoveDown className="absolute bottom-[40px] right-[20px] min-h-12 min-w-12 text-white" strokeWidth={1} />
    </div>
  );
}
