## Oxlint Config

A shareable [oxlint](https://oxc.rs/docs/guide/usage/linter) config derived from `@component-hook/eslint-plugin`.

Every rule oxlint implements is generated from the ESLint preset at build time, so the two packages share one set of rules. Pick one linter: ESLint with `@component-hook/eslint-plugin`, or oxlint with this package.

### Installation

::: group

```bash [npm]
$ npm install oxlint @component-hook/oxlint-config --save-dev
```

```bash [yarn]
$ yarn add oxlint @component-hook/oxlint-config --dev
```

```bash [pnpm]
$ pnpm install oxlint @component-hook/oxlint-config --save-dev
```

```bash [bun]
$ bun install oxlint @component-hook/oxlint-config --save-dev
```

:::

::: tip Compatibility Note

Require `oxlint` >= 1.86.0. `oxlint` is an optional peer dependency, add it yourself as shown above.

:::

### Usage with `oxlint.config.ts`

```js
import { basic, ignorePatterns, react } from '@component-hook/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [basic, react],
  ignorePatterns,
  env: {
    builtin: true,
    browser: true,
    node: true,
  },
  // your custom config
});
```

oxlint does not inherit `ignorePatterns`, `env`, `globals` or `settings` through `extends`, so set them in the root config. `ignorePatterns` mirrors the ignores of the ESLint preset.

### Usage with `.oxlintrc.json`

`extends` in JSON only accepts file paths, so point it at the JSON files shipped in `dist`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": [
    "./node_modules/@component-hook/oxlint-config/dist/basic.json",
    "./node_modules/@component-hook/oxlint-config/dist/react.json"
  ],
  "ignorePatterns": ["**/node_modules", "**/dist", "**/coverage"]
}
```

### Build-in Configs Reference

| Config         | Derived from                        | Plugin                                                                |
| -------------- | ----------------------------------- | --------------------------------------------------------------------- |
| basic          | [`configs.basic`][eslint-basic]     | `eslint`<br>`typescript`<br>`import`<br>`unicorn`<br>`jsdoc`<br>`oxc` |
| react          | [`configs.react`][eslint-react]     | `react` (including hooks)<br>`jsx-a11y`                               |
| vue            | [`configs.vue`][eslint-vue]         | `typescript` rules inside the `<script>` block of `.vue`              |
| ignorePatterns | [`configs.ignores`][eslint-ignores] |                                                                       |

`react` and `vue` are meant to be extended together with `basic`. The generated snapshots live in [generated][generated].

[eslint-basic]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/index.ts
[eslint-react]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/react.ts
[eslint-vue]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/vue.ts
[eslint-ignores]: https://github.com/tzuyi0817/component-hook/blob/master/packages/eslint-plugin/configs/ignores.ts
[generated]: https://github.com/tzuyi0817/component-hook/tree/master/packages/oxlint-config/generated

### What oxlint adds

- All `oxc` rules in the `correctness` category (`oxc/bad-min-max-func`, `oxc/missing-throw`, `oxc/uninvoked-array-callback`, ...). They are read from the installed oxlint at build time, so a new oxlint release only needs a rebuild.
- Preset rules that oxlint implements under another name, for example `unicorn/no-double-comparison` → `oxc/double-comparisons`, and the `const enum` / label bans of `no-restricted-syntax` → `oxc/no-const-enum` / `no-labels`.

### What stays ESLint only

oxlint has no implementation for these parts of the preset, so choose ESLint if you need them:

- `vue/*` rules that need template parsing ([oxc#15761](https://github.com/oxc-project/oxc/issues/15761)). oxlint still lints the `<script>` block of `.vue` files, except `no-unused-vars` and `consistent-type-imports` which cannot see template usage.
- `.json`, `.yml` and Markdown code blocks (`eslint-plugin-jsonc`, `eslint-plugin-yml`, `@eslint/markdown`).
- `eslint-plugin-sonarjs`, `eslint-plugin-regexp`, `eslint-plugin-security`, `eslint-plugin-de-morgan`, `eslint-plugin-eslint-comments`, `eslint-plugin-perfectionist`, `eslint-plugin-playwright`, `eslint-plugin-testing-library`.
- `no-restricted-syntax` for `ForInStatement`, and a few `unicorn` / `jsdoc` rules oxlint has not implemented.
- `settings.react.version: 'detect'` is not supported; oxlint assumes the latest React unless you set `settings.react.version` in the root config.

Type-aware rules are not enabled on either side.
