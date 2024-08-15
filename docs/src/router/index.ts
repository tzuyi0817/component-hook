import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import Home from '@/pages/Home.vue';
import Component from '@/pages/Component.vue';
import Eslint from '@/pages/Eslint.vue';

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
    path: '/component',
    name: 'component',
    component: Component,
    redirect: '/component/picker',
    children: [
      {
        path: 'picker',
        name: 'component-picker',
        component: () => import('@/components/component/ComponentPicker.vue'),
        meta: {
          title: 'Picker',
        },
      },
      {
        path: 'pdf-canvas',
        name: 'component-pdf-canvas',
        component: () => import('@/components/component/ComponentPdfCanvas.vue'),
        meta: {
          title: 'PDF Canvas',
        },
      },
    ],
  },
  {
    path: '/eslint',
    name: 'eslint',
    component: Eslint,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
