import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import Home from '@/pages/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/picker',
    name: 'picker',
    component: () => import('@/pages/PickerPage.vue'),
  },
  {
    path: '/pdf-canvas',
    name: 'pdf-canvas',
    component: () => import('@/pages/PdfCanvasPage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
