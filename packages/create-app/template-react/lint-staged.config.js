/** @type {import('lint-staged').Configuration} */

export default {
  '*.{ts,tsx}': () => 'pnpm typecheck',
  '*.{ts,js,tsx,jsx}': () => 'pnpm lint',
};
