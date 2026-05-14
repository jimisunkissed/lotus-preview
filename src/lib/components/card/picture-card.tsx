import { FlexImage } from '@/lib/components/flex/flex-image';
import { cn } from '@/lib/utils';
import { pictureLink } from '@/lib/utils/general/url-util';
import { PictureProps } from '@/types/table-type';
import { differenceInDays, format, parseISO } from 'date-fns';
import Link from 'next/link';
import React, { useMemo } from 'react';

type PictureCardProps = {
  picture: PictureProps;
  ar: string;
};

type PictureDetailProps = {
  label: string;
  value: string;
};

export function PictureCard({ picture, ar = 'aspect-[3/2]' }: PictureCardProps): React.ReactNode {
  const releaseInfo = useMemo(() => {
    if (!picture?.release_date) return '';

    const date = parseISO(picture.release_date);
    const daysDiff = differenceInDays(date, new Date());

    if (daysDiff >= 0 && daysDiff <= 30) {
      return 'COMING SOON';
    }

    return format(date, 'yyyy');
  }, [picture?.release_date]);

  const PictureDetail = ({ label, value }: PictureDetailProps): React.ReactNode => (
    <div className="flex flex-col -gap-0.5">
      <p className="text-sm font-medium text-white opacity-50">{label}</p>
      <p className="-mt-0.5 text-[18px] text-white">{value}</p>
    </div>
  );

  return (
    <Link href={pictureLink(picture)} className="group flex flex-col w-full cursor-pointer">
      <article>
        <div className={cn('relative w-full bg-black overflow-hidden', ar)}>
          <FlexImage image={picture.image_thumbnail} alt="Picture Poster" />

          <div className="absolute z-10 top-0 left-0 h-full w-full bg-black opacity-0 group-hover:opacity-60 transition-all" />
          <div className="absolute z-20 top-0 left-0 flex flex-col h-full w-full px-6 py-10 gap-3 opacity-0 group-hover:opacity-100 transition-all">
            <PictureDetail
              label="RELEASE DATE"
              value={picture?.release_date ? format(new Date(picture?.release_date), 'MMM dd, yyyy') : '(TBA)'}
            />

            {picture.director === picture?.writer ? (
              <PictureDetail label="WRITTEN AND DIRECTED BY" value={picture.director} />
            ) : (
              <>
                <PictureDetail label="DIRECTED BY" value={picture.director} />
                {picture?.writer && <PictureDetail label="WRITTEN BY" value={picture.writer} />}
              </>
            )}

            {Array.isArray(picture?.cast) && picture.cast.length && ar === 'aspect-[6/7]' ? (
              <PictureDetail label="STARRING" value={picture.cast.join(', ')} />
            ) : null}
          </div>
        </div>

        <p className="mt-4 text-neutral-500">{releaseInfo}</p>
        <strong className="-mt-0.5 text-4xl font-medium">{picture.title}</strong>
      </article>
    </Link>
  );
}
