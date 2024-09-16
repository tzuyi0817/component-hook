export default {
  '**/*.{ts,js,vue}': () => ['pnpm lint'],
  'docs/**/*.{ts,js,vue}': () => ['pnpm typecheck:docs'],
  'packages/picker/*.{ts,js,vue}': () => ['pnpm typecheck:picker'],
  'packages/pdf-canvas/*.{ts,js,vue}': () => ['pnpm typecheck:pdf-canvas'],
  'packages/eslint-plugin/*.{ts,js}': () => ['pnpm typecheck:eslint-plugin'],
};
