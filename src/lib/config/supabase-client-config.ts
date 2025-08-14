import { Database } from '@/types/supabase/supabase-data-type';
import { createBrowserClient } from '@supabase/ssr';

const SUPABASE_URL: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY: string = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

const supabase = createBrowserClient<Database>(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

export { supabase };
