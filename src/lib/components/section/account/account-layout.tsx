import { useAuthStore } from '@/hooks/auth-store';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import { toast } from 'sonner';

type AccountLayoutProps = {
  children: React.ReactNode;
};

export function AccountLayout({ children }: AccountLayoutProps): React.ReactNode {
  const { pathname, push } = useRouter();
  const { loaded, signed_in } = useAuthStore();
  const secondaryPath = useMemo(() => pathname.split('/')?.[2] ?? 'details', [pathname]);

  const menuList: { label: string; path: string }[] = [
    { label: 'ACCOUNT DETAILS', path: 'details' },
    { label: 'RENT', path: 'rent' },
    { label: 'ORDER', path: 'order' },
  ];

  const logout = async () => {
    try {
      window.location.reload();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };

  useEffect(() => {
    if (loaded && !signed_in) push('/');
  }, [loaded, signed_in]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 min-h-screen w-full px-6 sm:px-10 lg:px-20 pt-32 lg:pt-48 gap-8 lg:gap-12">
      <div className="flex flex-row lg:flex-col w-full gap-6 lg:gap-12 text-xl sm:text-2xl lg:text-5xl font-medium text-neutral-400 overflow-x-auto pb-2 lg:pb-0">
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

      <div className="flex flex-col lg:col-span-3 w-full">{children}</div>
    </div>
  );
}
