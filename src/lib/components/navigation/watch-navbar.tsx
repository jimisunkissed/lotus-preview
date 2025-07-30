import { useAuthStore } from '@/hooks/auth-store';
import { useLayoutStore } from '@/hooks/layout-store';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export function WatchNavbar(): React.ReactNode {
  const { pathname } = useRouter();
  const { loaded, signed_in } = useAuthStore();
  const { animated, showNavbar, darkNavbar, setOpenAuth } = useLayoutStore();

  return (
    !pathname.startsWith('/watch/picture') && (
      <div
        className={cn(
          'fixed z-10 h-28 w-full pt-[60px] px-16',
          pathname === '/watch/checkout' ? 'bg-black' : '',
          animated ? 'transition-all duration-300' : '',
          showNavbar ? 'top-0' : '-top-28'
        )}
      >
        <div className={cn('grid grid-cols-3 h-full w-full')}>
          <div className="flex gap-16">
            {['home', 'browse', 'library'].map((link, i) => (
              <Link
                key={i}
                href={`/watch/${link}`}
                className={cn('h-fit text-[15px] opacity-75 hover:opacity-100', animated ? 'transition-all duration-300' : '')}
              >
                {link.toUpperCase()}
              </Link>
            ))}
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

          <div className="flex w-full justify-end">
            {loaded && !signed_in ? (
              <button
                className={cn(
                  'h-fit w-fit text-[15px] opacity-75 hover:opacity-100 cursor-pointer',
                  animated ? 'transition-all duration-300' : ''
                )}
                onClick={() => setOpenAuth(true)}
              >
                LOG IN
              </button>
            ) : null}
          </div>
        </div>
      </div>
    )
  );
}
