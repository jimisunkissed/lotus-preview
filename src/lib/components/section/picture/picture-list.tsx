import { cn } from '@/lib/utils';
import { PictureProps } from '@/types/temp-picture';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';

type PictureListProps = {
  pictures: PictureProps[];
};

export function PictureList({ pictures }: PictureListProps): React.ReactNode {
  const [active, setActive] = useState<number>(0);
  const [entered, setEntered] = useState<boolean>(false);
  const [distance, setDistance] = useState<{ top: number; bottom: number }>({ top: 0, bottom: 0 });
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { innerHeight, innerWidth } = window;
  const imageHeight = useMemo(() => Math.round((innerWidth * 0.58 * 9) / 16), [innerWidth]);
  const margin = useMemo(() => Math.round((innerHeight - imageHeight) / 2), [innerHeight, imageHeight]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const fromTop = rect.top;
      const fromBottom = rect.bottom;

      setDistance({ top: Math.round(fromTop), bottom: Math.round(fromBottom) });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative flex flex-col w-full gap-4" onMouseLeave={() => setEntered(false)}>
        {pictures.map((picture, i) => (
          <Link
            key={i}
            href="/films"
            className="relative z-10 flex w-fit gap-4 hover:text-neutral-500 transition-all"
            onMouseEnter={() => {
              setActive(i);
              setEntered(true);
            }}
          >
            <strong className="text-[100px] font-medium leading-none">{picture.title}</strong>
            <p className="mt-10">{format(new Date(picture.release_date), 'yyyy')}</p>
          </Link>
        ))}

        <div
          className={cn(
            'z-0 flex aspect-video w-[58dvw] overflow-hidden pointer-events-none',
            distance.top > margin
              ? 'absolute top-0 right-0'
              : distance.bottom < imageHeight + margin
              ? 'absolute bottom-0 right-0'
              : 'fixed top-[50dvh] -translate-y-[50%] right-10'
          )}
        >
          <Image
            src={pictures[active].image_banner!}
            alt="Picture Banner"
            fill
            className={cn('object-cover transition-all', entered ? 'opacity-100' : 'opacity-0')}
          />
        </div>
      </section>
    </>
  );
}
