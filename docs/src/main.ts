import { createApp } from 'vue';
import App from '@/App.vue';

import router from '@/router';
import 'virtual:svg-icons-register';
import '@/styles/index.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
