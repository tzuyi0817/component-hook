/**
 * preset 啟用、但 oxlint 以不同名稱實作的規則（`@oxlint/migrate --details` 標記為「已由 oxc/* 涵蓋」）。
 * 對應後只沿用 severity，不帶原規則的選項。
 */
export const RULE_ALIASES: Readonly<Record<string, string>> = {
  'unicorn/no-accidental-bitwise-operator': 'oxc/bad-bitwise-operator',
  'unicorn/no-chained-comparison': 'oxc/bad-comparison-sequence',
  'unicorn/no-constant-zero-expression': 'oxc/erasing-op',
  'unicorn/no-double-comparison': 'oxc/double-comparisons',
  'unicorn/no-invalid-character-comparison': 'oxc/bad-char-at-comparison',
  'unicorn/no-misrefactored-assignment': 'oxc/misrefactored-assign-op',
  'unicorn/prefer-math-constants': 'oxc/approx-constant',
};

/**
 * `no-restricted-syntax` 本身 oxlint 未實作，但 preset 禁止的部分語法有專用規則可對應。
 * `ForInStatement` 沒有等價規則，仍只有 ESLint 會檢查。
 */
export const RESTRICTED_SYNTAX_ALIASES: Readonly<Record<string, string>> = {
  'TSEnumDeclaration[const=true]': 'oxc/no-const-enum',
  LabeledStatement: 'no-labels',
};
