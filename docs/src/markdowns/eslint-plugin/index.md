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

See [basic][basic] and [ignores](https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/ignores.ts) for more details.

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

| Config                  | URL                                           | Plugin                                                                                                                                                                                                                                                         |
| ----------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| basic                   | [index.ts][basic]                             | [`eslint`][eslint]<br>[`typescript-eslint`][typescript]<br>[`eslint-plugin-eslint-comments`][comments]<br>[`eslint-plugin-import`][import]<br>[`eslint-plugin-unicorn`][unicorn]<br>[`eslint-plugin-regexp`][regexp]<br>[`eslint-plugin-de-morgan`][de-morgan] |
| vue                     | [configs/vue.ts][vue]                         | [`eslint-plugin-vue`][eslint-vue]                                                                                                                                                                                                                              |
| react                   | [configs/react.ts][react]                     | [`eslint-plugin-react`][eslint-react]<br>[`eslint-plugin-react-hooks`][eslint-react-hooks]<br>[`eslint-plugin-jsx-a11y`][eslint-jsx-a11y]                                                                                                                      |
| prettier                | [configs/prettier.ts][prettier]               | [`eslint-plugin-prettier`][eslint-prettier]                                                                                                                                                                                                                    |
| sonarjs                 | [configs/sonarjs.ts][sonarjs]                 | [`eslint-plugin-sonarjs`][eslint-sonarjs]                                                                                                                                                                                                                      |
| security                | [configs/security.ts][security]               | [`eslint-plugin-security`][eslint-security]                                                                                                                                                                                                                    |
| markdown                | [configs/markdown.ts][markdown]               | [`eslint-plugin-markdown`][eslint-markdown]                                                                                                                                                                                                                    |
| playwright              | [configs/playwright.ts][playwright]           | [`eslint-plugin-playwright`][eslint-playwright]                                                                                                                                                                                                                |
| testing-library/dom     | [configs/testing-library.ts][testing-library] | [`eslint-plugin-testing-library`][testing-library/dom]                                                                                                                                                                                                         |
| testing-library/react   | [configs/testing-library.ts][testing-library] | [`eslint-plugin-testing-library`][testing-library/react]                                                                                                                                                                                                       |
| testing-library/vue     | [configs/testing-library.ts][testing-library] | [`eslint-plugin-testing-library`][testing-library/vue]                                                                                                                                                                                                         |
| testing-library/angular | [configs/testing-library.ts][testing-library] | [`eslint-plugin-testing-library`][testing-library/angular]                                                                                                                                                                                                     |
| testing-library/marko   | [configs/testing-library.ts][testing-library] | [`eslint-plugin-testing-library`][testing-library/marko]                                                                                                                                                                                                       |

[basic]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/index.ts
[vue]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/vue.ts
[react]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/react.ts
[prettier]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/prettier.ts
[sonarjs]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/sonarjs.ts
[security]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/security.ts
[markdown]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/markdown.ts
[playwright]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/playwright.ts
[testing-library]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/testing-library.ts
[eslint]: https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
[typescript]: https://github.com/typescript-eslint/typescript-eslint
[comments]: https://github.com/eslint-community/eslint-plugin-eslint-comments/blob/main/lib/configs/recommended.js
[import]: https://github.com/import-js/eslint-plugin-import
[unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn
[regexp]: https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/configs/flat/recommended.ts
[de-morgan]: https://github.com/azat-io/eslint-plugin-de-morgan/blob/main/index.ts
[eslint-vue]: https://github.com/vuejs/eslint-plugin-vue
[eslint-react]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/configs/recommended.js
[eslint-react-hooks]: https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js
[eslint-jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/src/index.js
[eslint-prettier]: https://github.com/prettier/eslint-plugin-prettier/blob/master/recommended.js
[eslint-sonarjs]: https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/src/index.ts
[eslint-security]: https://github.com/eslint-community/eslint-plugin-security/blob/main/index.js
[eslint-markdown]: https://github.com/eslint/markdown/blob/main/src/index.js
[eslint-playwright]: https://github.com/playwright-community/eslint-plugin-playwright/blob/main/src/index.ts
[testing-library/dom]: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/dom.ts
[testing-library/react]: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/react.ts
[testing-library/vue]: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/vue.ts
[testing-library/angular]: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/angular.ts
[testing-library/marko]: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/marko.ts

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
