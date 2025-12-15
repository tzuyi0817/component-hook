# Changelog

## [1.3.1](https://github.com/tzuyi0817/component-hook/compare/v1.3.0...v1.3.1) (2025-12-15)

### Features

- **pdf-canvas:** remove canvas data format saving ([c728ad8](https://github.com/tzuyi0817/component-hook/commit/c728ad8786f8935495b5556f66ecf51e0bdfea60))

## [1.3.0](https://github.com/tzuyi0817/component-hook/compare/v1.2.2...v1.3.0) (2025-11-27)

### Features

- **pdf-canvas:** `loadFile` format of the returned data has been changed to File ([c2be4ef](https://github.com/tzuyi0817/component-hook/commit/c2be4ef5692c1ebe6150cc4c051fc302731dc4ab))

## [1.2.2](https://github.com/tzuyi0817/component-hook/compare/v1.2.1...v1.2.2) (2025-11-21)

### Features

- **pdf-canvas:** added expose `setActiveFabric` ([f4e2e77](https://github.com/tzuyi0817/component-hook/commit/f4e2e7752ab3c03ef4ed56887ba2941d5c79114b))
- **pdf-canvas:** improve performance using pdfjs in web worker ([3f558d8](https://github.com/tzuyi0817/component-hook/commit/3f558d854b937ac1b6e503447e12d64e88ca32a7))
- **create-app:** update `vue` template ([2802a41](https://github.com/tzuyi0817/component-hook/commit/2802a4188466a62485551654b513c14eecde2adf))
- **create-app:** update `react` template ([f22fe5c](https://github.com/tzuyi0817/component-hook/commit/f22fe5c358de4297cae5e0eaca0e7d98e45e8954))

### Bug Fixes

- **pdf-canvas:** use `loadFile` function to render image ([5a5d619](https://github.com/tzuyi0817/component-hook/commit/5a5d619f08495100ed3c83b10abd77291019398b))

## [1.2.1](https://github.com/tzuyi0817/component-hook/compare/v1.2.0...v1.2.1) (2025-11-13)

### Bug Fixes

- **picker:** offset Y is set using a CSS variable to avoid unnecessary duplicate rendering ([b775b33](https://github.com/tzuyi0817/component-hook/commit/b775b33049cbf72846c8ee786596ac25ec2d7179))

## [1.2.0](https://github.com/tzuyi0817/component-hook/compare/v1.1.5...v1.2.0) (2025-11-12)

### Features

- **picker:** remove the picker popup for greater flexibility in component usage

### Bug Fixes

- **eslint-plugin:** disable some unicorn rules and allow `return` in vue computed ([232b3d8](https://github.com/tzuyi0817/component-hook/commit/232b3d889aca3d41074bc1cceb40071f48da0ea8))

## [1.1.5](https://github.com/tzuyi0817/component-hook/compare/v1.1.4...v1.1.5) (2025-08-28)

### Features

- **picker:** bump dependency `react` and `react-dom` to v19.1.1 ([1736a89](https://github.com/tzuyi0817/component-hook/commit/1736a89ac3dd064d40208d98c197f788fbfc07b4))
- **pdf-canvas:** bump dependency `react` and `react-dom` to v19.1.1 ([1736a89](https://github.com/tzuyi0817/component-hook/commit/1736a89ac3dd064d40208d98c197f788fbfc07b4))

## [1.1.4](https://github.com/tzuyi0817/component-hook/compare/v1.1.3...v1.1.4) (2025-08-27)

### Features

- **eslint-plugin:** enable javascript and typescript more rules ([b5620ef](https://github.com/tzuyi0817/component-hook/commit/b5620ef008c44d36a830036e0df31a07c4d94d89))
- **eslint-plugin:** upgrade `eslint-plugin-unicorn` to v60 ([3d84322](https://github.com/tzuyi0817/component-hook/commit/3d8432276246c80d5fb988665ccaee3e7168489a))
- **eslint-plugin:** enable `unicorn/no-useless-error-capture-stack-trace` and `unicorn/prefer-class-fields` rules

## [1.1.3](https://github.com/tzuyi0817/component-hook/compare/v1.1.2...v1.1.3) (2025-07-17)

### Features

- **eslint-plugin:** disabled `vue/no-ref-as-operand` ([1841ef1](https://github.com/tzuyi0817/component-hook/commit/1841ef191d5134f38f632e9594e5a70912819de6))
- **eslint-plugin:** replace `eslint-plugin-markdown` with `@eslint/markdown` ([da5f554](https://github.com/tzuyi0817/component-hook/commit/da5f554aa68b6ac408dd49e73a002d6224256374))
- **create-app:** add `react` template ([64f8784](https://github.com/tzuyi0817/component-hook/commit/64f8784fed17e96b5ea3609233757dbcaf8885da))

## [1.1.2](https://github.com/tzuyi0817/component-hook/compare/v1.1.1...v1.1.2) (2025-07-01)

### Features

- **create-app:** adjust `template-vue` folder structure
- **eslint-plugin:** add `eslint-plugin-jsdoc` config ([7000f0c](https://github.com/tzuyi0817/component-hook/commit/7000f0c42f1a0003427dc8e592330aadc1c16d6b))

## [1.1.1](https://github.com/tzuyi0817/component-hook/compare/v1.1.0...v1.1.1) (2025-05-15)

### Features

- **create-app:** adjust `template-vue` folder structure ([9e47e44](https://github.com/tzuyi0817/component-hook/commit/9e47e44837a7d4235855e90e5895d5ffdf564ef3))
- **eslint-plugin:** upgrade `eslint-plugin-unicorn` to v59 ([8e18470](https://github.com/tzuyi0817/component-hook/commit/8e184700ab91b03db80d983c84bcdc055481a326))

### Bug Fixes

- **eslint-plugin:** `allow-default-export` files ([70d8a54](https://github.com/tzuyi0817/component-hook/commit/70d8a543ca380bae97fbe502409f7680f824d85f))

## [1.1.0](https://github.com/tzuyi0817/component-hook/compare/v1.0.4...v1.1.0) (2025-04-17)

### Breaking Changes

- **pdf-canvas:** adjusted the usage of `loadFile`, please visit: [Official Docs](https://tzuyi0817.github.io/component-hook/#/component/vue-pdf-canvas)

### Features

- **pdf-canvas:** added `emits` to components and adjusted the drop placement to be more accurate ([c9dfaa9](https://github.com/tzuyi0817/component-hook/commit/c9dfaa9e02c3709c6cd1577233c117d11ae1a120))
- **pdf-canvas:** added the `expose` of `copy` and `delete` fabric ([9fcf71a](https://github.com/tzuyi0817/component-hook/commit/9fcf71a586ade3fb63844f90c83572c874840350))
- **eslint-plugin:** adjust `sort-import` rule ([d29c7e4](https://github.com/tzuyi0817/component-hook/commit/d29c7e48cac948de294a5960a60fe45427647424))

## [1.0.4](https://github.com/tzuyi0817/component-hook/compare/v1.0.3...v1.0.4) (2025-04-05)

### Bug Fixes

- **picker:** adjust header layout ([0ebc1de](https://github.com/tzuyi0817/component-hook/commit/0ebc1de29fdcd3886e58b57a998d203b2f2622de))
- **pdf-canvas:** drop `dataTransfer` get error data ([0ebc1de](https://github.com/tzuyi0817/component-hook/commit/0ebc1de29fdcd3886e58b57a998d203b2f2622de))

## [1.0.3](https://github.com/tzuyi0817/component-hook/compare/v1.0.2...v1.0.3) (2025-03-24)

### Bug Fixes

- **eslint-plugin:** cannot find module `eslint-config-prettier` ([942de76](https://github.com/tzuyi0817/component-hook/commit/942de76a9db9fc8184d1f0168e78498d00d920d9))

## [1.0.2](https://github.com/tzuyi0817/component-hook/compare/v1.0.1...v1.0.2) (2025-03-17)

### Features

- **picker:** automatic derivation `values` ​​type ([790cd83](https://github.com/tzuyi0817/component-hook/commit/790cd83e72e615edaef522bbafca1e09090a7029))
- **eslint-plugin:** add `eslint-plugin-de-morgan` ([40905b1](https://github.com/tzuyi0817/component-hook/commit/40905b1ff5e09e813ce8bec6ad244bbe72100f48))
- **eslint-plugin:** upgrade `eslint-plugin-unicorn` to v57 ([a1ca65a](https://github.com/tzuyi0817/component-hook/commit/a1ca65adbee754994ae86b3afb0a400ce9bee94d))
- **eslint-plugin:** enable `unicorn/consistent-date-clone` and `unicorn/no-instanceof-builtins` ([f93439e](https://github.com/tzuyi0817/component-hook/commit/f93439edea30a96acda38afb5ea1b78285682dee))
- **eslint-plugin:** upgrade `eslint-plugin-vue` to v10 ([7f1dff0](https://github.com/tzuyi0817/component-hook/commit/7f1dff0cdf9fef85dd6942937700e5a7b9d2a027))

## [1.0.1](https://github.com/tzuyi0817/component-hook/compare/v1.0.0...v1.0.1) (2025-02-07)

### Bug Fixes

- **picker:** pass in empty `columns` to prevent foolproofing ([3e5f077](https://github.com/tzuyi0817/component-hook/commit/3e5f0776e342b38c141967a8be6a8f5b74e143f0))

## [1.0.0](https://github.com/tzuyi0817/component-hook/compare/v0.2.5...v1.0.0) (2025-02-06)

### Breaking Changes

- **picker:** adjusted the usage of components, please visit: [Official Docs](https://tzuyi0817.github.io/component-hook/#/component/vue-picker)

### Features

- **picker:** add `date-picker` and `time-picker` component

## [0.2.5](https://github.com/tzuyi0817/component-hook/compare/v0.2.4...v0.2.5) (2025-01-15)

### Features

- **create-app:** add `create-app` cli

## [0.2.4](https://github.com/tzuyi0817/component-hook/compare/v0.2.3...v0.2.4) (2024-12-20)

### Features

- **docs:** optimize syntax highlighting display

### Bug Fixes

- **picker:** customize class names to avoid being overwritten ([afc752d](https://github.com/tzuyi0817/component-hook/commit/afc752d72f10916364d56130b6d4d816dc33acd4))
- **eslint-plugin:** allow default export for farm.ts ([d74d943](https://github.com/tzuyi0817/component-hook/commit/d74d943153fb473fc298b57b9458288b648f85e2))

## [0.2.3](https://github.com/tzuyi0817/component-hook/compare/v0.2.2...v0.2.3) (2024-12-06)

### Bug Fixes

- **pdf-canvas:** because the cdn `pdf.worker` of `pdfjs-dist` does not support the latest version, it falls back to v4.8.69 ([3558f07](https://github.com/tzuyi0817/component-hook/commit/3558f071702ab47e1507885af5ae6b085f0c2228))

## [0.2.2](https://github.com/tzuyi0817/component-hook/compare/v0.2.1...v0.2.2) (2024-12-05)

### Features

- **eslint-plugin:** upgrade `eslint-plugin-testing-library` to v7 ([a3dac01](https://github.com/tzuyi0817/component-hook/commit/a3dac01d9647e93ddd093f4517d0c45da25f355f))
- **eslint-plugin:** upgrade `eslint-plugin-sonarjs` to v3 ([d6c8cb2](https://github.com/tzuyi0817/component-hook/commit/d6c8cb2a33f19eec2b4d66a70508c21b16f2f739))

## [0.2.1](https://github.com/tzuyi0817/component-hook/compare/v0.2.0...v0.2.1) (2024-11-20)

### Features

- **docs:** add react demo demonstration

## [0.2.0](https://github.com/tzuyi0817/component-hook/compare/v0.1.6...v0.2.0) (2024-11-15)

### Features

- **eslint-plugin:** upgrade `eslint-plugin-playwright` to v2 ([aabd4e3](https://github.com/tzuyi0817/component-hook/commit/aabd4e3fff5a63f8fdea669530c7076c1d3a877d))
- **picker:** add `React` picker component
- **pdf-canvas:** add `React` pdf-canvas component

## [0.1.6](https://github.com/tzuyi0817/component-hook/compare/v0.1.5...v0.1.6) (2024-10-25)

### Features

- **eslint-plugin:** add `eslint-plugin-unicorn` ([d9b4d78](https://github.com/tzuyi0817/component-hook/commit/d9b4d78d65e0a1db8d84fffbab7897fe7ad164d0))
- **eslint-plugin:** upgrade `eslint-plugin-react-hooks` to v5 ([65c68b8](https://github.com/tzuyi0817/component-hook/commit/65c68b88f060fd12eb03bd8dc9d4e4515f034957))

## [0.1.5](https://github.com/tzuyi0817/component-hook/compare/v0.1.4...v0.1.5) (2024-10-04)

### Features

- **eslint-plugin:** add `eslint-plugin-eslint-comments` ([1568493](https://github.com/tzuyi0817/component-hook/commit/15684937ac1a85034bafb026b78d373d1f69b7d9))

## [0.1.4](https://github.com/tzuyi0817/component-hook/compare/v0.1.3...v0.1.4) (2024-09-16)

### Features

- **eslint-plugin:** ignores config add `**/playwright-report` ([3c68e07](https://github.com/tzuyi0817/component-hook/commit/3c68e07cf319017cd4ba3a39e683d216ac4e23a3))
- **eslint-plugin:** upgrade sonarjs config to v2 ([1c3fe33](https://github.com/tzuyi0817/component-hook/commit/1c3fe331d5d1ca45100f8c77e784320ca44ebf87))

## [0.1.3](https://github.com/tzuyi0817/component-hook/compare/v0.1.2...v0.1.3) (2024-08-29)

### Bug Fixes

- **eslint-plugin:** extract prettier config to solve the problem of reference order ([3b13997](https://github.com/tzuyi0817/component-hook/commit/3b1399720add01929db516cd7138741c655ea0b0))
- **pdf-canvas:** revise css units calculation method ([bfa7ac6](https://github.com/tzuyi0817/component-hook/commit/bfa7ac6ffbed6c413095e95c3802fee6272756ec))

## [0.1.2](https://github.com/tzuyi0817/component-hook/compare/v0.1.1...v0.1.2) (2024-08-16)

### Features

- **eslint-plugin:** a opinionated ESLint config preset for `JavaScript`, `TypeScript`,`Vue`, and `Prettier`
- **docs:** add eslint-plugin demo demonstration

## [0.1.1](https://github.com/tzuyi0817/component-hook/compare/v0.1.0...v0.1.1) (2024-07-05)

### Features

- **pdf-canvas:** rendering PDF documents onto a canvas with `Vue 3` component
- **docs:** add picker and pdf-canvas demo demonstration

## [0.1.0](https://github.com/tzuyi0817/component-hook/compare/6b1558a9b0de1202d3c306ebd808836e65f65f06...v0.1.0) (2024-06-21)

### Features

- **picker:** picker component with `Vue 3`

### Bug Fixes

- **picker:** after bundle css was missing ([#1](https://github.com/tzuyi0817/component-hook/issues/1)) ([25b1f05](https://github.com/tzuyi0817/component-hook/commit/25b1f05078cd04476252ddd011ea483774dc0fc4))
