import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { PictureDetailLayout } from '@/lib/components/section/picture-detail/picture-detail-layout';
import { PictureProps } from '@/types/supabase/supabase-table-type';
import { getSingleLocal } from '@/lib/api/local-api';

type Props = {
  film: PictureProps;
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
    if (!id) throw new Error('Film ID not found');

    const film = getSingleLocal({ tableId: 'picture', id, staticKeys: { type: 'film' } });
    if (!film) throw new Error('Film not found');

    return {
      props: { film },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

function Index({ film }: Props): React.ReactNode {
  return <PictureDetailLayout picture={film} />;
}

export default Index;
