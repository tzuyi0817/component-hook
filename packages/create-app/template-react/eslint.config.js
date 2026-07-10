import componentHookPlugin from '@component-hook/eslint-plugin';

export default [
  ...componentHookPlugin.configs.basic,
  ...componentHookPlugin.configs.react,
  componentHookPlugin.configs.prettier,
  ...componentHookPlugin.configs.sonarjs,
  componentHookPlugin.configs.security,
  ...componentHookPlugin.configs.markdown,
  {
    files: ['**/*.test.[jt]s?(x)'],
    ...componentHookPlugin.configs['testing-library/react'],
  },
  {
    files: ['**/e2e/**/*.spec.[jt]s?(x)'],
    ...componentHookPlugin.configs.playwright,
  },
];
