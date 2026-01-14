import Home from '@/pages/home/index.vue';
import type { RouteRecordRaw } from 'vue-router';

export const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
];
