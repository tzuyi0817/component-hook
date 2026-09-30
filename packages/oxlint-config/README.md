# @component-hook/oxlint-config

A shareable [oxlint](https://oxc.rs/docs/guide/usage/linter) config derived from [`@component-hook/eslint-plugin`](https://github.com/tzuyi0817/component-hook/tree/master/packages/eslint-plugin).

<p>
  <a href="https://npm-stat.com/charts.html?package=@component-hook/oxlint-config">
    <img src="https://img.shields.io/npm/dm/@component-hook/oxlint-config.svg" alt="npm"/>
  </a>
  <a href="https://www.npmjs.com/package/@component-hook/oxlint-config">
    <img src="https://img.shields.io/npm/v/@component-hook/oxlint-config.svg" alt="npm"/>
  </a>
</p>

## Features

- Same rules as `@component-hook/eslint-plugin`: every rule oxlint implements is generated from the ESLint preset at build time, so nothing is maintained twice.
- Adds oxlint's own `oxc` correctness rules that have no ESLint counterpart.
- Zero runtime dependencies. Install it together with `oxlint` and pick one linter: ESLint with the plugin, or oxlint with this config.
- Ships both a TypeScript config object and JSON files for `.oxlintrc.json`.

## Documentation

For detailed documentation and usage examples, please visit: [Official Docs](https://tzuyi0817.github.io/component-hook/#/lint/oxlint-config).

## Installation

```bash
# Using npm
$ npm install oxlint @component-hook/oxlint-config --save-dev

# Using yarn
$ yarn add oxlint @component-hook/oxlint-config --dev

# Using pnpm
$ pnpm install oxlint @component-hook/oxlint-config --save-dev
```

> **Compatibility Note:**
>
> Require oxlint >= 1.86.0. `oxlint` is an optional peer dependency, add it yourself as shown above.

## Usage with `oxlint.config.ts`

```ts
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

## Usage with `.oxlintrc.json`

`extends` in JSON only accepts file paths, so point it at the JSON files shipped in `dist`:

```jsonc
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": [
    "./node_modules/@component-hook/oxlint-config/dist/basic.json",
    "./node_modules/@component-hook/oxlint-config/dist/react.json",
  ],
  "ignorePatterns": ["**/node_modules", "**/dist", "**/coverage"],
}
```

## Configs

| Name             | Derived from                   | Plugins                                                     |
| ---------------- | ------------------------------ | ----------------------------------------------------------- |
| `basic`          | `configs.basic`                | `eslint`, `typescript`, `import`, `unicorn`, `jsdoc`, `oxc` |
| `react`          | `configs.react`                | `react` (including hooks), `jsx-a11y`                       |
| `vue`            | `configs.vue`                  | `typescript` rules inside the `<script>` block of `.vue`    |
| `ignorePatterns` | `configs.basic` global ignores |                                                             |

`react` and `vue` are meant to be extended together with `basic`.

## What oxlint adds

- All `oxc` rules in the `correctness` category (`oxc/bad-min-max-func`, `oxc/missing-throw`, `oxc/uninvoked-array-callback`, ...). They are read from the installed oxlint at build time, so a new oxlint release only needs a rebuild.
- Preset rules that oxlint implements under another name, for example `unicorn/no-double-comparison` → `oxc/double-comparisons`, and the `const enum` / label bans of `no-restricted-syntax` → `oxc/no-const-enum` / `no-labels`.

## What stays ESLint only

oxlint has no implementation for these parts of the preset, so choose ESLint if you need them:

- `vue/*` rules that need template parsing ([oxc#15761](https://github.com/oxc-project/oxc/issues/15761)). oxlint still lints the `<script>` block of `.vue` files, except `no-unused-vars` and `consistent-type-imports` which cannot see template usage.
- `.json`, `.yml` and Markdown code blocks (`eslint-plugin-jsonc`, `eslint-plugin-yml`, `@eslint/markdown`).
- `eslint-plugin-sonarjs`, `eslint-plugin-regexp`, `eslint-plugin-security`, `eslint-plugin-de-morgan`, `eslint-plugin-eslint-comments`, `eslint-plugin-perfectionist`, `eslint-plugin-playwright`, `eslint-plugin-testing-library`.
- `no-restricted-syntax` for `ForInStatement`, and a few `unicorn` / `jsdoc` rules oxlint has not implemented.
- `settings.react.version: 'detect'` is not supported; oxlint assumes the latest React unless you set `settings.react.version` in the root config.

Type-aware rules are not enabled on either side.
