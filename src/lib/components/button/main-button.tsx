import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';

type MainButtonProps = {
  show: boolean;
  dark: boolean;
};

export function MainButton({ show, dark }: MainButtonProps): React.ReactNode {
  const [open, setOpen] = useState<boolean>(false);

  const menuList: { label: string; path: string }[] = [
    { label: 'Films', path: 'films' },
    { label: 'Television', path: 'television' },
    { label: 'Docs', path: 'docs' },
    { label: 'Shop', path: 'shop' },
    { label: 'Notes', path: 'notes' },
    { label: 'App', path: 'app' },
  ];

  return (
    <>
      <div className="fixed z-50 flex left-10 top-[50px]">
        <Button variant="ghost" className="group flex gap-3.5 p-0 hover:bg-transparent" onClick={() => setOpen(!open)}>
          <div className="relative flex flex-col aspect-square h-[25px] w-[25px]">
            <div
              className={cn(
                'absolute h-[1px] w-[25px] transition-all duration-300',
                dark && !open ? 'bg-black' : 'bg-white',
                open ? 'rotate-45 top-[12px]' : 'top-[7px] group-hover:top-[6px]'
              )}
            />
            <div
              className={cn(
                'absolute h-[1px] w-[25px] transition-all duration-300',
                dark && !open ? 'bg-black' : 'bg-white',
                open ? '-rotate-45 bottom-[12px]' : 'bottom-[7px] group-hover:bottom-[6px]'
              )}
            />
          </div>
          <p
            className={cn(
              'text-[15px] transition-all duration-300',
              dark && !open ? 'text-black' : 'text-white',
              !show && !open ? 'opacity-0' : 'opacity-100'
            )}
          >
            {open ? 'CLOSE' : 'MENU'}
          </p>
        </Button>
      </div>

      <div
        className={cn(
          'fixed top-0 left-0 z-40 flex flex-col h-[100dvh] w-[500px] pt-32 px-10 gap-4 bg-black transition-all duration-300',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        {menuList.map((menu, i) => (
          <Link key={i} href={`/${menu.path}`} className="w-full text-7xl font-medium text-white hover:text-neutral-500 transition-all">
            {menu.label}
          </Link>
        ))}
      </div>
    </>
  );
}
