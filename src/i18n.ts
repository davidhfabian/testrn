import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

void i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  resources: {
    en: {translation: {welcome: 'Welcome to React Native'}},
    es: {translation: {welcome: 'Bienvenido a React Native'}},
  },
});

export default i18n;
