import { Database } from '@/types/supabase/supabase-data-type';

export type ChannelProps = Database['public']['Tables']['channel']['Row'];
export type PictureProps = Database['public']['Tables']['picture']['Row'];
