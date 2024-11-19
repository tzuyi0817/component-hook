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
    redirect: '/component/vue',
    children: [
      {
        path: 'vue',
        redirect: '/component/vue/picker',
        meta: {
          title: 'Vue',
        },
        children: [
          {
            path: 'picker',
            name: 'component-vue-picker',
            component: () => import('@/components/component/vue/VuePicker.vue'),
            meta: {
              title: 'Picker',
            },
          },
          {
            path: 'pdf-canvas',
            name: 'component-vue-pdf-canvas',
            component: () => import('@/components/component/vue/VuePdfCanvas.vue'),
            meta: {
              title: 'PDF Canvas',
            },
          },
        ],
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
