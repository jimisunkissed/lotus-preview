import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ArrowRight, X } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

type MainSearchProps = {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MainSearch({ expand, setExpand }: MainSearchProps): React.ReactNode {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (expand && inputRef?.current) {
      inputRef.current.focus();
    }
  }, [expand]);

  return (
    <div
      className={cn(
        'relative z-50 flex w-full items-center px-12 bg-black overflow-hidden transition-all duration-300',
        expand ? 'h-[60dvh]' : 'h-0'
      )}
    >
      <Button
        variant="ghost"
        className="absolute top-[60px] right-6 h-fit w-fit p-0 text-white hover:bg-transparent hover:text-white"
        onClick={() => setExpand(false)}
      >
        <X className="min-h-[60px] min-w-[60px]" strokeWidth={1} />
      </Button>

      <div className="relative flex w-full items-center">
        <Input
          ref={inputRef}
          className="h-24 w-full p-0 pb-2 text-7xl md:text-7xl font-semibold text-white rounded-none border-0 border-b-1 border-white shadow-none focus-visible:border-white focus-visible:ring-0"
        />
        <ArrowRight className="absolute -right-2 h-[60px] w-[60px] bg-black text-white" />
      </div>
    </div>
  );
}
