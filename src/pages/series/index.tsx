import { getPicturesLocal } from '@/lib/api/local-api';
import { PictureLayout } from '@/lib/components/section/picture/picture-layout';
import { PictureProps } from '@/types/table-type';
import { GetStaticProps } from 'next';
import React from 'react';

type Props = {
  upcoming: PictureProps[];
  released: PictureProps[];
  all: PictureProps[];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const upcoming = getPicturesLocal({ type: 'series', status: 'upcoming', direction: 'asc' });
    const released = getPicturesLocal({ type: 'series', status: 'released', direction: 'desc' });
    const all = getPicturesLocal({ type: 'series', status: 'all', direction: 'desc', length: 15 });

    return {
      props: { upcoming, released, all },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

function Index({ upcoming, released, all }: Props): React.ReactNode {
  return <PictureLayout type="series" upcoming={upcoming} released={released} all={all} />;
}

export default Index;
