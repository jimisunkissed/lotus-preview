import { FlexImage } from '@/lib/components/flex/flex-image';
import { PictureProps, PictureSeasonProps } from '@/types/table-type';
import Link from 'next/link';
import React from 'react';

type WatchSeasonsProps = {
  picture: PictureProps;
  seasons: PictureSeasonProps[];
};

export function WatchSeasons({ picture, seasons }: WatchSeasonsProps): React.ReactNode {
  return (
    <section className="flex flex-col w-full gap-6">
      <h3 className="text-xl">Seasons From This Series</h3>
      <div className="flex w-full items-center gap-6 overflow-x-auto pb-2">
        {seasons.map((season, i) => (
          <Link
            key={i}
            href={`/watch/picture/${picture.id}-${picture.slug}?season=${season.season_number}`}
            className="relative group flex flex-col aspect-[16/9] w-[80vw] sm:w-80 md:w-96 min-w-[80vw] sm:min-w-80 md:min-w-96 p-3 border border-primary/20 hover:border-primary/75 hover:scale-102 overflow-hidden cursor-pointer transition-all duration-300"
          >
            <FlexImage image={season.image_banner} alt="Season Banner" className="brightness-75" />
            <p className="relative z-10 mt-auto font-medium opacity-75 group-hover:opacity-100 transition-all duration-300">{season.title}</p>
            <p className="relative z-10 -mt-1 text-sm font-medium text-white opacity-60 group-hover:opacity-100 transition-all duration-300">
              {season.episode_count} episodes
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
