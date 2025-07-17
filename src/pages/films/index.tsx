import { FilmCard } from '@/lib/components/card/film-card';
import React from 'react';

function Index(): React.ReactNode {
  const upcomings = {
    left1: {
      title: 'Echoes of Vermillion',
      release_date: '2025-07-20T10:00:00Z',
      director: 'Torrin Vale',
      writer: 'Serra Dorne',
      cast: ['Lira Monix', 'Davin Cross', 'Elan Stroud', 'Juno Kess', 'Toma Velan', 'Rhea Jansen', 'Kade Mirrow'],
      image:
        'https://images.unsplash.com/flagged/photo-1571691054106-e7f0653f738b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    left2: {
      title: 'Hollow Orbit',
      release_date: '2025-08-02T15:00:00Z',
      director: 'Mara Keene',
      writer: 'Mara Keene',
      cast: ['Nyra Thorne', 'Garrin Vox', 'Elos Maren', 'Pavel Nix', 'Jaya Solis', 'Kento Raine', 'Vi Arlen', 'Rowe Kin'],
      image:
        'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    mid1: {
      title: 'The Glass Pulse',
      release_date: '2025-07-23T09:30:00Z',
      director: 'Kiran Voss',
      writer: 'Kiran Voss',
      cast: ['Orren Styx', 'Rhea Jansen', 'Gav Norrix', 'Yuno Elric', 'Zane Harker', 'Fira Lang', 'Toma Velan', 'Pax Moren', 'Luna Fael'],
      image:
        'https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    mid2: {
      title: 'Ash in Bloom',
      release_date: '2025-07-30T13:45:00Z',
      director: 'Mara Keene',
      writer: 'Ilan Cray',
      cast: ['Jessa Rynn', 'Calen Dure', 'Tilo West', 'Brin Avers', 'Mei Thalen', 'Soren Vale', 'Nina Cort'],
      image:
        'https://images.unsplash.com/photo-1639830824544-a443d02a9762?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    right1: {
      title: 'The Silent Ring',
      release_date: '2025-07-28T17:20:00Z',
      director: 'Serra Dorne',
      writer: 'Serra Dorne',
      cast: ['Mira Lox', 'Taran Elze', 'Sari Mune', 'Dex Carden', 'Orin Faye'],
      image:
        'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    right2: {
      title: 'Marrow Arcadia',
      release_date: '2025-07-18T11:10:00Z',
      director: 'Torrin Vale',
      writer: 'Torrin Vale',
      cast: [
        'Kira Solene',
        'Dax Vayne',
        'Sel Lorian',
        'Nova Thresh',
        'Quinn Marix',
        'Ezra Vale',
        'Levi Mor',
        'Rix Arden',
        'Mira Lox',
        'Kael Dorne',
      ],
      image:
        'https://images.unsplash.com/photo-1536331789421-b57e4270a1ae?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  };

  return (
    <div className="flex flex-col min-h-screen w-full px-10 pt-48 pb-16 gap-10">
      <h2 className="text-7xl font-medium">Upcoming</h2>
      <div className="grid grid-cols-3 w-full gap-8">
        <div className="flex flex-col w-full gap-16">
          <FilmCard film={upcomings.left1} ar="aspect-[6/7]" />
          <FilmCard film={upcomings.left2} ar="aspect-[3/2]" />
        </div>

        <div className="flex flex-col w-full gap-16">
          <FilmCard film={upcomings.mid1} ar="aspect-[5/4]" />
          <FilmCard film={upcomings.mid2} ar="aspect-[5/4]" />
        </div>

        <div className="flex flex-col w-full gap-16">
          <FilmCard film={upcomings.right1} ar="aspect-[3/2]" />
          <FilmCard film={upcomings.right2} ar="aspect-[6/7]" />
        </div>
      </div>
    </div>
  );
}

export default Index;
