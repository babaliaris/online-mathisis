import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';

// eslint-disable-next-line
import LanguageDetector from 'i18next-browser-languagedetector';


export function initI18n(): void
{
    i18n
    .use(Backend)
    //.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === "development" ? true : false,

        interpolation: {
        escapeValue: false,
        }
    });
}
