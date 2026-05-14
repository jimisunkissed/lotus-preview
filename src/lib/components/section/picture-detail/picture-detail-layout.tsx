import { Separator } from '@/components/ui/separator';
import { FlexButton } from '@/lib/components/flex/flex-button';
import { FlexImage } from '@/lib/components/flex/flex-image';
import { PictureProps } from '@/types/table-type';
import { IconBrandFacebook, IconBrandTwitter, IconMail, IconPlayerPlay } from '@tabler/icons-react';
import { format } from 'date-fns';
import React from 'react';

type PictureDetailLayoutProps = {
  picture: PictureProps;
};

type PictureDetailProps = {
  title: string;
  value: string | (string | undefined)[];
};

export function PictureDetailLayout({ picture }: PictureDetailLayoutProps): React.ReactNode {
  const PictureDetail = ({ title, value }: PictureDetailProps): React.ReactNode => {
    const clean: string | string[] = Array.isArray(value) ? value.filter((v) => typeof v === 'string') : value;

    return (
      <article className="flex flex-col gap-1">
        <p className="h-7 text-md text-neutral-400">{title.toUpperCase()}</p>
        <div className="flex flex-col">
          {Array.isArray(clean) ? (
            clean.map((val, i) => (
              <strong key={i} className="text-2xl lg:text-4xl font-medium">
                {val}
              </strong>
            ))
          ) : (
            <strong className="text-2xl lg:text-4xl font-medium">{value}</strong>
          )}
        </div>
      </article>
    );
  };

  const watch = () => window.open(`${window.location.origin}/watch/picture/${picture.id}-${picture.slug}`, '_blank', 'noopener,noreferrer');

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="group relative flex aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/10] w-full items-center justify-center bg-black overflow-hidden">
        <FlexImage
          image={picture?.image_banner || picture?.image_thumbnail}
          alt="Film Banner"
          className="group-hover:scale-102 transition-all duration-500"
        />

        <h1 className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-4xl sm:text-6xl lg:text-[78px] font-medium text-white leading-none">
          {picture.title}
        </h1>
        <button className="relative z-10 p-2 opacity-50 hover:opacity-100 cursor-pointer transition-all duration-300">
          <IconPlayerPlay className="h-20 w-20 text-white" strokeWidth={1} />
        </button>
      </header>

      <main className="flex flex-col w-full p-6 sm:p-10 lg:p-[50px] gap-8 lg:gap-[50px]">
        <FlexButton className="flex lg:hidden h-16" onClick={watch}>
          WATCH NOW
        </FlexButton>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[50px]">
          <PictureDetail title={picture.director === picture?.writer ? 'WRITTEN AND DIRECTED BY' : 'DIRECTED BY'} value={picture.director} />
          <PictureDetail title="YEAR" value={picture?.release_date ? format(new Date(picture.release_date), 'yyyy') : '(TBA)'} />
          <FlexButton className="hidden lg:flex h-16" onClick={watch}>
            WATCH NOW
          </FlexButton>
          <PictureDetail title="STARRING" value={(picture?.cast ?? []).filter((_, i) => [0, 2, 6].includes(i))} />
          <PictureDetail title="" value={(picture?.cast ?? []).filter((_, i) => [1, 3, 7].includes(i))} />
          <PictureDetail title="" value={(picture?.cast ?? []).filter((_, i) => [4, 5, 8].includes(i))} />
        </section>

        <Separator className="mt-5 bg-neutral-400" />

        <section className="flex flex-col w-full items-center gap-[50px]">
          <p className="max-w-3xl text-center text-xl lg:text-[28px] font-medium">{picture?.synopsis}</p>
          <div className="flex items-center gap-8">
            <p className="text-[15px] font-medium">SHARE</p>

            <div className="flex items-center gap-2">
              <button className="p-1 cursor-pointer hover:text-neutral-500 transition-all">
                <IconBrandFacebook className="max-h-4 max-w-4" />
              </button>
              <button className="p-1 cursor-pointer hover:text-neutral-500 transition-all">
                <IconBrandTwitter className="max-h-4 max-w-4" />
              </button>
              <button className="p-1 cursor-pointer hover:text-neutral-500 transition-all">
                <IconMail className="max-h-4 max-w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
