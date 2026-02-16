// this is internationalization setup ... 
// source of truth for all translations
// registers react-i18next, loads json resources, and sets default language

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// load the language files
import en from "./locales/en.json"
import np from "./locales/np.json"


i18n
    .use(initReactI18next) // Connects with React
    .init({
        resources: {
            en: {
                translation: en
            },
            np: {
                translation: np
            }
        },
        lng: 'np', // Default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // React already escapes values to prevent XSS
        }
    });

export default i18n;