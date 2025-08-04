import { supabase } from '@/lib/config/supabase-client-config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { toast } from 'sonner';

type AccountLayoutProps = {
  children: React.ReactNode;
};

export function AccountLayout({ children }: AccountLayoutProps): React.ReactNode {
  const { pathname, push } = useRouter();
  const secondaryPath = useMemo(() => pathname.split('/')?.[2] ?? 'details', [pathname]);

  const menuList: { label: string; path: string }[] = [
    { label: 'ACCOUNT DETAILS', path: 'details' },
    { label: 'RENT', path: 'rent' },
    { label: 'ORDER', path: 'order' },
  ];

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      window.location.reload();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };

  return (
    <div className="grid grid-cols-4 min-h-screen w-full px-20 pt-48 gap-12">
      <div className="flex flex-col w-full gap-12 text-5xl font-medium text-neutral-400">
        {menuList.map((menu, i) => (
          <Link
            key={i}
            href={`/account/${menu.path}`}
            className={cn('w-fit hover:text-black transition-all duration-300', secondaryPath === menu.path ? 'text-black' : '')}
          >
            {menu.label.toUpperCase()}
          </Link>
        ))}
        <button className="w-fit hover:text-black cursor-pointer" onClick={logout}>
          LOGOUT
        </button>
      </div>

      <div className="flex flex-col col-span-3 w-full">{children}</div>
    </div>
  );
}
