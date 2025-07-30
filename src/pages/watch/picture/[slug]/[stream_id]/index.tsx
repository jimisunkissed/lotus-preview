import { Separator } from '@/components/ui/separator';
import { useStreamStore } from '@/hooks/stream-store';
import { getSingleSupabase } from '@/lib/api/supabase-api';
import { FlexImage } from '@/lib/components/flex/flex-image';
import { cn } from '@/lib/utils';
import { PictureProps } from '@/types/supabase/supabase-table-type';
import { format } from 'date-fns';
import { Airplay, ArrowLeft, Bookmark, CreditCard, LucideIcon, Play, Popcorn } from 'lucide-react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  picture: PictureProps;
};

type PictureArticleProps = {
  label: string;
  value?: any;
  transform?: (v: any) => string;
};

type ActionLinkProps = {
  text: string;
  Icon: LucideIcon;
  onClick?: () => void;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { slug, stream_id } = context.params!;
    const id = Number((slug as string)?.split('-')?.[0]);
    if (!id) throw new Error('Picture ID not found');

    const picture = await getSingleSupabase({ tableId: 'picture', id });
    if (!picture) throw new Error('Picture not found');

    return {
      props: { picture },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

function Index({ picture }: Props): React.ReactNode {
  const { back, push, query } = useRouter();
  const { setOpenStream, setPictureId, setStreamId } = useStreamStore();
  const { theme } = useTheme();

  const articles: PictureArticleProps[] = [
    { label: 'DIRECTED BY', value: picture?.director },
    { label: 'WRITTEN BY', value: picture?.writer },
    { label: 'FILM DETAILS', value: picture?.release_date, transform: (v: string) => format(new Date(v), 'yyyy') },
    { label: 'RUNTIME', value: 120, transform: (v: number) => `${v} mins` },
  ];

  const PictureArticle = ({ label, value, transform, additional = false }: PictureArticleProps & { additional?: boolean }) => (
    <article className="flex flex-col">
      <p className={cn('text-xs opacity-75', additional ? 'text-neutral-500 font-semibold' : '')}>{label.toUpperCase()}</p>
      <p className={cn('text-md opacity-75', additional ? 'text-sm mt-0.5 ml-2' : '')}>{transform ? transform(value) : value}</p>
    </article>
  );

  const ActionLink = ({ text, Icon, onClick }: ActionLinkProps) => (
    <button
      className="flex w-fit items-center gap-2 text-xs opacity-75 hover:opacity-100 cursor-pointer transition-all duration-300"
      onClick={onClick}
    >
      <Icon className="max-h-3.5 max-w-3.5" /> {text}
    </button>
  );

  const streamPicture = () => {
    setOpenStream(true);
    setPictureId(picture.id);
    setStreamId(query.stream_id as string);
  };

  const rentPicture = () => {
    push(`/watch/checkout?pid=${picture.id}&sid=${'fa173f1d-d99b-40d1-80f4-543e390dadf6'}`);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative flex flex-col h-[100dvh] w-[100dvw] overflow-hidden bg-blue-100">
        <div className="absolute z-10 top-0 left-0 h-full w-full bg-black opacity-30" />
        <div className="absolute z-10 bottom-0 left-0 h-[30%] w-full bg-gradient-to-t from-black to-transparent opacity-100" />
        <FlexImage image={picture.image_banner || picture?.image_thumbnail} alt="Picture Poster" />

        <button className="absolute z-20 top-10 left-10 opacity-75 hover:opacity-100 cursor-pointer transition-all duration-300" onClick={back}>
          <ArrowLeft />
        </button>

        <header className="absolute z-20 left-10 bottom-10 flex flex-col w-[60%] gap-4">
          <h1 className="text-8xl opacity-75">{picture.title}</h1>
          <h2 className="w-full max-w-[500px] text-md opacity-75">{picture?.synopsis}</h2>

          <div className="grid grid-cols-4">
            {articles
              .filter((ar) => !!ar?.value)
              .map((ar, i) => (
                <PictureArticle key={i} {...ar} />
              ))}
          </div>

          <div className="w-full max-w-[500px]">
            <PictureArticle label="CAST" value={(picture?.cast ?? []).join(', ')} />
          </div>
          <div className="flex h-10 items-center gap-8">
            <ActionLink text="TRAILER" Icon={Play} />
            <Separator orientation="vertical" className="opacity-20" />
            <ActionLink text="SAVE" Icon={Bookmark} />
            <Separator orientation="vertical" className="opacity-20" />
            <ActionLink text="STREAM" Icon={Airplay} onClick={streamPicture} />
            <Separator orientation="vertical" className="opacity-20" />
            <ActionLink text="RENT" Icon={CreditCard} onClick={rentPicture} />
          </div>
        </header>
      </div>

      <div className="flex flex-col w-full p-10 pt-0 gap-10">
        <Separator className="bg-neutral-800" />

        <section className="flex flex-col w-full gap-6">
          <h3 className="text-xl">Additional Details</h3>
          <div className="grid grid-cols-6 w-full">
            <PictureArticle label="AUDIO LANGUAGES" value="English" additional />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Index;
