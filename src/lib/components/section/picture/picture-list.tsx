import { FlexImage } from '@/lib/components/flex/flex-image';
import { cn } from '@/lib/utils';
import { pictureLink } from '@/lib/utils/general/url-util';
import { PictureProps } from '@/types/supabase/supabase-table-type';
import { format } from 'date-fns';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';

type PictureListProps = {
  pictures: PictureProps[];
};

export function PictureList({ pictures }: PictureListProps): React.ReactNode {
  const [active, setActive] = useState<number>(0);
  const [entered, setEntered] = useState<boolean>(false);
  const [position, setPosition] = useState<'top' | 'mid' | 'bottom'>('top');
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { innerHeight, innerWidth } = window;
  const imageHeight = useMemo(() => Math.round((innerWidth * 0.58 * 9) / 16), [innerWidth]);
  const margin = useMemo(() => Math.round((innerHeight - imageHeight) / 2), [innerHeight, imageHeight]);

  useEffect(() => {
    if (!entered) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top;
      const bottom = rect.bottom;

      setPosition(top > margin ? 'top' : bottom < imageHeight + margin ? 'bottom' : 'mid');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [entered, imageHeight, margin]);

  return (
    <>
      <section ref={sectionRef} className="relative flex flex-col w-full gap-4" onMouseLeave={() => setEntered(false)}>
        {pictures.map((picture, i) => (
          <Link
            key={i}
            href={pictureLink(picture)}
            className="relative z-10 flex w-fit gap-4 hover:text-neutral-500 transition-all"
            onMouseEnter={() => {
              setActive(i);
              setEntered(true);
            }}
          >
            <strong className="text-[100px] font-medium leading-none">{picture.title}</strong>
            {picture.release_date ? <p className="mt-10">{format(new Date(picture?.release_date), 'yyyy')}</p> : null}
          </Link>
        ))}

        <div
          className={cn(
            'z-0 flex aspect-video w-[58dvw] overflow-hidden pointer-events-none',
            position === 'top'
              ? 'absolute top-0 right-0'
              : position === 'bottom'
              ? 'absolute bottom-0 right-0'
              : 'fixed top-[50dvh] -translate-y-[50%] right-10'
          )}
        >
          <FlexImage
            image={pictures[active].image_banner!}
            alt="Picture Banner"
            className={cn('transition-all', entered ? 'opacity-100' : 'opacity-0')}
          />
        </div>
      </section>
    </>
  );
}
