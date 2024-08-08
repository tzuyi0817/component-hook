import componentHookPlugin from '@component-hook/eslint-plugin';

export default [
  ...componentHookPlugin.configs.recommended,
  ...componentHookPlugin.configs.vue,
  ...componentHookPlugin.configs.sonarjs,
  ...componentHookPlugin.configs.security,
  {
    files: ['**/__tests__/unit/**/*.test.[jt]s?(x)'],
    ...componentHookPlugin.configs['testing-library/vue'],
  },
  {
    files: ['**/__tests__/e2e/**/*.spec.[jt]s?(x)'],
    ...componentHookPlugin.configs.playwright,
  },
];
