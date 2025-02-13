import { createClient } from '@supabase/supabase-js';

// Note: User needs to set up Supabase project and add credentials
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);