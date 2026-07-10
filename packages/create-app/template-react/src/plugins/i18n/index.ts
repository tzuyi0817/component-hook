import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUS from './locales/en-US.json' with { type: 'json' };
import zhTW from './locales/zh-TW.json' with { type: 'json' };

function setupI18n() {
  i18n.use(initReactI18next).init({
    lng: navigator.language,
    fallbackLng: 'en-US',
    resources: {
      'zh-TW': { translation: zhTW },
      'en-US': { translation: enUS },
    },
  });

  return i18n;
}

export default setupI18n();
