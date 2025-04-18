import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/home/index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'Vue3 Coding Standards',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
