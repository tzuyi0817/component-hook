import messages from '@intlify/unplugin-vue-i18n/messages';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: import.meta.env.MODE === 'test',
  locale: navigator.language,
  fallbackLocale: 'en-US',
  messages,
});

export default i18n;
