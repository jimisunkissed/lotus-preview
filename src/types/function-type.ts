import {
  ChannelProps,
  PictureProps,
  PictureSeasonProps,
  PictureStreamProps,
  StreamAccessProps,
  StreamOrderProps,
  UserProps,
} from '@/types/table-type';

type Tables = {
  channel: { Row: ChannelProps; Insert: Partial<ChannelProps>; Update: Partial<ChannelProps> }
  picture: { Row: PictureProps; Insert: Partial<PictureProps>; Update: Partial<PictureProps> }
  picture_season: { Row: PictureSeasonProps; Insert: Partial<PictureSeasonProps>; Update: Partial<PictureSeasonProps> }
  picture_stream: { Row: PictureStreamProps; Insert: Partial<PictureStreamProps>; Update: Partial<PictureStreamProps> }
  stream_access: { Row: StreamAccessProps; Insert: Partial<StreamAccessProps>; Update: Partial<StreamAccessProps> }
  stream_order: { Row: StreamOrderProps; Insert: Partial<StreamOrderProps>; Update: Partial<StreamOrderProps> }
  user: { Row: UserProps; Insert: Partial<UserProps>; Update: Partial<UserProps> }
}

export type TableId = keyof Tables;
export type ProtectedTableId = {
  [K in TableId]: K extends `st${string}` ? K : never;
}[TableId];

export type TableRow<T extends TableId> = Tables[T]['Row'];
export type TableInsert<T extends TableId> = Tables[T]['Insert'];
export type TableUpdate<T extends TableId> = Tables[T]['Update'];

type FilterFunction =
  | 'eq'
  | 'gt'
  | 'lt'
  | 'gte'
  | 'lte'
  | 'like'
  | 'ilike'
  | 'is'
  | 'in'
  | 'neq'
  | 'contains'
  | 'containedBy'
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

export type GetSingleProps<T extends TableId> = {
  tableId: T;
  id: any;
  select?: string;
  staticKeys?: StaticKeys;
};

export type GetBatchProps<T extends TableId> = {
  tableId: T;
  filters?: TableFilter[];
  sort?: TableSort;
  page?: number;
  length?: number;
  select?: string;
  staticKeys?: StaticKeys;
  nullsFirst?: boolean;
};

export type AddSingleProps<T extends TableId> = {
  tableId: T;
  row: TableInsert<T>;
  staticKeys?: StaticKeys;
};

export type AddBatchProps<T extends TableId> = {
  tableId: T;
  rows: TableInsert<T>[];
  staticKeys?: StaticKeys;
};

export type SetSingleProps<T extends TableId> = {
  tableId: T;
  id: any;
  row: TableInsert<T>;
  staticKeys?: StaticKeys;
};

export type SetBatchProps<T extends TableId> = {
  tableId: T;
  rows: TableInsert<T>[];
  staticKeys?: StaticKeys;
};

export type DeleteSingleProps<T extends TableId> = {
  tableId: T;
  id: any;
  staticKeys?: StaticKeys;
};

export type DeleteBatchProps<T extends TableId> = {
  tableId: T;
  ids: any[];
  staticKeys?: StaticKeys;
};

export type StorageResponse = {
  bucket: string;
  path: string;
  url: string | null;
  is_public?: boolean;
};
