import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://obbjzzlzzkulivekgtrv.supabase.co";
const supabaseKey = "sb_publishable_Of8JJQjH2gVc7MNpnSETEg_9iNJPWAP";

export const supabase = createClient(supabaseUrl, supabaseKey);