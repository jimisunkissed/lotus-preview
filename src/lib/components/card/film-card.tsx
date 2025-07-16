import { cn } from '@/lib/utils';
import { differenceInDays, format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';

type FilmCardProps = {
  film: Record<string, any>;
  ar: string;
};

export function FilmCard({ film, ar = 'aspect-[3/2]' }: FilmCardProps): React.ReactNode {
  const releaseInfo = useMemo(() => {
    if (!film?.release_date) return '';

    const date = parseISO(film.release_date);
    const daysDiff = differenceInDays(date, new Date());

    if (daysDiff >= 0 && daysDiff <= 30) {
      return 'COMING SOON';
    }

    return format(date, 'yyyy');
  }, [film?.release_date]);

  return (
    <Link href="/films" className="group flex flex-col w-full cursor-pointer">
      <div className={cn('relative w-full bg-black overflow-hidden', ar)}>
        <Image src={film?.image} alt="Film Poster" fill className="object-cover" />
        <div className="absolute z-10 top-0 left-0 h-full w-full bg-black opacity-0 group-hover:opacity-60 transition-all" />
        <div className="absolute z-20 top-0 left-0 flex flex-col h-full w-full px-6 py-10 gap-3 opacity-0 group-hover:opacity-100 transition-all">
          <div className="flex flex-col -gap-0.5">
            <p className="text-sm font-medium text-white opacity-50">RELEASE DATE</p>
            <p className="-mt-0.5 text-[18px] text-white">{format(new Date(film?.release_date), 'MMM dd, yyyy')}</p>
          </div>

          {film?.director === film?.writer ? (
            <div className="flex flex-col -gap-0.5">
              <p className="text-sm font-medium text-white opacity-50">WRITTEN AND DIRECTED BY</p>
              <p className="-mt-0.5 text-[18px] text-white">{film?.director}</p>
            </div>
          ) : (
            <>
              {film?.director && (
                <div className="flex flex-col -gap-0.5">
                  <p className="text-sm font-medium text-white opacity-50">DIRECTED BY</p>
                  <p className="-mt-0.5 text-[18px] text-white">{film?.director}</p>
                </div>
              )}
              {film?.writer && (
                <div className="flex flex-col -gap-0.5">
                  <p className="text-sm font-medium text-white opacity-50">WRITTEN BY</p>
                  <p className="-mt-0.5 text-[18px] text-white">{film?.writer}</p>
                </div>
              )}
            </>
          )}

          {Array.isArray(film?.cast) && film.cast.length ? (
            <div className="flex flex-col">
              <p className="text-sm font-medium text-white opacity-50">STARRING</p>
              <p className="-mt-0.5 text-[18px] text-white">{film.cast.join(', ')}</p>
            </div>
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-neutral-500">{releaseInfo}</p>
      <strong className="-mt-0.5 text-4xl font-medium">{film?.title}</strong>
    </Link>
  );
}
