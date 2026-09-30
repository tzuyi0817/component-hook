import { RESTRICTED_SYNTAX_ALIASES, RULE_ALIASES } from '../aliases.ts';
import { isVueGlob, toOxlintFiles, toOxlintGlobs } from '../globs/index.ts';
import { isEnabled, splitRuleEntry, toOxlintRuleEntry, type OxlintRuleEntry, type Severity } from '../options.ts';
import { extendedCoreRuleOf, pluginOfOxlintRule, supportedRules, type OxlintPlugin } from '../rules.ts';
import type { Linter } from 'eslint';

export type OxlintRules = Record<string, OxlintRuleEntry>;

export interface OxlintOverride {
  files: string[];
  rules: OxlintRules;
}

export interface DerivedOxlintConfig {
  plugins: OxlintPlugin[];
  /** 類別全關，只啟用 preset 明確列出的規則，避免 oxlint 預設的 correctness 類別多報 */
  categories: { correctness: 'off' };
  rules?: OxlintRules;
  overrides?: OxlintOverride[];
}

type EslintConfig = Pick<Linter.Config, 'files' | 'ignores' | 'rules'>;

/** Vue 相關規則全部留在 ESLint，等 oxc 支援 template 解析後再評估 */
const EXCLUDED_PLUGINS = new Set<OxlintPlugin>(['vue']);

/**
 * oxlint 只看 `.vue` 的 `<script>`，看不到 template 的引用，
 * 這兩條規則對 `.vue` 一律跳過並留給 ESLint。
 */
const VUE_SKIPPED_RULES = new Set(['no-unused-vars', 'typescript/consistent-type-imports']);

/** `no-restricted-syntax` 的選項可為 selector 字串或 `{ selector, message }` 物件 */
function restrictedSelectors(options: unknown[]) {
  return options.flatMap(option => {
    if (typeof option === 'string') return [option];
    if (option !== null && typeof option === 'object' && 'selector' in option) return [String(option.selector)];

    return [];
  });
}

/** 關閉時沒有 selector 可對應，把所有專用規則一併關閉；未曾啟用的會在後續清理掉 */
function restrictedSyntaxEntries(severity: Severity, options: unknown[]): OxlintRules {
  const selectors = severity === 'off' ? Object.keys(RESTRICTED_SYNTAX_ALIASES) : restrictedSelectors(options);

  return Object.fromEntries(
    selectors
      .filter(selector => selector in RESTRICTED_SYNTAX_ALIASES)
      .map(selector => [RESTRICTED_SYNTAX_ALIASES[selector], severity]),
  );
}

/** 單一 ESLint 規則對應到的 oxlint 規則，沒有對應時回傳空物件 */
function toOxlintEntries(eslintName: string, entry: Linter.RuleEntry, isVue: boolean): OxlintRules {
  const [severity, options] = splitRuleEntry(entry);

  if (eslintName === 'no-restricted-syntax') return restrictedSyntaxEntries(severity, options);

  const alias = RULE_ALIASES[eslintName];

  if (alias) return { [alias]: severity };

  const supported = supportedRules.get(eslintName);

  if (!supported || EXCLUDED_PLUGINS.has(supported.plugin)) return {};
  if (isVue && VUE_SKIPPED_RULES.has(supported.name)) return {};

  return { [supported.name]: toOxlintRuleEntry(supported.name, entry) };
}

/**
 * 把單一 ESLint config 的 rules 轉成 oxlint rules。
 * 同一物件內若同時有核心規則與其 `@typescript-eslint/*` 延伸版本，只採用延伸版本，
 * 因為兩者在 oxlint 對應同一條規則，且延伸版本才是 preset 想要的設定。
 */
function toOxlintRules(rules: NonNullable<EslintConfig['rules']>, { isVue }: { isVue: boolean }) {
  const extendedCoreRules = new Set(Object.keys(rules).map(extendedCoreRuleOf));
  const result: OxlintRules = {};

  for (const [eslintName, entry] of Object.entries(rules)) {
    if (entry === undefined || extendedCoreRules.has(eslintName)) continue;

    Object.assign(result, toOxlintEntries(eslintName, entry, isVue));
  }

  return result;
}

function pickEntries(rules: OxlintRules, predicate: (name: string, entry: OxlintRuleEntry) => boolean) {
  return Object.fromEntries(Object.entries(rules).filter(([name, entry]) => predicate(name, entry)));
}

function sameFiles(a: string[], b: string[]) {
  return a.length === b.length && a.every((pattern, index) => pattern === b[index]);
}

/** 規則所屬的 oxlint plugin，`eslint` 為內建不需列出 */
export function collectPlugins(ruleSets: OxlintRules[]) {
  const plugins = new Set<OxlintPlugin>();

  for (const rules of ruleSets) {
    for (const name of Object.keys(rules)) {
      const plugin = pluginOfOxlintRule(name);

      if (plugin !== 'eslint') plugins.add(plugin);
    }
  }

  return [...plugins].toSorted((a, b) => a.localeCompare(b));
}

/**
 * 從 ESLint flat config 陣列推導 oxlint 設定，讓兩邊規則只維護 eslint-plugin 一處。
 *
 * - 沒有 `files` 的 config 依序合併成頂層 `rules`；有 `files` 的成為 `overrides`，連續且 `files` 相同者合併。
 * - 只保留 oxlint 已實作的規則，頂層合併後仍為 `off` 的規則移除。
 * - 非 JS / TS 檔案（json、yaml、markdown）的設定略過。
 */
export function deriveOxlintConfig(configs: readonly EslintConfig[]): DerivedOxlintConfig {
  const topLevel: OxlintRules = {};
  const overrides: OxlintOverride[] = [];

  for (const config of configs) {
    if (!config.rules) continue;

    const files = toOxlintFiles(config.files);

    if (files?.length === 0) continue;

    const rules = toOxlintRules(config.rules, { isVue: files?.some(isVueGlob) ?? false });

    if (!files) {
      Object.assign(topLevel, rules);
      continue;
    }

    const previous = overrides.at(-1);

    if (previous && sameFiles(previous.files, files)) {
      Object.assign(previous.rules, rules);
    } else {
      overrides.push({ files, rules });
    }
  }

  // 頂層合併後仍為 off 的規則等於沒啟用；override 的 off 可能針對其他設定啟用的規則
  // （例如 react 關掉 basic 的 unicorn/no-anonymous-default-export），一律保留。
  const rules = pickEntries(topLevel, (_, entry) => isEnabled(entry));
  const nonEmptyOverrides = overrides.filter(override => Object.keys(override.rules).length > 0);

  return {
    plugins: collectPlugins([rules, ...nonEmptyOverrides.map(override => override.rules)]),
    categories: { correctness: 'off' },
    ...(Object.keys(rules).length > 0 && { rules }),
    ...(nonEmptyOverrides.length > 0 && { overrides: nonEmptyOverrides }),
  };
}

/**
 * 從 ESLint 的全域 `ignores` config 推導 oxlint `ignorePatterns`。
 * oxlint 不會從 `extends` 繼承 `ignorePatterns`，因此另外匯出供根設定檔使用。
 */
export function deriveIgnorePatterns(configs: readonly EslintConfig[]) {
  return configs
    .filter(config => config.ignores && !config.files && !config.rules)
    .flatMap(config => config.ignores ?? [])
    .flatMap(toOxlintGlobs);
}
