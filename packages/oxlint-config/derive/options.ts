import type { Linter } from 'eslint';

export type Severity = 'off' | 'warn' | 'error';

export type OxlintRuleEntry = Severity | [Severity, ...unknown[]];

const SEVERITIES: Record<string, Severity> = {
  0: 'off',
  1: 'warn',
  2: 'error',
  off: 'off',
  warn: 'warn',
  error: 'error',
};

/** 同一選項在 oxlint 採用不同的 key 名稱 */
const OPTION_KEY_RENAMES: Record<string, Record<string, string>> = {
  'import/no-duplicates': { 'prefer-inline': 'preferInline' },
};

/** oxlint 設定檔是 JSON，RegExp 需改成字串 pattern；字串無法帶 flags，有 flags 時直接報錯而非靜默丟棄 */
function toJsonValue(value: unknown, renames: Record<string, string> = {}): unknown {
  if (value instanceof RegExp) {
    if (value.flags) throw new Error(`oxlint 設定無法保留 RegExp flags：${String(value)}`);

    return value.source;
  }

  if (Array.isArray(value)) return value.map(item => toJsonValue(item, renames));

  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [renames[key] ?? key, toJsonValue(item, renames)]),
    );
  }

  return value;
}

function toSeverity(level: Linter.RuleSeverity | Linter.StringSeverity): Severity {
  const severity = SEVERITIES[level];

  if (!severity) throw new Error(`未知的 severity：${String(level)}`);

  return severity;
}

/** 拆出 ESLint 規則設定的 severity 與選項 */
export function splitRuleEntry(entry: Linter.RuleEntry): [Severity, unknown[]] {
  const [level, ...options] = Array.isArray(entry) ? entry : [entry];

  return [toSeverity(level), options];
}

/** 把拆好的 severity 與選項組成 oxlint 的規則設定，沒有選項時只保留 severity */
export function toOxlintRuleEntry(oxlintName: string, severity: Severity, options: unknown[]): OxlintRuleEntry {
  if (options.length === 0) return severity;

  return [severity, ...options.map(option => toJsonValue(option, OPTION_KEY_RENAMES[oxlintName]))];
}

export function isEnabled(entry: OxlintRuleEntry) {
  return (Array.isArray(entry) ? entry[0] : entry) !== 'off';
}
