import { PictureLayout } from '@/lib/components/section/picture/picture-layout';
import { supabase } from '@/lib/config/supabase-config';
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
      supabase.rpc('get_pictures', { type: 'documentary', status: 'upcoming', direction: 'asc' }).then((res) => res.data),
      supabase.rpc('get_pictures', { type: 'documentary', status: 'released', direction: 'desc' }).then((res) => res.data),
      supabase.rpc('get_pictures', { type: 'documentary', status: 'all', direction: 'desc', length: 15 }).then((res) => res.data),
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
  return <PictureLayout type="documentary" upcoming={upcoming} released={released} all={all} />;
  return null;
}

export default Index;
