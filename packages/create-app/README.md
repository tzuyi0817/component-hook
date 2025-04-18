# @component-hook/create-app

Scaffolding a basic `typescript` project.

> **Compatibility Note:**
> Requires [Node.js](https://nodejs.org/en/) version 18+, 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

<p>
  <a href="https://npm-stat.com/charts.html?package=@component-hook/create-app">
    <img src="https://img.shields.io/npm/dm/@component-hook/create-app.svg" alt="npm"/>
  </a>
  <a href="https://www.npmjs.com/package/@component-hook/create-app">
    <img src="https://img.shields.io/npm/v/@component-hook/create-app.svg" alt="npm"/>
  </a>
</p>

## Create Project

```bash
$ npm create @component-hook/app@latest

# or use yarn
$ yarn create @component-hook/app

# or use pnpm
$ pnpm create @component-hook/app
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a project, run:

```bash
$ npm create @component-hook/app@latest basic-app -- --template vue

# yarn
$ yarn create @component-hook/app basic-app --template vue

# pnpm
$ pnpm create @component-hook/app basic-app --template vue
```

Currently supported template presets include:

- `vue`

## Project Default Setup

### Features

- **Development Experience**: Written in [typeScript](https://www.typescriptlang.org/), styled with [tailwindcss](https://tailwindcss.com/). Supports SVGs ([vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons)).
- **API & Mocking**: Handles requests with [axios](https://axios-http.com/docs/intro) and mocks APIs using [msw](https://mswjs.io/).
- **Code Quality**: Enforces standards with [eslint](https://eslint.org/) and [prettier](https://prettier.io/), with [husky](https://www.npmjs.com/package/husky), [commitlint](https://commitlint.js.org/#/), and [lint-staged](https://github.com/okonet/lint-staged) for commit validation.
- **Testing**: Uses [vitest](https://vitest.dev/) + [testing-library](https://testing-library.com/) for unit testing and [playwright](https://playwright.dev/) for E2E testing.
- **Optimization**: Compresses CSS with [cssnano](https://cssnano.github.io/cssnano/) , converts units with [postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem), and analyzes assets with [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer).
- **CI/CD**: Integrates `GitHub Actions` and `GitLab CI` for automated testing and deployment.

### Code Features / Opinions

- Project root aliased as `@` to `<project_root>/src`
- Store persistedstate use [pinia-plugin-persistedstate](https://www.npmjs.com/package/pinia-plugin-persistedstate)
- ESlint plugin use [@component-hook/eslint-plugin](https://www.npmjs.com/package/@component-hook/eslint-plugin?activeTab=readme)
- if encounter npx: command not found, can execute `ln -s $(which npx) /usr/local/bin/npx` in zsh
- Predefined and fully typed global variables:
  - `VITE_APP_VERSION` is read from `package.json` version at build time
  - `VITE_APP_BUILD_EPOCH` is populated as `new Date().getTime()` at build time
  - `VITE_APP_MOCK` is use mock environment
