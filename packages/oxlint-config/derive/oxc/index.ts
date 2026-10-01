import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import type { OxlintRules } from '../config/index.ts';

interface OxlintRuleInfo {
  scope: string;
  value: string;
  category: string;
  type_aware: boolean;
}

const require = createRequire(import.meta.url);

export const oxlintBin = join(dirname(require.resolve('oxlint/package.json')), 'bin/oxlint');

export function runOxlint(args: string[], cwd: string) {
  return spawnSync(process.execPath, [oxlintBin, ...args], { cwd, encoding: 'utf8' });
}

/**
 * oxc plugin 是 oxlint 自有規則，ESLint 沒有對應，無法從 preset 推導。
 * 改向 oxlint 本體查詢 correctness 類別的 oxc 規則並全部以 error 啟用，
 * oxlint 升版新增規則時重新 build 即會跟上，不需手動維護清單。
 *
 * `--rules` 仍會載入執行目錄的 oxlint 設定，且載入失敗的錯誤是印在 stdout。
 * 因此改在空的暫存目錄執行，避免 repo 根目錄的 `oxlint.config.ts`
 * 在 `@component-hook/oxlint-config` 尚未 build 時（例如 CI）讓查詢失敗。
 */
export function readOxcCorrectnessRules(): OxlintRules {
  const cwd = mkdtempSync(join(tmpdir(), 'oxlint-rules-'));

  try {
    const { status, stdout, stderr } = runOxlint(['--rules', '--format', 'json'], cwd);

    if (status !== 0) throw new Error(`oxlint --rules 失敗：${stderr || stdout}`);

    const names = (JSON.parse(stdout) as OxlintRuleInfo[])
      .filter(rule => rule.scope === 'oxc' && rule.category === 'correctness' && !rule.type_aware)
      .map(rule => `oxc/${rule.value}`)
      .toSorted((a, b) => a.localeCompare(b));

    return Object.fromEntries(names.map(name => [name, 'error']));
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
}
