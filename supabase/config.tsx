import { createClient } from '@supabase/supabase-js'

const url = process.env.EXPO_PUBLIC_SUPABASE_URL
const key = process.env.EXPO_PUBLIC_SUPABASE_KEY

if (!url || !key) {
    throw new Error('Faltan las variables de entorno de Supabase')
}

export const supabase = createClient(url, key)