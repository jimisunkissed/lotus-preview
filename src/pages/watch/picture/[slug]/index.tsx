import { Separator } from '@/components/ui/separator';
import { useStreamStore } from '@/hooks/stream-store';
import { getBatchLocal, getPictureWatchLocal } from '@/lib/api/local-api';
import { FlexButton } from '@/lib/components/flex/flex-button';
import { FlexImage } from '@/lib/components/flex/flex-image';
import { WatchRecommendation } from '@/lib/components/section/watch-picture/watch-recommendation';
import { WatchSeasons } from '@/lib/components/section/watch-picture/watch-seasons';
import { cn } from '@/lib/utils';
import { formatNumberSuffix } from '@/lib/utils/general/number-util';
import { PictureProps, PictureSeasonProps, PictureStreamProps } from '@/types/table-type';
import { format } from 'date-fns';
import { ArrowLeft, Bookmark, LucideIcon, Play, RectangleGoggles, Upload } from 'lucide-react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

type Props = {
  picture: PictureProps;
  seasons: PictureSeasonProps[];
  stream_main_content: PictureStreamProps;
  stream_trailer_id: string;
  stream_teaser_id: string;
  recommendations: PictureProps[];
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
    const { slug } = context.params!;
    const id = Number((slug as string)?.split('-')?.[0]);
    if (!id) throw new Error('Picture ID not found');

    const stream = getPictureWatchLocal(id);
    const recommendations = getBatchLocal({ tableId: 'picture', filters: [{ column: 'id', op: 'neq', value: id }], length: 3 });

    return {
      props: { ...stream, recommendations },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

function Index({ picture, seasons, stream_main_content, stream_trailer_id, stream_teaser_id, recommendations }: Props): React.ReactNode {
  const { back } = useRouter();
  const { setOpenStream, setPictureId, setStreamId } = useStreamStore();

  const articles: PictureArticleProps[] = useMemo(
    () =>
      [
        { label: 'DIRECTED BY', value: picture?.director },
        { label: 'WRITTEN BY', value: picture?.writer },
        { label: 'FILM DETAILS', value: picture?.release_date, transform: (v: string) => format(new Date(v), 'yyyy') },
        { label: 'RUNTIME', value: stream_main_content?.runtime_minutes, transform: (v: number) => `${v} mins` },
      ].filter((art) => !!art?.value),
    [picture, stream_main_content],
  );

  const watchFreeStream = (streamId: string): void => {
    setOpenStream(true);
    setPictureId(picture.id);
    setStreamId(streamId);
  };

  const checkout = (action: string): void => {
    window.open(`/watch/checkout?sid=${stream_main_content.id}&action=${action}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative flex flex-col h-[100dvh] w-[100dvw] overflow-hidden bg-blue-100">
        <div
          className="absolute z-10 bottom-0 left-0 h-[30%] w-full opacity-100"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)',
          }}
        />
        <FlexImage image={picture.image_banner || picture?.image_thumbnail} alt="Picture Poster" className="brightness-75" />

        <button
          className="fixed z-50 top-4 left-4 sm:top-10 sm:left-10 opacity-75 hover:opacity-100 cursor-pointer transition-all duration-300"
          onClick={back}
        >
          <ArrowLeft />
        </button>

        <header className="absolute z-20 left-4 sm:left-10 bottom-4 sm:bottom-10 flex flex-col w-full sm:w-[80%] lg:w-[60%] gap-4 pr-4 sm:pr-0">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-medium sm:font-normal opacity-75">{picture.title}</h1>
          <h2 className="w-full max-w-[500px] text-md opacity-75">{picture?.synopsis}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4">
            {articles
              .filter((ar) => !!ar?.value)
              .map((ar, i) => (
                <PictureArticle key={i} {...ar} />
              ))}
          </div>

          <div className="w-full max-w-[500px]">
            <PictureArticle label="CAST" value={(picture?.cast ?? []).join(', ')} />
          </div>

          <div className="flex gap-2">
            {picture.type === 'series' ? null : !stream_main_content ? (
              <div className="flex h-20 px-10 items-center justify-center bg-primary/5 border text-xl font-medium">
                <p className="opacity-50">NOT AVAILABLE IN YOUR COUNTRY</p>
              </div>
            ) : (
              <>
                {stream_main_content?.price_purchase && (
                  <FlexButton
                    className="h-14 sm:h-20 w-auto sm:w-56 text-base sm:text-xl font-medium hover:bg-primary/90"
                    onClick={() => checkout('purchase')}
                  >
                    <p>BUY</p>
                    <p className="text-background/50">{formatNumberSuffix(stream_main_content.price_purchase).toUpperCase()}</p>
                  </FlexButton>
                )}
                {stream_main_content?.price_rent && (
                  <FlexButton
                    className="h-14 sm:h-20 w-auto sm:w-56 text-base sm:text-xl font-medium hover:bg-primary/90"
                    onClick={() => checkout('rent')}
                  >
                    <p>RENT</p>
                    <p className="text-background/50">{formatNumberSuffix(stream_main_content.price_rent).toUpperCase()}</p>
                  </FlexButton>
                )}
              </>
            )}
          </div>

          <div className="flex h-10 items-center gap-6 sm:gap-10 lg:gap-16">
            {stream_trailer_id ? <ActionLink text="TRAILER" Icon={Play} onClick={() => watchFreeStream(stream_trailer_id)} /> : null}
            {stream_teaser_id ? <ActionLink text="TEASER" Icon={RectangleGoggles} onClick={() => watchFreeStream(stream_teaser_id)} /> : null}

            <ActionLink text="SHARE" Icon={Upload} />
            <ActionLink text="SAVE" Icon={Bookmark} />
          </div>
        </header>
      </div>

      <div className="flex flex-col w-full p-4 sm:p-6 lg:p-10 pt-0 gap-6 lg:gap-10">
        <Separator />

        <section className="flex flex-col w-full gap-6">
          <h3 className="text-xl">Additional Details</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full">
            <PictureArticle label="AUDIO LANGUAGES" value="English" additional />
          </div>
        </section>

        {Array.isArray(seasons) && seasons.length ? <WatchSeasons picture={picture} seasons={seasons} /> : null}
        {Array.isArray(recommendations) && recommendations.length ? <WatchRecommendation recommendations={recommendations} /> : null}
      </div>
    </div>
  );
}

export default Index;

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
