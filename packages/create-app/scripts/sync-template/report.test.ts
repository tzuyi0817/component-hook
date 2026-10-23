// @vitest-environment node
import { stripVTControlCharacters } from 'node:util';
import { printFrameworkReport, printWrites } from './report.ts';
import type { Entry } from './types.ts';

function captureInfo(print: () => void) {
  const info = vi.spyOn(console, 'info').mockImplementation(() => {});

  print();

  const lines = info.mock.calls.map(([line]) => stripVTControlCharacters(String(line)));

  info.mockRestore();
  return lines;
}

describe('printFrameworkReport', () => {
  it('hints which side is newer for each DEPS range and packageManager', () => {
    const entry: Entry = {
      framework: 'vue',
      packageDiff: {
        fields: [],
        onlyInSource: [],
        onlyInTemplate: [],
        packageManager: { source: 'pnpm@12.10.1', template: 'pnpm@12.15.0' },
        ranges: [
          { name: 'vue', section: 'dependencies', source: '^3.10.0', template: '^3.9.0' },
          { name: 'vite', section: 'devDependencies', source: '~7.1.0', template: '^7.1.0' },
        ],
        scripts: [],
        sections: [],
      },
      sourcePath: 'package.json',
      status: 'deps',
      target: 'template-vue/package.json',
    };
    const lines = captureInfo(() => printFrameworkReport('vue', '/repos/vue', [entry]));

    expect(lines).toContain('    vue: ^3.9.0 → ^3.10.0  [source newer]');
    expect(lines).toContain('    vite: ^7.1.0 → ~7.1.0');
    expect(lines).toContain('    packageManager: pnpm@12.15.0 → pnpm@12.10.1  [template newer]');
  });

  it('prints section moves and top-level field differences', () => {
    const entry: Entry = {
      framework: 'vue',
      packageDiff: {
        fields: [
          { name: 'engines', source: '{"node":">=24"}', template: undefined },
          { name: 'private', source: undefined, template: 'true' },
        ],
        onlyInSource: [],
        onlyInTemplate: [],
        ranges: [{ name: 'msw', section: 'devDependencies', source: '^3.0.0', template: '^2.0.0' }],
        scripts: [],
        sections: [{ name: 'msw', source: 'dependencies', template: 'devDependencies' }],
      },
      sourcePath: 'package.json',
      status: 'deps',
      target: 'template-vue/package.json',
    };
    const lines = captureInfo(() => printFrameworkReport('vue', '/repos/vue', [entry]));

    expect(lines).toContain('    msw: ^2.0.0 → ^3.0.0  [source newer]');
    expect(lines).toContain('    devDependencies.msw → dependencies.msw');
    expect(lines).toContain('    engines: (無) → {"node":">=24"}');
    expect(lines).toContain('    private: true → (無)');
  });
});

describe('printWrites', () => {
  it('lists copied files and each upgraded range under its package.json', () => {
    const lines = captureInfo(() =>
      printWrites({
        copies: [{ framework: 'vue', sourcePath: '.gitignore', target: 'template-vue/_gitignore' }],
        remaining: [],
        upgrades: [
          {
            framework: 'vue',
            packageManager: { source: 'pnpm@12.15.0', template: 'pnpm@12.10.1' },
            ranges: [{ name: 'vue', section: 'dependencies', source: '^3.10.0', template: '^3.9.0' }],
            target: 'template-vue/package.json',
          },
        ],
      }),
    );

    expect(lines).toEqual([
      '\n# 已寫入 2',
      '  template-vue/_gitignore ← .gitignore',
      '  template-vue/package.json',
      '    vue: ^3.9.0 → ^3.10.0',
      '    packageManager: pnpm@12.10.1 → pnpm@12.15.0',
    ]);
  });

  it('prints nothing when there was nothing to write', () => {
    expect(captureInfo(() => printWrites({ copies: [], remaining: [], upgrades: [] }))).toEqual([]);
  });
});
