import { nurseryRules } from 'eslint-plugin-oxlint/rules-by-category';
import * as rulesByScope from 'eslint-plugin-oxlint/rules-by-scope';

export type OxlintPlugin =
  | 'eslint'
  | 'import'
  | 'jest'
  | 'jsdoc'
  | 'jsx-a11y'
  | 'nextjs'
  | 'node'
  | 'oxc'
  | 'promise'
  | 'react'
  | 'react-perf'
  | 'typescript'
  | 'unicorn'
  | 'vitest'
  | 'vue';

type RuleScope = keyof typeof rulesByScope;

/**
 * `eslint-plugin-oxlint/rules-by-scope` 的匯出名稱對應 oxlint 內建 plugin 名稱。
 * `typescriptTypeAwareRules` 需要 `oxlint-tsgolint`，不納入。
 * `eslintRules` 需排在最前，讓與核心同名的規則歸屬 eslint plugin。
 */
const SCOPE_PLUGINS: readonly (readonly [RuleScope, OxlintPlugin])[] = [
  ['eslintRules', 'eslint'],
  ['importRules', 'import'],
  ['jestRules', 'jest'],
  ['jsdocRules', 'jsdoc'],
  ['jsxA11yRules', 'jsx-a11y'],
  ['nextjsRules', 'nextjs'],
  ['nodeRules', 'node'],
  ['promiseRules', 'promise'],
  ['reactHooksRules', 'react'],
  ['reactPerfRules', 'react-perf'],
  ['reactRules', 'react'],
  ['typescriptRules', 'typescript'],
  ['unicornRules', 'unicorn'],
  ['vitestRules', 'vitest'],
  ['vueRules', 'vue'],
];

export interface SupportedRule {
  /** oxlint 端的規則名稱，例如 `typescript/ban-ts-comment`、`react/rules-of-hooks` */
  name: string;
  plugin: OxlintPlugin;
}

/** 取得 `@typescript-eslint/*` 規則所延伸的核心規則名稱；非延伸規則回傳 undefined */
export function extendedCoreRuleOf(eslintName: string) {
  if (!eslintName.startsWith('@typescript-eslint/')) return;

  const coreName = eslintName.slice('@typescript-eslint/'.length);

  return coreName in rulesByScope.eslintRules ? coreName : undefined;
}

/**
 * ESLint 規則名稱轉成 oxlint 規則名稱。
 * oxlint 的 react plugin 同時涵蓋 `react-hooks/*`；typescript-eslint 延伸自核心的規則
 * （`no-unused-vars`、`no-shadow` 等）在 oxlint 只有 eslint 版本，直接回到核心名稱。
 */
function toOxlintRuleName(eslintName: string, plugin: OxlintPlugin) {
  if (plugin === 'eslint') return eslintName;

  const coreName = extendedCoreRuleOf(eslintName);

  if (coreName) return coreName;

  return `${plugin}/${eslintName.slice(eslintName.lastIndexOf('/') + 1)}`;
}

const supported = new Map<string, SupportedRule>();
const pluginByOxlintName = new Map<string, OxlintPlugin>();

for (const [scope, plugin] of SCOPE_PLUGINS) {
  for (const eslintName of Object.keys(rulesByScope[scope])) {
    if (eslintName in nurseryRules) continue;

    const name = toOxlintRuleName(eslintName, plugin);

    supported.set(eslintName, { name, plugin });

    if (!pluginByOxlintName.has(name)) pluginByOxlintName.set(name, plugin);
  }
}

/** ESLint 規則名稱 → oxlint 已實作（非 nursery、不需型別資訊）的對應規則 */
export const supportedRules: ReadonlyMap<string, SupportedRule> = supported;

/** oxlint 規則所屬的 plugin；別名表指到的 `oxc/*` 不在對照表內，直接取前綴 */
export function pluginOfOxlintRule(name: string): OxlintPlugin {
  const known = pluginByOxlintName.get(name);

  if (known) return known;

  return name.includes('/') ? (name.slice(0, name.indexOf('/')) as OxlintPlugin) : 'eslint';
}
