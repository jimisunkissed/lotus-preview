import { cn } from '@/lib/utils';
import React from 'react';

type FlexSeparatorProps = {
  label: string;
  theme?: 'light' | 'dark';
};

export function FlexSeparator({ label, theme = 'light' }: FlexSeparatorProps): React.ReactNode {
  return (
    <div className="flex flex-col">
      <div className={cn('h-[1px] w-full', theme === 'light' ? 'bg-black' : 'bg-white')} />
      <p className={cn('text-xs font-medium', theme === 'light' ? 'text-black' : 'text-white')}>{label.toUpperCase()}</p>
    </div>
  );
}
