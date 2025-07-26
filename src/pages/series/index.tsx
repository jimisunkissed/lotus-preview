import { PictureLayout } from '@/lib/components/section/picture/picture-layout';
import { PictureProps, SeriesData } from '@/types/temp-picture';
import { isAfter, isBefore, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import React, { useMemo } from 'react';

type Props = {
  upcoming: PictureProps[];
  released: PictureProps[];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const upcoming = SeriesData.filter((series) => {
      const releaseDate = parseISO(series.release_date);
      const currentDate = new Date();
      return isAfter(releaseDate, currentDate);
    });
    const released = SeriesData.filter((series) => {
      const releaseDate = parseISO(series.release_date);
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
  const sortedSeries = useMemo(
    () => [...SeriesData].sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()),
    []
  );

  return <PictureLayout type="series" upcoming={upcoming} released={released} all={sortedSeries} />;
}

export default Index;
