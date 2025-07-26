import { HeroBanner } from '@/lib/components/section/landing-page/hero-banner';
import { HeroHighlight } from '@/lib/components/section/landing-page/hero-highlight';
import { HeroItemProps } from '@/lib/components/section/landing-page/hero-item';
import { PictureLayout } from '@/lib/components/section/picture/picture-layout';
import { PictureList } from '@/lib/components/section/picture/picture-list';
import { ChannelProps, channelsData } from '@/types/temp-channel';
import { DocumentariesData, FilmsData, PictureProps, SeriesData } from '@/types/temp-picture';
import { ProductsData } from '@/types/temp-shop';
import { isAfter, isBefore, parseISO } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

type Props = {
  channel: ChannelProps;
  upcoming: PictureProps[];
  released: PictureProps[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;

  try {
    const channel = channelsData.find((ch) => ch.slug === slug);
    if (!channel) throw new Error('Channel not found');

    const pictures = [...FilmsData, ...SeriesData, ...DocumentariesData].filter((pic) => pic.channel_id === channel.id);
    const upcoming = pictures.filter((film) => {
      const releaseDate = parseISO(film.release_date);
      const currentDate = new Date();
      return isAfter(releaseDate, currentDate);
    });
    const released = pictures.filter((film) => {
      const releaseDate = parseISO(film.release_date);
      const currentDate = new Date();
      return isBefore(releaseDate, currentDate);
    });

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

function Index({ channel, upcoming, released }: Props): React.ReactNode {
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
