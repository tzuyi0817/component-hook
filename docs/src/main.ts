import { createApp } from 'vue';
import 'virtual:svg-icons-register';

import '@/styles/tailwind.postcss';
import '@/styles/index.postcss';
import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

app.use(router);
app.mount('#app');
