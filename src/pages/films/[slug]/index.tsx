import { FilmsData, PictureProps } from '@/types/temp-picture';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { PictureDetailLayout } from '@/lib/components/section/picture-detail/picture-detail-layout';

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
  const { slug } = context.params!;

  try {
    const film: PictureProps | undefined = FilmsData.find((fi) => fi.slug === slug);
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
