import componentHookPlugin from '@component-hook/eslint-plugin';

export default [
  ...componentHookPlugin.configs.basic,
  ...componentHookPlugin.configs.vue,
  ...componentHookPlugin.configs.react,
  componentHookPlugin.configs.prettier,
  ...componentHookPlugin.configs.sonarjs,
  componentHookPlugin.configs.security,
  ...componentHookPlugin.configs.markdown,
  {
    files: ['**/__tests__/unit/**/*.test.[jt]s?(x)'],
    ...componentHookPlugin.configs['testing-library/vue'],
  },
  {
    files: ['**/__tests__/unit/**/*.test.[jt]s?(x)'],
    ...componentHookPlugin.configs['testing-library/react'],
  },
  {
    files: ['**/__tests__/e2e/**/*.spec.[jt]s?(x)'],
    ...componentHookPlugin.configs.playwright,
  },
  {
    files: ['**/__tests__/unit/**/*.test.[jt]s?(x)'],
    rules: {
      'testing-library/no-node-access': 'off',
    },
  },
  {
    rules: {
      'unicorn/prefer-blob-reading-methods': 'warn',
    },
  },
  {
    files: ['**/*.[jt]s?(x)'],
    rules: {
      'react-hooks/refs': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/purity': 'warn',
    },
  },
  {
    ignores: ['**/typegen/**.ts'],
  },
];
