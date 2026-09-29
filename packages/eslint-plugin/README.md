# @component-hook/eslint-plugin

A opinionated ESLint config preset for `JavaScript`, `TypeScript`, `Vue3`, `React`, `Prettier` and `oxfmt`.

<p>
  <a href="https://npm-stat.com/charts.html?package=@component-hook/eslint-plugin">
    <img src="https://img.shields.io/npm/dm/@component-hook/eslint-plugin.svg" alt="npm"/>
  </a>
  <a href="https://www.npmjs.com/package/@component-hook/eslint-plugin">
    <img src="https://img.shields.io/npm/v/@component-hook/eslint-plugin.svg" alt="npm"/>
  </a>
</p>

## Features

- Support `TypeScript`, `Vue3` and `React` out-of-box.
- Format with `Prettier` or [`oxfmt`](https://oxc.rs/docs/guide/usage/formatter).
- Ignores common files like `dist`, `node_modules`, `coverage`, and files in `.gitignore`.
- Various built-in configurations can be referenced according to respective needs.
- Reasonable defaults, best practices, and just a few lines of configuration.

## Documentation

For detailed documentation and usage examples, please visit: [Official Docs](https://tzuyi0817.github.io/component-hook/#/eslint/plugin).

## Installation

```bash
# Using npm
$ npm install @component-hook/eslint-plugin --save-dev

# Using yarn
$ yarn add @component-hook/eslint-plugin --dev

# Using pnpm
$ pnpm install @component-hook/eslint-plugin --save-dev
```

> **Compatibility Note:**
>
> Require ESLint >= 9.0.0
>
> This package is ESM only because several bundled plugins are ESM only. Write your config as `eslint.config.js` in a `"type": "module"` project or as `eslint.config.mjs`. On Node.js 20.19+ / 22.12+ `require()` still works through `require(esm)`, and the plugin is exposed on the `default` property.

## Basic Usage

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

See [basic](./index.ts) and [ignores](./configs/ignores.ts) for more details.

## React Presets Usage

Includes `basic`, `react`, `markdown`, `prettier`, `sonarjs`, `security` configs.

```js
import { reactPreset } from '@component-hook/eslint-plugin';

export default reactPreset;
```

## Vue Presets Usage

Includes `basic`, `vue`, `markdown`, `prettier`, `sonarjs`, `security` configs.

```js
import { vuePreset } from '@component-hook/eslint-plugin';

export default vuePreset;
```

## Formatting with oxfmt

Use `configs.oxfmt` instead of `configs.prettier` to format with [oxfmt](https://oxc.rs/docs/guide/usage/formatter). It discovers `.oxfmtrc.json` (or other oxfmt config files) the same way as the oxfmt CLI, and turns off the stylistic rules that conflict with the formatter.

oxfmt also sorts top-level `package.json` keys by default (`sortPackageJson`), so the preset no longer orders them itself; it still sorts nested fields oxfmt leaves alone, such as `exports` conditions and dependency maps. If you stay on `configs.prettier` and still want `package.json` sorted, add [`prettier-plugin-packagejson`](https://github.com/matzkoh/prettier-plugin-packagejson), which uses the same `sort-package-json` order as oxfmt.

`oxfmt` >= 0.71.0 is a peer dependency. Most package managers install it automatically; otherwise add it yourself:

```bash
$ pnpm add -D oxfmt
```

```js
import componentHookPlugin from '@component-hook/eslint-plugin';

export default [
  ...componentHookPlugin.configs.basic,
  ...componentHookPlugin.configs.vue,
  componentHookPlugin.configs.oxfmt,
  // your custom config
];
```

## Configs

| Name                    | Type              | Reference                                                                                                                                                                                                                                                                        |
| ----------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| basic                   | `Linter.Config[]` | `eslint-recommended`, `typescript-eslint`, `eslint-plugin-eslint-comments`, `eslint-plugin-import`, `eslint-plugin-unicorn`, `eslint-plugin-jsdoc`, `eslint-plugin-regexp`, `eslint-plugin-de-morgan`, `eslint-plugin-perfectionist`, `eslint-plugin-jsonc`, `eslint-plugin-yml` |
| vue                     | `Linter.Config[]` | `eslint-plugin-vue`, `typescript-eslint`                                                                                                                                                                                                                                         |
| react                   | `Linter.Config[]` | `eslint-plugin-react/recommended`, `eslint-plugin-react-hooks/recommended`, `eslint-plugin-jsx-a11y/recommended`                                                                                                                                                                 |
| markdown                | `Linter.Config[]` | `@eslint/markdown`                                                                                                                                                                                                                                                               |
| prettier                | `Linter.Config`   | `eslint-plugin-prettier/recommended`                                                                                                                                                                                                                                             |
| oxfmt                   | `Linter.Config`   | `eslint-plugin-oxfmt`, `eslint-config-prettier`                                                                                                                                                                                                                                  |
| sonarjs                 | `Linter.Config[]` | `eslint-plugin-sonarjs/recommended`                                                                                                                                                                                                                                              |
| security                | `Linter.Config`   | `eslint-plugin-security/recommended`                                                                                                                                                                                                                                             |
| playwright              | `Linter.Config`   | `eslint-plugin-playwright/flat/recommended`                                                                                                                                                                                                                                      |
| testing-library/dom     | `Linter.Config`   | `eslint-plugin-testing-library/dom`                                                                                                                                                                                                                                              |
| testing-library/vue     | `Linter.Config`   | `eslint-plugin-testing-library/vue`                                                                                                                                                                                                                                              |
| testing-library/react   | `Linter.Config`   | `eslint-plugin-testing-library/react`                                                                                                                                                                                                                                            |
| testing-library/angular | `Linter.Config`   | `eslint-plugin-testing-library/angular`                                                                                                                                                                                                                                          |
| testing-library/marko   | `Linter.Config`   | `eslint-plugin-testing-library/marko`                                                                                                                                                                                                                                            |

## Reference eslint plugin

- [eslint-recommended](https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-eslint-comments](https://github.com/eslint-community/eslint-plugin-eslint-comments/blob/main/lib/configs/recommended.js)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-regexp/flat/recommended](https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/configs/flat/recommended.ts)
- [eslint-plugin-de-morgan](https://github.com/azat-io/eslint-plugin-de-morgan/blob/main/index.ts)
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
- [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc/blob/master/lib/configs/recommended-with-jsonc.ts)
- [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)
- [eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml)
- [eslint-plugin-prettier/recommended](https://github.com/prettier/eslint-plugin-prettier/blob/master/recommended.js)
- [eslint-plugin-oxfmt](https://github.com/ntnyq/eslint-plugin-oxfmt)
- [eslint-plugin-react/recommended](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/configs/recommended.js)
- [eslint-plugin-react-hooks/recommended](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js)
- [eslint-plugin-jsx-a11y/recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/src/index.js)
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
- [@eslint/markdown](https://github.com/eslint/markdown/blob/main/src/index.js)
- [eslint-plugin-sonarjs/recommended](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/src/index.ts)
- [eslint-plugin-security/recommended](https://github.com/eslint-community/eslint-plugin-security/blob/main/index.js)
- [eslint-plugin-testing-library/dom](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/dom.ts)
- [eslint-plugin-testing-library/vue](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/vue.ts)
- [eslint-plugin-testing-library/react](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/react.ts)
- [eslint-plugin-testing-library/angular](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/angular.ts)
- [eslint-plugin-testing-library/marko](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/lib/configs/marko.ts)
- [eslint-plugin-playwright/flat/recommended](https://github.com/playwright-community/eslint-plugin-playwright/blob/main/src/index.ts)
