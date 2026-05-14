import { PictureCard } from '@/lib/components/card/picture-card';
import { PictureProps } from '@/types/table-type';

import React from 'react';

type PictureBentoProps = {
  pictures: PictureProps[];
};

export function PictureBento({ pictures }: PictureBentoProps): React.ReactNode {
  return (
    <>
      <div className="hidden lg:grid grid-cols-3 w-full gap-8">
        <div className="flex flex-col w-full gap-16">
          {pictures?.[0] && <PictureCard picture={pictures[0]} ar="aspect-[6/7]" />}
          {pictures?.[3] && <PictureCard picture={pictures[3]} ar="aspect-[3/2]" />}
          {pictures?.[6] && <PictureCard picture={pictures[6]} ar="aspect-[6/7]" />}
        </div>

        <div className="flex flex-col w-full gap-16">
          {pictures?.[1] && <PictureCard picture={pictures[1]} ar="aspect-[5/4]" />}
          {pictures?.[4] && <PictureCard picture={pictures[4]} ar="aspect-[5/4]" />}
          {pictures?.[7] && <PictureCard picture={pictures[7]} ar="aspect-[5/4]" />}
        </div>

        <div className="flex flex-col w-full gap-16">
          {pictures?.[2] && <PictureCard picture={pictures[2]} ar="aspect-[3/2]" />}
          {pictures?.[5] && <PictureCard picture={pictures[5]} ar="aspect-[6/7]" />}
          {pictures?.[8] && <PictureCard picture={pictures[8]} ar="aspect-[3/2]" />}
        </div>
      </div>

      <div className="hidden md:grid lg:hidden md:grid-cols-2 w-full gap-8">
        <div className="flex flex-col w-full gap-16">
          {pictures?.[0] && <PictureCard picture={pictures[0]} ar="aspect-[6/7]" />}
          {pictures?.[2] && <PictureCard picture={pictures[2]} ar="aspect-[3/2]" />}
          {pictures?.[4] && <PictureCard picture={pictures[4]} ar="aspect-[6/7]" />}
          {pictures?.[6] && <PictureCard picture={pictures[6]} ar="aspect-[3/2]" />}
        </div>

        <div className="flex flex-col w-full gap-16">
          {pictures?.[1] && <PictureCard picture={pictures[1]} ar="aspect-[5/4]" />}
          {pictures?.[3] && <PictureCard picture={pictures[3]} ar="aspect-[5/4]" />}
          {pictures?.[5] && <PictureCard picture={pictures[5]} ar="aspect-[5/4]" />}
          {pictures?.[7] && <PictureCard picture={pictures[7]} ar="aspect-[5/4]" />}
          {pictures?.[8] && <PictureCard picture={pictures[8]} ar="aspect-[5/4]" />}
        </div>
      </div>

      <div className="grid md:hidden w-full gap-8">
        <div className="flex flex-col w-full gap-16">
          {pictures?.map((pic, i) => (
            <PictureCard key={i} picture={pic} ar={i % 2 === 0 ? 'aspect-[6/7]' : 'aspect-[5/4]'} />
          ))}
        </div>
      </div>
    </>
  );
}
