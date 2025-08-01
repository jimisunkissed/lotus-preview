import { Database } from '@/types/supabase/supabase-data-type';

export type ChannelProps = Database['public']['Tables']['channel']['Row'];
export type PictureProps = Database['public']['Tables']['picture']['Row'];
export type PictureStreamProps = Database['public']['Tables']['picture_stream']['Row'];
export type StreamAccessProps = Database['public']['Tables']['stream_access']['Row'];
export type StreamOrderProps = Database['public']['Tables']['stream_order']['Row'];
