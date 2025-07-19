import { PictureProps, DocumentariesData } from '@/types/temp-picture';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { PictureDetailLayout } from '@/lib/components/section/picture-detail/picture-detail-layout';

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
  const { slug } = context.params!;

  try {
    const documentary: PictureProps | undefined = DocumentariesData.find((te) => te.slug === slug);
    if (!documentary) throw new Error('Television not found');

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
