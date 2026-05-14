import { useLayoutStore } from '@/hooks/layout-store';
import { ShopCart } from '@/lib/components/navigation/shop-cart';
import { ShopMenu } from '@/lib/components/navigation/shop-menu';
import { ShopHero } from '@/lib/components/section/shop/shop-hero';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export function ShopNavbar(): React.ReactNode {
  const { animated, openShop, showNavbar, setOpenShop, setOpenSearch } = useLayoutStore();

  return (
    <>
      <div className={cn('relative z-50 grid grid-cols-3 h-20 sm:h-28 w-full pt-10 sm:pt-[60px] px-6 sm:px-10')}>
        <div>
          <ShopMenu />
        </div>

        <div
          className={cn(
            'flex h-full w-full justify-center',
            animated ? 'transition-all duration-300' : '',
            showNavbar || openShop ? 'opacity-100' : 'opacity-0 pointer-events-none',
          )}
        >
          <Link href="/" className={cn('h-fit text-4xl font-bold')}>
            <div className="h-5 w-fit overflow-hidden">
              <img src="/lotu5-logo.png" className="h-full w-fit object-contain invert" />
            </div>
          </Link>
        </div>

        <div className="flex w-full justify-end gap-6">
          <button
            className={cn(
              'h-fit w-fit p-0 hover:bg-transparent hover:text-neutral-500 cursor-pointer',
              animated ? 'transition-all duration-300' : '',
              showNavbar || openShop ? 'opacity-100' : 'opacity-0 pointer-events-none',
            )}
            onClick={() => setOpenSearch(true)}
          >
            <Search className="min-h-6.5 min-w-6.5" strokeWidth={1} />
          </button>

          <div className="hidden sm:flex gap-6">
            <ShopCart />
          </div>
        </div>
      </div>

      <div
        className={cn(
          'fixed z-40 top-0 left-0 h-auto sm:h-[700px] w-full pt-20 sm:pt-28 bg-white overflow-y-auto',
          animated ? 'transition-all duration-300' : '',
          openShop ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
      >
        <ShopHero />
      </div>
      <div
        className={cn(
          'fixed z-10 bottom-0 left-0 h-[100dvh] w-[100dvw] bg-black',
          animated ? 'transition-all duration-300' : '',
          openShop ? 'opacity-20' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setOpenShop(false)}
      />
    </>
  );
}
