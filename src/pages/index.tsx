import { HeroBanner } from '@/lib/components/section/landing-page/hero-banner';
import { HeroHighlight } from '@/lib/components/section/landing-page/hero-highlight';
import { HeroMain } from '@/lib/components/section/landing-page/hero-main';
import { HeroItemProps } from '@/lib/components/section/landing-page/hero-section';

export default function Home() {
  const items1: HeroItemProps[] = [
    {
      href: '/',
      category: 'shop',
      title: 'Morrison Hotel Mint Exclusive Vinyl',
      image: 'https://store.thedoors.com/cdn/shop/files/Doors_MorrisonHotel_LP_ProductShot_wBOOK_Obi_halfscale.png?v=1738093404',
    },
    {
      href: '/',
      category: 'shop',
      title: 'Roger Waters Signed Stratocaster',
      image:
        'https://primetimesignatures.com/cdn/shop/products/roger-waters-of-pink-floyd-authentic-autographed-full-size-custom-electric-guitar-prime-time-signatures-music-14013010313309.png?v=1736652074&width=1000',
      ar: 'aspect-video',
      className: 'p-10',
    },
    {
      href: '/',
      category: 'shop',
      title: 'Red Hot Chili Peppers Live Collection',
      image: 'https://codarecords.co.uk/cdn/shop/files/RHCP_Live_at_Pat_O_Brien_Pavilion_Red_Vinyl_Mockup_for_Shopify.png?v=1733324747',
      className: 'p-10',
    },
  ];

  const items2: HeroItemProps[] = [
    {
      href: '/',
      category: 'shop',
      title: 'Led Zeppelin Maddison Garden Concert Ticket',
      image: 'https://img1.wallspic.com/previews/7/8/1/9/49187/49187-guitarist-page_and_plant-performing_arts-taurus-led_zeppelin-x750.jpg',
      ar: 'aspect-video',
    },
    {
      href: '/',
      category: 'shop',
      title: 'The Dark Side of the Moon, 50th Anniversary Remaster',
      image:
        'https://shop.sonymusic.ca/cdn/shop/files/PinkFloyd_TheDarkSideOfTheMoon50thAnniversaryRemaster_LP_19658720271_1500x1500_vinyl.webp?v=1743435929',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <HeroMain />
      <HeroHighlight items={items1} />
      <HeroBanner
        href="/"
        title="Dark Night of the Soul"
        image="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <HeroHighlight items={items2} />
    </div>
  );
}
