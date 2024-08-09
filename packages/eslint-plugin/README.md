# @component-hook/eslint-plugin

A opinionated ESLint config preset for JavaScript, TypeScript, Vue,
and Prettier.

<p>
  <a href="https://npm-stat.com/charts.html?package=@component-hook/picker">
    <img src="https://img.shields.io/npm/dm/@component-hook/eslint-plugin.svg" alt="npm"/>
  </a>
  <a href="https://www.npmjs.com/package/@component-hook/picker">
    <img src="https://img.shields.io/npm/v/@component-hook/eslint-plugin.svg" alt="npm"/>
  </a>
</p>

## Features

- Support TypeScript, Vue and React out-of-box
- Support Sonarjs, Security, Playwright and Testing-library...
- Format with Prettier.
- Ignores common files like `dist`, `node_modules`, `coverage`, and files in `.gitignore`.

## Installation

```bash
$ npm install @component-hook/eslint-plugin

# or use yarn
$ yarn add @component-hook/eslint-plugin

# or use pnpm
$ pnpm install @component-hook/eslint-plugin
```

Require ESLint >= 9.0.0

## Basic Usage

```js
import componentHookPlugin from '@component-hook/eslint-plugin';

export default [
  ...componentHookPlugin.configs.recommended,
  ...componentHookPlugin.configs.vue,
  componentHookPlugin.configs.sonarjs,
  componentHookPlugin.configs.security,
  {
    files: ['**/__tests__/unit/**/*.test.[jt]s?(x)'],
    ...componentHookPlugin.configs['testing-library/vue'],
  },
  {
    files: ['**/__tests__/e2e/**/*.spec.[jt]s?(x)'],
    ...componentHookPlugin.configs.playwright,
  },
];
```

See [recommended](./index.ts) for more details.

## Configs

| Name                    | Type              | References                                                                                                             |
| ----------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| recommended             | `Linter.Config[]` | `eslint-recommended`, `typescript-eslint`, `eslint-plugin-import`, `eslint-plugin-regexp` and `eslint-plugin-prettier` |
| vue                     | `Linter.Config[]` | `eslint-plugin-vue`                                                                                                    |
| react                   | `Linter.Config`   | `eslint-plugin-react/recommended`                                                                                      |
| sonarjs                 | `Linter.Config`   | `eslint-plugin-sonarjs/recommended`                                                                                    |
| security                | `Linter.Config`   | `eslint-plugin-security/recommended`                                                                                   |
| playwright              | `Linter.Config`   | `eslint-plugin-playwright/flat/recommended`                                                                            |
| testing-library/dom     | `Linter.Config`   | `eslint-plugin-testing-library/dom`                                                                                    |
| testing-library/vue     | `Linter.Config`   | `eslint-plugin-testing-library/vue`                                                                                    |
| testing-library/react   | `Linter.Config`   | `eslint-plugin-testing-library/react`                                                                                  |
| testing-library/angular | `Linter.Config`   | `eslint-plugin-testing-library/angular`                                                                                |
| testing-library/marko   | `Linter.Config`   | `eslint-plugin-testing-library/marko`                                                                                  |

## Eslint Plugin References

- [eslint-recommended](https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-regexp/flat/recommended](https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/configs/flat/recommended.ts)
- [eslint-plugin-prettier/recommended](https://github.com/prettier/eslint-plugin-prettier/blob/master/recommended.js)
- [eslint-plugin-react/recommended](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/configs/recommended.js)
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
- [eslint-plugin-sonarjs/recommended](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/src/index.ts)
- [eslint-plugin-security/recommended](https://github.com/eslint-community/eslint-plugin-security/blob/main/index.js)
- [eslint-plugin-testing-library/dom](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/dom.ts)
- [eslint-plugin-testing-library/vue](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/vue.ts)
- [eslint-plugin-testing-library/react](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/react.ts)
- [eslint-plugin-testing-library/angular](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/angular.ts)
- [eslint-plugin-testing-library/marko](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/marko.ts)
- [eslint-plugin-playwright/flat/recommended](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/src/index.ts)
