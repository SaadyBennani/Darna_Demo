import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Bed, Bath } from 'lucide-react';
import { Property } from '../../lib/supabase';
import { useLanguage } from '../../contexts/LanguageContext';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { language, t } = useLanguage();

  const title = language === 'fr' && property.title_fr ? property.title_fr : property.title;
  const location = language === 'fr' && property.location_fr ? property.location_fr : property.location;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.images[0] || 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
          <span className="text-sm font-semibold text-gray-900">
            ${property.price_per_night} <span className="text-xs text-gray-600">/{t('properties.per_night')}</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {title}
          </h3>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="text-sm line-clamp-1">{location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.bedrooms} {t('properties.bedrooms')}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{property.bathrooms} {t('properties.bathrooms')}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{property.max_guests} {t('properties.guests')}</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to={`/properties/${property.id}`}
          className="block w-full bg-orange-600 text-white text-center py-2.5 rounded-lg font-medium hover:bg-orange-700 transition-colors"
        >
          {t('properties.view_details')}
        </Link>
      </div>
    </div>
  );
}