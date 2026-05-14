import { useAuthStore } from '@/hooks/auth-store';
import { FlexSeparator } from '@/lib/components/flex/flex-separator';
import React from 'react';

export function AccountDetails(): React.ReactNode {
  const { email, first_name, last_name } = useAuthStore();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8 lg:gap-12">
      <div className="flex flex-col w-full gap-6">
        <FlexSeparator label="basic info" />

        <div className="flex flex-col font-medium">
          <p>
            {first_name} {last_name}
          </p>
          <p>{email}</p>
        </div>
      </div>

      <div className="flex flex-col lg:col-span-2 w-full gap-6">
        <FlexSeparator label="addresses" />
        <div className="flex w-full items-center justify-between">
          <p className="font-medium">New address...</p>
          <button className="h-[55px] w-[75px] border border-black bg-black text-white hover:bg-transparent hover:text-black font-medium cursor-pointer">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
