import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTranslation, getBrowserLanguage } from '../translations';
import { LanguageCode } from '../types';

interface LanguageContextType {
  language: LanguageCode;
  t: (key: string) => string;
  changeLanguage: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [translations, setTranslations] = useState(getTranslation('en'));

  // Load saved language or detect browser language on initial load
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageCode | null;
    const initialLanguage = savedLanguage || getBrowserLanguage();
    setLanguage(initialLanguage);
    setTranslations(getTranslation(initialLanguage));
  }, []);

  const changeLanguage = (lang: LanguageCode) => {
    setLanguage(lang);
    setTranslations(getTranslation(lang));
    localStorage.setItem('language', lang);
  };

  // Function to get a translation by key path (e.g., "navigation.home")
  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};