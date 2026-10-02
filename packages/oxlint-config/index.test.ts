// @vitest-environment node
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { buildConfigs } from './derive/build.ts';
import { runOxlint } from './derive/oxc/index.ts';
import { basic, ignorePatterns, react, vue } from './index.ts';

interface Diagnostic {
  filename: string;
  code: string;
}

const tempDirs: string[] = [];

afterAll(() => {
  for (const dir of tempDirs) rmSync(dir, { recursive: true, force: true });
});

function writeFiles(files: Record<string, string>) {
  const cwd = mkdtempSync(join(tmpdir(), 'oxlint-config-'));

  tempDirs.push(cwd);

  for (const [file, content] of Object.entries(files)) {
    mkdirSync(dirname(join(cwd, file)), { recursive: true });
    writeFileSync(join(cwd, file), content);
  }

  return cwd;
}

/** 在暫存目錄寫入設定與 fixture 後執行 oxlint，回傳 `檔名 規則` 形式的診斷清單 */
function lint(config: unknown, files: Record<string, string>) {
  const cwd = writeFiles({ ...files, '.oxlintrc.json': JSON.stringify(config) });
  const { stdout } = runOxlint(['--format', 'json', '.'], cwd);
  const { diagnostics } = JSON.parse(stdout) as { diagnostics: Diagnostic[] };

  return diagnostics.map(({ filename, code }) => {
    const rule = code.replace(/^([\w-]+)\((.+)\)$/, (_, scope: string, name: string) =>
      scope === 'eslint' ? name : `${scope}/${name}`,
    );

    return `${filename} ${rule}`;
  });
}

/** 取出 `.oxlintrc.json` 用法段落的 JSON 範例；jsonc 先移除尾逗號再解析 */
function readJsonExample(url: URL) {
  const markdown = readFileSync(url, 'utf8');
  const section = markdown.slice(markdown.indexOf('Usage with `.oxlintrc.json`'));
  const [, source = ''] = /```jsonc?\n([\s\S]*?)\n```/.exec(section) ?? [];

  return JSON.parse(source.replaceAll(/,(\s*[\]}])/g, '$1')) as { ignorePatterns: string[] };
}

/** 逐段比較 `x.y.z` 版本號，a 較新時回傳正數 */
function compareVersions(a: string, b: string) {
  const [left, right] = [a, b].map(version => version.split('.').map(Number));
  const index = left.findIndex((part, i) => part !== right[i]);

  return index === -1 ? 0 : left[index] - right[index];
}

describe('generated configs', () => {
  it('stay in sync with @component-hook/eslint-plugin', () => {
    expect({ basic, react, vue, ignorePatterns }).toEqual(buildConfigs());
  });

  it.each([
    ['basic', basic],
    ['react', react],
    ['vue', vue],
  ])('%s is accepted by oxlint', (_, config) => {
    const cwd = writeFiles({ '.oxlintrc.json': JSON.stringify(config) });
    const { status, stderr } = runOxlint(['--print-config'], cwd);

    expect(stderr).toBe('');
    expect(status).toBe(0);
  });

  it('leave vue plugin rules to eslint', () => {
    for (const config of [basic, react, vue]) {
      expect(config.plugins).not.toContain('vue');
      expect(Object.keys(config.rules ?? {})).not.toEqual(expect.arrayContaining([expect.stringMatching(/^vue\//)]));
    }
  });

  it('mirror the eslint ignores', () => {
    expect(ignorePatterns).toEqual(expect.arrayContaining(['**/dist', '**/node_modules', '**/auto-imports.d.ts']));
  });
});

describe('basic', () => {
  it('scopes typescript options to typescript files and lints vue script blocks', () => {
    const results = lint(basic, {
      'src/app.ts': 'console.log(1);\nexport const keep = (used_: number) => 1;\n',
      'src/app.js': 'export const keep = (used_) => 1;\n',
      'src/App.vue':
        '<script setup lang="ts">\nimport { ref } from "vue";\nconsole.log(1);\n</script>\n<template><div>{{ ref }}</div></template>\n',
    });

    expect(results).toContain('src/app.ts no-console');
    expect(results).not.toContain('src/app.ts no-unused-vars');
    expect(results).toContain('src/app.js no-unused-vars');
    expect(results).toContain('src/App.vue no-console');
    expect(results).not.toContain('src/App.vue no-unused-vars');
  });

  it('allows default exports only where the eslint preset does', () => {
    const results = lint(basic, {
      'src/other.ts': 'export default 1;\n',
      'src/views/home.ts': 'export default 1;\n',
      'src/pages/nested/about.tsx': 'export default 1;\n',
      'src/index.ts': 'export default 1;\n',
      'src/global.d.ts': 'export default 1;\n',
      'vite.config.mts': 'export default 1;\n',
    });

    expect(results.filter(result => result.endsWith('import/no-default-export'))).toEqual([
      'src/other.ts import/no-default-export',
    ]);
  });

  it('checks filename case with the preset exceptions', () => {
    const results = lint(basic, {
      'src/bad_name.ts': 'export const a = 1;\n',
      'src/zh-TW.ts': 'export const a = 1;\n',
      'src/GoodName.ts': 'export const a = 1;\n',
      'docs/ISSUE_TEMPLATE/bug_report.ts': 'export const a = 1;\n',
    });

    expect(results.filter(result => result.endsWith('unicorn/filename-case'))).toEqual([
      'src/bad_name.ts unicorn/filename-case',
    ]);
  });

  it('covers restricted syntax and oxc only checks', () => {
    const results = lint(basic, {
      'src/syntax.ts':
        'const enum Direction {\n  Up,\n}\n\nouter: for (const item of [Direction.Up]) {\n  break outer;\n}\n',
      'src/oxc.ts': "export const zero = (n: number) => 0 * n;\nexport const spaced = 'a-b'.replaceAll(/-/, ' ');\n",
    });

    expect(results).toContain('src/syntax.ts oxc/no-const-enum');
    expect(results).toContain('src/syntax.ts no-labels');
    expect(results).toContain('src/oxc.ts oxc/erasing-op');
    expect(results).toContain('src/oxc.ts oxc/bad-replace-all-arg');
  });
});

describe('react', () => {
  const combined = {
    extends: ['./basic.json', './react.json'],
  };

  const files = {
    'basic.json': JSON.stringify(basic),
    'react.json': JSON.stringify(react),
    'src/pages/home.tsx': 'export default () => <img src="a.png" />;\n',
    'src/hooks/use-thing.ts':
      'import { useEffect } from "react";\n\nexport function useThing(flag: boolean) {\n  if (flag) useEffect(() => {});\n}\n',
  };

  it('adds react, hooks and a11y rules on top of basic', () => {
    const results = lint(combined, files);

    expect(results).toContain('src/pages/home.tsx jsx-a11y/alt-text');
    expect(results).toContain('src/hooks/use-thing.ts react-hooks/rules-of-hooks');
    expect(results).not.toContain('src/pages/home.tsx unicorn/no-anonymous-default-export');
  });

  it('keeps anonymous default export checks for components without the react config', () => {
    const results = lint(basic, files);

    expect(results).toContain('src/pages/home.tsx unicorn/no-anonymous-default-export');
    expect(results).not.toContain('src/pages/home.tsx jsx-a11y/alt-text');
  });
});

describe('.oxlintrc.json usage docs', () => {
  it.each([
    ['README', new URL('README.md', import.meta.url)],
    ['docs', new URL('../../docs/src/markdowns/oxlint-config/index.md', import.meta.url)],
  ])('%s lists every ignore pattern since extends does not inherit them', (_, url) => {
    expect(readJsonExample(url).ignorePatterns).toEqual(ignorePatterns);
  });
});

describe('peer dependency', () => {
  it('requires at least the oxlint version the configs are built with', () => {
    const { peerDependencies } = JSON.parse(readFileSync(new URL('package.json', import.meta.url), 'utf8')) as {
      peerDependencies: { oxlint: string };
    };
    const { version } = createRequire(import.meta.url)('oxlint/package.json') as { version: string };
    const [, minimum = ''] = /^>=(\d+\.\d+\.\d+)$/.exec(peerDependencies.oxlint) ?? [];

    expect(minimum, `peerDependencies.oxlint 需為 >=x.y.z 形式，目前為 ${peerDependencies.oxlint}`).not.toBe('');
    expect(
      compareVersions(minimum, version),
      `peer oxlint ${peerDependencies.oxlint} 低於建置使用的 ${version}，舊版 oxlint 可能無法解析新規則`,
    ).toBeGreaterThanOrEqual(0);
  });
});
