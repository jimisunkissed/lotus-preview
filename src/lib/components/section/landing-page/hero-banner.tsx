import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type HeroBannerProps = {
  href: string;
  title: string;
  image: string;
};

export function HeroBanner({ href, title, image }: HeroBannerProps): React.ReactNode {
  return (
    <Link href={href} className="group relative h-[85dvh] w-full my-6 overflow-hidden">
      <Image src={image} alt="Banner Image" fill className="object-cover group-hover:scale-105 transition-all duration-1000" />
      <div className="absolute left-12 bottom-12 flex flex-col gap-2">
        <p className="font-medium text-neutral-500">WATCH NOW</p>
        <strong className="text-7xl font-semibold text-white">{title}</strong>
      </div>
    </Link>
  );
}
