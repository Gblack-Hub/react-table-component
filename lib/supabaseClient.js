// declare imports 
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
export const supabase = await createClient("https://ymbfscerlnfxbmworhbq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTgzNjI5OCwiZXhwIjoxOTQ1NDEyMjk4fQ.Db41_kA7IeDZP2U9SXMHQ630g3PsyBFI2xoo824QVao")