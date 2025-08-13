import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/hooks/auth-store';
import { useLayoutStore } from '@/hooks/layout-store';
import { protectedRoutes } from '@/lib/config/route-config';
import { cn } from '@/lib/utils';
import { routePrefixChecker } from '@/lib/utils/general/url-util';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';

export function MainMenu(): React.ReactNode {
  const { pathname, push } = useRouter();
  const { loaded, signed_in } = useAuthStore();
  const { animated, openMenu, showNavbar, darkNavbar, setOpenMenu, setOpenAuth } = useLayoutStore();

  const secondaryPath = useMemo(() => pathname.split('/')?.[1], [pathname]);

  const menuList: { label: string; path: string }[] = [
    { label: 'Films', path: '/films' },
    { label: 'Series', path: '/series' },
    { label: 'Docs', path: '/docs' },
    { label: 'Shop', path: '/shop' },
    { label: 'News', path: '/news' },
    { label: 'Watch', path: '/watch' },
    { label: 'Account', path: '/account' },
  ];

  const checkPath = (e: React.MouseEvent<HTMLElement>, path: string) => {
    if (!protectedRoutes.some((route) => routePrefixChecker(path, route))) return;

    if (!loaded || !signed_in) {
      e.preventDefault();
      setOpenMenu(false);
      setOpenAuth(true);
    } else {
      push(path);
    }
  };

  return (
    <>
      <div className="fixed z-50 flex left-10 top-[50px]">
        <Button variant="ghost" className="group flex gap-3.5 p-0 hover:bg-transparent" onClick={() => setOpenMenu(!openMenu)}>
          <div className="relative flex flex-col aspect-square h-[25px] w-[25px]">
            <div
              className={cn(
                'absolute h-[1px] w-[25px]',
                animated ? 'transition-all duration-300' : '',
                darkNavbar && !openMenu ? 'bg-black group-hover:bg-neutral-500' : 'bg-white',
                openMenu ? 'rotate-45 top-[12px]' : 'top-[7px] group-hover:top-[6px]'
              )}
            />
            <div
              className={cn(
                'absolute h-[1px] w-[25px]',
                animated ? 'transition-all duration-300' : '',
                darkNavbar && !openMenu ? 'bg-black group-hover:bg-neutral-500' : 'bg-white',
                openMenu ? '-rotate-45 bottom-[12px]' : 'bottom-[7px] group-hover:bottom-[6px]'
              )}
            />
          </div>

          <div
            className={cn(
              'flex text-[15px] items-center gap-2',
              animated ? 'transition-all duration-300' : '',
              darkNavbar && !openMenu ? 'text-black' : 'text-white',
              !showNavbar && !openMenu ? 'opacity-0' : 'opacity-100'
            )}
          >
            <p className={cn(!!secondaryPath && !openMenu && darkNavbar ? 'group-hover:text-neutral-500' : '')}>{openMenu ? 'CLOSE' : 'MENU'}</p>
            {!!secondaryPath && !openMenu ? (
              <>
                <p>/</p>
                <p>{secondaryPath === '[slug]' ? 'CHANNEL' : secondaryPath.toUpperCase()}</p>
              </>
            ) : null}
          </div>
        </Button>
      </div>

      <div
        className={cn(
          'fixed top-0 left-0 z-40 flex flex-col h-[100dvh] w-[500px] pt-32 px-10 gap-4 bg-black',
          animated ? 'transition-all duration-300' : '',
          openMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        style={{
          boxShadow: '10px 0 50px rgba(0, 0, 0, 0.4), 20px 0 80px rgba(0, 0, 0, 0.2)',
        }}
      >
        {menuList.map((menu, i) => (
          <Link
            key={i}
            href={menu.path}
            className="w-full text-7xl font-medium text-white hover:text-neutral-300 transition-all"
            onClick={(e) => checkPath(e, menu.path)}
          >
            {menu.label}
          </Link>
        ))}
      </div>
      <div
        className={cn(
          'fixed z-10 top-0 left-0 h-[100dvh] w-[100dvw] bg-black',
          animated ? 'transition-all duration-300' : '',
          openMenu ? 'opacity-20' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setOpenMenu(false)}
      />
    </>
  );
}
