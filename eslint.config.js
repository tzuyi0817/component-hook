import componentHookPlugin from '@component-hook/eslint-plugin';

export default [
  ...componentHookPlugin.configs.vue,
  ...componentHookPlugin.configs.sonarjs,
  ...componentHookPlugin.configs.security,
];
