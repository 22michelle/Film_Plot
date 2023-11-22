// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  // Configuración de i18next...
  resources: {
    en: {
      translation: {
        welcome_message: 'Welcome to Cine Trama!'
      }
    },
    es: {
      translation: {
        welcome_message: '¡Bienvenido a Cine Trama!'
      }
    }
  },
  lng: 'en', // Idioma predeterminado
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
