import { PictureBento } from '@/lib/components/section/picture/picture-bento';
import { PictureList } from '@/lib/components/section/picture/picture-list';
import { PictureProps } from '@/types/table-type';
import React from 'react';

type PictureLayoutProps = {
  type?: 'film' | 'series' | 'documentary';
  upcoming: PictureProps[];
  released: PictureProps[];
  all?: PictureProps[];
};

export function PictureLayout({ type, upcoming, released, all }: PictureLayoutProps): React.ReactNode {
  const headerConfig = {
    film: 'Films',
    series: 'Series',
    documentary: 'Docs',
  };

  return (
    <div className="flex flex-col min-h-screen w-full px-6 sm:px-10 pt-32 sm:pt-48 pb-10 sm:pb-16 gap-16 sm:gap-24">
      {upcoming.length ? (
        <section className="flex flex-col w-full gap-10">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium">Upcoming</h2>
          <PictureBento pictures={upcoming} />
        </section>
      ) : null}

      {released.length ? (
        <section className="flex flex-col w-full gap-10">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium">All {!type ? 'Pictures' : headerConfig[type]}</h2>
          <PictureBento pictures={released.slice(0, 9)} />
        </section>
      ) : null}

      {all?.length ? <PictureList pictures={all} /> : null}
    </div>
  );
}
