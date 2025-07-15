import { FilmPoster } from '@/lib/components/section/landing-page/film-poster';
import { cn } from '@/lib/utils';
import { MoveDown } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [active, setActive] = useState<number>(0);

  const filmList: { name: string; year: number; image: string }[] = [
    {
      name: 'Kashmir',
      year: 1978,
      image:
        'https://images.unsplash.com/photo-1682685797498-3bad2c6e161a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Us & Them',
      year: 1972,
      image:
        'https://images.unsplash.com/photo-1525711857929-4272fb4a040f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Under the Bridge',
      year: 1991,
      image:
        'https://images.unsplash.com/photo-1599180464074-55ee95f48d4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Stairway to Heaven',
      year: 1973,
      image:
        'https://images.unsplash.com/photo-1573844697731-d1995a92643e?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Over the Hills and Far Away',
      year: 1973,
      image:
        'https://plus.unsplash.com/premium_photo-1732738245018-c0a68b1bf192?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="flex flex-col h-[300dvh] w-full">
      <FilmPoster />
    </div>
  );
}
