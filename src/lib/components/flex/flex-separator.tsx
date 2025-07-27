import { cn } from '@/lib/utils';
import React from 'react';

type FlexSeparatorProps = {
  label: string;
  align?: 'start' | 'center' | 'end';
  theme?: 'light' | 'dark';
};

export function FlexSeparator({ label, align = 'start', theme = 'light' }: FlexSeparatorProps): React.ReactNode {
  const AlignMap = {
    start: 'text-start',
    center: 'text-center',
    end: 'text-end',
  };

  const ThemeMap = {
    light: 'text-black',
    dark: 'text-white',
  };

  return (
    <div className="flex flex-col">
      <div className={cn('h-[1px] w-full', theme === 'light' ? 'bg-black' : 'bg-white')} />
      <p className={cn('w-full text-xs font-medium', AlignMap[align], ThemeMap[theme])}>{label.toUpperCase()}</p>
    </div>
  );
}
