import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

export type HeroSectionProps = {
  href: string;
  category: 'shop' | 'podcast' | 'blog';
  title: string;
  image: string;
  ar?: string;
  align?: 'flex-row' | 'flex-row-reverse';
  className?: string;
};

export function HeroSection({
  href,
  category,
  title,
  image,
  ar = 'aspect-square',
  align = 'flex-row',
  className = '',
}: HeroSectionProps): React.ReactNode {
  const ActionText = {
    shop: 'SHOP NOW',
    podcast: 'LISTEN NOW',
    blog: 'READ NOW',
  };

  return (
    <div className={cn('flex', align, 'h-fit w-full gap-[54px]')}>
      <Link href={href} className={cn('group h-fit w-[60%] bg-neutral-100 overflow-hidden', ar, className)}>
        <img src={image} alt="Item Highlight" className="h-full w-full object-contain group-hover:scale-105 transition-all duration-1000" />
      </Link>

      <div className="flex flex-col flex-1 min-h-full justify-between">
        <>
          <p className="text-md text-neutral-500">{category.toUpperCase()}</p>
          <Link href={href} className="text-7xl font-medium mt-2 hover:text-neutral-500 transition-all">
            {title}
          </Link>
        </>

        <button className="group flex w-48 items-center gap-6 mt-12 cursor-pointer">
          <div className="relative flex h-8 w-[60px] group-hover:w-[30px] items-center transition-all duration-300">
            <div className="h-[2px] w-full rounded-full bg-black" />
            <div className="absolute top-4 right-0 h-[1.4px] w-4 rounded-full bg-black rotate-40 origin-right" />
            <div className="absolute bottom-4 right-0 h-[1.4px] w-4 rounded-full bg-black -rotate-40 origin-right" />
          </div>

          <p className="text-xl font-medium">{ActionText[category]}</p>
        </button>
      </div>
    </div>
  );
}
