import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Property = {
  id: string;
  title: string;
  title_fr?: string;
  description: string;
  description_fr?: string;
  location: string;
  location_fr?: string;
  price_per_night: number;
  bedrooms: number;
  bathrooms: number;
  max_guests: number;
  amenities: string[];
  amenities_fr?: string[];
  images: string[];
  owner_id: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
};

export type User = {
  id: string;
  email: string;
  created_at: string;
};