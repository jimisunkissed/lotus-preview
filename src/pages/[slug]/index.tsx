import { getBatchSupabase } from '@/lib/api/supabase-api';
import { HeroBanner } from '@/lib/components/section/landing-page/hero-banner';
import { HeroHighlight } from '@/lib/components/section/landing-page/hero-highlight';
import { HeroItemProps } from '@/lib/components/section/landing-page/hero-item';
import { PictureLayout } from '@/lib/components/section/picture/picture-layout';
import { PictureList } from '@/lib/components/section/picture/picture-list';
import { supabase } from '@/lib/config/supabase-config';
import { ChannelProps, PictureProps } from '@/types/supabase/supabase-table-type';
import { ProductsData } from '@/types/temp-shop';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

type Props = {
  channel: ChannelProps;
  upcoming: PictureProps[];
  released: PictureProps[];
  all: PictureProps[];
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

    const channel = await getBatchSupabase({ tableId: 'channel', filters: [{ column: 'slug', op: 'eq', value: slug! }], length: 1 }).then(
      (res) => res?.[0]
    );
    if (!channel?.id) throw new Error('Channel not found');

    const [upcoming, released] = await Promise.all([
      supabase.rpc('get_pictures', { channel_id: channel.id, status: 'upcoming', direction: 'asc' }).then((res) => res.data),
      supabase.rpc('get_pictures', { channel_id: channel.id, status: 'released', direction: 'desc' }).then((res) => res.data),
      supabase.rpc('get_pictures', { channel_id: channel.id, direction: 'desc' }).then((res) => res.data),
    ]);

    return {
      props: { channel, upcoming, released },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

function Index({ channel, upcoming, released, all }: Props): React.ReactNode {
  const items1: HeroItemProps[] = ProductsData.filter((pro) => pro.channel_id === channel.id)
    .slice(0, 3)
    .map((pro) => ({ href: '/sheila-on-7', category: 'shop', title: pro.title, image: pro.images[0] }));

  return (
    <div className="flex flex-col min-h-screen w-full">
      <PictureLayout upcoming={upcoming} released={released} />
      <HeroBanner picture={upcoming[0]} />
      <HeroHighlight items={items1} />
      <div className="px-10 pb-16">
        <PictureList pictures={[...upcoming, ...released]} />
      </div>
    </div>
  );
}

export default Index;
