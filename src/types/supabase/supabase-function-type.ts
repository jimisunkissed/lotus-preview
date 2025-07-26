import { Database } from '@/types/supabase/supabase-data-type';

type Tables = Database['public']['Tables'];

export type TableId = keyof Tables;
export type ProtectedTableId = {
  [K in TableId]: K extends `st${string}` ? K : never;
}[TableId];

export type TableRow<T extends TableId> = Tables[T]['Row'];
export type TableInsert<T extends TableId> = Tables[T] extends { Insert: any } ? Tables[T]['Insert'] : never;
export type TableUpdate<T extends TableId> = Tables[T]['Update'];

type FilterFunction =
  | 'eq' // Equal to
  | 'gt' // Greater than
  | 'lt' // Less than
  | 'gte' // Greater than or equal to
  | 'lte' // Less than or equal to
  | 'like' // Case sensitive pattern matching
  | 'ilike' // Case insensitive pattern matching
  | 'is' // Is (typically used for null checks)
  | 'in' // In array of values
  | 'neq' // Not equal to
  | 'contains' // Array contains
  | 'containedBy' // Array is contained by
  | 'or'
  | 'not';

export const FILTER_FUNCTION = [
  'eq',
  'gt',
  'lt',
  'gte',
  'lte',
  'like',
  'ilike',
  'is',
  'in',
  'neq',
  'contains',
  'containedBy',
  'or',
  'not',
] as const satisfies string[];

export type FilterValue = string | number | boolean | null | Array<string | number | boolean>;

export type TableFilter = {
  column: string;
  op: FilterFunction;
  value: FilterValue;
};

export type TableSort = {
  column: string;
  direction: 'asc' | 'desc';
};

export type StaticKeys = Record<string, unknown>;

export type GetSingleSupabaseProps<T extends TableId> = {
  tableId: T;
  id: any;
  staticKeys?: StaticKeys;
};

export type GetBatchSupabaseProps<T extends TableId> = {
  tableId: T;
  filters?: TableFilter[];
  sort?: TableSort;
  page?: number;
  length?: number;
  staticKeys?: StaticKeys;
  nullsFirst?: boolean;
};

export type AddSingleSupabaseProps<T extends TableId> = {
  tableId: T;
  row: TableInsert<T>;
  staticKeys?: StaticKeys;
};

export type AddBatchSupabaseProps<T extends TableId> = {
  tableId: T;
  rows: TableInsert<T>[];
  staticKeys?: StaticKeys;
};

export type SetSingleSupabaseProps<T extends TableId> = {
  tableId: T;
  id: any;
  row: TableInsert<T>;
  staticKeys?: StaticKeys;
};

export type SetBatchSupabaseProps<T extends TableId> = {
  tableId: T;
  rows: TableInsert<T>[];
  staticKeys?: StaticKeys;
};

export type DeleteSingleSupabaseProps<T extends TableId> = {
  tableId: T;
  id: any;
  staticKeys?: StaticKeys;
};

export type DeleteBatchSupabaseProps<T extends TableId> = {
  tableId: T;
  ids: any[];
  staticKeys?: StaticKeys;
};

export type SupabaseStorageResponse = {
  bucket: string;
  path: string;
  url: string | null;
  is_public?: boolean;
};
