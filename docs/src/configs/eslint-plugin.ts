export const BASE_URL = 'https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin';

const pluginTestingLibrary = 'eslint-plugin-testing-library';

export const CONFIGS_MAP = {
  basic: {
    url: `${BASE_URL}/index.ts`,
    plugins: [
      {
        name: 'eslint-recommended',
        url: 'https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js',
      },
      {
        name: 'typescript-eslint',
        url: 'https://github.com/typescript-eslint/typescript-eslint',
      },
      {
        name: 'eslint-plugin-eslint-comments',
        url: 'https://github.com/eslint-community/eslint-plugin-eslint-comments/blob/main/lib/configs/recommended.js',
      },
      {
        name: 'eslint-plugin-import',
        url: 'https://github.com/import-js/eslint-plugin-import',
      },
      {
        name: 'eslint-plugin-unicorn',
        url: 'https://github.com/sindresorhus/eslint-plugin-unicorn',
      },
      {
        name: 'eslint-plugin-regexp',
        url: 'https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/configs/flat/recommended.ts',
      },
    ],
  },
  vue: {
    url: `${BASE_URL}/configs/vue.ts`,
    plugins: [
      {
        name: 'eslint-plugin-vue',
        url: 'https://github.com/vuejs/eslint-plugin-vue',
      },
      {
        name: 'typescript-eslint',
        url: 'https://github.com/typescript-eslint/typescript-eslint',
      },
    ],
  },
  react: {
    url: `${BASE_URL}/configs/react.ts`,
    plugins: [
      {
        name: 'eslint-plugin-react',
        url: 'https://github.com/jsx-eslint/eslint-plugin-react/blob/master/configs/recommended.js',
      },
      {
        name: 'eslint-plugin-react-hooks',
        url: 'https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js',
      },
      {
        name: 'eslint-plugin-jsx-a11y',
        url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/src/index.js',
      },
    ],
  },
  prettier: {
    url: `${BASE_URL}/configs/prettier.ts`,
    plugins: [
      {
        name: 'eslint-plugin-prettier',
        url: 'https://github.com/prettier/eslint-plugin-prettier/blob/master/recommended.js',
      },
      {
        name: 'eslint-config-prettier',
        url: 'https://github.com/prettier/eslint-config-prettier/blob/main/index.js',
      },
    ],
  },
  sonarjs: {
    url: `${BASE_URL}/configs/sonarjs.ts`,
    plugins: [
      {
        name: 'eslint-plugin-sonarjs',
        url: 'https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/src/index.ts',
      },
    ],
  },
  security: {
    url: `${BASE_URL}/configs/security.ts`,
    plugins: [
      {
        name: 'eslint-plugin-security',
        url: 'https://github.com/eslint-community/eslint-plugin-security/blob/main/index.js',
      },
    ],
  },
  markdown: {
    url: `${BASE_URL}/configs/markdown.ts`,
    plugins: [
      {
        name: 'eslint-plugin-markdown',
        url: 'https://github.com/eslint/markdown/blob/main/src/index.js',
      },
    ],
  },
  playwright: {
    url: `${BASE_URL}/configs/playwright.ts`,
    plugins: [
      {
        name: 'eslint-plugin-playwright',
        url: 'https://github.com/playwright-community/eslint-plugin-playwright/blob/main/src/index.ts',
      },
    ],
  },
  'testing-library/dom': {
    url: `${BASE_URL}/configs/testing-library.ts`,
    plugins: [
      {
        name: pluginTestingLibrary,
        url: 'https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/dom.ts',
      },
    ],
  },
  'testing-library/react': {
    url: `${BASE_URL}/configs/testing-library.ts`,
    plugins: [
      {
        name: pluginTestingLibrary,
        url: 'https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/react.ts',
      },
    ],
  },
  'testing-library/vue': {
    url: `${BASE_URL}/configs/testing-library.ts`,
    plugins: [
      {
        name: pluginTestingLibrary,
        url: 'https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/vue.ts',
      },
    ],
  },
  'testing-library/angular': {
    url: `${BASE_URL}/configs/testing-library.ts`,
    plugins: [
      {
        name: pluginTestingLibrary,
        url: 'https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/angular.ts',
      },
    ],
  },
  'testing-library/marko': {
    url: `${BASE_URL}/configs/testing-library.ts`,
    plugins: [
      {
        name: pluginTestingLibrary,
        url: 'https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/marko.ts',
      },
    ],
  },
};
