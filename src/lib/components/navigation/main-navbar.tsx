import { Button } from '@/components/ui/button';
import { MainMenu } from '@/lib/components/navigation/main-menu';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type MainNavbarProps = {
  show: boolean;
  dark: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MainNavbar({ show, dark, open, setOpen, setExpand }: MainNavbarProps): React.ReactNode {
  return (
    <div
      className={cn(
        'fixed z-10 h-28 w-full pt-[60px] px-10 transition-all duration-300',
        show ? 'top-0' : '-top-28',
        dark ? 'bg-white' : 'bg-transparent'
      )}
    >
      <div className={cn('grid grid-cols-3 h-full w-full transition-all duration-300')}>
        <div>
          <MainMenu show={show} dark={dark} open={open} setOpen={setOpen} />
        </div>

        <div className="flex w-full justify-center">
          <Link href="/" className={cn('h-fit text-4xl font-bold')}>
            <div className="h-5 w-fit overflow-hidden">
              <img src="/lotu5-logo.png" className={cn('h-full w-fit object-contain transition-all duration-300', dark ? 'invert' : '')} />
            </div>
          </Link>
        </div>

        <div className="flex w-full justify-end">
          <Button
            size="icon"
            variant="ghost"
            className={cn('h-fit w-fit p-0 hover:bg-transparent hover:text-neutral-500', dark ? 'text-black' : 'text-white')}
            onClick={() => {
              setExpand(true);
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
          >
            <Search className="min-h-6.5 min-w-6.5" strokeWidth={1} />
          </Button>
        </div>
      </div>
    </div>
  );
}
