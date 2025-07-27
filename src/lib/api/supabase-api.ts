import { supabase } from '@/lib/config/supabase-client-config';
import {
  AddBatchSupabaseProps,
  AddSingleSupabaseProps,
  DeleteBatchSupabaseProps,
  DeleteSingleSupabaseProps,
  GetBatchSupabaseProps,
  GetSingleSupabaseProps,
  SetBatchSupabaseProps,
  SetSingleSupabaseProps,
  TableId,
  TableInsert,
  TableRow,
} from '@/types/supabase/supabase-function-type';
import { addStaticKeys, checkStaticKeys, filterStaticKeys } from '@/lib/utils/service/supabase-util';
import { formatISO } from 'date-fns';

export const getSingleSupabase = async <T extends TableId>({
  tableId,
  id,
  staticKeys = {},
}: GetSingleSupabaseProps<T>): Promise<TableRow<T>> => {
  try {
    const { data, error } = await supabase.from(tableId).select().eq('id', id).single();
    if (error) throw error;
    checkStaticKeys([data], staticKeys);

    return data as unknown as TableRow<T>;
  } catch (error) {
    throw error;
  }
};

export const getBatchSupabase = async <T extends TableId>({
  tableId,
  filters,
  sort,
  page = 1,
  length = 10,
  staticKeys = {},
  nullsFirst = false,
}: GetBatchSupabaseProps<T>): Promise<TableRow<T>[]> => {
  try {
    let query = supabase.from(tableId).select();
    filters = filterStaticKeys(filters, staticKeys);
    if (filters && Array.isArray(filters))
      filters.forEach(({ op, column, value }) => {
        query = (query as any)[op](column, value);
      });
    if (sort) query = (query as any).order(sort.column, { ascending: sort.direction === 'asc', nullsFirst });
    query = (query as any).range((page - 1) * length, page * length - 1);

    const { data, error } = await query;
    if (error) throw error;

    return data as unknown as TableRow<T>[];
  } catch (error) {
    throw error;
  }
};

export const addSingleSupabase = async <T extends TableId>({
  tableId,
  row,
  staticKeys = {},
}: AddSingleSupabaseProps<T>): Promise<TableRow<T>> => {
  try {
    const timestamp = formatISO(new Date());

    const newRow: TableInsert<T> = addStaticKeys(
      {
        ...row,
        created_at: timestamp,
        updated_at: timestamp,
      },
      staticKeys
    ) as TableInsert<T>;
    const { data, error } = await supabase.from(tableId).insert(newRow).select().single();
    if (error) throw error;

    return data as unknown as TableRow<T>;
  } catch (error) {
    throw error;
  }
};

export const addBatchSupabase = async <T extends TableId>({
  tableId,
  rows,
  staticKeys = {},
}: AddBatchSupabaseProps<T>): Promise<TableRow<T>> => {
  try {
    const timestamp = formatISO(new Date());

    const newRows: TableInsert<T>[] = rows.map(
      (row) => addStaticKeys({ ...row, created_at: timestamp, updated_at: timestamp }, staticKeys) as TableInsert<T>
    );
    const { data, error } = await supabase.from(tableId).insert(newRows).select();
    if (error) throw error;

    return data as unknown as TableRow<T>;
  } catch (error) {
    throw error;
  }
};

export const setSingleSupabase = async <T extends TableId>({
  tableId,
  id,
  row,
  staticKeys = {},
}: SetSingleSupabaseProps<T>): Promise<TableRow<T>> => {
  try {
    const { created_at, updated_at, ...cleanRow } = row;
    const timestamp = formatISO(new Date());

    const existingRow = await getSingleSupabase({ tableId, id });
    if (existingRow) checkStaticKeys([existingRow], staticKeys);

    const setRow: TableInsert<T> = addStaticKeys(
      {
        ...cleanRow,
        id,
        updated_at: timestamp,
      },
      staticKeys
    ) as TableInsert<T>;
    if (!existingRow) setRow.created_at = timestamp;
    const { data, error } = await supabase.from(tableId).upsert(setRow).select().single();
    if (error) throw error;

    return data as unknown as TableRow<T>;
  } catch (error) {
    throw error;
  }
};

export const setBatchSupabase = async <T extends TableId>({
  tableId,
  rows,
  staticKeys = {},
}: SetBatchSupabaseProps<T>): Promise<TableRow<T>[]> => {
  try {
    const timestamp = formatISO(new Date());

    const ids = rows.map((row) => row.id);
    const existingRows = (await getBatchSupabase({ tableId, filters: [{ column: 'id', op: 'in', value: ids }] })) as TableInsert<T>[];
    checkStaticKeys(existingRows, staticKeys);

    const existingIds = new Set(existingRows?.map((row) => row.id));
    const setRows: TableInsert<T>[] = rows.map(({ id, ...row }) => {
      const { created_at, updated_at, ...cleanRow } = row;
      const setRow: TableInsert<T> = addStaticKeys(
        {
          ...cleanRow,
          id,
          updated_at: timestamp,
        },
        staticKeys
      ) as TableInsert<T>;
      if (!existingIds.has(id)) setRow.created_at = timestamp;
      return setRow;
    });

    const { data, error } = await supabase.from(tableId).upsert(setRows).select();
    if (error) throw error;

    return data as unknown as TableRow<T>[];
  } catch (error) {
    throw error;
  }
};

export const deleteSingleSupabase = async <T extends TableId>({
  tableId,
  id,
  staticKeys = {},
}: DeleteSingleSupabaseProps<T>): Promise<{ id: any }> => {
  try {
    await getSingleSupabase({ tableId, id, staticKeys });
    const { error } = await supabase.from(tableId).delete().eq('id', id).single();
    if (error) throw error;

    return id;
  } catch (error) {
    throw error;
  }
};

export const deleteBatchSupabase = async <T extends TableId>({
  tableId,
  ids,
  staticKeys = {},
}: DeleteBatchSupabaseProps<T>): Promise<{ ids: any }[]> => {
  try {
    const existingRows = await getBatchSupabase({ tableId, filters: [{ column: 'id', op: 'in', value: ids }], staticKeys });
    if (existingRows.length < ids.length) throw { code: 400, name: 'Bad Request', message: 'Check your ids again' } as Error;

    const { error } = await supabase.from(tableId).delete().in('id', ids).select('id');
    if (error) throw error;

    return ids;
  } catch (error) {
    throw error;
  }
};
