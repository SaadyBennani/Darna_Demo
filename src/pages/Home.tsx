import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Shield, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Home() {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Star,
      titleEn: 'Curated Properties',
      titleFr: 'Propriétés Sélectionnées',
      descEn: 'Each property is carefully selected to ensure authentic Moroccan experiences.',
      descFr: 'Chaque propriété est soigneusement sélectionnée pour garantir des expériences marocaines authentiques.',
    },
    {
      icon: Users,
      titleEn: 'Local Hosts',
      titleFr: 'Hôtes Locaux',
      descEn: 'Connect with knowledgeable local hosts who share their culture and insights.',
      descFr: 'Connectez-vous avec des hôtes locaux compétents qui partagent leur culture et leurs connaissances.',
    },
    {
      icon: Shield,
      titleEn: 'Secure Booking',
      titleFr: 'Réservation Sécurisée',
      descEn: 'Book with confidence through our secure platform and verified properties.',
      descFr: 'Réservez en toute confiance grâce à notre plateforme sécurisée et aux propriétés vérifiées.',
    },
    {
      icon: Globe,
      titleEn: 'Multilingual Support',
      titleFr: 'Support Multilingue',
      descEn: 'Available in English and French to serve our international community.',
      descFr: 'Disponible en anglais et en français pour servir notre communauté internationale.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-600 rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full translate-x-48 translate-y-48"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/properties"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {t('hero.cta.explore')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/list-property"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-200"
                >
                  {t('hero.cta.list')}
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Moroccan Architecture"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">4.9★</div>
                    <div className="text-sm text-gray-600">
                      {language === 'en' ? 'Guest Rating' : 'Note des Invités'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">50K+</div>
                    <div className="text-sm text-gray-600">
                      {language === 'en' ? 'Happy Guests' : 'Invités Satisfaits'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Why Choose Darna?' : 'Pourquoi Choisir Darna?'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Experience Morocco like never before with our carefully curated properties and exceptional service.'
                : 'Découvrez le Maroc comme jamais auparavant avec nos propriétés soigneusement sélectionnées et notre service exceptionnel.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {language === 'en' ? feature.titleEn : feature.titleFr}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {language === 'en' ? feature.descEn : feature.descFr}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {language === 'en' 
              ? 'Ready to Discover Morocco?' 
              : 'Prêt à Découvrir le Maroc?'
            }
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            {language === 'en' 
              ? 'Join thousands of travelers who have found their perfect Moroccan getaway through Darna.'
              : 'Rejoignez des milliers de voyageurs qui ont trouvé leur escapade marocaine parfaite grâce à Darna.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg"
            >
              {t('hero.cta.explore')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/list-property"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-200"
            >
              {t('hero.cta.list')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}