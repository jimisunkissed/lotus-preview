import { PictureProps, TelevisionsData } from '@/types/temp-picture';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { PictureDetailLayout } from '@/lib/components/section/picture-detail/picture-detail-layout';

type Props = {
  television: PictureProps;
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
    const television: PictureProps | undefined = TelevisionsData.find((te) => te.slug === slug);
    if (!television) throw new Error('Television not found');

    return {
      props: { television },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

function Index({ television }: Props): React.ReactNode {
  return <PictureDetailLayout picture={television} />;
}

export default Index;
