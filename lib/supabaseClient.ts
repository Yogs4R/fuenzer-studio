import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oxtzqztealgamvrgbnyb.supabase.co'
const supabaseKey = 'sb_publishable_Wcq6i1Ozk9Tpv52kQoC-Hw_j_B7J2Pw'

export const supabase = createClient(supabaseUrl, supabaseKey);