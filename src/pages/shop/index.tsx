import { ProductCard } from '@/lib/components/card/product-card';
import { FlexSeparator } from '@/lib/components/flex/flex-separator';
import { cn } from '@/lib/utils';
import { ProductProps, ProductsData } from '@/types/temp-shop';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

type Props = {
  main: ProductProps;
  recents: ProductProps[];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const main = [...ProductsData][0];
    const recents = [...ProductsData].slice(1, 5);

    return {
      props: { main, recents },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

function Index({ main, recents }: Props): React.ReactNode {
  return (
    <div className="flex flex-col min-h-screen w-full px-24">
      <section className="flex h-[calc(100dvh-112px)] w-full gap-[54px]">
        <Link href="/shop" className="h-full w-[75%] p-5 overflow-hidden">
          <img src={main.images[0]} alt="Main Image" className="h-full w-full object-contain" />
        </Link>

        <div className="flex flex-col flex-1 min-h-full justify-center">
          <p className="text-xs font-medium text-neutral-500">{main.availability}</p>
          <strong className="text-4xl font-semibold">{main.title}</strong>
        </div>
      </section>

      <FlexSeparator label="recently added" />

      <section className="grid grid-cols-4 w-full pt-12 pb-20 gap-[54px]">
        {recents.map((pro, i) => (
          <ProductCard key={i} product={pro} />
        ))}
      </section>
    </div>
  );
}

export default Index;
