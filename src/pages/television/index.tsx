import { PictureLayout } from '@/lib/components/section/picture/picture-layout';
import { PictureProps, TelevisionsData } from '@/types/temp-picture';
import { isAfter, isBefore, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import React, { useMemo } from 'react';

type Props = {
  upcoming: PictureProps[];
  released: PictureProps[];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const upcoming = TelevisionsData.filter((television) => {
      const releaseDate = parseISO(television.release_date);
      const currentDate = new Date();
      return isAfter(releaseDate, currentDate);
    });
    const released = TelevisionsData.filter((television) => {
      const releaseDate = parseISO(television.release_date);
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
  const sortedTelevisions = useMemo(
    () => [...TelevisionsData].sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()),
    []
  );

  return <PictureLayout type="television" upcoming={upcoming} released={released} all={sortedTelevisions} />;
}

export default Index;
