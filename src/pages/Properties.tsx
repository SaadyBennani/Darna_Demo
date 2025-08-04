import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { supabase, Property } from '../lib/supabase';
import { PropertyCard } from '../components/ui/PropertyCard';
import { useLanguage } from '../contexts/LanguageContext';
import toast from 'react-hot-toast';

export function Properties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const { t } = useLanguage();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        // Use comprehensive demo data if Supabase is not available
        setProperties([
          {
            id: '1',
            title: 'Luxury Riad with Private Pool - Marrakech',
            title_fr: 'Riad de Luxe avec Piscine Privée - Marrakech',
            description: 'Experience ultimate luxury in this stunning riad featuring a private plunge pool, traditional hammam, and rooftop terrace with panoramic views of the Atlas Mountains.',
            description_fr: 'Découvrez le luxe ultime dans ce riad époustouflant avec piscine privée, hammam traditionnel, et terrasse sur le toit avec vue panoramique sur les montagnes de l\'Atlas.',
            location: 'Marrakech Medina, Morocco',
            location_fr: 'Médina de Marrakech, Maroc',
            price_per_night: 150,
            bedrooms: 4,
            bathrooms: 3,
            max_guests: 8,
            amenities: ['Private Pool', 'Traditional Hammam', 'Rooftop Terrace', 'WiFi', 'Air Conditioning', 'Breakfast Included', 'Atlas Mountain Views'],
            amenities_fr: ['Piscine Privée', 'Hammam Traditionnel', 'Terrasse sur le Toit', 'WiFi', 'Climatisation', 'Petit-déjeuner Inclus', 'Vue sur l\'Atlas'],
            images: ['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'],
            owner_id: 'demo',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            is_active: true
          },
          {
            id: '2',
            title: 'Beachfront Villa with Ocean Views',
            title_fr: 'Villa en Front de Mer avec Vue sur l\'Océan',
            description: 'Stunning beachfront villa in Essaouira with direct access to the Atlantic Ocean. Features include a private terrace, modern amenities, and breathtaking sunset views.',
            description_fr: 'Villa époustouflante en front de mer à Essaouira avec accès direct à l\'océan Atlantique. Caractéristiques : terrasse privée, équipements modernes, et vues imprenables sur le coucher de soleil.',
            location: 'Essaouira Beach, Morocco',
            location_fr: 'Plage d\'Essaouira, Maroc',
            price_per_night: 180,
            bedrooms: 5,
            bathrooms: 4,
            max_guests: 10,
            amenities: ['Beachfront Location', 'Private Terrace', 'Ocean Views', 'WiFi', 'Modern Kitchen', 'Parking', 'BBQ Area'],
            amenities_fr: ['Emplacement Front de Mer', 'Terrasse Privée', 'Vue sur l\'Océan', 'WiFi', 'Cuisine Moderne', 'Parking', 'Zone BBQ'],
            images: ['https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'],
            owner_id: 'demo',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            is_active: true
          },
          {
            id: '3',
            title: 'Historic Kasbah in Ait Benhaddou',
            title_fr: 'Kasbah Historique à Ait Benhaddou',
            description: 'Stay in a UNESCO World Heritage site! This traditional kasbah offers authentic Berber hospitality with modern comforts. Experience the magic of the Sahara Desert.',
            description_fr: 'Séjournez dans un site du patrimoine mondial de l\'UNESCO ! Cette kasbah traditionnelle offre l\'hospitalité berbère authentique avec les conforts modernes.',
            location: 'Ait Benhaddou, Morocco',
            location_fr: 'Ait Benhaddou, Maroc',
            price_per_night: 95,
            bedrooms: 3,
            bathrooms: 2,
            max_guests: 6,
            amenities: ['UNESCO Heritage Site', 'Traditional Architecture', 'Desert Views', 'WiFi', 'Traditional Meals', 'Guided Tours'],
            amenities_fr: ['Site Patrimoine UNESCO', 'Architecture Traditionnelle', 'Vue sur le Désert', 'WiFi', 'Repas Traditionnels', 'Visites Guidées'],
            images: ['https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'],
            owner_id: 'demo',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            is_active: true
          },
          {
            id: '4',
            title: 'Luxury Apartment in Casablanca Center',
            title_fr: 'Appartement de Luxe au Centre de Casablanca',
            description: 'Contemporary luxury apartment in the heart of Casablanca, minutes from Hassan II Mosque and the Corniche. Features modern amenities and city views.',
            description_fr: 'Appartement de luxe contemporain au cœur de Casablanca, à quelques minutes de la Mosquée Hassan II et de la Corniche. Équipements modernes et vue sur la ville.',
            location: 'Casablanca City Center, Morocco',
            location_fr: 'Centre-ville de Casablanca, Maroc',
            price_per_night: 120,
            bedrooms: 3,
            bathrooms: 2,
            max_guests: 6,
            amenities: ['City Center Location', 'Modern Amenities', 'WiFi', 'Air Conditioning', 'City Views', 'Modern Kitchen'],
            amenities_fr: ['Emplacement Centre-ville', 'Équipements Modernes', 'WiFi', 'Climatisation', 'Vue sur la Ville', 'Cuisine Moderne'],
            images: ['https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800'],
            owner_id: 'demo',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            is_active: true
          },
          {
            id: '5',
            title: 'Luxury Desert Camp in Merzouga',
            title_fr: 'Camp de Désert de Luxe à Merzouga',
            description: 'Experience the magic of the Sahara Desert in this luxury desert camp. Sleep under the stars, enjoy traditional Berber hospitality, and take camel treks.',
            description_fr: 'Découvrez la magie du désert du Sahara dans ce camp de désert de luxe. Dormez sous les étoiles, profitez de l\'hospitalité berbère traditionnelle.',
            location: 'Merzouga Desert, Morocco',
            location_fr: 'Désert de Merzouga, Maroc',
            price_per_night: 140,
            bedrooms: 2,
            bathrooms: 1,
            max_guests: 4,
            amenities: ['Desert Location', 'Camel Treks', 'Traditional Tents', 'Stargazing', 'Traditional Meals', 'Desert Tours'],
            amenities_fr: ['Emplacement Désert', 'Treks à Chameau', 'Tentes Traditionnelles', 'Observation des Étoiles', 'Repas Traditionnels'],
            images: ['https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800'],
            owner_id: 'demo',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            is_active: true
          },
          {
            id: '6',
            title: 'Mountain Lodge in Blue City',
            title_fr: 'Lodge de Montagne dans la Ville Bleue',
            description: 'Peaceful mountain lodge in the famous Blue City of Chefchaouen. Enjoy stunning mountain views, traditional Moroccan architecture, and a tranquil atmosphere.',
            description_fr: 'Lodge de montagne paisible dans la célèbre Ville Bleue de Chefchaouen. Profitez de vues imprenables sur les montagnes et architecture marocaine traditionnelle.',
            location: 'Chefchaouen, Morocco',
            location_fr: 'Chefchaouen, Maroc',
            price_per_night: 85,
            bedrooms: 3,
            bathrooms: 2,
            max_guests: 6,
            amenities: ['Mountain Views', 'Blue City Location', 'Traditional Architecture', 'WiFi', 'Peaceful Atmosphere', 'Hiking Trails'],
            amenities_fr: ['Vue sur les Montagnes', 'Emplacement Ville Bleue', 'Architecture Traditionnelle', 'WiFi', 'Atmosphère Paisible'],
            images: ['https://images.pexels.com/photos/1571455/pexels-photo-1571455.jpeg?auto=compress&cs=tinysrgb&w=800'],
            owner_id: 'demo',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            is_active: true
          },
          {
            id: '7',
            title: 'Seaside Villa with Private Beach Access',
            title_fr: 'Villa en Bord de Mer avec Accès Plage Privée',
            description: 'Luxurious seaside villa in Agadir with private beach access and stunning ocean views. Perfect for families seeking beachfront luxury with modern amenities.',
            description_fr: 'Villa de luxe en bord de mer à Agadir avec accès privé à la plage et vues imprenables sur l\'océan. Parfait pour les familles recherchant le luxe en front de mer.',
            location: 'Agadir Beach, Morocco',
            location_fr: 'Plage d\'Agadir, Maroc',
            price_per_night: 200,
            bedrooms: 4,
            bathrooms: 3,
            max_guests: 8,
            amenities: ['Private Beach Access', 'Ocean Views', 'Private Pool', 'Modern Amenities', 'WiFi', 'BBQ Area', 'Parking'],
            amenities_fr: ['Accès Plage Privée', 'Vue sur l\'Océan', 'Piscine Privée', 'Équipements Modernes', 'WiFi', 'Zone BBQ'],
            images: ['https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800'],
            owner_id: 'demo',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            is_active: true
          },
          {
            id: '8',
            title: 'Traditional Dar in Fes Medina',
            title_fr: 'Dar Traditionnel dans la Médina de Fes',
            description: 'Authentic traditional dar in the heart of Fes Medina, a UNESCO World Heritage site. Experience centuries-old architecture with modern comforts.',
            description_fr: 'Dar traditionnel authentique au cœur de la Médina de Fes, site du patrimoine mondial de l\'UNESCO. Découvrez l\'architecture séculaire avec les conforts modernes.',
            location: 'Fes Medina, Morocco',
            location_fr: 'Médina de Fes, Maroc',
            price_per_night: 75,
            bedrooms: 2,
            bathrooms: 1,
            max_guests: 4,
            amenities: ['UNESCO Heritage Site', 'Traditional Architecture', 'Medina Location', 'WiFi', 'Traditional Décor', 'Cultural Experience'],
            amenities_fr: ['Site Patrimoine UNESCO', 'Architecture Traditionnelle', 'Emplacement Médina', 'WiFi', 'Décor Traditionnel'],
            images: ['https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800'],
            owner_id: 'demo',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            is_active: true
          },
          {
            id: '9',
            title: 'Modern Villa in Rabat Capital',
            title_fr: 'Villa Moderne dans la Capitale Rabat',
            description: 'Contemporary villa in Morocco\'s capital city, Rabat. Features modern design, spacious rooms, and easy access to historic sites and modern amenities.',
            description_fr: 'Villa contemporaine dans la capitale du Maroc, Rabat. Design moderne, chambres spacieuses, et accès facile aux sites historiques et équipements modernes.',
            location: 'Rabat, Morocco',
            location_fr: 'Rabat, Maroc',
            price_per_night: 110,
            bedrooms: 3,
            bathrooms: 2,
            max_guests: 6,
            amenities: ['Modern Design', 'Capital City Location', 'WiFi', 'Air Conditioning', 'Modern Kitchen', 'Parking'],
            amenities_fr: ['Design Moderne', 'Emplacement Capitale', 'WiFi', 'Climatisation', 'Cuisine Moderne', 'Parking'],
            images: ['https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=800'],
            owner_id: 'demo',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            is_active: true
          },
          {
            id: '10',
            title: 'Coastal Apartment with Mediterranean Views',
            title_fr: 'Appartement Côtier avec Vue Méditerranée',
            description: 'Beautiful coastal apartment in Tangier with stunning Mediterranean Sea views. Located near the historic Kasbah and modern amenities.',
            description_fr: 'Bel appartement côtier à Tanger avec vues imprenables sur la mer Méditerranée. Situé près de la Kasbah historique et des équipements modernes.',
            location: 'Tangier, Morocco',
            location_fr: 'Tanger, Maroc',
            price_per_night: 90,
            bedrooms: 2,
            bathrooms: 1,
            max_guests: 4,
            amenities: ['Mediterranean Views', 'Coastal Location', 'WiFi', 'Modern Amenities', 'Historic Area', 'Sea Views'],
            amenities_fr: ['Vue Méditerranée', 'Emplacement Côtier', 'WiFi', 'Équipements Modernes', 'Zone Historique'],
            images: ['https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800'],
            owner_id: 'demo',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            is_active: true
          }
        ]);
      } else {
        setProperties(data || []);
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
      // Use the same comprehensive demo data if there's an error
      setProperties([
        {
          id: '1',
          title: 'Luxury Riad with Private Pool - Marrakech',
          title_fr: 'Riad de Luxe avec Piscine Privée - Marrakech',
          description: 'Experience ultimate luxury in this stunning riad featuring a private plunge pool, traditional hammam, and rooftop terrace with panoramic views of the Atlas Mountains.',
          description_fr: 'Découvrez le luxe ultime dans ce riad époustouflant avec piscine privée, hammam traditionnel, et terrasse sur le toit avec vue panoramique sur les montagnes de l\'Atlas.',
          location: 'Marrakech Medina, Morocco',
          location_fr: 'Médina de Marrakech, Maroc',
          price_per_night: 150,
          bedrooms: 4,
          bathrooms: 3,
          max_guests: 8,
          amenities: ['Private Pool', 'Traditional Hammam', 'Rooftop Terrace', 'WiFi', 'Air Conditioning', 'Breakfast Included', 'Atlas Mountain Views'],
          amenities_fr: ['Piscine Privée', 'Hammam Traditionnel', 'Terrasse sur le Toit', 'WiFi', 'Climatisation', 'Petit-déjeuner Inclus', 'Vue sur l\'Atlas'],
          images: ['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'],
          owner_id: 'demo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_active: true
        },
        {
          id: '2',
          title: 'Beachfront Villa with Ocean Views',
          title_fr: 'Villa en Front de Mer avec Vue sur l\'Océan',
          description: 'Stunning beachfront villa in Essaouira with direct access to the Atlantic Ocean. Features include a private terrace, modern amenities, and breathtaking sunset views.',
          description_fr: 'Villa époustouflante en front de mer à Essaouira avec accès direct à l\'océan Atlantique. Caractéristiques : terrasse privée, équipements modernes, et vues imprenables sur le coucher de soleil.',
          location: 'Essaouira Beach, Morocco',
          location_fr: 'Plage d\'Essaouira, Maroc',
          price_per_night: 180,
          bedrooms: 5,
          bathrooms: 4,
          max_guests: 10,
          amenities: ['Beachfront Location', 'Private Terrace', 'Ocean Views', 'WiFi', 'Modern Kitchen', 'Parking', 'BBQ Area'],
          amenities_fr: ['Emplacement Front de Mer', 'Terrasse Privée', 'Vue sur l\'Océan', 'WiFi', 'Cuisine Moderne', 'Parking', 'Zone BBQ'],
          images: ['https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'],
          owner_id: 'demo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_active: true
        },
        {
          id: '3',
          title: 'Historic Kasbah in Ait Benhaddou',
          title_fr: 'Kasbah Historique à Ait Benhaddou',
          description: 'Stay in a UNESCO World Heritage site! This traditional kasbah offers authentic Berber hospitality with modern comforts. Experience the magic of the Sahara Desert.',
          description_fr: 'Séjournez dans un site du patrimoine mondial de l\'UNESCO ! Cette kasbah traditionnelle offre l\'hospitalité berbère authentique avec les conforts modernes.',
          location: 'Ait Benhaddou, Morocco',
          location_fr: 'Ait Benhaddou, Maroc',
          price_per_night: 95,
          bedrooms: 3,
          bathrooms: 2,
          max_guests: 6,
          amenities: ['UNESCO Heritage Site', 'Traditional Architecture', 'Desert Views', 'WiFi', 'Traditional Meals', 'Guided Tours'],
          amenities_fr: ['Site Patrimoine UNESCO', 'Architecture Traditionnelle', 'Vue sur le Désert', 'WiFi', 'Repas Traditionnels', 'Visites Guidées'],
          images: ['https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'],
          owner_id: 'demo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_active: true
        },
        {
          id: '4',
          title: 'Luxury Apartment in Casablanca Center',
          title_fr: 'Appartement de Luxe au Centre de Casablanca',
          description: 'Contemporary luxury apartment in the heart of Casablanca, minutes from Hassan II Mosque and the Corniche. Features modern amenities and city views.',
          description_fr: 'Appartement de luxe contemporain au cœur de Casablanca, à quelques minutes de la Mosquée Hassan II et de la Corniche. Équipements modernes et vue sur la ville.',
          location: 'Casablanca City Center, Morocco',
          location_fr: 'Centre-ville de Casablanca, Maroc',
          price_per_night: 120,
          bedrooms: 3,
          bathrooms: 2,
          max_guests: 6,
          amenities: ['City Center Location', 'Modern Amenities', 'WiFi', 'Air Conditioning', 'City Views', 'Modern Kitchen'],
          amenities_fr: ['Emplacement Centre-ville', 'Équipements Modernes', 'WiFi', 'Climatisation', 'Vue sur la Ville', 'Cuisine Moderne'],
          images: ['https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800'],
          owner_id: 'demo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_active: true
        },
        {
          id: '5',
          title: 'Luxury Desert Camp in Merzouga',
          title_fr: 'Camp de Désert de Luxe à Merzouga',
          description: 'Experience the magic of the Sahara Desert in this luxury desert camp. Sleep under the stars, enjoy traditional Berber hospitality, and take camel treks.',
          description_fr: 'Découvrez la magie du désert du Sahara dans ce camp de désert de luxe. Dormez sous les étoiles, profitez de l\'hospitalité berbère traditionnelle.',
          location: 'Merzouga Desert, Morocco',
          location_fr: 'Désert de Merzouga, Maroc',
          price_per_night: 140,
          bedrooms: 2,
          bathrooms: 1,
          max_guests: 4,
          amenities: ['Desert Location', 'Camel Treks', 'Traditional Tents', 'Stargazing', 'Traditional Meals', 'Desert Tours'],
          amenities_fr: ['Emplacement Désert', 'Treks à Chameau', 'Tentes Traditionnelles', 'Observation des Étoiles', 'Repas Traditionnels'],
          images: ['https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800'],
          owner_id: 'demo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_active: true
        },
        {
          id: '6',
          title: 'Mountain Lodge in Blue City',
          title_fr: 'Lodge de Montagne dans la Ville Bleue',
          description: 'Peaceful mountain lodge in the famous Blue City of Chefchaouen. Enjoy stunning mountain views, traditional Moroccan architecture, and a tranquil atmosphere.',
          description_fr: 'Lodge de montagne paisible dans la célèbre Ville Bleue de Chefchaouen. Profitez de vues imprenables sur les montagnes et architecture marocaine traditionnelle.',
          location: 'Chefchaouen, Morocco',
          location_fr: 'Chefchaouen, Maroc',
          price_per_night: 85,
          bedrooms: 3,
          bathrooms: 2,
          max_guests: 6,
          amenities: ['Mountain Views', 'Blue City Location', 'Traditional Architecture', 'WiFi', 'Peaceful Atmosphere', 'Hiking Trails'],
          amenities_fr: ['Vue sur les Montagnes', 'Emplacement Ville Bleue', 'Architecture Traditionnelle', 'WiFi', 'Atmosphère Paisible'],
          images: ['https://images.pexels.com/photos/1571455/pexels-photo-1571455.jpeg?auto=compress&cs=tinysrgb&w=800'],
          owner_id: 'demo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_active: true
        },
        {
          id: '7',
          title: 'Seaside Villa with Private Beach Access',
          title_fr: 'Villa en Bord de Mer avec Accès Plage Privée',
          description: 'Luxurious seaside villa in Agadir with private beach access and stunning ocean views. Perfect for families seeking beachfront luxury with modern amenities.',
          description_fr: 'Villa de luxe en bord de mer à Agadir avec accès privé à la plage et vues imprenables sur l\'océan. Parfait pour les familles recherchant le luxe en front de mer.',
          location: 'Agadir Beach, Morocco',
          location_fr: 'Plage d\'Agadir, Maroc',
          price_per_night: 200,
          bedrooms: 4,
          bathrooms: 3,
          max_guests: 8,
          amenities: ['Private Beach Access', 'Ocean Views', 'Private Pool', 'Modern Amenities', 'WiFi', 'BBQ Area', 'Parking'],
          amenities_fr: ['Accès Plage Privée', 'Vue sur l\'Océan', 'Piscine Privée', 'Équipements Modernes', 'WiFi', 'Zone BBQ'],
          images: ['https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800'],
          owner_id: 'demo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_active: true
        },
        {
          id: '8',
          title: 'Traditional Dar in Fes Medina',
          title_fr: 'Dar Traditionnel dans la Médina de Fes',
          description: 'Authentic traditional dar in the heart of Fes Medina, a UNESCO World Heritage site. Experience centuries-old architecture with modern comforts.',
          description_fr: 'Dar traditionnel authentique au cœur de la Médina de Fes, site du patrimoine mondial de l\'UNESCO. Découvrez l\'architecture séculaire avec les conforts modernes.',
          location: 'Fes Medina, Morocco',
          location_fr: 'Médina de Fes, Maroc',
          price_per_night: 75,
          bedrooms: 2,
          bathrooms: 1,
          max_guests: 4,
          amenities: ['UNESCO Heritage Site', 'Traditional Architecture', 'Medina Location', 'WiFi', 'Traditional Décor', 'Cultural Experience'],
          amenities_fr: ['Site Patrimoine UNESCO', 'Architecture Traditionnelle', 'Emplacement Médina', 'WiFi', 'Décor Traditionnel'],
          images: ['https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800'],
          owner_id: 'demo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_active: true
        },
        {
          id: '9',
          title: 'Modern Villa in Rabat Capital',
          title_fr: 'Villa Moderne dans la Capitale Rabat',
          description: 'Contemporary villa in Morocco\'s capital city, Rabat. Features modern design, spacious rooms, and easy access to historic sites and modern amenities.',
          description_fr: 'Villa contemporaine dans la capitale du Maroc, Rabat. Design moderne, chambres spacieuses, et accès facile aux sites historiques et équipements modernes.',
          location: 'Rabat, Morocco',
          location_fr: 'Rabat, Maroc',
          price_per_night: 110,
          bedrooms: 3,
          bathrooms: 2,
          max_guests: 6,
          amenities: ['Modern Design', 'Capital City Location', 'WiFi', 'Air Conditioning', 'Modern Kitchen', 'Parking'],
          amenities_fr: ['Design Moderne', 'Emplacement Capitale', 'WiFi', 'Climatisation', 'Cuisine Moderne', 'Parking'],
          images: ['https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=800'],
          owner_id: 'demo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_active: true
        },
        {
          id: '10',
          title: 'Coastal Apartment with Mediterranean Views',
          title_fr: 'Appartement Côtier avec Vue Méditerranée',
          description: 'Beautiful coastal apartment in Tangier with stunning Mediterranean Sea views. Located near the historic Kasbah and modern amenities.',
          description_fr: 'Bel appartement côtier à Tanger avec vues imprenables sur la mer Méditerranée. Situé près de la Kasbah historique et des équipements modernes.',
          location: 'Tangier, Morocco',
          location_fr: 'Tanger, Maroc',
          price_per_night: 90,
          bedrooms: 2,
          bathrooms: 1,
          max_guests: 4,
          amenities: ['Mediterranean Views', 'Coastal Location', 'WiFi', 'Modern Amenities', 'Historic Area', 'Sea Views'],
          amenities_fr: ['Vue Méditerranée', 'Emplacement Côtier', 'WiFi', 'Équipements Modernes', 'Zone Historique'],
          images: ['https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800'],
          owner_id: 'demo',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_active: true
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = searchTerm === '' || 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (property.title_fr && property.title_fr.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (property.location_fr && property.location_fr.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesPrice = property.price_per_night >= priceRange[0] && 
      property.price_per_night <= priceRange[1];
    
    return matchesSearch && matchesPrice;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t('properties.title')}
          </h1>
          <p className="text-gray-600">
            {properties.length} {properties.length === 1 ? 'property' : 'properties'} available
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by location or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Filter Button */}
            <div className="flex items-end">
              <button className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-5 h-5 mr-2 text-gray-600" />
                More Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('properties.no_results')}
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or explore all properties.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}