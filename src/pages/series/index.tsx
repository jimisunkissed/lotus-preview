import { PictureLayout } from '@/lib/components/section/picture/picture-layout';
import { supabase } from '@/lib/config/supabase-client-config';
import { PictureProps } from '@/types/supabase/supabase-table-type';
import { GetStaticProps } from 'next';
import React from 'react';

type Props = {
  upcoming: PictureProps[];
  released: PictureProps[];
  all: PictureProps[];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [upcoming, released, all] = await Promise.all([
      supabase.rpc('get_pictures', { type: 'series', status: 'upcoming', direction: 'asc' }).then((res) => res.data),
      supabase.rpc('get_pictures', { type: 'series', status: 'released', direction: 'desc' }).then((res) => res.data),
      supabase.rpc('get_pictures', { type: 'series', status: 'all', direction: 'desc', length: 15 }).then((res) => res.data),
    ]);

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
