import { Button } from '@/components/ui/button';
import { useLayoutStore } from '@/hooks/layout-store';
import { cn } from '@/lib/utils';
import React from 'react';

export function ShopCart(): React.ReactNode {
  const { openMenu, showNavbar } = useLayoutStore();

  const straight = showNavbar || openMenu;

  return (
    <>
      <div className="relative h-6.5 w-12" />

      <Button size="icon" variant="ghost" className="group relative h-6.5 w-0 p-0 mr-[2px] hover:bg-transparent hover:text-neutral-500">
        <p
          className={cn(
            'absolute -top-6 -right-4 rotate-90 transition-opacity duration-300',
            straight ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-200'
          )}
        >
          CART
        </p>
        <p className={cn('absolute right-10 transition-opacity duration-300', straight ? 'opacity-100' : 'opacity-0 pointer-events-none')}>
          CART
        </p>
        <div className="absolute -right-2 p-2">
          <div className={cn('h-[1px] bg-black group-hover:bg-neutral-500 transition-all duration-200', straight ? 'w-7 delay-200' : 'w-0')} />
        </div>

        <div className="absolute -top-1 right-0 p-2 -rotate-90 origin-right">
          <div
            className={cn(
              'h-[1px] bg-black group-hover:bg-neutral-500 transition-all duration-400',
              straight ? 'bottom-3 w-7' : 'bottom-2 w-[45px] delay-200'
            )}
          />
        </div>

        <p className={cn('absolute -right-4 w-8 text-center transition-all duration-400', straight ? '-bottom-10' : '-bottom-16 delay-200')}>
          0
        </p>
      </Button>
    </>
  );
}
