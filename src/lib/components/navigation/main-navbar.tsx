import { useAuthStore } from '@/hooks/auth-store';
import { useLayoutStore } from '@/hooks/layout-store';
import { MainMenu } from '@/lib/components/navigation/main-menu';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export function MainNavbar(): React.ReactNode {
  const { loaded, signed_in } = useAuthStore();
  const { animated, showNavbar, darkNavbar, setOpenSearch, setOpenAuth } = useLayoutStore();

  return (
    <div
      className={cn(
        'fixed z-10 h-28 w-full pt-[60px] px-10',
        animated ? 'transition-all duration-300' : '',
        showNavbar ? 'top-0' : '-top-28',
        darkNavbar ? 'bg-white' : 'bg-transparent'
      )}
    >
      <div className={cn('grid grid-cols-3 h-full w-full')}>
        <div>
          <MainMenu />
        </div>

        <div className="flex w-full justify-center">
          <Link href="/" className={cn('h-fit text-4xl font-bold')}>
            <div className="h-5 w-fit overflow-hidden">
              <img
                src="/lotu5-logo.png"
                className={cn('h-full w-fit object-contain', animated ? 'transition-all duration-300' : '', darkNavbar ? 'invert' : '')}
              />
            </div>
          </Link>
        </div>

        <div className="flex w-full justify-end gap-6">
          <button
            className={cn(
              'h-fit w-fit p-0 hover:bg-transparent hover:text-neutral-500 cursor-pointer',
              animated ? 'transition-all duration-300' : '',
              darkNavbar ? 'text-black' : 'text-white'
            )}
            onClick={() => {
              setOpenSearch(true);
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
          >
            <Search className="min-h-6.5 min-w-6.5" strokeWidth={1} />
          </button>

          {loaded && !signed_in ? (
            <button
              className={cn(
                'h-fit w-fit hover:text-neutral-500 cursor-pointer',
                animated ? 'transition-all duration-300' : '',
                darkNavbar ? 'text-black' : 'text-white'
              )}
              onClick={() => setOpenAuth(true)}
            >
              LOG IN
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
