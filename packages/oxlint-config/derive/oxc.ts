import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { collectPlugins, type DerivedOxlintConfig, type OxlintRules } from './config/index.ts';

const require = createRequire(import.meta.url);

export const oxlintBin = join(dirname(require.resolve('oxlint/package.json')), 'bin/oxlint');

export function runOxlint(args: string[], cwd: string) {
  return spawnSync(process.execPath, [oxlintBin, ...args], { cwd, encoding: 'utf8' });
}

/**
 * oxc plugin 是 oxlint 自有規則，ESLint 沒有對應，無法從 preset 推導。
 * 改向 oxlint 本體查詢 correctness 類別的 oxc 規則並全部以 error 啟用，
 * oxlint 升版新增規則時重新 build 即會跟上，不需手動維護清單。
 */
export function readOxcCorrectnessRules(): OxlintRules {
  const cwd = mkdtempSync(join(tmpdir(), 'oxlint-config-oxc-'));

  writeFileSync(join(cwd, '.oxlintrc.json'), JSON.stringify({ plugins: ['oxc'], categories: { correctness: 'warn' } }));

  const { status, stdout, stderr } = runOxlint(['--print-config'], cwd);

  if (status !== 0) throw new Error(`oxlint --print-config 失敗：${stderr}`);

  const { rules } = JSON.parse(stdout) as { rules: Record<string, unknown> };
  const names = Object.keys(rules)
    .filter(name => name.startsWith('oxc/'))
    .toSorted((a, b) => a.localeCompare(b));

  return Object.fromEntries(names.map(name => [name, 'error']));
}

/** 把 oxc 自有規則併入推導結果 */
export function withOxcRules(config: DerivedOxlintConfig, oxcRules: OxlintRules): DerivedOxlintConfig {
  const rules = { ...config.rules, ...oxcRules };

  return {
    ...config,
    plugins: collectPlugins([rules, ...(config.overrides ?? []).map(override => override.rules)]),
    rules,
  };
}
