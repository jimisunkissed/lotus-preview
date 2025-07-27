import { supabase } from '@/lib/config/supabase-client-config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'sonner';

type AccountLayoutProps = {
  children: React.ReactNode;
};

export function AccountLayout({ children }: AccountLayoutProps): React.ReactNode {
  const { pathname, push } = useRouter();

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      push('/');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };

  return (
    <div className="grid grid-cols-4 min-h-screen w-full px-20 pt-48 gap-12">
      <div className="flex flex-col w-full gap-12 text-5xl font-medium text-neutral-400">
        <Link
          href="/account/details"
          className={cn('w-fit hover:text-black', ['/account', '/account/details'].includes(pathname) ? 'text-black' : '')}
        >
          ACCOUNT DETAILS
        </Link>
        <Link href="/account/order" className={cn('w-fit hover:text-black', pathname === '/account/order' ? 'text-black' : '')}>
          ORDER HISTORY
        </Link>
        <button className="w-fit hover:text-black cursor-pointer" onClick={logout}>
          LOGOUT
        </button>
      </div>

      <div className="flex flex-col col-span-3 w-full">{children}</div>
    </div>
  );
}
