import { Database } from '@/types/supabase/supabase-data-type';

export type ChannelProps = Database['public']['Tables']['channel']['Row'];
export type PictureProps = Database['public']['Tables']['picture']['Row'];
export type PictureStreamProps = Database['public']['Tables']['picture_stream']['Row'];
export type PictureRentAccessProps = Database['public']['Tables']['rent_access']['Row'];
export type PictureRentOrderProps = Database['public']['Tables']['rent_order']['Row'];
