import en from './en';
import pt from './pt';
import es from './es';
import { LanguageCode } from '../types';

export const translations = {
  en,
  pt,
  es,
};

export const getTranslation = (lang: LanguageCode) => {
  return translations[lang] || translations.en;
};

export const getBrowserLanguage = (): LanguageCode => {
  const browserLang = navigator.language.split('-')[0];
  return (browserLang === 'pt' || browserLang === 'es') 
    ? browserLang as LanguageCode 
    : 'en';
};