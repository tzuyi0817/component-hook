import { createApp } from 'vue';
import i18NPlugin from '@/plugins/i18n';

import router from '@/router';
import App from './App.vue';
import { createPinia } from './stores';
import 'virtual:svg-icons-register';
import '@/styles/index.css';

if (import.meta.env.VITE_APP_MOCK === 'service-worker') {
  const { worker } = await import('@/mocks/browser');

  worker.start();
}

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(i18NPlugin);
app.mount('#app');
