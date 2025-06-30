import dotenv from 'dotenv';

dotenv.config();

export const PORT: string = process.env.PORT || '4000';
export const SUPABASE_URL: string = process.env.SUPABASE_URL || '';
export const SUPABASE_KEY: string = process.env.SUPABASE_KEY || '';
