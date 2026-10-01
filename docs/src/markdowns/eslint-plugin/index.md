## ESLint Plugin

A opinionated ESLint config preset for `JavaScript`, `TypeScript`, `Vue`, `Prettier` and `oxfmt`.

Prefer [oxlint](https://oxc.rs/docs/guide/usage/linter)? [`@component-hook/oxlint-config`](/#/lint/oxlint-config) is generated from this preset.

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

```bash [bun]
$ bun install @component-hook/eslint-plugin --save-dev
```

:::

::: tip Compatibility Note

Require `ESLint` >= 9.0.0

This package is ESM only because several bundled plugins are ESM only. Write your config as `eslint.config.js` in a `"type": "module"` project or as `eslint.config.mjs`. On Node.js 20.19+ / 22.12+ `require()` still works through `require(esm)`, and the plugin is exposed on the `default` property.

:::

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
    files: ['**/*.test.[jt]s?(x)'],
    ...componentHookPlugin.configs['testing-library/vue'],
  },
  {
    files: ['**/e2e/**/*.spec.[jt]s?(x)'],
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

### Formatting with oxfmt

Use `configs.oxfmt` instead of `configs.prettier` to format with [oxfmt](https://oxc.rs/docs/guide/usage/formatter). It discovers `.oxfmtrc.json` (or other oxfmt config files) the same way as the oxfmt CLI, and turns off the stylistic rules that conflict with the formatter.

oxfmt also sorts top-level `package.json` keys by default (`sortPackageJson`), so the preset no longer orders them itself; it still sorts nested fields oxfmt leaves alone, such as `exports` conditions and dependency maps. If you stay on `configs.prettier` and still want `package.json` sorted, add [`prettier-plugin-packagejson`](https://github.com/matzkoh/prettier-plugin-packagejson), which uses the same `sort-package-json` order as oxfmt.

`oxfmt` >= 0.71.0 is a peer dependency. Most package managers install it automatically; otherwise add it yourself.

```js
import componentHookPlugin from '@component-hook/eslint-plugin';

export default [
  ...componentHookPlugin.configs.basic,
  ...componentHookPlugin.configs.vue,
  componentHookPlugin.configs.oxfmt,
  // your custom config
];
```

### Build-in Configs Reference

| Config                  | URL                                           | Plugin                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| basic                   | [index.ts][basic]                             | [`eslint`][eslint]<br>[`typescript-eslint`][typescript]<br>[`eslint-plugin-eslint-comments`][comments]<br>[`eslint-plugin-import`][import]<br>[`eslint-plugin-unicorn`][unicorn]<br>[`eslint-plugin-jsdoc`][jsdoc]<br>[`eslint-plugin-regexp`][regexp]<br>[`eslint-plugin-de-morgan`][de-morgan]<br>[`eslint-plugin-perfectionist`][perfectionist]<br>[`eslint-plugin-jsonc`][jsonc]<br>[`eslint-plugin-yml`][yml] |
| vue                     | [configs/vue.ts][vue]                         | [`eslint-plugin-vue`][eslint-vue]                                                                                                                                                                                                                                                                                                                                                                                  |
| react                   | [configs/react.ts][react]                     | [`eslint-plugin-react`][eslint-react]<br>[`eslint-plugin-react-hooks`][eslint-react-hooks]<br>[`eslint-plugin-jsx-a11y`][eslint-jsx-a11y]                                                                                                                                                                                                                                                                          |
| prettier                | [configs/prettier.ts][prettier]               | [`eslint-plugin-prettier`][eslint-prettier]                                                                                                                                                                                                                                                                                                                                                                        |
| oxfmt                   | [configs/oxfmt/index.ts][oxfmt]               | [`eslint-plugin-oxfmt`][eslint-oxfmt]                                                                                                                                                                                                                                                                                                                                                                              |
| sonarjs                 | [configs/sonarjs.ts][sonarjs]                 | [`eslint-plugin-sonarjs`][eslint-sonarjs]                                                                                                                                                                                                                                                                                                                                                                          |
| security                | [configs/security.ts][security]               | [`eslint-plugin-security`][eslint-security]                                                                                                                                                                                                                                                                                                                                                                        |
| markdown                | [configs/markdown.ts][markdown]               | [`@eslint/markdown`][eslint-markdown]                                                                                                                                                                                                                                                                                                                                                                              |
| playwright              | [configs/playwright.ts][playwright]           | [`eslint-plugin-playwright`][eslint-playwright]                                                                                                                                                                                                                                                                                                                                                                    |
| testing-library/dom     | [configs/testing-library.ts][testing-library] | [`eslint-plugin-testing-library`][testing-library/dom]                                                                                                                                                                                                                                                                                                                                                             |
| testing-library/react   | [configs/testing-library.ts][testing-library] | [`eslint-plugin-testing-library`][testing-library/react]                                                                                                                                                                                                                                                                                                                                                           |
| testing-library/vue     | [configs/testing-library.ts][testing-library] | [`eslint-plugin-testing-library`][testing-library/vue]                                                                                                                                                                                                                                                                                                                                                             |
| testing-library/angular | [configs/testing-library.ts][testing-library] | [`eslint-plugin-testing-library`][testing-library/angular]                                                                                                                                                                                                                                                                                                                                                         |
| testing-library/marko   | [configs/testing-library.ts][testing-library] | [`eslint-plugin-testing-library`][testing-library/marko]                                                                                                                                                                                                                                                                                                                                                           |

[basic]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/index.ts
[vue]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/vue.ts
[react]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/react.ts
[prettier]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/prettier.ts
[oxfmt]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/oxfmt/index.ts
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
[jsdoc]: https://github.com/gajus/eslint-plugin-jsdoc
[jsonc]: https://github.com/ota-meshi/eslint-plugin-jsonc/blob/master/lib/configs/recommended-with-jsonc.ts
[regexp]: https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/configs/flat/recommended.ts
[de-morgan]: https://github.com/azat-io/eslint-plugin-de-morgan/blob/main/index.ts
[perfectionist]: https://github.com/azat-io/eslint-plugin-perfectionist
[yml]: https://github.com/ota-meshi/eslint-plugin-yml
[eslint-vue]: https://github.com/vuejs/eslint-plugin-vue
[eslint-react]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/configs/recommended.js
[eslint-react-hooks]: https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js
[eslint-jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/src/index.js
[eslint-prettier]: https://github.com/prettier/eslint-plugin-prettier/blob/master/recommended.js
[eslint-oxfmt]: https://github.com/ntnyq/eslint-plugin-oxfmt
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
| oxfmt                   | `Linter.Config`   |
| sonarjs                 | `Linter.Config[]` |
| security                | `Linter.Config`   |
| markdown                | `Linter.Config[]` |
| playwright              | `Linter.Config`   |
| testing-library/dom     | `Linter.Config`   |
| testing-library/vue     | `Linter.Config`   |
| testing-library/react   | `Linter.Config`   |
| testing-library/angular | `Linter.Config`   |
| testing-library/marko   | `Linter.Config`   |
