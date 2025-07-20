import { Button } from '@/components/ui/button';
import { ShopCart } from '@/lib/components/navigation/shop-cart';
import { ShopMenu } from '@/lib/components/navigation/shop-menu';
import { ShopHero } from '@/lib/components/section/shop/shop-hero';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type ShopNavbarProps = {
  show: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ShopNavbar({ show, open, setOpen, setExpand }: ShopNavbarProps): React.ReactNode {
  return (
    <>
      <div className={cn('relative z-50 grid grid-cols-3 h-28 w-full pt-[60px] px-10')}>
        <div>
          <ShopMenu show={show} open={open} setOpen={setOpen} />
        </div>

        <div
          className={cn(
            'flex h-full w-full justify-center transition-all duration-300',
            show || open ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
        >
          <Link href="/" className="-mt-1.5 text-4xl font-bold">
            LOTU5
          </Link>
        </div>

        <div className="flex w-full items-center justify-end -mt-6 gap-6">
          <Button
            size="icon"
            variant="ghost"
            className={cn(
              'h-fit w-fit p-0 hover:bg-transparent hover:text-neutral-500',
              show || open ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
            onClick={() => setExpand(true)}
          >
            <Search className="min-h-6.5 min-w-6.5" strokeWidth={1} />
          </Button>

          <ShopCart show={show} open={open} setOpen={setOpen} />
        </div>
      </div>

      <div
        className={cn(
          'fixed z-40 top-0 left-0 h-[700px] w-full pt-28 bg-white transition-all duration-300',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <ShopHero />
      </div>
      <div
        className={cn(
          'fixed -z-10 bottom-0 left-0 h-[100dvh] w-full bg-black transition-all duration-300',
          open ? 'opacity-20' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
