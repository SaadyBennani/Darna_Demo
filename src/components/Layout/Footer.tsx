import React from 'react';
import { Heart, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold">Darna</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {language === 'en' 
                ? 'Discover authentic Moroccan experiences through unique properties that showcase the rich culture and hospitality of Morocco.'
                : 'Découvrez des expériences marocaines authentiques à travers des propriétés uniques qui mettent en valeur la riche culture et l\'hospitalité du Maroc.'
              }
            </p>
            <div className="flex items-center space-x-1 text-gray-400">
              <span>{language === 'en' ? 'Made with' : 'Fait avec'}</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>{language === 'en' ? 'in Morocco' : 'au Maroc'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {language === 'en' ? 'Quick Links' : 'Liens Rapides'}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/properties" className="hover:text-orange-400 transition-colors">
                {language === 'en' ? 'Properties' : 'Propriétés'}
              </a></li>
              <li><a href="/list-property" className="hover:text-orange-400 transition-colors">
                {language === 'en' ? 'List Your Property' : 'Listez Votre Propriété'}
              </a></li>
              <li><a href="/about" className="hover:text-orange-400 transition-colors">
                {language === 'en' ? 'About Us' : 'À Propos'}
              </a></li>
              <li><a href="/contact" className="hover:text-orange-400 transition-colors">
                {language === 'en' ? 'Contact' : 'Contact'}
              </a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {language === 'en' ? 'Support' : 'Support'}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/help" className="hover:text-orange-400 transition-colors">
                {language === 'en' ? 'Help Center' : 'Centre d\'Aide'}
              </a></li>
              <li><a href="/terms" className="hover:text-orange-400 transition-colors">
                {language === 'en' ? 'Terms of Service' : 'Conditions d\'Utilisation'}
              </a></li>
              <li><a href="/privacy" className="hover:text-orange-400 transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Darna. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-1 text-gray-400">
              <Globe className="w-4 h-4" />
              <span className="text-sm">
                {language === 'en' ? 'Available in English & French' : 'Disponible en Anglais et Français'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}