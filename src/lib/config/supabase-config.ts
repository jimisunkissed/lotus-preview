import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase/supabase-data-type';

const SUPABASE_URL: string = process.env.SUPABASE_PROJECT_URL!;
const SUPABASE_KEY: string = process.env.SUPABASE_KEY!;

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export { supabase };
