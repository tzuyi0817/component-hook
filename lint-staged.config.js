/** @type {import('lint-staged').Configuration} */

export default {
  '**/*.{ts,js,vue}': () => ['pnpm lint'],
  'docs/**/*.{ts,js,vue}': () => ['pnpm -C docs typecheck'],
  'packages/picker/*.{ts,js,vue}': () => ['pnpm -C packages/picker typecheck'],
  'packages/pdf-canvas/*.{ts,js,vue}': () => ['pnpm -C packages/pdf-canvas typecheck'],
  'packages/eslint-plugin/*.{ts,js}': () => ['pnpm -C packages/eslint-plugin typecheck'],
  'packages/create-app/*.{ts,js}': () => ['pnpm -C packages/create-app typecheck'],
};
