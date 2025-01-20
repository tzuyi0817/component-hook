## ESLint Plugin

A opinionated ESLint config preset for `JavaScript`, `TypeScript`, `Vue`, and `Prettier`.

### Installation

::: group

```bash [npm]
$ npm install @component-hook/eslint-plugin --save-dev
```

```bash [yarn]
$ yarn add @component-hook/eslint-plugin --dev
```

```bash [pnpm]
$ pnpm install @component-hook/eslint-plugin --save-dev
```

:::

Require `ESLint` >= 9.0.0

### Basic Usage

Choose a packaged `ESLint` config reference based on your needs.

```js
import componentHookPlugin from '@component-hook/eslint-plugin';

export default [
  ...componentHookPlugin.configs.basic,
  ...componentHookPlugin.configs.vue,
  componentHookPlugin.configs.prettier,
  ...componentHookPlugin.configs.sonarjs,
  componentHookPlugin.configs.security,
  ...componentHookPlugin.configs.markdown,
  {
    files: ['**/__tests__/unit/**/*.test.[jt]s?(x)'],
    ...componentHookPlugin.configs['testing-library/vue'],
  },
  {
    files: ['**/__tests__/e2e/**/*.spec.[jt]s?(x)'],
    ...componentHookPlugin.configs.playwright,
  },
  // your custom config
];
```

See [basic](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/index.ts) and
[ignores](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/ignores.ts) for more details.

### React Presets Usage

Includes `basic`, `react`, `markdown`, `prettier`, `sonarjs`, `security` configs.

```js
import { reactPreset } from '@component-hook/eslint-plugin';

export default reactPreset;
```

### Vue Presets Usage

Includes `basic`, `vue`, `markdown`, `prettier`, `sonarjs`, `security` configs.

```js
import { vuePreset } from '@component-hook/eslint-plugin';

export default vuePreset;
```

### Build-in Configs Reference

| Config                  | URL                                                                                                                                     | Plugin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| basic                   | [index.ts](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/index.ts)                                     | [eslint-recommended.js](https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js), [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint), [eslint-plugin-eslint-comments](https://github.com/eslint-community/eslint-plugin-eslint-comments/blob/main/lib/configs/recommended.js), [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import), [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn), [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/configs/flat/recommended.ts) |
| vue                     | [configs/vue.ts](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/vue.ts)                         | [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue), [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| react                   | [configs/react.ts](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/react.ts)                     | [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/configs/recommended.js), [eslint-plugin-react-hooks](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js), [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/src/index.js)                                                                                                                                                                                                                                                                              |
| prettier                | [configs/prettier.ts](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/prettier.ts)               | [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier/blob/master/recommended.js), [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/blob/main/index.js)                                                                                                                                                                                                                                                                                                                                                                                                                  |
| sonarjs                 | [configs/sonarjs.ts](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/sonarjs.ts)                 | [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/src/index.ts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| security                | [configs/security.ts](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/security.ts)               | [eslint-plugin-security](https://github.com/eslint-community/eslint-plugin-security/blob/main/index.js)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| markdown                | [configs/markdown.ts](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/markdown.ts)               | [eslint-plugin-markdown](https://github.com/eslint/markdown/blob/main/src/index.js)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| playwright              | [configs/playwright.ts](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/playwright.ts)           | [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/src/index.ts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| testing-library/dom     | [configs/testing-library.ts](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/testing-library.ts) | [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/dom.ts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| testing-library/react   | [configs/testing-library.ts](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/testing-library.ts) | [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/react.ts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| testing-library/vue     | [configs/testing-library.ts](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/testing-library.ts) | [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/vue.ts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| testing-library/angular | [configs/testing-library.ts](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/testing-library.ts) | [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/angular.ts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| testing-library/marko   | [configs/testing-library.ts](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/testing-library.ts) | [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/marko.ts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Build-in Configs Type

| Name                    | Type              |
| ----------------------- | ----------------- |
| basic                   | `Linter.Config[]` |
| vue                     | `Linter.Config[]` |
| react                   | `Linter.Config[]` |
| prettier                | `Linter.Config`   |
| sonarjs                 | `Linter.Config[]` |
| security                | `Linter.Config`   |
| markdown                | `Linter.Config[]` |
| playwright              | `Linter.Config`   |
| testing-library/dom     | `Linter.Config`   |
| testing-library/vue     | `Linter.Config`   |
| testing-library/react   | `Linter.Config`   |
| testing-library/angular | `Linter.Config`   |
| testing-library/marko   | `Linter.Config`   |
