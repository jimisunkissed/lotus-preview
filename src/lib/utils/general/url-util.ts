import { PictureProps } from '@/types/supabase/supabase-table-type';

export const routePrefixChecker = (route: string, prefix: string) => {
  const routePrefix = prefix.endsWith('/') ? prefix : `${prefix}/`;
  return route.startsWith(routePrefix) || prefix === route;
};

export const pictureLink = (picture: PictureProps): string => {
  const config = {
    film: 'films',
    series: 'series',
    documentary: 'docs',
  };
  const path = config?.[picture.type];

  if (!path) return '/';
  return `/${path}/${picture.id}-${picture.slug}`;
};
