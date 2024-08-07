export const ignores = {
  name: 'component-hook/ignores',
  ignores: [
    '**/node_modules',
    '**/dist',

    '**/pnpm-lock.yaml',
    '**/yarn.lock',
    '**/package-lock.json',
    '**/bun.lockb',

    '**/output',
    '**/coverage',
    '**/temp',
    '**/fixtures',
    '**/.vitepress/cache',
    '**/.nuxt',
    '**/.vercel',
    '**/.changeset',
    '**/.idea',
    '**/.output',
    '**/.vite-inspect',
    '**/.nitro',
    '**/CHANGELOG*.md',
    '**/*.min.*',
    '**/LICENSE*',
    '**/__snapshots__',
    '**/auto-import?(s).d.ts',
    '**/components.d.ts',
    '**/.turbo',
  ],
};
