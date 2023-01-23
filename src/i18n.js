import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../src/locales/en/translationEN.json';
import translationUA from '../src/locales/ua/translationUA';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: translationEN,
      },
      ua: {
        translation: translationUA,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;