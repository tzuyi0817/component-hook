import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import { allRoutes } from './modules';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: '/home',
  },
  ...allRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
