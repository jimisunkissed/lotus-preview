import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

type ShopMenuProps = {
  show: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ShopMenu({ show, open, setOpen }: ShopMenuProps): React.ReactNode {
  const { pathname, asPath } = useRouter();

  const secondaryPath = useMemo(() => pathname.split('/')?.[2], [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [asPath]);

  return (
    <>
      <div className="absolute z-50 flex left-10 top-[50px]">
        <Button variant="ghost" className="group flex gap-3.5 p-0 hover:bg-transparent" onClick={() => setOpen(!open)}>
          <div className="relative flex flex-col aspect-square h-[25px] w-[25px]">
            <div
              className={cn(
                'absolute h-[1px] w-[25px] bg-black group-hover:bg-neutral-500 transition-all duration-300',
                open ? 'rotate-135 top-[12px]' : 'top-[7px] group-hover:top-[6px]'
              )}
            />
            <div
              className={cn(
                'absolute h-[1px] w-[25px] bg-black group-hover:bg-neutral-500 transition-all duration-300',
                open ? 'rotate-45 bottom-[12px]' : 'bottom-[7px] group-hover:bottom-[6px]'
              )}
            />
          </div>

          <div
            className={cn(
              'flex text-[15px] items-center gap-2 text-black group-hover:text-neutral-500 transition-all duration-300',
              !show && !open ? 'opacity-0' : 'opacity-100'
            )}
          >
            <p>SHOP</p>
            {!!secondaryPath && !open ? (
              <>
                <p>/</p>
                <p>{secondaryPath.toUpperCase()}</p>
              </>
            ) : null}
          </div>
        </Button>
      </div>
    </>
  );
}
