# @component-hook/create-app

Scaffolding a basic `typescript` project.

> **Compatibility Note:**
> Requires [Node.js](https://nodejs.org/en/) version 20.19+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

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
- `react`

## Project Features Overview

This project leverages modern frontend practices and tooling, covering development experience, code quality, testing, and deployment.

### Development Experience

- `Written in TypeScript`: Provides type safety and better maintainability.
- `Styled with Tailwind CSS`: Utility-first CSS framework for fast and consistent UI styling.
- `SVG Support`: Integrated [`vite-plugin-svg-icons`](https://github.com/vbenjs/vite-plugin-svg-icons) to use SVGs as Vue components.

### API & Mocking

- Handles HTTP requests using `axios`.
- Uses `msw` (Mock Service Worker) for mocking APIs, enabling smooth local development and testing.

### Code Quality

- Enforces consistent code style with `ESLint` and `Prettier`.
- Enhanced with:
  - `husky`: For Git hooks.
  - `lint-staged`: Only runs linters on staged files.
  - `commitlint`: Ensures commit messages follow conventional format.

### Testing

- Unit testing with `Vitest` + `Testing Library`.
- End-to-end (E2E) testing using `Playwright`.

### Optimization

- Minifies CSS with `cssnano`.
- Converts px to rem using `postcss-pxtorem` for responsive design.
- Convert modern CSS into something most browsers can understand with `postcss-preset-env`.
- Uses `rollup-plugin-visualizer` to analyze bundle sizes.

### CI / CD

- Integrated `GitHub Actions` and `GitLab CI` for automated testing and deployment.

### Project Structure & Conventions

- The project root alias `@` points to the `src` directory (`<project_root>/src`).
- ESLint uses a custom plugin: [`@component-hook/eslint-plugin`](https://www.npmjs.com/package/@component-hook/eslint-plugin).

### Tip: Solving `npx: command not found`

If you encounter `npx: command not found`, run the following command to create a symbolic link:

```bash
ln -s $(which npx) /usr/local/bin/npx
```

### Predefined Global Variables

These variables are injected at build time and are fully typed:

| Variable Name          | Description                                  |
| ---------------------- | -------------------------------------------- |
| `VITE_APP_VERSION`     | Read from `package.json` version             |
| `VITE_APP_BUILD_EPOCH` | Timestamp generated at build time            |
| `VITE_APP_MOCK`        | Indicates whether the mock environment is on |
