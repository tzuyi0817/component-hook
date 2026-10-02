import { SidebarContainer } from '@/components/layout';
import type { RouteRecordRaw } from 'vue-router';

export const lintRoutes: Array<RouteRecordRaw> = [
  {
    path: '/lint',
    name: 'lint',
    component: SidebarContainer,
    redirect: '/lint/eslint-plugin',
    children: [
      {
        path: 'eslint-plugin',
        name: 'eslint-plugin',
        component: () => import('@/pages/lint/EslintPlugin.vue'),
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
  // 已發佈的 eslint-plugin README 仍連到舊的 /eslint/* 路徑
  {
    path: '/eslint/:pathMatch(.*)*',
    redirect: '/lint/eslint-plugin',
  },
];
