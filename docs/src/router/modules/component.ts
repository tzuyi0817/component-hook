import { SidebarContainer } from '@/components/layout';
import type { RouteRecordRaw } from 'vue-router';

export const componentRoutes: Array<RouteRecordRaw> = [
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
        path: 'react-time-picker',
        name: 'component-react-time-picker',
        component: () => import('@/pages/component/react/ReactTimePicker.vue'),
        meta: {
          title: 'Time Picker',
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
];
