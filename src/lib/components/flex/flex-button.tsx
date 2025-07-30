import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TablerIcon } from '@tabler/icons-react';
import { Loader2, LucideIcon } from 'lucide-react';
import React from 'react';

export type FlexButtonProps = {
  className?: string;
  iconCn?: string;
  variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon_sm';
  text?: string;
  Icon?: LucideIcon | TablerIcon;
  disabled?: boolean;
  loading?: boolean;
};

export function FlexButton({
  className = '',
  iconCn = '',
  variant = 'default',
  size = 'default',
  text,
  Icon,
  disabled = false,
  loading = false,
  ...props
}: React.ComponentProps<'button'> & FlexButtonProps): React.ReactNode {
  const SizeConfig = {
    default: 'h-12 px-5 text-md',
    sm: 'h-10 px-4 text-sm',
    lg: 'h-16 px-6 text-lg',
    icon: 'h-10 w-10',
    icon_sm: 'h-9 w-9',
  };

  const VariantConfig = {
    default: 'bg-primary hover:bg-muted-foreground',
    secondary: 'bg-stone-50 hover:bg-stone-100',
    outline: 'border-[1.5px] bg-white text-black hover:bg-white hover:border-stone-300',
    ghost: 'bg-transparent hover:bg-transparent hover:opacity-50',
    destructive: 'bg-white hover:bg-white text-red-600 hover:text-red-700',
    link: 'text-neutral-500 hover:text-primary',
  };

  return (
    <Button
      {...props}
      size={size === 'icon_sm' ? 'icon' : size}
      variant={variant}
      className={cn('group rounded-none font-semibold shadow-none', SizeConfig[size], VariantConfig[variant], className)}
      disabled={disabled || loading}
    >
      {loading ? (
        <Loader2 className={cn('animate-spin', iconCn)} strokeWidth={3} />
      ) : (
        <>
          {Icon ? <Icon className={iconCn} /> : null}
          {text && <p>{text}</p>}
        </>
      )}
    </Button>
  );
}
