import { PictureBento } from '@/lib/components/section/picture/picture-bento';
import { PictureList } from '@/lib/components/section/picture/picture-list';
import { PictureProps } from '@/types/temp-picture';
import React from 'react';

type PictureLayoutProps = {
  type: 'film' | 'television' | 'documentary';
  upcoming: PictureProps[];
  released: PictureProps[];
  all: PictureProps[];
};

export function PictureLayout({ type, upcoming, released, all }: PictureLayoutProps): React.ReactNode {
  const headerConfig = {
    film: 'Films',
    television: 'TV',
    documentary: 'Docs',
  };

  return (
    <div className="flex flex-col min-h-screen w-full px-10 pt-48 pb-16 gap-24">
      <section className="flex flex-col w-full gap-10">
        <h2 className="text-7xl font-medium">Upcoming</h2>
        <PictureBento pictures={upcoming} />
      </section>

      <section className="flex flex-col w-full gap-10">
        <h2 className="text-7xl font-medium">All {headerConfig[type]}</h2>
        <PictureBento pictures={released.slice(0, 9)} />
      </section>

      <PictureList pictures={all} />
    </div>
  );
}
