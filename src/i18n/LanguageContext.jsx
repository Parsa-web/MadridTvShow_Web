import { createContext, useContext, useState, useEffect } from 'react';
import { en, fa } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem('locale') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('locale', locale);
    document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (key) => {
    const dict = locale === 'fa' ? fa : en;
    return dict[key] || key;
  };

  const toggleLang = () => {
    setLocale(prev => prev === 'en' ? 'fa' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
