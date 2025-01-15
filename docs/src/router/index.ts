import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import Home from '@/pages/Home.vue';
import Component from '@/pages/Component.vue';
import Cli from '@/pages/Cli.vue';
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
    redirect: '/component/vue-picker',
    children: [
      {
        path: 'vue-picker',
        name: 'component-vue-picker',
        component: () => import('@/components/component/vue/VuePicker.vue'),
        meta: {
          title: 'Picker',
          group: 'Vue',
        },
      },
      {
        path: 'vue-pdf-canvas',
        name: 'component-vue-pdf-canvas',
        component: () => import('@/components/component/vue/VuePdfCanvas.vue'),
        meta: {
          title: 'PDF Canvas',
          group: 'Vue',
        },
      },

      {
        path: 'react-picker',
        name: 'component-react-picker',
        component: () => import('@/components/component/react/ReactPicker.vue'),
        meta: {
          title: 'Picker',
          group: 'React',
        },
      },
      {
        path: 'react-pdf-canvas',
        name: 'component-react-pdf-canvas',
        component: () => import('@/components/component/react/ReactPdfCanvas.vue'),
        meta: {
          title: 'PDF Canvas',
          group: 'React',
        },
      },
    ],
  },
  {
    path: '/cli',
    name: 'cli',
    component: Cli,
    redirect: '/cli/create-app',
    children: [
      {
        path: 'create-app',
        name: 'cli-create-app',
        component: () => import('@/components/cli/CreateApp.vue'),
        meta: {
          title: 'Create App',
          group: 'Scaffold',
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
