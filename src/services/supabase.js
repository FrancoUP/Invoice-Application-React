import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yyvvindeafxluibooxri.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dnZpbmRlYWZ4bHVpYm9veHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNDI1ODgsImV4cCI6MjAxNjkxODU4OH0.cKOQaify6FSrNSK9-YEA6iqXKVcRk5XToFZ-5f6wrS4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
