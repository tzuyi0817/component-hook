/** @type {import('lint-staged').Configuration} */

export default {
  '**/*.{ts,tsx,js,vue,json,yml}': () => ['pnpm lint'],
  'docs/**/*.{ts,tsx,js,vue}': () => ['pnpm -C docs typecheck'],
  'packages/picker/**/*.{ts,tsx,js,vue}': () => ['pnpm -C packages/picker typecheck'],
  'packages/pdf-canvas/**/*.{ts,tsx,js,vue}': () => ['pnpm -C packages/pdf-canvas typecheck'],
  'packages/eslint-plugin/**/*.{ts,js}': () => ['pnpm -C packages/eslint-plugin typecheck'],
  'packages/oxlint-config/**/*.{ts,js}': () => ['pnpm -C packages/oxlint-config typecheck'],
  'packages/create-app/**/*.{ts,js}': () => ['pnpm -C packages/create-app typecheck'],
};
