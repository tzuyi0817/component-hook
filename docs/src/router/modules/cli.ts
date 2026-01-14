import { SidebarContainer } from '@/components/layout';
import type { RouteRecordRaw } from 'vue-router';

export const cliRoutes: Array<RouteRecordRaw> = [
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
];
