import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://zwzyqtdvyqppkqiwhxdr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3enlxdGR2eXFwcGtxaXdoeGRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxMjU1OTgsImV4cCI6MjA5MTcwMTU5OH0.D-Wr8TYyt_0f_j22bdulIYq89q1qHlF6GekDhEAJbFg'

export const supabase = createClient(supabaseUrl, supabaseKey)