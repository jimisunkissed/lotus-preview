import { FilterValue, StaticKeys, TableFilter } from '@/types/supabase/supabase-function-type';

export const checkStaticKeys = (data: any[], staticKeys: StaticKeys = {}): void => {
  const keys = Object.keys(staticKeys);
  if (keys.length && data.some((d) => keys.some((k) => d?.[k] !== staticKeys[k])))
    throw {
      code: 400,
      name: 'Bad Request',
      message: `Data contains invalid ${keys.join(', ')}`,
    };
};

export const filterStaticKeys = (filters: TableFilter[] = [], staticKeys: StaticKeys = {}): TableFilter[] => {
  const keys = Object.keys(staticKeys);
  keys.forEach((k) => filters.push({ column: k, op: 'eq', value: staticKeys[k] as FilterValue }));

  return filters;
};

export const addStaticKeys = (data: Record<string, unknown>, staticKeys: StaticKeys = {}): Record<string, unknown> => ({
  ...data,
  ...staticKeys,
});
