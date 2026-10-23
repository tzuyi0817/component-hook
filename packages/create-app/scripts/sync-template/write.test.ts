// @vitest-environment node
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { applyPackageUpgrade, applyWrites, DIVERGED_NOTE, planWrites, UNCOMMITTED_NOTE } from './write.ts';
import type { Entry, PackageDiff } from './types.ts';

const ALL_KINDS: ReadonlySet<string> = new Set(['shared', 'vue', 'react']);

function writeFile(filePath: string, content: string) {
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, content);
}

function packageDiff(partial: Partial<PackageDiff> = {}): PackageDiff {
  return { fields: [], onlyInSource: [], onlyInTemplate: [], ranges: [], scripts: [], sections: [], ...partial };
}

function diffEntry(note: string, target = 'template-vue/src/main.ts'): Entry {
  return { framework: 'vue', note, sourcePath: 'src/main.ts', status: 'diff', target };
}

describe('planWrites', () => {
  it('copies only DIFF entries whose source is newer', () => {
    const sourceNewer = diffEntry('source newer');
    const templateNewer = diffEntry('template newer', 'template-vue/src/app.ts');
    const unknown = diffEntry('unknown', 'template-vue/src/env.d.ts');
    const same: Entry = { framework: 'vue', sourcePath: 'README.md', status: 'same', target: 'template-vue/README.md' };
    const skip: Entry = { framework: 'vue', note: 'repo 專屬文件', sourcePath: 'LICENSE', status: 'skip' };

    const plan = planWrites([sourceNewer, templateNewer, unknown, same, skip], ALL_KINDS);

    expect(plan.copies).toEqual([{ framework: 'vue', sourcePath: 'src/main.ts', target: 'template-vue/src/main.ts' }]);
    expect(plan.upgrades).toEqual([]);
    expect(plan.remaining).toEqual([templateNewer, unknown]);
  });

  it('leaves targets outside the given kinds alone, like shared files under --only', () => {
    const shared = diffEntry('source newer', 'template-shared/.editorconfig');

    const plan = planWrites([shared], new Set(['vue']));

    expect(plan.copies).toEqual([]);
    expect(plan.remaining).toEqual([shared]);
  });

  it('upgrades only the ranges and packageManager whose source is newer, keeping the rest to handle by hand', () => {
    const entry: Entry = {
      framework: 'vue',
      packageDiff: packageDiff({
        onlyInSource: ['new-dep'],
        packageManager: { source: 'pnpm@12.15.0', template: 'pnpm@12.10.1' },
        ranges: [
          { name: 'vue', section: 'dependencies', source: '^3.10.0', template: '^3.9.0' },
          { name: 'vite', section: 'devDependencies', source: '~7.1.0', template: '^7.1.0' },
          { name: 'msw', section: 'devDependencies', source: '^2.0.0', template: '^3.0.0' },
        ],
      }),
      sourcePath: 'package.json',
      status: 'deps',
      target: 'template-vue/package.json',
    };

    const plan = planWrites([entry], ALL_KINDS);

    expect(plan.upgrades).toEqual([
      {
        framework: 'vue',
        packageManager: { source: 'pnpm@12.15.0', template: 'pnpm@12.10.1' },
        ranges: [{ name: 'vue', section: 'dependencies', source: '^3.10.0', template: '^3.9.0' }],
        target: 'template-vue/package.json',
      },
    ]);
    expect(plan.remaining).toEqual([
      {
        ...entry,
        packageDiff: packageDiff({
          onlyInSource: ['new-dep'],
          ranges: [
            { name: 'vite', section: 'devDependencies', source: '~7.1.0', template: '^7.1.0' },
            { name: 'msw', section: 'devDependencies', source: '^2.0.0', template: '^3.0.0' },
          ],
        }),
      },
    ]);
    expect(entry.packageDiff?.ranges).toHaveLength(3);
  });

  it('keeps a packageManager the template already has newer out of the upgrade', () => {
    const entry: Entry = {
      framework: 'vue',
      packageDiff: packageDiff({ packageManager: { source: 'pnpm@12.10.1', template: 'pnpm@12.15.0' } }),
      sourcePath: 'package.json',
      status: 'deps',
      target: 'template-vue/package.json',
    };

    const plan = planWrites([entry], ALL_KINDS);

    expect(plan.upgrades).toEqual([]);
    expect(plan.remaining).toEqual([entry]);
  });

  it('drops a DEPS entry from remaining once every difference is an upgrade', () => {
    const entry: Entry = {
      framework: 'react',
      packageDiff: packageDiff({
        ranges: [{ name: 'react', section: 'dependencies', source: '^19.3.1', template: '^19.3.0' }],
      }),
      sourcePath: 'package.json',
      status: 'deps',
      target: 'template-react/package.json',
    };

    const plan = planWrites([entry], ALL_KINDS);

    expect(plan.upgrades).toHaveLength(1);
    expect(plan.remaining).toEqual([]);
  });

  it('keeps targets with uncommitted template changes out of the plan and says why', () => {
    const copy = diffEntry('source newer');
    const deps: Entry = {
      framework: 'vue',
      packageDiff: packageDiff({
        ranges: [{ name: 'vue', section: 'dependencies', source: '^3.10.0', template: '^3.9.0' }],
      }),
      sourcePath: 'package.json',
      status: 'deps',
      target: 'template-vue/package.json',
    };
    const clean = diffEntry('source newer', 'template-vue/src/app.ts');
    const dirty = new Set(['template-vue/src/main.ts', 'template-vue/package.json']);

    const plan = planWrites([copy, deps, clean], ALL_KINDS, { isDirty: target => dirty.has(target) });

    expect(plan.copies).toEqual([{ framework: 'vue', sourcePath: 'src/main.ts', target: 'template-vue/src/app.ts' }]);
    expect(plan.upgrades).toEqual([]);
    expect(plan.remaining).toEqual([
      { ...copy, note: 'template 有未 commit 的修改' },
      { ...deps, note: 'template 有未 commit 的修改' },
    ]);
  });

  it('leaves a source-newer DIFF by hand when the template has content the source never had', () => {
    const diverged = diffEntry('source newer');
    const behind = diffEntry('source newer', 'template-vue/src/app.ts');

    const plan = planWrites([diverged, behind], ALL_KINDS, {
      isBehindSource: ({ target }) => target === 'template-vue/src/app.ts',
    });

    expect(plan.copies).toEqual([{ framework: 'vue', sourcePath: 'src/main.ts', target: 'template-vue/src/app.ts' }]);
    expect(plan.remaining).toEqual([{ ...diverged, note: DIVERGED_NOTE }]);
  });

  it('reports uncommitted changes before divergence, and never checks divergence for package.json upgrades', () => {
    const copy = diffEntry('source newer');
    const deps: Entry = {
      framework: 'vue',
      packageDiff: packageDiff({
        ranges: [{ name: 'vue', section: 'dependencies', source: '^3.10.0', template: '^3.9.0' }],
      }),
      sourcePath: 'package.json',
      status: 'deps',
      target: 'template-vue/package.json',
    };

    const plan = planWrites([copy, deps], ALL_KINDS, {
      isBehindSource: () => false,
      isDirty: target => target === 'template-vue/src/main.ts',
    });

    expect(plan.remaining).toEqual([{ ...copy, note: UNCOMMITTED_NOTE }]);
    expect(plan.upgrades).toHaveLength(1);
  });

  it('never writes NEW, CONFLICT or MANUAL entries', () => {
    const entries: Entry[] = [
      { framework: 'vue', sourcePath: 'src/extra.ts', status: 'new', target: 'template-vue/src/extra.ts' },
      {
        framework: 'vue',
        note: 'vue 與 react 的來源內容不同',
        sourcePath: 'a.json',
        status: 'conflict',
        target: 'template-shared/a.json',
      },
      {
        framework: 'vue',
        mismatches: [],
        sourcePath: 'index.html',
        status: 'manual',
        target: 'template-vue/index.html.art',
      },
    ];

    const plan = planWrites(entries, ALL_KINDS);

    expect(plan.copies).toEqual([]);
    expect(plan.upgrades).toEqual([]);
    expect(plan.remaining).toEqual(entries);
  });
});

describe('applyPackageUpgrade', () => {
  it('rewrites the values in place, keeping key order and the trailing newline', () => {
    const before = `${JSON.stringify(
      { name: 'x', dependencies: { vue: '^3.9.0', pinia: '^3.0.0' }, packageManager: 'pnpm@12.10.1' },
      null,
      2,
    )}\n`;
    const after = `${JSON.stringify(
      { name: 'x', dependencies: { vue: '^3.10.0', pinia: '^3.0.0' }, packageManager: 'pnpm@12.15.0' },
      null,
      2,
    )}\n`;

    expect(
      applyPackageUpgrade(before, {
        framework: 'vue',
        packageManager: { source: 'pnpm@12.15.0', template: 'pnpm@12.10.1' },
        ranges: [{ name: 'vue', section: 'dependencies', source: '^3.10.0', template: '^3.9.0' }],
        target: 'template-vue/package.json',
      }),
    ).toBe(after);
  });

  it('leaves packageManager untouched when it is not part of the upgrade', () => {
    const before = JSON.stringify({ devDependencies: { vite: '^7.0.0' }, packageManager: 'pnpm@12.10.1' }, null, 2);

    expect(
      applyPackageUpgrade(before, {
        framework: 'vue',
        ranges: [{ name: 'vite', section: 'devDependencies', source: '^7.1.0', template: '^7.0.0' }],
        target: 'template-vue/package.json',
      }),
    ).toBe(JSON.stringify({ devDependencies: { vite: '^7.1.0' }, packageManager: 'pnpm@12.10.1' }, null, 2));
  });
});

describe('applyWrites', () => {
  const tempRoot = mkdtempSync(path.join(os.tmpdir(), 'sync-template-write-'));
  const sources = { react: path.join(tempRoot, 'react'), vue: path.join(tempRoot, 'vue') };
  const templateRoot = path.join(tempRoot, 'create-app');

  afterAll(() => {
    rmSync(tempRoot, { force: true, recursive: true });
  });

  it('copies source files over the template and upgrades package.json, returning the written targets', () => {
    writeFile(path.join(sources.vue, '.gitignore'), 'dist\nnode_modules\n');
    writeFile(path.join(templateRoot, 'template-vue/_gitignore'), 'dist\n');
    writeFile(
      path.join(templateRoot, 'template-vue/package.json'),
      `${JSON.stringify({ dependencies: { vue: '^3.9.0' } }, null, 2)}\n`,
    );

    const written = applyWrites(
      {
        copies: [{ framework: 'vue', sourcePath: '.gitignore', target: 'template-vue/_gitignore' }],
        remaining: [],
        upgrades: [
          {
            framework: 'vue',
            ranges: [{ name: 'vue', section: 'dependencies', source: '^3.10.0', template: '^3.9.0' }],
            target: 'template-vue/package.json',
          },
        ],
      },
      { sources, templateRoot },
    );

    expect(written).toEqual(['template-vue/_gitignore', 'template-vue/package.json']);
    expect(readFileSync(path.join(templateRoot, 'template-vue/_gitignore'), 'utf8')).toBe('dist\nnode_modules\n');
    expect(readFileSync(path.join(templateRoot, 'template-vue/package.json'), 'utf8')).toBe(
      `${JSON.stringify({ dependencies: { vue: '^3.10.0' } }, null, 2)}\n`,
    );
  });
});
