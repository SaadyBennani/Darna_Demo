import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Bed, Bath, Wifi, Car, Star, Mail, Phone } from 'lucide-react';
import { supabase, Property } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';
import toast from 'react-hot-toast';

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

      if (error) throw error;
      setProperty(data);
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
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
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
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {property.images.slice(1, 3).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${title} ${index + 2}`}
                  className="w-full h-32 lg:h-[11.5rem] object-cover cursor-pointer rounded-lg hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImageIndex(index + 1)}
                />
              ))}
              {property.images.length > 3 && (
                <div className="relative">
                  <img
                    src={property.images[3]}
                    alt={`${title} more`}
                    className="w-full h-32 lg:h-[11.5rem] object-cover cursor-pointer rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                    <span className="text-white font-semibold">
                      +{property.images.length - 3} more
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