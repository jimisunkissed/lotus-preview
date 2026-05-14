import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { PictureDetailLayout } from '@/lib/components/section/picture-detail/picture-detail-layout';
import { PictureProps } from '@/types/supabase/supabase-table-type';
import { getSingleLocal } from '@/lib/api/local-api';

type Props = {
  series: PictureProps;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { slug } = context.params!;
    const id = Number((slug as string)?.split('-')?.[0]);
    if (!id) throw new Error('Series ID not found');

    const series = getSingleLocal({ tableId: 'picture', id, staticKeys: { type: 'series' } });
    if (!series) throw new Error('Series not found');

    return {
      props: { series },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

function Index({ series }: Props): React.ReactNode {
  return <PictureDetailLayout picture={series} />;
}

export default Index;
