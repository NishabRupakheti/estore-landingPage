// this is internationalization setup ... 
// source of truth for all translations
// registers react-i18next, loads json resources, and sets default language

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// load the language files


i18n
    .use(initReactI18next) // Connects with React
    .init({
        resources: {

        },
        lng: 'en', // Default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // React already escapes values to prevent XSS
        }
    });

export default i18n;