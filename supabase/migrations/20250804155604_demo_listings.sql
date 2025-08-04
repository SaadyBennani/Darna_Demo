-- Demo Listings for Darna Platform
-- 20 diverse Moroccan properties with realistic details

-- Clear existing demo data (if any)
DELETE FROM properties WHERE owner_id IS NULL;

-- Insert 20 comprehensive demo listings
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
-- 1. Luxury Riad in Marrakech
(
  'Luxury Riad with Private Pool - Marrakech',
  'Riad de Luxe avec Piscine Privée - Marrakech',
  'Experience ultimate luxury in this stunning riad featuring a private plunge pool, traditional hammam, and rooftop terrace with panoramic views of the Atlas Mountains. Perfect for romantic getaways or family retreats.',
  'Découvrez le luxe ultime dans ce riad époustouflant avec piscine privée, hammam traditionnel, et terrasse sur le toit avec vue panoramique sur les montagnes de l''Atlas. Parfait pour les escapades romantiques ou les retraites familiales.',
  'Marrakech Medina, Morocco',
  'Médina de Marrakech, Maroc',
  150.00,
  4,
  3,
  8,
  ARRAY['Private Pool', 'Traditional Hammam', 'Rooftop Terrace', 'WiFi', 'Air Conditioning', 'Breakfast Included', 'Atlas Mountain Views', 'Traditional Décor'],
  ARRAY['Piscine Privée', 'Hammam Traditionnel', 'Terrasse sur le Toit', 'WiFi', 'Climatisation', 'Petit-déjeuner Inclus', 'Vue sur l''Atlas', 'Décor Traditionnel'],
  ARRAY['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 2. Beachfront Villa in Essaouira
(
  'Beachfront Villa with Ocean Views',
  'Villa en Front de Mer avec Vue sur l''Océan',
  'Stunning beachfront villa in Essaouira with direct access to the Atlantic Ocean. Features include a private terrace, modern amenities, and breathtaking sunset views. Perfect for families and groups.',
  'Villa époustouflante en front de mer à Essaouira avec accès direct à l''océan Atlantique. Caractéristiques : terrasse privée, équipements modernes, et vues imprenables sur le coucher de soleil. Parfait pour les familles et groupes.',
  'Essaouira Beach, Morocco',
  'Plage d''Essaouira, Maroc',
  180.00,
  5,
  4,
  10,
  ARRAY['Beachfront Location', 'Private Terrace', 'Ocean Views', 'WiFi', 'Modern Kitchen', 'Parking', 'BBQ Area', 'Sunset Views'],
  ARRAY['Emplacement Front de Mer', 'Terrasse Privée', 'Vue sur l''Océan', 'WiFi', 'Cuisine Moderne', 'Parking', 'Zone BBQ', 'Vue Coucher de Soleil'],
  ARRAY['https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 3. Traditional Kasbah in Ait Benhaddou
(
  'Historic Kasbah in Ait Benhaddou',
  'Kasbah Historique à Ait Benhaddou',
  'Stay in a UNESCO World Heritage site! This traditional kasbah offers authentic Berber hospitality with modern comforts. Experience the magic of the Sahara Desert and Atlas Mountains.',
  'Séjournez dans un site du patrimoine mondial de l''UNESCO ! Cette kasbah traditionnelle offre l''hospitalité berbère authentique avec les conforts modernes. Découvrez la magie du désert du Sahara et des montagnes de l''Atlas.',
  'Ait Benhaddou, Morocco',
  'Ait Benhaddou, Maroc',
  95.00,
  3,
  2,
  6,
  ARRAY['UNESCO Heritage Site', 'Traditional Architecture', 'Desert Views', 'WiFi', 'Traditional Meals', 'Guided Tours', 'Atlas Mountain Views'],
  ARRAY['Site Patrimoine UNESCO', 'Architecture Traditionnelle', 'Vue sur le Désert', 'WiFi', 'Repas Traditionnels', 'Visites Guidées', 'Vue sur l''Atlas'],
  ARRAY['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 4. Modern Apartment in Casablanca
(
  'Luxury Apartment in Casablanca Center',
  'Appartement de Luxe au Centre de Casablanca',
  'Contemporary luxury apartment in the heart of Casablanca, minutes from Hassan II Mosque and the Corniche. Features modern amenities, city views, and perfect location for business or leisure.',
  'Appartement de luxe contemporain au cœur de Casablanca, à quelques minutes de la Mosquée Hassan II et de la Corniche. Équipements modernes, vue sur la ville, et emplacement parfait pour les affaires ou les loisirs.',
  'Casablanca City Center, Morocco',
  'Centre-ville de Casablanca, Maroc',
  120.00,
  3,
  2,
  6,
  ARRAY['City Center Location', 'Modern Amenities', 'WiFi', 'Air Conditioning', 'City Views', 'Modern Kitchen', 'Parking'],
  ARRAY['Emplacement Centre-ville', 'Équipements Modernes', 'WiFi', 'Climatisation', 'Vue sur la Ville', 'Cuisine Moderne', 'Parking'],
  ARRAY['https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 5. Desert Camp in Merzouga
(
  'Luxury Desert Camp in Merzouga',
  'Camp de Désert de Luxe à Merzouga',
  'Experience the magic of the Sahara Desert in this luxury desert camp. Sleep under the stars, enjoy traditional Berber hospitality, and take camel treks through the golden dunes.',
  'Découvrez la magie du désert du Sahara dans ce camp de désert de luxe. Dormez sous les étoiles, profitez de l''hospitalité berbère traditionnelle, et faites des treks à dos de chameau à travers les dunes dorées.',
  'Merzouga Desert, Morocco',
  'Désert de Merzouga, Maroc',
  140.00,
  2,
  1,
  4,
  ARRAY['Desert Location', 'Camel Treks', 'Traditional Tents', 'Stargazing', 'Traditional Meals', 'Desert Tours', 'Sahara Views'],
  ARRAY['Emplacement Désert', 'Treks à Chameau', 'Tentes Traditionnelles', 'Observation des Étoiles', 'Repas Traditionnels', 'Visites du Désert', 'Vue Sahara'],
  ARRAY['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 6. Mountain Lodge in Chefchaouen
(
  'Mountain Lodge in Blue City',
  'Lodge de Montagne dans la Ville Bleue',
  'Peaceful mountain lodge in the famous Blue City of Chefchaouen. Enjoy stunning mountain views, traditional Moroccan architecture, and a tranquil atmosphere perfect for relaxation.',
  'Lodge de montagne paisible dans la célèbre Ville Bleue de Chefchaouen. Profitez de vues imprenables sur les montagnes, architecture marocaine traditionnelle, et une atmosphère tranquille parfaite pour la détente.',
  'Chefchaouen, Morocco',
  'Chefchaouen, Maroc',
  85.00,
  3,
  2,
  6,
  ARRAY['Mountain Views', 'Blue City Location', 'Traditional Architecture', 'WiFi', 'Peaceful Atmosphere', 'Hiking Trails', 'Traditional Décor'],
  ARRAY['Vue sur les Montagnes', 'Emplacement Ville Bleue', 'Architecture Traditionnelle', 'WiFi', 'Atmosphère Paisible', 'Sentiers de Randonnée', 'Décor Traditionnel'],
  ARRAY['https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 7. Seaside Villa in Agadir
(
  'Seaside Villa with Private Beach Access',
  'Villa en Bord de Mer avec Accès Plage Privée',
  'Luxurious seaside villa in Agadir with private beach access and stunning ocean views. Perfect for families seeking beachfront luxury with modern amenities and privacy.',
  'Villa de luxe en bord de mer à Agadir avec accès privé à la plage et vues imprenables sur l''océan. Parfait pour les familles recherchant le luxe en front de mer avec équipements modernes et intimité.',
  'Agadir Beach, Morocco',
  'Plage d''Agadir, Maroc',
  200.00,
  4,
  3,
  8,
  ARRAY['Private Beach Access', 'Ocean Views', 'Private Pool', 'Modern Amenities', 'WiFi', 'BBQ Area', 'Parking', 'Seaside Location'],
  ARRAY['Accès Plage Privée', 'Vue sur l''Océan', 'Piscine Privée', 'Équipements Modernes', 'WiFi', 'Zone BBQ', 'Parking', 'Emplacement Bord de Mer'],
  ARRAY['https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 8. Traditional Dar in Fes
(
  'Traditional Dar in Fes Medina',
  'Dar Traditionnel dans la Médina de Fes',
  'Authentic traditional dar in the heart of Fes Medina, a UNESCO World Heritage site. Experience centuries-old architecture with modern comforts in the world''s largest car-free urban area.',
  'Dar traditionnel authentique au cœur de la Médina de Fes, site du patrimoine mondial de l''UNESCO. Découvrez l''architecture séculaire avec les conforts modernes dans la plus grande zone urbaine sans voiture au monde.',
  'Fes Medina, Morocco',
  'Médina de Fes, Maroc',
  75.00,
  2,
  1,
  4,
  ARRAY['UNESCO Heritage Site', 'Traditional Architecture', 'Medina Location', 'WiFi', 'Traditional Décor', 'Cultural Experience', 'Historic Setting'],
  ARRAY['Site Patrimoine UNESCO', 'Architecture Traditionnelle', 'Emplacement Médina', 'WiFi', 'Décor Traditionnel', 'Expérience Culturelle', 'Cadre Historique'],
  ARRAY['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 9. Modern Villa in Rabat
(
  'Modern Villa in Rabat Capital',
  'Villa Moderne dans la Capitale Rabat',
  'Contemporary villa in Morocco''s capital city, Rabat. Features modern design, spacious rooms, and easy access to historic sites and modern amenities. Perfect for business or leisure travelers.',
  'Villa contemporaine dans la capitale du Maroc, Rabat. Design moderne, chambres spacieuses, et accès facile aux sites historiques et équipements modernes. Parfait pour les voyageurs d''affaires ou de loisirs.',
  'Rabat, Morocco',
  'Rabat, Maroc',
  110.00,
  3,
  2,
  6,
  ARRAY['Modern Design', 'Capital City Location', 'WiFi', 'Air Conditioning', 'Modern Kitchen', 'Parking', 'City Access'],
  ARRAY['Design Moderne', 'Emplacement Capitale', 'WiFi', 'Climatisation', 'Cuisine Moderne', 'Parking', 'Accès Ville'],
  ARRAY['https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 10. Coastal Apartment in Tangier
(
  'Coastal Apartment with Mediterranean Views',
  'Appartement Côtier avec Vue Méditerranée',
  'Beautiful coastal apartment in Tangier with stunning Mediterranean Sea views. Located near the historic Kasbah and modern amenities, perfect for experiencing the unique blend of cultures in this historic port city.',
  'Bel appartement côtier à Tanger avec vues imprenables sur la mer Méditerranée. Situé près de la Kasbah historique et des équipements modernes, parfait pour découvrir le mélange unique de cultures dans cette ville portuaire historique.',
  'Tangier, Morocco',
  'Tanger, Maroc',
  90.00,
  2,
  1,
  4,
  ARRAY['Mediterranean Views', 'Coastal Location', 'WiFi', 'Modern Amenities', 'Historic Area', 'Sea Views', 'City Access'],
  ARRAY['Vue Méditerranée', 'Emplacement Côtier', 'WiFi', 'Équipements Modernes', 'Zone Historique', 'Vue sur la Mer', 'Accès Ville'],
  ARRAY['https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 11. Mountain Retreat in Ifrane
(
  'Mountain Retreat in Switzerland of Morocco',
  'Retraite de Montagne dans la Suisse du Maroc',
  'Peaceful mountain retreat in Ifrane, known as the Switzerland of Morocco. Enjoy cool mountain air, hiking trails, and modern amenities in this picturesque alpine setting.',
  'Retraite de montagne paisible à Ifrane, connue comme la Suisse du Maroc. Profitez de l''air frais de la montagne, sentiers de randonnée, et équipements modernes dans ce cadre alpin pittoresque.',
  'Ifrane, Morocco',
  'Ifrane, Maroc',
  95.00,
  3,
  2,
  6,
  ARRAY['Mountain Location', 'Cool Climate', 'Hiking Trails', 'WiFi', 'Modern Amenities', 'Alpine Setting', 'Peaceful Atmosphere'],
  ARRAY['Emplacement Montagne', 'Climat Frais', 'Sentiers de Randonnée', 'WiFi', 'Équipements Modernes', 'Cadre Alpin', 'Atmosphère Paisible'],
  ARRAY['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 12. Luxury Riad in Meknes
(
  'Luxury Riad in Imperial City',
  'Riad de Luxe dans la Ville Impériale',
  'Elegant luxury riad in the imperial city of Meknes. Experience royal hospitality with modern luxury in this historic city known for its grand architecture and rich history.',
  'Riad de luxe élégant dans la ville impériale de Meknes. Découvrez l''hospitalité royale avec le luxe moderne dans cette ville historique connue pour sa grande architecture et son riche passé.',
  'Meknes, Morocco',
  'Meknès, Maroc',
  130.00,
  4,
  3,
  8,
  ARRAY['Imperial City Location', 'Luxury Amenities', 'Traditional Architecture', 'WiFi', 'Royal Décor', 'Historic Setting', 'Modern Comforts'],
  ARRAY['Emplacement Ville Impériale', 'Équipements de Luxe', 'Architecture Traditionnelle', 'WiFi', 'Décor Royal', 'Cadre Historique', 'Conforts Modernes'],
  ARRAY['https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 13. Beach House in Asilah
(
  'Beach House in Artistic Asilah',
  'Maison de Plage dans Asilah Artistique',
  'Charming beach house in the artistic coastal town of Asilah. Known for its white-washed buildings and vibrant art scene, this property offers a unique blend of coastal beauty and cultural richness.',
  'Charmante maison de plage dans la ville côtière artistique d''Asilah. Connue pour ses bâtiments blanchis à la chaux et sa scène artistique vibrante, cette propriété offre un mélange unique de beauté côtière et de richesse culturelle.',
  'Asilah, Morocco',
  'Asilah, Maroc',
  105.00,
  3,
  2,
  6,
  ARRAY['Beach Location', 'Artistic Town', 'Coastal Views', 'WiFi', 'Cultural Experience', 'Modern Amenities', 'Peaceful Setting'],
  ARRAY['Emplacement Plage', 'Ville Artistique', 'Vue Côtière', 'WiFi', 'Expérience Culturelle', 'Équipements Modernes', 'Cadre Paisible'],
  ARRAY['https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 14. Traditional House in Tetouan
(
  'Traditional House in White City',
  'Maison Traditionnelle dans la Ville Blanche',
  'Authentic traditional house in Tetouan, the White City. Experience Andalusian-Moroccan architecture with modern comforts in this UNESCO World Heritage site known for its unique cultural heritage.',
  'Maison traditionnelle authentique à Tétouan, la Ville Blanche. Découvrez l''architecture andalouse-marocaine avec les conforts modernes dans ce site du patrimoine mondial de l''UNESCO connu pour son patrimoine culturel unique.',
  'Tetouan, Morocco',
  'Tétouan, Maroc',
  70.00,
  2,
  1,
  4,
  ARRAY['UNESCO Heritage Site', 'Traditional Architecture', 'Cultural Heritage', 'WiFi', 'Historic Setting', 'Andalusian Influence', 'White City Location'],
  ARRAY['Site Patrimoine UNESCO', 'Architecture Traditionnelle', 'Patrimoine Culturel', 'WiFi', 'Cadre Historique', 'Influence Andalouse', 'Emplacement Ville Blanche'],
  ARRAY['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 15. Modern Apartment in Ouarzazate
(
  'Modern Apartment in Hollywood of Morocco',
  'Appartement Moderne dans le Hollywood du Maroc',
  'Contemporary apartment in Ouarzazate, the Hollywood of Morocco. Known for its film studios and desert landscapes, this property offers modern amenities with stunning desert and mountain views.',
  'Appartement contemporain à Ouarzazate, le Hollywood du Maroc. Connu pour ses studios de cinéma et paysages désertiques, cette propriété offre des équipements modernes avec des vues imprenables sur le désert et les montagnes.',
  'Ouarzazate, Morocco',
  'Ouarzazate, Maroc',
  85.00,
  2,
  1,
  4,
  ARRAY['Film Location', 'Desert Views', 'Modern Amenities', 'WiFi', 'Mountain Views', 'Cultural Experience', 'Modern Comforts'],
  ARRAY['Lieu de Tournage', 'Vue sur le Désert', 'Équipements Modernes', 'WiFi', 'Vue sur les Montagnes', 'Expérience Culturelle', 'Conforts Modernes'],
  ARRAY['https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 16. Seaside Villa in El Jadida
(
  'Seaside Villa in Portuguese City',
  'Villa en Bord de Mer dans la Ville Portugaise',
  'Beautiful seaside villa in El Jadida, a city with Portuguese heritage. Enjoy coastal views, historic architecture, and modern amenities in this unique blend of European and Moroccan culture.',
  'Belle villa en bord de mer à El Jadida, une ville au patrimoine portugais. Profitez des vues côtières, architecture historique, et équipements modernes dans ce mélange unique de culture européenne et marocaine.',
  'El Jadida, Morocco',
  'El Jadida, Maroc',
  115.00,
  3,
  2,
  6,
  ARRAY['Seaside Location', 'Portuguese Heritage', 'Coastal Views', 'WiFi', 'Historic Architecture', 'Modern Amenities', 'Cultural Blend'],
  ARRAY['Emplacement Bord de Mer', 'Patrimoine Portugais', 'Vue Côtière', 'WiFi', 'Architecture Historique', 'Équipements Modernes', 'Mélange Culturel'],
  ARRAY['https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 17. Mountain Cabin in Azrou
(
  'Mountain Cabin in Cedar Forest',
  'Cabane de Montagne dans la Forêt de Cèdres',
  'Cozy mountain cabin in Azrou, surrounded by cedar forests and Berber villages. Perfect for nature lovers seeking tranquility and authentic Moroccan mountain culture.',
  'Cabane de montagne confortable à Azrou, entourée de forêts de cèdres et villages berbères. Parfait pour les amoureux de la nature recherchant la tranquillité et la culture marocaine de montagne authentique.',
  'Azrou, Morocco',
  'Azrou, Maroc',
  65.00,
  2,
  1,
  4,
  ARRAY['Mountain Location', 'Cedar Forest', 'Berber Culture', 'WiFi', 'Nature Setting', 'Peaceful Atmosphere', 'Traditional Experience'],
  ARRAY['Emplacement Montagne', 'Forêt de Cèdres', 'Culture Berbère', 'WiFi', 'Cadre Naturel', 'Atmosphère Paisible', 'Expérience Traditionnelle'],
  ARRAY['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 18. Luxury Apartment in Marrakech
(
  'Luxury Apartment in New City',
  'Appartement de Luxe dans la Ville Nouvelle',
  'Modern luxury apartment in Marrakech''s new city (Gueliz). Close to modern amenities, shopping districts, and the historic medina. Perfect for travelers seeking modern comfort with easy access to traditional culture.',
  'Appartement de luxe moderne dans la ville nouvelle de Marrakech (Gueliz). Proche des équipements modernes, districts commerciaux, et la médina historique. Parfait pour les voyageurs recherchant le confort moderne avec accès facile à la culture traditionnelle.',
  'Marrakech New City, Morocco',
  'Ville Nouvelle de Marrakech, Maroc',
  140.00,
  3,
  2,
  6,
  ARRAY['Modern Location', 'Luxury Amenities', 'WiFi', 'Air Conditioning', 'Shopping Access', 'Modern Comforts', 'City Views'],
  ARRAY['Emplacement Moderne', 'Équipements de Luxe', 'WiFi', 'Climatisation', 'Accès Shopping', 'Conforts Modernes', 'Vue sur la Ville'],
  ARRAY['https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 19. Traditional House in Safi
(
  'Traditional House in Pottery City',
  'Maison Traditionnelle dans la Ville de Poterie',
  'Authentic traditional house in Safi, known for its pottery and ceramics. Experience local craftsmanship and traditional Moroccan living with modern comforts in this coastal city.',
  'Maison traditionnelle authentique à Safi, connue pour sa poterie et céramique. Découvrez l''artisanat local et la vie marocaine traditionnelle avec les conforts modernes dans cette ville côtière.',
  'Safi, Morocco',
  'Safi, Maroc',
  75.00,
  2,
  1,
  4,
  ARRAY['Pottery City', 'Traditional Craftsmanship', 'Coastal Location', 'WiFi', 'Cultural Experience', 'Local Artisans', 'Traditional Décor'],
  ARRAY['Ville de Poterie', 'Artisanat Traditionnel', 'Emplacement Côtier', 'WiFi', 'Expérience Culturelle', 'Artisans Locaux', 'Décor Traditionnel'],
  ARRAY['https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
),

-- 20. Desert Villa in Zagora
(
  'Desert Villa with Palm Grove Views',
  'Villa du Désert avec Vue sur la Palmeraie',
  'Luxurious desert villa in Zagora with views of palm groves and the Sahara Desert. Experience the magic of the desert with modern luxury and traditional Moroccan hospitality.',
  'Villa de luxe du désert à Zagora avec vue sur les palmeraies et le désert du Sahara. Découvrez la magie du désert avec le luxe moderne et l''hospitalité marocaine traditionnelle.',
  'Zagora, Morocco',
  'Zagora, Maroc',
  160.00,
  4,
  3,
  8,
  ARRAY['Desert Location', 'Palm Grove Views', 'Luxury Amenities', 'WiFi', 'Sahara Views', 'Traditional Hospitality', 'Modern Comforts'],
  ARRAY['Emplacement Désert', 'Vue Palmeraie', 'Équipements de Luxe', 'WiFi', 'Vue Sahara', 'Hospitalité Traditionnelle', 'Conforts Modernes'],
  ARRAY['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'],
  NULL
); 