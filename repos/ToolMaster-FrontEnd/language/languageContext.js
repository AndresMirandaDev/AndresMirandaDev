import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const options = {
    en: {
      name: 'English',
      icon: '🇬🇧',
    },
    sv: {
      name: 'Svenska',
      icon: '🇸🇪',
    },
    es: {
      name: 'Español',
      icon: '🇪🇸',
    },
  };

  const updateLanguage = (lang) => {
    setLanguage(lang);
  };

  const value = {
    language,
    options,
    updateLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
