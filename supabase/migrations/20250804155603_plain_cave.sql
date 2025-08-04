/*
  # Create properties and related tables

  1. New Tables
    - `properties`
      - `id` (uuid, primary key)
      - `title` (text)
      - `title_fr` (text, French title)
      - `description` (text)
      - `description_fr` (text, French description)
      - `location` (text)
      - `location_fr` (text, French location)
      - `price_per_night` (decimal)
      - `bedrooms` (integer)
      - `bathrooms` (integer)
      - `max_guests` (integer)
      - `amenities` (text array)
      - `amenities_fr` (text array, French amenities)
      - `images` (text array, URLs)
      - `owner_id` (uuid, foreign key to auth.users)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `is_active` (boolean)

  2. Security
    - Enable RLS on `properties` table
    - Add policies for public read access and owner write access
*/

CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  title_fr text,
  description text NOT NULL,
  description_fr text,
  location text NOT NULL,
  location_fr text,
  price_per_night decimal(10,2) NOT NULL,
  bedrooms integer NOT NULL DEFAULT 1,
  bathrooms integer NOT NULL DEFAULT 1,
  max_guests integer NOT NULL DEFAULT 2,
  amenities text[] DEFAULT '{}',
  amenities_fr text[] DEFAULT '{}',
  images text[] DEFAULT '{}',
  owner_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read active properties
CREATE POLICY "Anyone can read active properties"
  ON properties
  FOR SELECT
  USING (is_active = true);

-- Allow authenticated users to insert their own properties
CREATE POLICY "Users can insert own properties"
  ON properties
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = owner_id);

-- Allow users to update their own properties
CREATE POLICY "Users can update own properties"
  ON properties
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);

-- Allow users to delete their own properties
CREATE POLICY "Users can delete own properties"
  ON properties
  FOR DELETE
  TO authenticated
  USING (auth.uid() = owner_id);

-- Insert sample data
INSERT INTO properties (
  title,
  title_fr,
  description,
  description_fr,
  location,
  location_fr,
  price_per_night,
  bedrooms,
  bathrooms,
  max_guests,
  amenities,
  amenities_fr,
  images,
  owner_id
) VALUES 
(
  'Traditional Riad in Marrakech Medina',
  'Riad Traditionnel dans la Médina de Marrakech',
  'Experience authentic Moroccan living in this beautifully restored traditional riad located in the heart of Marrakech''s historic medina. Features include a central courtyard, rooftop terrace with Atlas Mountain views, and traditional Moroccan décor throughout.',
  'Découvrez la vie marocaine authentique dans ce riad traditionnel magnifiquement restauré situé au cœur de la médina historique de Marrakech. Les caractéristiques incluent une cour centrale, une terrasse sur le toit avec vue sur les montagnes de l''Atlas, et un décor marocain traditionnel partout.',
  'Marrakech Medina, Morocco',
  'Médina de Marrakech, Maroc',
  85.00,
  3,
  2,
  6,
  ARRAY['WiFi', 'Air Conditioning', 'Rooftop Terrace', 'Traditional Hammam', 'Breakfast Included'],
  ARRAY['WiFi', 'Climatisation', 'Terrasse sur le Toit', 'Hammam Traditionnel', 'Petit-déjeuner Inclus'],
  ARRAY['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'],
  '00000000-0000-0000-0000-000000000000'
),
(
  'Modern Villa with Ocean View',
  'Villa Moderne avec Vue sur l''Océan',
  'Stunning modern villa overlooking the Atlantic Ocean in Essaouira. Perfect for families seeking luxury and comfort with private pool, modern amenities, and easy access to the beach and historic city center.',
  'Villa moderne époustouflante avec vue sur l''océan Atlantique à Essaouira. Parfait pour les familles recherchant le luxe et le confort avec piscine privée, équipements modernes, et accès facile à la plage et au centre-ville historique.',
  'Essaouira, Morocco',
  'Essaouira, Maroc',
  120.00,
  4,
  3,
  8,
  ARRAY['Private Pool', 'Ocean View', 'WiFi', 'Modern Kitchen', 'Parking'],
  ARRAY['Piscine Privée', 'Vue sur l''Océan', 'WiFi', 'Cuisine Moderne', 'Parking'],
  ARRAY['https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'],
  '00000000-0000-0000-0000-000000000000'
),
(
  'Cozy Apartment in Casablanca',
  'Appartement Confortable à Casablanca',
  'Modern and comfortable apartment in the heart of Casablanca, close to Hassan II Mosque and the Corniche. Perfect for business travelers and tourists alike, featuring contemporary décor and all modern amenities.',
  'Appartement moderne et confortable au cœur de Casablanca, proche de la Mosquée Hassan II et de la Corniche. Parfait pour les voyageurs d''affaires et les touristes, avec un décor contemporain et tous les équipements modernes.',
  'Casablanca City Center, Morocco',
  'Centre-ville de Casablanca, Maroc',
  65.00,
  2,
  1,
  4,
  ARRAY['WiFi', 'Air Conditioning', 'City Center Location', 'Modern Appliances'],
  ARRAY['WiFi', 'Climatisation', 'Emplacement Centre-ville', 'Appareils Modernes'],
  ARRAY['https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'],
  '00000000-0000-0000-0000-000000000000'
);