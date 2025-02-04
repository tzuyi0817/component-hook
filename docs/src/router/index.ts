import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import SidebarContainer from '@/components/layout/SidebarContainer.vue';
import Home from '@/pages/Home.vue';

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
    component: SidebarContainer,
    redirect: '/component/vue-picker',
    children: [
      {
        path: 'vue-picker',
        name: 'component-vue-picker',
        component: () => import('@/pages/component/vue/VuePicker.vue'),
        meta: {
          title: 'Picker',
          group: 'Vue',
        },
      },
      {
        path: 'vue-date-picker',
        name: 'component-vue-date-picker',
        component: () => import('@/pages/component/vue/VueDatePicker.vue'),
        meta: {
          title: 'Date Picker',
          group: 'Vue',
        },
      },
      {
        path: 'vue-time-picker',
        name: 'component-vue-time-picker',
        component: () => import('@/pages/component/vue/VueTimePicker.vue'),
        meta: {
          title: 'Time Picker',
          group: 'Vue',
        },
      },
      {
        path: 'vue-pdf-canvas',
        name: 'component-vue-pdf-canvas',
        component: () => import('@/pages/component/vue/VuePdfCanvas.vue'),
        meta: {
          title: 'PDF Canvas',
          group: 'Vue',
        },
      },

      {
        path: 'react-picker',
        name: 'component-react-picker',
        component: () => import('@/pages/component/react/ReactPicker.vue'),
        meta: {
          title: 'Picker',
          group: 'React',
        },
      },
      {
        path: 'react-date-picker',
        name: 'component-react-date-picker',
        component: () => import('@/pages/component/react/ReactDatePicker.vue'),
        meta: {
          title: 'Date Picker',
          group: 'React',
        },
      },
      {
        path: 'react-pdf-canvas',
        name: 'component-react-pdf-canvas',
        component: () => import('@/pages/component/react/ReactPdfCanvas.vue'),
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
    component: SidebarContainer,
    redirect: '/cli/create-app',
    children: [
      {
        path: 'create-app',
        name: 'cli-create-app',
        component: () => import('@/pages/cli/CreateApp.vue'),
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
    component: SidebarContainer,
    redirect: '/eslint/plugin',
    children: [
      {
        path: 'plugin',
        name: 'eslint-plugin',
        component: () => import('@/pages/eslint/Plugin.vue'),
        meta: {
          title: 'Plugin',
          group: 'ESLint',
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
