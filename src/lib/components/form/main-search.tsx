import { Button } from '@/components/ui/button';
import { useAppStore } from '@/hooks/app-store';
import { cn } from '@/lib/utils';
import { ArrowRight, X } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';

export function MainSearch(): React.ReactNode {
  const { pathname } = useRouter();
  const { openSearch, setOpenSearch } = useAppStore();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (openSearch && inputRef?.current) {
      inputRef.current.focus();
    }
  }, [openSearch]);

  useEffect(() => {
    setOpenSearch(false);
  }, [pathname]);

  return (
    <div
      className={cn(
        'relative z-50 flex w-full items-center px-12 bg-black overflow-hidden transition-all duration-300',
        openSearch ? 'h-[60dvh]' : 'h-0'
      )}
    >
      <Button
        variant="ghost"
        className="absolute top-[60px] right-6 h-fit w-fit p-0 text-white hover:bg-transparent hover:text-white"
        onClick={() => setOpenSearch(false)}
      >
        <X className="min-h-[60px] min-w-[60px]" strokeWidth={1} />
      </Button>

      <div className="relative flex w-full items-center">
        <input ref={inputRef} className="h-24 w-full p-0 pb-2 border-b outline-none text-7xl font-semibold text-white" />
        <ArrowRight className="absolute -right-2 h-[60px] w-[60px] bg-black text-white" />
      </div>
    </div>
  );
}
