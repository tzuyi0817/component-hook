import { createApp } from 'vue';

import '@/styles/tailwind.postcss';
import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

app.use(router);
app.mount('#app');
