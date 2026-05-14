import channelData from '@/data/channel.json';
import pictureData from '@/data/picture.json';
import pictureSeasonData from '@/data/picture_season.json';
import pictureStreamData from '@/data/picture_stream.json';
import { checkStaticKeys, filterStaticKeys } from '@/lib/utils/service/supabase-util';
import { GetBatchSupabaseProps, GetSingleSupabaseProps, TableId, TableRow } from '@/types/supabase/supabase-function-type';
import { PictureProps, PictureSeasonProps, PictureStreamProps, PictureWatchProps } from '@/types/supabase/supabase-table-type';

const localTables: Record<string, unknown[]> = {
  channel: channelData,
  picture: pictureData,
  picture_season: pictureSeasonData,
  picture_stream: pictureStreamData,
};

export const getSingleLocal = <T extends TableId>({ tableId, id, select = '*', staticKeys = {} }: GetSingleSupabaseProps<T>): TableRow<T> => {
  const table = localTables[tableId];
  if (!table) throw new Error(`Table "${tableId}" not found in local data`);

  const data = table.find((row: any) => row.id === id) ?? null;
  if (!data) throw new Error(`Row with id "${id}" not found in "${tableId}"`);

  checkStaticKeys([data], staticKeys);

  return data as unknown as TableRow<T>;
};

export const getBatchLocal = <T extends TableId>({
  tableId,
  filters,
  sort,
  page = 1,
  length = 10,
  staticKeys = {},
  nullsFirst = false,
}: GetBatchSupabaseProps<T>): TableRow<T>[] => {
  let data = [...(localTables[tableId] as TableRow<T>[])] as any[];
  if (!data) throw new Error(`Table "${tableId}" not found in local data`);

  filters = filterStaticKeys(filters, staticKeys);
  if (filters && Array.isArray(filters)) {
    filters.forEach(({ op, column, value }) => {
      switch (op) {
        case 'eq':
          data = data.filter((row) => row[column] === value);
          break;
        case 'neq':
          data = data.filter((row) => row[column] !== value);
          break;
        case 'lt':
          if (value != null) data = data.filter((row) => row[column] < value);
          break;
        case 'lte':
          if (value != null) data = data.filter((row) => row[column] <= value);
          break;
        case 'gt':
          if (value != null) data = data.filter((row) => row[column] > value);
          break;
        case 'gte':
          if (value != null) data = data.filter((row) => row[column] >= value);
          break;
        case 'like':
          if (value != null) data = data.filter((row) => String(row[column]).includes(String(value).replace(/%/g, '')));
          break;
        case 'ilike':
          if (value != null)
            data = data.filter((row) => String(row[column]).toLowerCase().includes(String(value).replace(/%/g, '').toLowerCase()));
          break;
        case 'is':
          data = data.filter((row) => row[column] === null);
          break;
        case 'in':
          data = data.filter((row) => (value as any[]).includes(row[column]));
          break;
        case 'contains':
          data = data.filter((row) => Array.isArray(row[column]) && (value as any[]).every((v) => row[column].includes(v)));
          break;
      }
    });
  }

  if (sort) {
    data = data.sort((a, b) => {
      const aVal = a[sort.column];
      const bVal = b[sort.column];

      if (aVal === null || aVal === undefined) return nullsFirst ? -1 : 1;
      if (bVal === null || bVal === undefined) return nullsFirst ? 1 : -1;

      if (aVal < bVal) return sort.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sort.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const start = (page - 1) * length;
  const end = page * length;

  return data.slice(start, end) as TableRow<T>[];
};

export const getPicturesLocal = ({
  channel_id = null,
  type = null,
  status = 'all',
  sortby = 'release_date',
  direction = 'desc',
  page = 1,
  length = 9,
}: {
  channel_id?: number | null;
  type?: string | null;
  status?: string;
  sortby?: string;
  direction?: string;
  page?: number;
  length?: number;
} = {}): PictureProps[] => {
  const offset = (page - 1) * length;

  const filtered = (pictureData as PictureProps[]).filter((p) => {
    if (channel_id !== null && p.channel_id !== channel_id) return false;

    if (status === 'upcoming') {
      if (p.release_date !== null && new Date(p.release_date) < new Date()) return false;
    } else if (status === 'released') {
      if (p.release_date === null || new Date(p.release_date) >= new Date()) return false;
    }

    if (type !== null && p.type !== type) return false;

    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    const aVal = a[sortby as keyof PictureProps];
    const bVal = b[sortby as keyof PictureProps];

    if (aVal === null || aVal === undefined) return 1;
    if (bVal === null || bVal === undefined) return -1;

    if (aVal < bVal) return direction.toUpperCase() === 'ASC' ? -1 : 1;
    if (aVal > bVal) return direction.toUpperCase() === 'ASC' ? 1 : -1;
    return 0;
  });

  return sorted.slice(offset, offset + length);
};

export const getPictureWatchLocal = (picture_id: number): PictureWatchProps => {
  const picture = (pictureData as PictureProps[]).find((p) => p.id === picture_id) ?? null;
  if (!picture) throw new Error(`Picture with id "${picture_id}" not found`);

  let seasons: PictureSeasonProps[] | null = null;
  if (picture.type === 'series') {
    seasons = (pictureSeasonData as PictureSeasonProps[])
      .filter((ps) => ps.picture_id === picture_id)
      .sort((a, b) => a.season_number - b.season_number);
  }

  const streams = pictureStreamData as PictureStreamProps[];

  const byCreatedAt = (a: PictureStreamProps, b: PictureStreamProps) => {
    if (!a.created_at) return 1;
    if (!b.created_at) return -1;
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  };

  const stream_main_content =
    streams
      .filter((ps) => ps.picture_id === picture_id && ps.category === 'main_content' && ps.season_id === null && ps.episode_number === null)
      .sort(byCreatedAt)[0] ?? null;

  const stream_trailer_id = streams.filter((ps) => ps.picture_id === picture_id && ps.category === 'trailer').sort(byCreatedAt)[0]?.id ?? null;

  const stream_teaser_id = streams.filter((ps) => ps.picture_id === picture_id && ps.category === 'teaser').sort(byCreatedAt)[0]?.id ?? null;

  return {
    picture,
    seasons,
    stream_main_content,
    stream_trailer_id,
    stream_teaser_id,
  };
};
