import { getBatchLocal } from '@/lib/api/local-api';
import { FlexButton } from '@/lib/components/flex/flex-button';
import { FlexImage } from '@/lib/components/flex/flex-image';
import { PaymentMethod } from '@/lib/components/section/checkout/payment-method';
import { formatNumberSuffix } from '@/lib/utils/general/number-util';
import { PictureStreamProps } from '@/types/supabase/supabase-table-type';
import { Film } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

function Index(): React.ReactNode {
  const { back, isReady, query } = useRouter();
  const [items, setItems] = useState<(PictureStreamProps & { action: 'rent' | 'purchase' })[] | undefined>();

  const { sid, action } = query;
  const subtotal = useMemo(
    () => (!Array.isArray(items) ? 0 : items.reduce((acc, it) => (acc += it?.action === 'purchase' ? it.price_purchase! : it.price_rent!), 0)),
    [items],
  );

  const getItems = async (): Promise<void> => {
    try {
      const it = getBatchLocal({
        tableId: 'picture_stream',
        filters: [{ column: 'id', op: 'eq', value: sid! }],
        length: 10,
      }).map((row) => ({ ...row, action: (Array.isArray(action) ? action[0] : (action ?? 'rent')) as 'rent' | 'purchase' }));
      setItems(it);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isReady) getItems();
  }, [isReady]);

  return (
    <div className="flex flex-col h-screen min-h-fit w-full pt-32">
      <div className="relative flex w-full justify-center gap-8">
        <section className="flex flex-col w-[45%] p-10 gap-4">
          <strong className="text-2xl font-medium">ITEMS</strong>
          {!Array.isArray(items) ? null : !items.length ? (
            <div className="flex h-96 w-full items-center justify-center">
              <strong className="text-8xl font-medium text-white opacity-50">{`Watchlist empty ;(`}</strong>
            </div>
          ) : (
            <>
              {items.map((item, i) => (
                <article key={i} className="flex w-full items-center gap-6">
                  <div className="relative flex aspect-square h-[60px] min-w-fit items-center justify-center border bg-primary/10 overflow-hidden">
                    {item?.image_thumbnail ? (
                      <FlexImage image={item?.image_thumbnail} alt="Stream Image" />
                    ) : (
                      <Film className="h-5 w-5 opacity-75" />
                    )}
                  </div>
                  <div className="flex flex-col w-fit">
                    <p className="text-xs font-semibold opacity-50">{item.action.toUpperCase()}</p>
                    <p className="font-semibold line-clamp-1">{item.title}</p>
                  </div>

                  <p className="ml-auto font-semibold">
                    IDR {formatNumberSuffix(action === 'purchase' ? item.price_purchase! : item.price_rent!)}
                  </p>
                </article>
              ))}

              <div className="flex flex-col w-full gap-2 mt-4">
                <article className="flex w-full items-center justify-between">
                  <p className="text-lg font-semibold">Subtotal</p>
                  <p className="text-lg font-semibold">IDR {formatNumberSuffix(subtotal)}</p>
                </article>

                <article className="flex w-full items-center justify-between">
                  <p className="text-lg font-semibold">Transaction Fee</p>
                  <p className="text-lg font-semibold">IDR {formatNumberSuffix(subtotal * 0.03, 1)}</p>
                </article>

                <article className="flex w-full items-center justify-between mt-4">
                  <p className="text-2xl font-bold">Total</p>
                  <p className="text-2xl font-bold">IDR {formatNumberSuffix(subtotal * 1.03, 1)}</p>
                </article>
              </div>
            </>
          )}
        </section>

        <div className="fixed top-0 left-[50%] h-screen w-[1px] self-start bg-neutral-800" />

        <section className="flex flex-col w-[45%] p-10 gap-4">
          <div className="flex flex-col">
            <strong className="text-2xl font-medium">PAYMENT</strong>
            <p className="font-medium text-primary/75">All transactions are secure and encrypted</p>
          </div>

          <PaymentMethod />

          <FlexButton size="lg" text="PAY NOW" className="w-full" iconCn="min-h-5 min-w-5" />
        </section>
      </div>
    </div>
  );
}

export default Index;
