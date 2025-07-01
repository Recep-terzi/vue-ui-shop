import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dekbxsddvvbwmufwxvlk.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRla2J4c2RkdnZid211Znd4dmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMDU0NTksImV4cCI6MjA2Njg4MTQ1OX0.LIE3UG_DY1LVdMfi1n88-OxoxS2vXrHw7wrSHsp8W2I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
