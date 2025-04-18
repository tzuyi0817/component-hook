import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import i18NPlugin from '@/plugins/i18n';

import router from '@/router';
import App from './App.vue';
import 'virtual:svg-icons-register';
import '@/styles/index.css';

if (import.meta.env.VITE_APP_MOCK === 'service-worker') {
  const { worker } = await import('@/mocks/browser');

  worker.start();
}

const pinia = createPinia();
const app = createApp(App);

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(i18NPlugin);
app.mount('#app');
