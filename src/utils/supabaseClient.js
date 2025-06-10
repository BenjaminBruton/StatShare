import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hjrgribrobskqfpknuhq.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqcmdyaWJyb2Jza3FmcGtudWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0OTc4MDgsImV4cCI6MjA2NTA3MzgwOH0.k3m3mUvFoo2zfYnCvBMoDAyQtGJneSewVsDbNxjb_W0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
