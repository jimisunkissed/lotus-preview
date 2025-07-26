import { PictureProps } from '@/types/temp-picture';

export const pictureLink = (picture: PictureProps): string => {
  const config = {
    film: 'films',
    series: 'series',
    documentary: 'docs',
  };
  const path = config?.[picture?.type];

  if (!path) return '/';
  return `/${path}/${picture?.slug}`;
};
