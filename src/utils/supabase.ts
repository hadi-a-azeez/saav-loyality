import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vkzktqrgcjplnrayhajm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZremt0cXJnY2pwbG5yYXloYWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyNzI2MTgsImV4cCI6MTk5Mzg0ODYxOH0.TNZDpB4EZ9-j3JbGIDvN9GXLZKfHc7v6nE2Lkdzuwkc";

export const supabase = createClient(supabaseUrl, supabaseKey);
