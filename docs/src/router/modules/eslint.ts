import { SidebarContainer } from '@/components/layout';
import type { RouteRecordRaw } from 'vue-router';

export const eslintRoutes: Array<RouteRecordRaw> = [
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
