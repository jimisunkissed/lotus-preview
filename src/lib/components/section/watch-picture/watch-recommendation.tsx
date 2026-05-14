import { FlexImage } from '@/lib/components/flex/flex-image';
import { PictureProps } from '@/types/table-type';
import Link from 'next/link';
import React from 'react';

type WatchRecommendationProps = {
  recommendations: PictureProps[];
};

export function WatchRecommendation({ recommendations }: WatchRecommendationProps): React.ReactNode {
  return (
    <section className="flex flex-col w-full gap-6">
      <h3 className="text-xl">You Might Also Like</h3>
      <div className="flex w-full items-center gap-6">
        {recommendations.map((rec, i) => (
          <Link
            key={i}
            href={`/watch/picture/${rec.id}-${rec.slug}`}
            className="relative group flex flex-col aspect-[16/9] w-96 max-w-96 p-3 border border-primary/20 hover:border-primary/75 hover:scale-102 overflow-hidden cursor-pointer transition-all duration-300"
          >
            <FlexImage image={rec.image_banner} alt="Picture Banner" className="brightness-75" />
            <p className="relative z-10 mt-auto font-medium opacity-75 group-hover:opacity-100 transition-all duration-300">{rec.title}</p>
            <p className="relative z-10 -mt-1 text-sm font-medium text-white opacity-60 group-hover:opacity-100 transition-all duration-300">
              {rec.director}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
