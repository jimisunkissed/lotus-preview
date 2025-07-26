import { Button } from '@/components/ui/button';
import { useAppStore } from '@/hooks/app-store';
import { cn } from '@/lib/utils';
import React from 'react';

export function ShopCart(): React.ReactNode {
  const { openMenu, showNavbar } = useAppStore();

  return (
    <Button size="icon" variant="ghost" className="group relative h-6.5 w-20 p-0 mr-[2px] hover:bg-transparent hover:text-neutral-500">
      <p className={cn('absolute left-0 transition-opacity duration-300', showNavbar || openMenu ? 'opacity-100' : 'opacity-0')}>CART</p>
      <p
        className={cn(
          'absolute -top-6 -right-4 rotate-90 transition-opacity duration-300',
          showNavbar || openMenu ? 'opacity-0' : 'opacity-100 delay-200'
        )}
      >
        CART
      </p>
      <div className="absolute -right-2 p-2">
        <div
          className={cn(
            'h-[1px] bg-black group-hover:bg-neutral-500 transition-all duration-200',
            showNavbar || openMenu ? 'w-7 delay-200' : 'w-0'
          )}
        />
      </div>

      <div className="absolute -top-1 right-0 p-2 -rotate-90 origin-right">
        <div
          className={cn(
            'h-[1px] bg-black group-hover:bg-neutral-500 transition-all duration-400',
            showNavbar || openMenu ? 'bottom-3 w-7' : 'bottom-2 w-[45px] delay-200'
          )}
        />
      </div>

      <p
        className={cn(
          'absolute -right-4 w-8 text-center transition-all duration-400',
          showNavbar || openMenu ? '-bottom-10' : '-bottom-16 delay-200'
        )}
      >
        0
      </p>
    </Button>
  );
}
