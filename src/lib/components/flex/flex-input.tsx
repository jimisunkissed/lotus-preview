import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { TablerIcon } from '@tabler/icons-react';
import { LucideIcon } from 'lucide-react';
import React from 'react';

type FlexInputProps = {
  placeholder?: string;
  Icon?: LucideIcon | TablerIcon;
};

export function FlexInput({
  className,
  placeholder,
  Icon,
  value = '',
  onChange,
}: FlexInputProps & React.ComponentProps<'input'>): React.ReactNode {
  return (
    <div className={cn('relative flex flex-col h-[60px] justify-center w-full', className)}>
      {placeholder && (
        <p
          className={cn(
            'absolute font-medium text-neutral-400 pointer-events-none transition-all duration-300',
            value ? 'top-2.5 left-4 text-sm' : 'top-5 left-5 text-md'
          )}
        >
          {placeholder}
        </p>
      )}

      <Input
        className={cn(
          'h-full w-full rounded-none border-2 pl-4 font-semibold focus-visible:border-neutral-500 focus-visible:ring-0',
          value ? 'pt-5.5' : ''
        )}
        value={value ?? ''}
        onChange={onChange}
      />
      {Icon && <Icon className="absolute right-5 h-5 w-5" />}
    </div>
  );
}
