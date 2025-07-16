import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type MainNavbarProps = {
  show: boolean;
  dark: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MainNavbar({ show, dark, setExpand }: MainNavbarProps): React.ReactNode {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  return (
    <div
      className={cn(
        'fixed z-10 h-28 w-full pt-[60px] px-10 transition-all duration-300',
        show ? 'top-0' : '-top-28',
        dark ? 'bg-white' : 'bg-transparent'
      )}
    >
      <div className={cn('relative z-20 flex h-full w-full justify-center', dark ? 'text-black' : 'text-white')}>
        <Link href="/" className="-mt-1.5 text-4xl font-bold transition-all duration-300">
          LOTU5
        </Link>
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-0 h-fit w-fit p-0 hover:bg-transparent hover:text-neutral-500 transition-all duration-300"
          onClick={() => {
            setExpand(true);
            scrollToTop();
          }}
        >
          <Search className="min-h-6.5 min-w-6.5" strokeWidth={1} />
        </Button>
      </div>
    </div>
  );
}
