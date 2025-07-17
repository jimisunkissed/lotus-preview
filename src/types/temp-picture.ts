export type PictureProps = {
  id: string;
  type: 'film' | 'television' | 'documentary';
  title: string;
  slug: string;
  release_date: string;
  director: string;
  writer?: string;
  cast?: string[];
  image_thumbnail: string;
  image_banner?: string;
};

export const FilmsData: PictureProps[] = [
  {
    id: '1',
    type: 'film',
    title: 'Kashmir',
    slug: 'kashmir',
    release_date: '2025-11-18T10:00:00Z',
    director: 'Jimmy Page',
    writer: 'Jimmy Page',
    cast: ['Robert Plant', 'John Paul Jones', 'John Bonham'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1682685797498-3bad2c6e161a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1682685797498-3bad2c6e161a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    type: 'film',
    title: 'Us & Them',
    slug: 'us-and-them',
    release_date: '2023-05-14T09:30:00Z',
    director: 'Roger Waters',
    writer: 'Roger Waters',
    cast: ['David Gilmour', 'Richard Wright', 'Nick Mason'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1525711857929-4272fb4a040f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1525711857929-4272fb4a040f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    type: 'film',
    title: "Supper's Ready",
    slug: 'suppers-ready',
    release_date: '2022-11-30T14:15:00Z',
    director: 'Peter Gabriel',
    writer: 'Peter Gabriel',
    cast: ['Tony Banks', 'Mike Rutherford', 'Steve Hackett', 'Phil Collins'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1710131711438-92bd284b043d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1710131711438-92bd284b043d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    type: 'film',
    title: 'Under the Bridge',
    slug: 'under-the-bridge',
    release_date: '2024-02-10T16:45:00Z',
    director: 'Anthony Kiedis',
    writer: 'Anthony Kiedis',
    cast: ['Flea', 'John Frusciante', 'Chad Smith'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1599180464074-55ee95f48d4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1599180464074-55ee95f48d4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    type: 'film',
    title: 'A Feast of Friends',
    slug: 'a-feast-of-friends',
    release_date: '2025-10-20T12:00:00Z',
    director: 'Jim Morrison',
    writer: 'Jim Morrison',
    cast: ['Ray Manzarek', 'Robby Krieger', 'John Densmore'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1573844697731-d1995a92643e?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1573844697731-d1995a92643e?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '6',
    type: 'film',
    title: 'The Silent Ring',
    slug: 'the-silent-ring',
    release_date: '2025-09-28T17:20:00Z',
    director: 'Serra Dorne',
    writer: 'Serra Dorne',
    cast: ['Mira Lox', 'Taran Elze', 'Sari Mune', 'Dex Carden', 'Orin Faye'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '7',
    type: 'film',
    title: 'Hollow Orbit',
    slug: 'hollow-orbit',
    release_date: '2025-08-02T15:00:00Z',
    director: 'Mara Keene',
    writer: 'Mara Keene',
    cast: ['Nyra Thorne', 'Garrin Vox', 'Elos Maren', 'Pavel Nix', 'Jaya Solis', 'Kento Raine', 'Vi Arlen', 'Rowe Kin'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '8',
    type: 'film',
    title: 'The Glass Pulse',
    slug: 'the-glass-pulse',
    release_date: '2025-07-23T09:30:00Z',
    director: 'Kiran Voss',
    writer: 'Kiran Voss',
    cast: ['Orren Styx', 'Rhea Jansen', 'Gav Norrix', 'Yuno Elric', 'Zane Harker', 'Fira Lang', 'Toma Velan', 'Pax Moren', 'Luna Fael'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '9',
    type: 'film',
    title: 'Marrow Arcadia',
    slug: 'marrow-arcadia',
    release_date: '2025-07-18T11:10:00Z',
    director: 'Torrin Vale',
    writer: 'Torrin Vale',
    cast: ['Kira Solene', 'Dax Vayne', 'Sel Lorian', 'Nova Thresh', 'Quinn Marix', 'Ezra Vale', 'Kael Dorne'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1536331789421-b57e4270a1ae?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1536331789421-b57e4270a1ae?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '10',
    type: 'film',
    title: 'The Passenger',
    slug: 'the-passenger',
    release_date: '2025-07-05T14:00:00Z',
    director: 'Mira Thorn',
    writer: 'Mira Thorn',
    cast: ['Vex Orion', 'Nara Silth', 'Quill Morden', 'Syl Veyra', 'Toren Bax'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '11',
    type: 'film',
    title: 'Ash in Bloom',
    slug: 'ash-in-bloom',
    release_date: '2025-06-30T13:45:00Z',
    director: 'Mara Keene',
    writer: 'Ilan Cray',
    cast: ['Jessa Rynn', 'Calen Dure', 'Tilo West', 'Brin Avers', 'Mei Thalen', 'Soren Vale', 'Nina Cort'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1639830824544-a443d02a9762?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1639830824544-a443d02a9762?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '12',
    type: 'film',
    title: 'Lost Voice',
    slug: 'lost-voice',
    release_date: '2025-02-03T10:00:00Z',
    director: 'Torrin Vale',
    writer: 'Serra Dorne',
    cast: ['Lira Monix', 'Davin Cross', 'Elan Stroud', 'Juno Kess', 'Toma Velan', 'Rhea Jansen', 'Kade Mirrow'],
    image_thumbnail:
      'https://images.unsplash.com/flagged/photo-1571691054106-e7f0653f738b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/flagged/photo-1571691054106-e7f0653f738b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '13',
    type: 'film',
    title: 'The Crimson Mirage',
    slug: 'the-crimson-mirage',
    release_date: '2025-06-28T18:30:00Z',
    director: 'Lorn Pax',
    writer: 'Lorn Pax',
    cast: ['Yara Vexis', 'Dax Morren', 'Kira Vollen', 'Nyx Solis', 'Veyra Tollen'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1564147572456-2d0992e58efd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1564147572456-2d0992e58efd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '14',
    type: 'film',
    title: 'Howling Wind',
    slug: 'howling-wind',
    release_date: '2025-07-01T11:45:00Z',
    director: 'Zara Quin',
    writer: 'Vex Torren',
    cast: ['Mira Solace', 'Drex Vallen', 'Syra Quin', 'Jex Morren', 'Lira Dax', 'Toren Vex'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1680821376550-f387f1d1df02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1680821376550-f387f1d1df02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '15',
    type: 'film',
    title: 'The Shattering',
    slug: 'the-shattering',
    release_date: '2025-04-30T13:15:00Z',
    director: 'Syra Nollen',
    writer: 'Syra Nollen',
    cast: ['Dax Voren', 'Mira Quin', 'Vex Solis', 'Jyra Torren', 'Lox Dax', 'Quinn Mirren'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1635525878313-39e60073090e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1635525878313-39e60073090e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const TelevisionsData: PictureProps[] = [
  {
    id: '16',
    type: 'film',
    title: 'The Last Ember',
    slug: 'the-last-ember',
    release_date: '2025-06-25T16:20:00Z',
    director: 'Dax Voren',
    writer: 'Syra Nollen',
    cast: ['Quinn Vex', 'Mirax Doren', 'Jyra Solen', 'Vex Torin', 'Lox Mirren'],
    image_thumbnail: '',
  },
  {
    id: '17',
    type: 'film',
    title: 'The Silent Divide',
    slug: 'the-silent-divide',
    release_date: '2025-06-27T20:00:00Z',
    director: 'Torin Vex',
    writer: 'Mira Solace',
    cast: ['Dax Quin', 'Syra Voren', 'Jyra Dax', 'Vex Mirren', 'Lox Torren'],
    image_thumbnail: '',
  },
  {
    id: '18',
    type: 'film',
    title: 'Eclipse Protocol',
    slug: 'eclipse-protocol',
    release_date: '2025-07-02T15:45:00Z',
    director: 'Jyra Solen',
    writer: 'Quinn Vex',
    cast: ['Mirax Doren', 'Vex Torin', 'Syra Nollen', 'Dax Voren', 'Lox Mirren'],
    image_thumbnail: '',
  },
  {
    id: '19',
    type: 'film',
    title: 'The Void Between Us',
    slug: 'the-void-between-us',
    release_date: '2025-01-29T19:30:00Z',
    director: 'Vex Torren',
    writer: 'Zara Quin',
    cast: ['Mira Solace', 'Drex Vallen', 'Syra Quin', 'Jex Morren', 'Lira Dax'],
    image_thumbnail: '',
  },
  {
    id: '20',
    type: 'film',
    title: 'The Neon Paradox',
    slug: 'the-neon-paradox',
    release_date: '2025-06-26T17:00:00Z',
    director: 'Jace Voltaire',
    writer: 'Jace Voltaire',
    cast: ['Vex Orion', 'Nara Silth', 'Syl Veyra', 'Toren Bax', 'Mira Thorn'],
    image_thumbnail: '',
  },
];
