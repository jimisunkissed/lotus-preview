import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

type MainMenuProps = {
  show: boolean;
  dark: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MainMenu({ show, dark, open, setOpen }: MainMenuProps): React.ReactNode {
  const { pathname, asPath } = useRouter();

  const secondaryPath = useMemo(() => pathname.split('/')?.[1], [pathname]);

  const menuList: { label: string; path: string }[] = [
    { label: 'Films', path: 'films' },
    { label: 'Television', path: 'television' },
    { label: 'Docs', path: 'docs' },
    { label: 'Shop', path: 'shop' },
    { label: 'Notes', path: '' },
    { label: 'App', path: '' },
  ];

  useEffect(() => {
    setOpen(false);
  }, [asPath]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <div className="fixed z-50 flex left-10 top-[50px]">
        <Button variant="ghost" className="group flex gap-3.5 p-0 hover:bg-transparent" onClick={() => setOpen(!open)}>
          <div className="relative flex flex-col aspect-square h-[25px] w-[25px]">
            <div
              className={cn(
                'absolute h-[1px] w-[25px] transition-all duration-300',
                dark && !open ? 'bg-black group-hover:bg-neutral-500' : 'bg-white',
                open ? 'rotate-45 top-[12px]' : 'top-[7px] group-hover:top-[6px]'
              )}
            />
            <div
              className={cn(
                'absolute h-[1px] w-[25px] transition-all duration-300',
                dark && !open ? 'bg-black group-hover:bg-neutral-500' : 'bg-white',
                open ? '-rotate-45 bottom-[12px]' : 'bottom-[7px] group-hover:bottom-[6px]'
              )}
            />
          </div>

          <div
            className={cn(
              'flex text-[15px] items-center gap-2 transition-all duration-300',
              dark && !open ? 'text-black' : 'text-white',
              !show && !open ? 'opacity-0' : 'opacity-100'
            )}
          >
            <p className={cn(!!secondaryPath && !open && dark ? 'group-hover:text-neutral-500' : '')}>{open ? 'CLOSE' : 'MENU'}</p>
            {!!secondaryPath && !open ? (
              <>
                <p>/</p>
                <p>{secondaryPath.toUpperCase()}</p>
              </>
            ) : null}
          </div>
        </Button>
      </div>

      <div
        className={cn(
          'fixed top-0 left-0 z-40 flex flex-col h-[100dvh] w-[500px] pt-32 px-10 gap-4 bg-black transition-all duration-300',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        style={{
          boxShadow: '10px 0 50px rgba(0, 0, 0, 0.4), 20px 0 80px rgba(0, 0, 0, 0.2)',
        }}
      >
        {menuList.map((menu, i) => (
          <Link key={i} href={`/${menu.path}`} className="w-full text-7xl font-medium text-white hover:text-neutral-300 transition-all">
            {menu.label}
          </Link>
        ))}
      </div>
      <div
        className={cn(
          'fixed z-10 top-0 left-0 h-[100dvh] w-[100dvw] bg-black transition-all duration-300',
          open ? 'opacity-20' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
