import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.properties': 'Properties',
    'nav.list_property': 'List Your Property',
    'nav.dashboard': 'Dashboard',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.logout': 'Logout',
    
    // Landing Page
    'hero.title': 'Discover Authentic Moroccan Experiences',
    'hero.subtitle': 'Find unique properties and immerse yourself in Moroccan culture',
    'hero.cta.explore': 'Explore Properties',
    'hero.cta.list': 'List Your Property',
    
    // Properties
    'properties.title': 'Featured Properties',
    'properties.per_night': 'per night',
    'properties.bedrooms': 'bedrooms',
    'properties.bathrooms': 'bathrooms',
    'properties.guests': 'guests',
    'properties.view_details': 'View Details',
    'properties.no_results': 'No properties found',
    
    // Property Details
    'property.amenities': 'Amenities',
    'property.contact_owner': 'Contact Owner',
    'property.book_now': 'Book Now',
    
    // Forms
    'form.title': 'Title',
    'form.description': 'Description',
    'form.location': 'Location',
    'form.price': 'Price per night',
    'form.bedrooms': 'Bedrooms',
    'form.bathrooms': 'Bathrooms',
    'form.max_guests': 'Maximum guests',
    'form.amenities': 'Amenities',
    'form.images': 'Property images',
    'form.submit': 'Submit',
    'form.cancel': 'Cancel',
    
    // Authentication
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.login': 'Login',
    'auth.signup': 'Sign Up',
    'auth.logout': 'Logout',
    
    // Dashboard
    'dashboard.title': 'My Properties',
    'dashboard.add_property': 'Add New Property',
    'dashboard.edit': 'Edit',
    'dashboard.delete': 'Delete',
    'dashboard.no_properties': 'You haven\'t listed any properties yet',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success!',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.properties': 'Propriétés',
    'nav.list_property': 'Listez Votre Propriété',
    'nav.dashboard': 'Tableau de Bord',
    'nav.login': 'Connexion',
    'nav.signup': 'S\'inscrire',
    'nav.logout': 'Déconnexion',
    
    // Landing Page
    'hero.title': 'Découvrez des Expériences Marocaines Authentiques',
    'hero.subtitle': 'Trouvez des propriétés uniques et plongez-vous dans la culture marocaine',
    'hero.cta.explore': 'Explorer les Propriétés',
    'hero.cta.list': 'Listez Votre Propriété',
    
    // Properties
    'properties.title': 'Propriétés en Vedette',
    'properties.per_night': 'par nuit',
    'properties.bedrooms': 'chambres',
    'properties.bathrooms': 'salles de bain',
    'properties.guests': 'invités',
    'properties.view_details': 'Voir les Détails',
    'properties.no_results': 'Aucune propriété trouvée',
    
    // Property Details
    'property.amenities': 'Équipements',
    'property.contact_owner': 'Contacter le Propriétaire',
    'property.book_now': 'Réserver Maintenant',
    
    // Forms
    'form.title': 'Titre',
    'form.description': 'Description',
    'form.location': 'Emplacement',
    'form.price': 'Prix par nuit',
    'form.bedrooms': 'Chambres',
    'form.bathrooms': 'Salles de bain',
    'form.max_guests': 'Invités maximum',
    'form.amenities': 'Équipements',
    'form.images': 'Images de la propriété',
    'form.submit': 'Soumettre',
    'form.cancel': 'Annuler',
    
    // Authentication
    'auth.email': 'Email',
    'auth.password': 'Mot de passe',
    'auth.login': 'Connexion',
    'auth.signup': 'S\'inscrire',
    'auth.logout': 'Déconnexion',
    
    // Dashboard
    'dashboard.title': 'Mes Propriétés',
    'dashboard.add_property': 'Ajouter une Nouvelle Propriété',
    'dashboard.edit': 'Modifier',
    'dashboard.delete': 'Supprimer',
    'dashboard.no_properties': 'Vous n\'avez encore listé aucune propriété',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur s\'est produite',
    'common.success': 'Succès!',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}