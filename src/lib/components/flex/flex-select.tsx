import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import React, { useState, useRef, useEffect, useMemo } from 'react';

type FlexSelectProps = {
  className?: string;
  placeholder?: string;
  options: Record<any, any>[];
  valueKey?: string | number;
  labelKey?: string | number;
  value?: any;
  onValueChange?: (value: string) => void;
};

export function FlexSelect({
  className,
  placeholder,
  options,
  valueKey = 'value',
  labelKey = 'label',
  value = '',
  onValueChange,
}: FlexSelectProps): React.ReactNode {
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const displayText = useMemo(
    () => options.find((opt) => opt?.[valueKey] === value)?.[labelKey] || placeholder || 'SELECT',
    [placeholder, value, options]
  );

  const handleOptionClick = (event: React.MouseEvent, optionValue: string) => {
    event.stopPropagation();
    if (onValueChange) onValueChange(optionValue);
    setOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className={cn('relative flex h-[60px] w-full items-center px-5 border border-b-0 border-black cursor-pointer bg-white', className)}
      onClick={() => setOpen(!open)}
    >
      <p className="font-medium flex-1 text-left">{displayText}</p>
      <ChevronDown className={cn('h-8 w-8 transition-transform duration-300 flex-shrink-0', open ? 'rotate-180' : 'rotate-0')} strokeWidth={1} />

      <div className={cn('absolute z-50 top-full left-0 h-[1px] w-full', open ? 'bg-black' : 'bg-transparent delay-300')} />
      <div
        className={cn(
          'absolute z-40 -left-[1px] top-full w-88 border border-t-0 border-black bg-white overflow-y-auto transition-all duration-300',
          open ? 'max-h-60' : 'max-h-0'
        )}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {options.map((opt, i) => (
            <button key={i} className="w-full text-left text-md hover:underline cursor-pointer" onClick={(e) => handleOptionClick(e, opt.value)}>
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
