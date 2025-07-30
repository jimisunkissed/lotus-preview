import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type FlexImageProps = {
  className?: string;
  image?: string;
  alt: string;
};

export function FlexImage({ className = '', image, alt }: FlexImageProps): React.ReactNode {
  const optimized: string[] = ['https://images.unsplash.com'];

  return !image ? null : optimized.some((dom) => image.startsWith(dom)) ? (
    <Image src={image} alt={alt} fill className={cn('absolute top-0 left-0 object-cover', className)} />
  ) : (
    <img src={image} alt={alt} className={cn('absolute top-0 left-0 h-full w-full object-cover', className)} />
  );
}
