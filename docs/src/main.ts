import { createApp } from 'vue';
import App from '@/App.vue';

import router from '@/router';
import 'virtual:svg-icons-register';
import '@/styles/vars.postcss';
import '@/styles/tailwind.postcss';
import '@/styles/index.postcss';

const app = createApp(App);

app.use(router);
app.mount('#app');
