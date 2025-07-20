export type PictureProps = {
  id: string;
  type: 'film' | 'television' | 'documentary';
  title: string;
  slug: string;
  synopsis?: string;
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
    synopsis: 'A man returns to his homeland in search of peace, only to uncover echoes of the past he thought he left behind.',
    release_date: '2025-11-18T10:00:00Z',
    director: 'Jimmy Page',
    writer: 'Jimmy Page',
    cast: ['Robert Plant', 'John Paul Jones', 'John Bonham'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1682685797498-3bad2c6e161a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    type: 'film',
    title: 'Us & Them',
    slug: 'us-and-them',
    synopsis: 'Two old friends find themselves on opposite sides of a revolution—where loyalty, power, and memory collide.',
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
    synopsis: "When visions blur the line between dream and reality, one man's journey takes him deeper than he ever imagined.",
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
    synopsis: 'Beneath a city bridge, a forgotten artist paints his final masterpiece—one that holds more than just color.',
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
    synopsis: 'An iconic band’s reunion stirs up secrets buried for decades—and something else that refuses to stay silent.',
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
    synopsis: 'In a forest that hums with silence, a strange ring appears—and not everyone who enters will return the same.',
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
    synopsis: 'A stranded crew uncovers a derelict space station—where silence speaks, and the past is anything but dead.',
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
    synopsis: 'A breakthrough in emotion-tracking tech changes the world—but some feelings should never be put on display.',
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
    synopsis: 'In a city built on perfection, one discovery threatens to unravel everything its people believe is real.',
    release_date: '2025-10-18T11:10:00Z',
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
    synopsis: 'A passenger with no memory. A train that never stops. And a mystery that deepens with every mile.',
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
    synopsis: 'Ash covers the town—but something stirs beneath. Nature has a strange way of reclaiming what’s hers.',
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
    synopsis: 'She lost her voice, but not her story. In the silence, a new kind of music begins to rise.',
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
    synopsis: 'Mirages don’t lie—they hide. And in this shifting desert, one map may lead to truth—or to madness.',
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
    synopsis: 'As a storm approaches, an old family secret awakens. The wind carries more than just weather.',
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
    synopsis: 'The world shattered into fragments of self—and now, one woman dares to piece it all back together.',
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
    type: 'television',
    title: 'Silent Divide',
    slug: 'silent-divide',
    synopsis: 'In a fractured land where silence is survival, two unlikely allies must bridge the gap before it swallows them whole.',
    release_date: '2025-12-05T20:00:00Z',
    director: 'Torin Vex',
    writer: 'Mira Solace',
    cast: ['Dax Quin', 'Syra Voren', 'Jyra Dax', 'Vex Mirren', 'Lox Torren'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1553197661-485e7380b810?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1553197661-485e7380b810?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '17',
    type: 'television',
    title: 'Eternal Flame',
    slug: 'eternal-flame',
    synopsis: 'A dying world clings to its final flame, but one outcast discovers the spark that could reignite everything.',
    release_date: '2025-11-25T16:20:00Z',
    director: 'Dax Voren',
    writer: 'Syra Nollen',
    cast: ['Quinn Vex', 'Mirax Doren', 'Jyra Solen', 'Vex Torin', 'Lox Mirren'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1749800190324-169d79c87e4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1749800190324-169d79c87e4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '18',
    type: 'television',
    title: 'Eclipse Protocol',
    slug: 'eclipse-protocol',
    synopsis: 'As the sun vanishes behind a global blackout, a covert team races to stop a protocol that was never meant to activate.',
    release_date: '2025-07-02T15:45:00Z',
    director: 'Jyra Solen',
    writer: 'Quinn Vex',
    cast: ['Mirax Doren', 'Vex Torin', 'Syra Nollen', 'Dax Voren', 'Lox Mirren'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1705105238704-a62b18e1b985?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1705105238704-a62b18e1b985?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '19',
    type: 'television',
    title: 'Space Between',
    slug: 'space-between',
    synopsis: 'Love and loyalty are tested when a cosmic rift reveals secrets too powerful to stay buried.',
    release_date: '2025-01-29T19:30:00Z',
    director: 'Vex Torren',
    writer: 'Zara Quin',
    cast: ['Mira Solace', 'Drex Vallen', 'Syra Quin', 'Jex Morren', 'Lira Dax'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1613061830313-a32c910d783d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1613061830313-a32c910d783d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '20',
    type: 'television',
    title: 'Neon Paradox',
    slug: 'neon-paradox',
    synopsis: 'In a city where time bends to desire, a rogue scientist risks everything to rewrite the past — and her future.',
    release_date: '2025-06-26T17:00:00Z',
    director: 'Jace Voltaire',
    writer: 'Jace Voltaire',
    cast: ['Vex Orion', 'Nara Silth', 'Syl Veyra', 'Toren Bax', 'Mira Thorn'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1610122343932-168aef16f7b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1610122343932-168aef16f7b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const DocumentariesData: PictureProps[] = [
  {
    id: '21',
    type: 'documentary',
    title: 'Echoes of Ice',
    slug: 'echoes-of-ice',
    synopsis: 'A breathtaking journey through the world’s most remote glaciers, uncovering secrets trapped in ice for millennia.',
    release_date: '2025-09-12T14:00:00Z',
    director: 'Kael Morren',
    cast: ['Narrated by Elen Vox'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1517032880222-1afedf8c9d0d?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1517032880222-1afedf8c9d0d?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '22',
    type: 'documentary',
    title: 'Voices of Clay',
    slug: 'voices-of-clay',
    synopsis: 'Exploring ancient pottery traditions, this documentary traces the fingerprints of forgotten civilizations across continents.',
    release_date: '2025-06-03T18:00:00Z',
    director: 'Sorren Vahl',
    cast: ['Narrated by Orren Dax'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1488977678660-dca8681ca872?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1488977678660-dca8681ca872?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '23',
    type: 'documentary',
    title: 'Digital Pulse',
    slug: 'digital-pulse',
    synopsis: 'An inside look at how algorithms shape our lives, featuring voices from tech pioneers, ethicists, and everyday users.',
    release_date: '2025-02-22T10:00:00Z',
    director: 'Nira Solen',
    cast: ['Narrated by Mira Senn'],
    image_thumbnail:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_banner:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
