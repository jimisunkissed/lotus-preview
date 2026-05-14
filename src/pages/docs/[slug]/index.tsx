import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { PictureDetailLayout } from '@/lib/components/section/picture-detail/picture-detail-layout';
import { PictureProps } from '@/types/supabase/supabase-table-type';
import { getSingleLocal } from '@/lib/api/local-api';

type Props = {
  documentary: PictureProps;
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
    if (!id) throw new Error('Documentary ID not found');

    const documentary = getSingleLocal({ tableId: 'picture', id, staticKeys: { type: 'documentary' } });
    if (!documentary) throw new Error('Documentary not found');

    return {
      props: { documentary },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

function Index({ documentary }: Props): React.ReactNode {
  return <PictureDetailLayout picture={documentary} />;
}

export default Index;
