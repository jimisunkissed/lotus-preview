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
  apparels: ProductProps[];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const main = [...ProductsData][0];
    const recents = [...ProductsData].slice(1, 5);
    const apparels = [...ProductsData].slice(5, 9);

    return {
      props: { main, recents, apparels },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

function Index({ main, recents, apparels }: Props): React.ReactNode {
  return (
    <div className="flex flex-col min-h-screen w-full px-6 sm:px-12 lg:px-24">
      <section className="flex flex-col lg:flex-row h-auto lg:h-[calc(100dvh-112px)] w-full gap-6 lg:gap-[54px] pt-32 lg:pt-0">
        <Link href="/shop" className="h-64 sm:h-96 lg:h-full w-full lg:w-[75%] p-5 overflow-hidden">
          <img src={main.images[0]} alt="Main Image" className="h-full w-full object-contain" />
        </Link>

        <div className="flex flex-col flex-1 min-h-full justify-center">
          <p className="text-xs font-medium text-neutral-500">{main.availability}</p>
          <strong className="text-4xl font-semibold">{main.title}</strong>
        </div>
      </section>

      <FlexSeparator label="Recently Added" />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full pt-8 lg:pt-12 pb-12 lg:pb-20 gap-6 lg:gap-[54px]">
        {recents.map((pro, i) => (
          <ProductCard key={i} product={pro} />
        ))}
      </section>

      <FlexSeparator label="Apparel" />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full pt-8 lg:pt-12 pb-12 lg:pb-20 gap-6 lg:gap-[54px]">
        {apparels.map((pro, i) => (
          <ProductCard key={i} product={pro} />
        ))}
      </section>
    </div>
  );
}

export default Index;
