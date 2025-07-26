import { FlexImage } from '@/lib/components/flex/flex-image';
import { pictureLink } from '@/lib/utils/general/url-util';
import { PictureProps } from '@/types/temp-picture';
import Link from 'next/link';
import React from 'react';

type HeroBannerProps = {
  picture: PictureProps;
};

export function HeroBanner({ picture }: HeroBannerProps): React.ReactNode {
  return (
    <Link href={pictureLink(picture)} className="group relative h-[85dvh] w-full my-6 overflow-hidden">
      <FlexImage
        image={picture?.image_banner || picture?.image_thumbnail}
        alt="Banner Image"
        className="group-hover:scale-105 transition-all duration-1000"
      />

      <div className="absolute left-12 bottom-12 flex flex-col gap-2">
        <p className="font-medium text-neutral-500">WATCH NOW</p>
        <strong className="text-7xl font-semibold text-white">{picture.title}</strong>
      </div>
    </Link>
  );
}
