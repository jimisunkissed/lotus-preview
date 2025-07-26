import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { PictureDetailLayout } from '@/lib/components/section/picture-detail/picture-detail-layout';
import { getSingleSupabase } from '@/lib/api/supabase-api';
import { PictureProps } from '@/types/supabase/supabase-table-type';

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

    const documentary = await getSingleSupabase({ tableId: 'picture', id, staticKeys: { type: 'documentary' } });
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
