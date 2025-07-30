import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { getSingleSupabase } from '@/lib/api/supabase-api';
import { FlexButton } from '@/lib/components/flex/flex-button';
import { PictureProps, PictureStreamProps } from '@/types/supabase/supabase-table-type';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

function Index(): React.ReactNode {
  const { back, isReady, query } = useRouter();
  const [picture, setPicture] = useState<PictureProps | null | undefined>();
  const [stream, setStream] = useState<PictureStreamProps | null | undefined>();

  const { pid, sid } = query;

  const getData = async (): Promise<void> => {
    try {
      if (!pid || !sid) throw new Error('No item to checkout');

      const [pic, str] = await Promise.all([
        getSingleSupabase({ tableId: 'picture', id: Number(pid) }),
        getSingleSupabase({ tableId: 'picture_stream', id: sid }),
      ]);
      setPicture(pic);
      setStream(str);
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'An unknown error occured');
      setPicture(null);
      setStream(null);
    }
  };

  useEffect(() => {
    if (isReady) getData();
  }, [isReady]);

  return (
    <div className="flex flex-col h-screen min-h-fit w-full pt-32">
      <div className="relative flex w-full justify-center">
        <section className="flex flex-col w-[40%]">
          <FlexButton
            variant="ghost"
            className="w-fit p-0 opacity-75 hover:opacity-100"
            text="CHECKOUT"
            Icon={ArrowLeft}
            iconCn="min-h-5 min-w-5"
            onClick={back}
          />

          {picture === null || stream === null ? (
            <div className="flex h-96 w-full items-center justify-center p-10">
              <strong className="text-8xl font-medium text-white opacity-50">{`Watchlist empty ;(`}</strong>
            </div>
          ) : null}
        </section>

        <div className="fixed top-0 left-[50%] h-screen w-[1px] self-start bg-neutral-800" />

        <section className="flex flex-col w-[40%] p-10">
          <Label className="text-xl font-semibold mt-2">PAYMENT</Label>
          <FlexButton size="lg" text="PAY NOW" className="w-full" iconCn="min-h-5 min-w-5" />
        </section>
      </div>
    </div>
  );
}

export default Index;
