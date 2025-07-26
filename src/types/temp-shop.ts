export type ProductProps = {
  id: string;
  channel_id?: number;
  availability?: 'PREORDER' | 'NEW!' | 'SPECIAL EDITION' | 'EXCLUSIVE' | 'BACK IN STOCK';
  title: string;
  description?: string;
  price: number;
  images: string[];
};

export const ProductsData: ProductProps[] = [
  {
    id: '1',
    availability: 'NEW!',
    title: 'Morrison Hotel Mint Exclusive Vinyl',
    price: 500000,
    images: ['https://store.thedoors.com/cdn/shop/files/Doors_MorrisonHotel_LP_ProductShot_wBOOK_Obi_halfscale.png?v=1738093404'],
  },
  {
    id: '2',
    availability: 'EXCLUSIVE',
    title: 'Roger Waters Signed Stratocaster',
    price: 32500000,
    images: [
      'https://primetimesignatures.com/cdn/shop/products/roger-waters-of-pink-floyd-authentic-autographed-full-size-custom-electric-guitar-prime-time-signatures-music-14013010313309.png?v=1736652074&width=1000',
    ],
  },
  {
    id: '3',
    title: 'Red Hot Chili Peppers Live Collection',
    price: 500000,
    images: ['https://codarecords.co.uk/cdn/shop/files/RHCP_Live_at_Pat_O_Brien_Pavilion_Red_Vinyl_Mockup_for_Shopify.png?v=1733324747'],
  },
  {
    id: '4',
    title: 'Led Zeppelin Maddison Garden Concert Ticket',
    price: 6250000,
    images: ['https://img1.wallspic.com/previews/7/8/1/9/49187/49187-guitarist-page_and_plant-performing_arts-taurus-led_zeppelin-x750.jpg'],
  },
  {
    id: '5',
    title: 'The Dark Side of the Moon, 50th Anniversary Remaster',
    price: 500000,
    images: [
      'https://shop.sonymusic.ca/cdn/shop/files/PinkFloyd_TheDarkSideOfTheMoon50thAnniversaryRemaster_LP_19658720271_1500x1500_vinyl.webp?v=1743435929',
    ],
  },
  {
    id: '6',
    channel_id: 1,
    title: 'Bucket Hat Brown',
    price: 200000,
    images: [
      'https://sheilaon7.com/wp-content/uploads/2024/10/Bucket-Hat-TAD-Brown-1.png',
      'https://sheilaon7.com/wp-content/uploads/2024/10/Bucket-Hat-TAD-Brown-2.png',
    ],
  },
  {
    id: '7',
    channel_id: 1,
    title: 'Hoodie Zipper TAD - Black',
    price: 400000,
    images: [
      'https://sheilaon7.com/wp-content/uploads/2024/10/Hoodie-TAD-Black-1-1.png',
      'https://sheilaon7.com/wp-content/uploads/2024/10/Hoodie-TAD-Black-2.png',
    ],
  },
  {
    id: '8',
    channel_id: 1,
    title: 'T-Shirt Album-Raglan Black/White',
    price: 250000,
    images: [
      'https://sheilaon7.com/wp-content/uploads/2024/10/T-Shirt-Cassettes-TAD-Raglan-1.png',
      'https://sheilaon7.com/wp-content/uploads/2024/10/T-Shirt-Cassettes-TAD-Raglan-2.png',
    ],
  },
  {
    id: '9',
    channel_id: 1,
    title: 'T-Shirt Flyer LS – Black/White',
    price: 250000,
    images: [
      'https://sheilaon7.com/wp-content/uploads/2024/10/T-Shirt-Long-Sleeves-TAD-White-1.png',
      'https://sheilaon7.com/wp-content/uploads/2024/10/T-Shirt-Long-Sleeves-TAD-White-2.png',
    ],
  },
];
