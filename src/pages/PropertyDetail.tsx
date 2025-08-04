import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Bed, Bath, Wifi, Car, Star, Mail, Phone, Clock, Calendar } from 'lucide-react';
import { supabase, Property } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';
import toast from 'react-hot-toast';

// Demo property data with comprehensive details
const demoProperties = {
  '1': {
    id: '1',
    title: 'Luxury Riad with Private Pool - Marrakech',
    title_fr: 'Riad de Luxe avec Piscine Privée - Marrakech',
    description: 'Experience ultimate luxury in this stunning riad featuring a private plunge pool, traditional hammam, and rooftop terrace with panoramic views of the Atlas Mountains. This beautifully restored 19th-century riad combines authentic Moroccan architecture with modern luxury amenities. Located in the heart of the historic medina, you\'ll be just minutes from the famous Jemaa el-Fnaa square, souks, and major attractions.\n\n• Private plunge pool with traditional tilework\n• Traditional hammam spa experience\n• Rooftop terrace with Atlas Mountain views\n• Authentic Moroccan courtyard design\n• Modern amenities with traditional charm\n• 24/7 concierge service',
    description_fr: 'Découvrez le luxe ultime dans ce riad époustouflant avec piscine privée, hammam traditionnel, et terrasse sur le toit avec vue panoramique sur les montagnes de l\'Atlas.',
    location: 'Marrakech Medina, Morocco',
    location_fr: 'Médina de Marrakech, Maroc',
    price_per_night: 150,
    bedrooms: 4,
    bathrooms: 3,
    max_guests: 8,
    amenities: ['Private Pool', 'Traditional Hammam', 'Rooftop Terrace', 'WiFi', 'Air Conditioning', 'Breakfast Included', 'Atlas Mountain Views', 'Traditional Décor'],
    amenities_fr: ['Piscine Privée', 'Hammam Traditionnel', 'Terrasse sur le Toit', 'WiFi', 'Climatisation', 'Petit-déjeuner Inclus', 'Vue sur l\'Atlas', 'Décor Traditionnel'],
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571455/pexels-photo-1571455.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    locationDetails: {
      landmarks: ['Jemaa el-Fnaa (5 min walk)', 'Koutoubia Mosque (8 min walk)', 'Bahia Palace (10 min walk)', 'Majorelle Gardens (15 min drive)'],
      transport: ['Marrakech Menara Airport (15 min drive)', 'Medina Bus Station (5 min walk)', 'Taxi stand (2 min walk)'],
      nearby: ['Traditional souks (3 min walk)', 'Restaurants & cafes (2 min walk)', 'ATM & banks (5 min walk)']
    },
    owner_id: 'demo',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    is_active: true
  },
  '2': {
    id: '2',
    title: 'Beachfront Villa with Ocean Views',
    title_fr: 'Villa en Front de Mer avec Vue sur l\'Océan',
    description: 'Stunning beachfront villa in Essaouira with direct access to the Atlantic Ocean. This modern villa features contemporary design with traditional Moroccan elements, offering the perfect blend of luxury and authenticity. Enjoy breathtaking sunset views from your private terrace while listening to the waves.\n\n• Direct beach access with private path\n• Infinity pool overlooking the ocean\n• Modern kitchen with local ingredients\n• Private parking and security\n• Outdoor dining area with BBQ\n• Surf equipment storage available',
    description_fr: 'Villa époustouflante en front de mer à Essaouira avec accès direct à l\'océan Atlantique.',
    location: 'Essaouira Beach, Morocco',
    location_fr: 'Plage d\'Essaouira, Maroc',
    price_per_night: 180,
    bedrooms: 5,
    bathrooms: 4,
    max_guests: 10,
    amenities: ['Beachfront Location', 'Private Terrace', 'Ocean Views', 'WiFi', 'Modern Kitchen', 'Parking', 'BBQ Area', 'Infinity Pool'],
    amenities_fr: ['Emplacement Front de Mer', 'Terrasse Privée', 'Vue sur l\'Océan', 'WiFi', 'Cuisine Moderne', 'Parking', 'Zone BBQ'],
    images: [
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571455/pexels-photo-1571455.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    locationDetails: {
      landmarks: ['Essaouira Medina (10 min walk)', 'Skala de la Ville (15 min walk)', 'Essaouira Beach (direct access)', 'Port of Essaouira (20 min walk)'],
      transport: ['Essaouira Airport (20 min drive)', 'Bus station (15 min walk)', 'Taxi service available'],
      nearby: ['Surf schools (5 min walk)', 'Seafood restaurants (10 min walk)', 'Local markets (15 min walk)']
    },
    owner_id: 'demo',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    is_active: true
  }
};

export function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (id) {
      fetchProperty(id);
    }
  }, [id]);

  const fetchProperty = async (propertyId: string) => {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('id', propertyId)
        .eq('is_active', true)
        .single();

      if (error) {
        // Use demo data if Supabase is not available
        const demoProperty = demoProperties[propertyId as keyof typeof demoProperties];
        if (demoProperty) {
          setProperty(demoProperty as Property);
        } else {
          throw new Error('Property not found');
        }
      } else {
        setProperty(data);
      }
    } catch (error) {
      console.error('Error fetching property:', error);
      toast.error(t('common.error'));
    } finally {
      setLoading(false);
    }
  };

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

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Property not found</h2>
          <Link to="/properties" className="text-orange-600 hover:text-orange-700">
            ← Back to properties
          </Link>
        </div>
      </div>
    );
  }

  const title = language === 'fr' && property.title_fr ? property.title_fr : property.title;
  const description = language === 'fr' && property.description_fr ? property.description_fr : property.description;
  const location = language === 'fr' && property.location_fr ? property.location_fr : property.location;
  const amenities = language === 'fr' && property.amenities_fr ? property.amenities_fr : property.amenities;

  const amenityIcons: { [key: string]: React.ComponentType<any> } = {
    'WiFi': Wifi,
    'Parking': Car,
    'Air Conditioning': Star,
    'Climatisation': Star,
    'Private Pool': Star,
    'Traditional Hammam': Star,
    'Rooftop Terrace': Star,
    'Breakfast Included': Star,
    'Atlas Mountain Views': Star,
    'Beachfront Location': Star,
    'Private Terrace': Star,
    'Ocean Views': Star,
    'Modern Kitchen': Star,
    'BBQ Area': Star,
    'Infinity Pool': Star,
  };

  // Get location details for demo properties
  const locationDetails = (property as any).locationDetails;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/properties"
          className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to properties
        </Link>
      </div>

      {/* Property Images */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <img
                src={property.images[selectedImageIndex] || property.images[0] || 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'}
                alt={title}
                className="w-full h-64 lg:h-96 object-cover cursor-pointer"
                onClick={() => setSelectedImageIndex(0)}
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:col-span-2">
              {property.images.slice(1, 5).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${title} ${index + 2}`}
                  className="w-full h-32 lg:h-[11.5rem] object-cover cursor-pointer rounded-lg hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImageIndex(index + 1)}
                />
              ))}
              {property.images.length > 5 && (
                <div className="relative">
                  <img
                    src={property.images[5]}
                    alt={`${title} more`}
                    className="w-full h-32 lg:h-[11.5rem] object-cover cursor-pointer rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                    <span className="text-white font-semibold">
                      +{property.images.length - 5} more
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-orange-600">
                    ${property.price_per_night}
                  </div>
                  <div className="text-gray-600">{t('properties.per_night')}</div>
                </div>
              </div>

              {/* Property Stats */}
              <div className="flex items-center space-x-6 py-4 border-t border-gray-200">
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="text-gray-900 font-medium">{property.bedrooms} {t('properties.bedrooms')}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="text-gray-900 font-medium">{property.bathrooms} {t('properties.bathrooms')}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="text-gray-900 font-medium">{property.max_guests} {t('properties.guests')}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
            </div>

            {/* Location Details */}
            {locationDetails && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Location & Transportation</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Nearby Landmarks
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {locationDetails.landmarks.map((landmark: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {landmark}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Car className="w-4 h-4 mr-2" />
                      Transportation
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {locationDetails.transport.map((transport: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {transport}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Nearby Amenities
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {locationDetails.nearby.map((amenity: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{t('property.amenities')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.map((amenity, index) => {
                  const IconComponent = amenityIcons[amenity] || Star;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Reviews Section (Placeholder for future) */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Guest Reviews</h2>
              <div className="text-center py-8 text-gray-500">
                <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Reviews coming soon! This feature will include guest ratings and detailed feedback.</p>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  ${property.price_per_night} <span className="text-base font-normal text-gray-600">/{t('properties.per_night')}</span>
                </div>
                <div className="flex items-center justify-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600 text-sm">4.9 (127 reviews)</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  {t('property.book_now')}
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  {t('property.contact_owner')}
                </button>
              </div>

              {/* Host Contact */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Contact Host</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-3" />
                    <span className="text-sm">host@example.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-3" />
                    <span className="text-sm">+212 6xx xxx xxx</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}