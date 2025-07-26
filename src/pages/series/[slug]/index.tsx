import { PictureProps, SeriesData } from '@/types/temp-picture';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { PictureDetailLayout } from '@/lib/components/section/picture-detail/picture-detail-layout';

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
  const { slug } = context.params!;

  try {
    const series: PictureProps | undefined = SeriesData.find((te) => te.slug === slug);
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
