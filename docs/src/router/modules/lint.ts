import { SidebarContainer } from '@/components/layout';
import type { RouteRecordRaw } from 'vue-router';

export const lintRoutes: Array<RouteRecordRaw> = [
  {
    path: '/lint',
    name: 'lint',
    component: SidebarContainer,
    redirect: '/lint/plugin',
    children: [
      {
        path: 'plugin',
        name: 'eslint-plugin',
        component: () => import('@/pages/lint/Plugin.vue'),
        meta: {
          title: 'Plugin',
          group: 'ESLint',
        },
      },
      {
        path: 'oxlint-config',
        name: 'oxlint-config',
        component: () => import('@/pages/lint/OxlintConfig.vue'),
        meta: {
          title: 'Config',
          group: 'Oxlint',
        },
      },
    ],
  },
];
