// @vitest-environment node
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { readOxcCorrectnessRules } from './index.ts';

describe('readOxcCorrectnessRules', () => {
  const originalCwd = process.cwd();
  let cwd: string;

  beforeEach(() => {
    cwd = mkdtempSync(join(tmpdir(), 'oxlint-rules-'));
  });

  afterEach(() => {
    process.chdir(originalCwd);
    rmSync(cwd, { recursive: true, force: true });
  });

  it('enables every oxc correctness rule as error', () => {
    const rules = readOxcCorrectnessRules();
    const names = Object.keys(rules);

    expect(rules).toHaveProperty('oxc/erasing-op', 'error');
    expect(rules).toHaveProperty('oxc/bad-replace-all-arg', 'error');
    expect(names).toEqual(names.toSorted((a, b) => a.localeCompare(b)));
    expect(names.every(name => name.startsWith('oxc/'))).toBe(true);
    expect(Object.values(rules).every(level => level === 'error')).toBe(true);
  });

  it('ignores an unloadable oxlint config in the working directory', () => {
    // 模擬 CI 尚未 build 時，repo 根目錄的 oxlint.config.ts 匯入不到 @component-hook/oxlint-config 的情境
    writeFileSync(join(cwd, 'oxlint.config.ts'), 'import "@component-hook/does-not-exist";\n\nexport default {};\n');
    process.chdir(cwd);

    expect(readOxcCorrectnessRules()).toHaveProperty('oxc/erasing-op', 'error');
  });
});
