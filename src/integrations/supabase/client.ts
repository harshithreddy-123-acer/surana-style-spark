// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://bkyamgmekppugjugzgsr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJreWFtZ21la3BwdWdqdWd6Z3NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NzYxMjUsImV4cCI6MjA2MDU1MjEyNX0.zPpze7kdOzeWOJJF3z35ouPPY7dYm8vGBWD7x9W2ewg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);