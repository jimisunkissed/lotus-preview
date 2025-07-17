import { PictureBento } from '@/lib/components/section/picture/picture-bento';
import { PictureList } from '@/lib/components/section/picture/picture-list';
import { FilmsData, PictureProps } from '@/types/temp-picture';
import { isAfter, isBefore, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import React, { useMemo } from 'react';

type Props = {
  upcoming: PictureProps[];
  released: PictureProps[];
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const upcoming = FilmsData.filter((film) => {
      const releaseDate = parseISO(film.release_date);
      const currentDate = new Date();
      return isAfter(releaseDate, currentDate);
    });
    const released = FilmsData.filter((film) => {
      const releaseDate = parseISO(film.release_date);
      const currentDate = new Date();
      return isBefore(releaseDate, currentDate);
    });

    return {
      props: { upcoming, released },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

function Index({ upcoming, released }: Props): React.ReactNode {
  const sortedFilms = useMemo(() => FilmsData.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()), []);

  return (
    <div className="flex flex-col min-h-screen w-full px-10 pt-48 pb-16 gap-24">
      <div className="flex flex-col w-full gap-10">
        <h2 className="text-7xl font-medium">Upcoming</h2>
        <PictureBento pictures={upcoming} />
      </div>

      <div className="flex flex-col w-full gap-10">
        <h2 className="text-7xl font-medium">All Films</h2>
        <PictureBento pictures={released.slice(0, 9)} />
      </div>

      <PictureList pictures={sortedFilms} />
    </div>
  );
}

export default Index;
