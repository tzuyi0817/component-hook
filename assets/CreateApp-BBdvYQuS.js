import{m as t}from"./index-BekVQ9Ef.js";import{d as n,a as o,u as e,o as s}from"./index-Ct0DdM35.js";const a=`## Create App

Scaffolding a basic \`typescript\` project.

### Scaffolding Your Project

::: tip Compatibility Note

Requires [Node.js](https://nodejs.org/en/) version 18+ or 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

:::

::: group

\`\`\`bash [npm]
$ npm create @component-hook/app@latest
\`\`\`

\`\`\`bash [yarn]
$ yarn create @component-hook/app
\`\`\`

\`\`\`bash [pnpm]
$ pnpm create @component-hook/app
\`\`\`

:::

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a project, run:

::: group

\`\`\`bash [npm]
$ npm create @component-hook/app@latest basic-app -- --template vue
\`\`\`

\`\`\`bash [yarn]
$ yarn create @component-hook/app basic-app --template vue
\`\`\`

\`\`\`bash [pnpm]
$ pnpm create @component-hook/app basic-app --template vue
\`\`\`

:::

See [create-app](https://github.com/tzuyi0817/component-hook/tree/master/packages/create-app) for more details on each supported template: \`vue\`

You can use \`.\` for the project name to scaffold in the current directory.

### Project Default Setup

- [Vite](https://cn.vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://github.com/axios/axios)
- [TailwindcSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/) w/ \`postcss-nesting\` plugin
- [Cssnano](https://cssnano.github.io/cssnano/) for minimizing production CSS
- [Postcss-pxtorem](https://www.npmjs.com/package/postcss-pxtorem) generates rem units from pixel units
- [Vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) generate svg sprite map
- [Eslint](https://eslint.org/)
  - [@component-hook/eslint-plugin](https://www.npmjs.com/package/@component-hook/eslint-plugin?activeTab=readme)
- [Prettier](https://prettier.io/)
- [Husky](https://www.npmjs.com/package/husky) to improves commits
  - if encounter npx: command not found, can execute \`ln -s $(which npx) /usr/local/bin/npx\` in zsh
  - [commitlint](https://commitlint.js.org/#/) checks if your commit messages meet the conventional commit format
  - [lint-staged](https://github.com/okonet/lint-staged) filter files checked by pre commit lint
- Alias \`@\` to \`<project_root>/src\`
- Mock use [msw](https://mswjs.io/)
  - \`npx msw init ./public\`
- Unit test use [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
  - [jsdom](https://www.npmjs.com/package/jsdom)
  - [@vitest/coverage-v8](https://vitest.dev/guide/coverage.html)
  - [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)
  - [@testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event/)
- E2E test use [playwright](https://playwright.dev/)
- [Rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) visualize and analyze your Rollup bundle to see which modules are taking up space
- Predefined and fully typed global variables:
  - \`VITE_APP_VERSION\` is read from \`package.json\` version at build time
  - \`VITE_APP_BUILD_EPOCH\` is populated as \`new Date().getTime()\` at build time
- Github workflows (default)
  - ci - on workflow call and dispatch
  - deploy - on push main branch
  - preview - on pull request
- Gitlab CI (use \`--gitlab\` command create project)
  - run tests - on branches, merge request and manual
`,p=["innerHTML"],u=n({__name:"CreateApp",setup(i){return(r,c)=>(s(),o("div",{class:"markdown-doc",innerHTML:e(t).render(e(a))},null,8,p))}});export{u as default};
