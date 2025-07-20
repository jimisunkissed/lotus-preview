import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

type ShopCartProps = {
  show: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ShopCart({ show, open, setOpen }: ShopCartProps): React.ReactNode {
  return (
    <Button size="icon" variant="ghost" className="group relative h-6.5 w-20 p-0 mr-[2px] hover:bg-transparent hover:text-neutral-500">
      <p className={cn('absolute left-0 transition-opacity duration-300', show || open ? 'opacity-100' : 'opacity-0')}>CART</p>
      <p
        className={cn(
          'absolute -top-6 -right-4 rotate-90 transition-opacity duration-300',
          show || open ? 'opacity-0' : 'opacity-100 delay-200'
        )}
      >
        CART
      </p>
      <div className="absolute -right-2 p-2">
        <div className={cn('h-[1px] bg-black group-hover:bg-neutral-500 transition-all duration-200', show || open ? 'w-7 delay-200' : 'w-0')} />
      </div>

      <div className="absolute -top-1 right-0 p-2 -rotate-90 origin-right">
        <div
          className={cn(
            'h-[1px] bg-black group-hover:bg-neutral-500 transition-all duration-400',
            show || open ? 'bottom-3 w-7' : 'bottom-2 w-[45px] delay-200'
          )}
        />
      </div>

      <p className={cn('absolute -right-4 w-8 text-center transition-all duration-400', show || open ? '-bottom-10' : '-bottom-16 delay-200')}>
        0
      </p>
    </Button>
  );
}
