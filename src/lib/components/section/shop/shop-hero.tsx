import { Separator } from '@/components/ui/separator';
import { FlexSeparator } from '@/lib/components/flex/flex-separator';
import Link from 'next/link';
import React from 'react';

type ShopCollectionsProps = {
  title: string;
  subcollections: string[];
};

type ShopBannerProps = {
  title: string;
  image: string;
};

export function ShopHero(): React.ReactNode {
  const collections: ShopCollectionsProps[] = [
    {
      title: 'apparel',
      subcollections: ['tops', 'bottoms', 'accessories'],
    },
    {
      title: 'goods',
      subcollections: ['home & office', 'outdoor', 'kids'],
    },
    {
      title: 'collectibles',
      subcollections: ['toys & games', 'blu-rays', 'posters', 'vinyl'],
    },
    {
      title: 'books',
      subcollections: ['screenplays', 'zines'],
    },
  ];

  const banners: ShopBannerProps[] = [
    {
      title: 'Vinyl',
      image: 'https://store.thedoors.com/cdn/shop/files/Doors_MorrisonHotel_LP_ProductShot_wBOOK_Obi_halfscale.png?v=1738093404',
    },
    {
      title: 'Guitar',
      image:
        'https://primetimesignatures.com/cdn/shop/products/roger-waters-of-pink-floyd-authentic-autographed-full-size-custom-electric-guitar-prime-time-signatures-music-14013010313309.png?v=1736652074&width=1000',
    },
    {
      title: 'Concert Ticket',
      image: 'https://img1.wallspic.com/previews/7/8/1/9/49187/49187-guitarist-page_and_plant-performing_arts-taurus-led_zeppelin-x750.jpg',
    },
  ];

  const ShopCollections = ({ collection }: { collection: ShopCollectionsProps }) => (
    <div className="flex flex-col w-full gap-4">
      <FlexSeparator label={collection.title} />

      <div className="flex flex-col">
        {collection.subcollections.map((sub, i) => (
          <Link key={i} href={'/shop'} className="text-[14px] mb-[2px]">
            {sub.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );

  const ShopBanner = ({ banner }: { banner: ShopBannerProps }) => (
    <article className="group flex flex-col w-full gap-2 cursor-pointer">
      <div className="aspect-[7/4] w-full bg-neutral-100 overflow-hidden">
        <img src={banner.image} alt="Shop Banenr" className="h-full w-full object-contain" />
      </div>
      <p className="text-xs font-medium text-neutral-500 group-hover:text-black">{banner.title.toUpperCase()}</p>
    </article>
  );

  return (
    <section className="flex flex-col h-full w-full p-[50px] pb-[30px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full px-4 sm:px-8 py-4 gap-6 lg:gap-10">
        <ShopCollections collection={{ title: 'shop', subcollections: ['home', 'all', 'archive', 'vintage'] }} />
        {collections.map((col, i) => (
          <ShopCollections key={i} collection={{ title: col.title, subcollections: [`all ${col.title}`, ...col.subcollections] }} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-fit w-full gap-6 lg:gap-10 mt-auto">
        {banners.map((banner, i) => (
          <ShopBanner key={i} banner={banner} />
        ))}
      </div>
    </section>
  );
}
