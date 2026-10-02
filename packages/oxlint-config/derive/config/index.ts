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

/**
 * oxlint 只有核心版本、缺少 typescript-eslint 延伸語意的規則。
 * `no-redeclare` 不支援 `ignoreDeclarationMerge`，會把合法的宣告合併（同名 interface、namespace 合併）報成錯誤，
 * 因此在 preset 啟用延伸版本的範圍內改為 `off` 並蓋過頂層的核心版本：寧可少報重複宣告，也不誤報宣告合併。
 */
const DISABLED_EXTENDED_RULES = new Set(['@typescript-eslint/no-redeclare']);

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

/**
 * ESLint 的新選項會整組取代先前的 selector，因此未列出的專用規則一律輸出 `off`；
 * 關閉時全部關閉，未曾啟用的會在後續清理掉。
 * 只給 severity 時 ESLint 沿用先前的 selector，單看這個 config 無法推導，直接報錯。
 */
function restrictedSyntaxEntries(severity: Severity, options: unknown[]): OxlintRules {
  if (severity !== 'off' && options.length === 0) {
    throw new Error('`no-restricted-syntax` 只設定 severity 時無法推導，請列出完整的 selector');
  }

  const selectors = new Set(severity === 'off' ? [] : restrictedSelectors(options));

  return Object.fromEntries(
    Object.entries(RESTRICTED_SYNTAX_ALIASES).map(([selector, rule]) => [
      rule,
      selectors.has(selector) ? severity : 'off',
    ]),
  );
}

/** 單一 ESLint 規則對應到的 oxlint 規則，沒有對應時回傳空物件 */
function toOxlintEntries(eslintName: string, entry: Linter.RuleEntry, isVue: boolean): OxlintRules {
  const [severity, options] = splitRuleEntry(entry);

  if (eslintName === 'no-restricted-syntax') return restrictedSyntaxEntries(severity, options);

  const alias = RULE_ALIASES[eslintName];

  if (alias) return { [alias]: severity };

  const name = supportedRules.get(eslintName);

  if (!name || EXCLUDED_PLUGINS.has(pluginOfOxlintRule(name))) return {};
  if (isVue && VUE_SKIPPED_RULES.has(name)) return {};
  if (DISABLED_EXTENDED_RULES.has(eslintName)) return { [name]: 'off' };

  return { [name]: toOxlintRuleEntry(name, severity, options) };
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

function sameFiles(a: string[], b: string[]) {
  return a.length === b.length && a.every((pattern, index) => pattern === b[index]);
}

/** 規則所屬的 oxlint plugin，`eslint` 為內建不需列出 */
function collectPlugins(ruleSets: OxlintRules[]) {
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
 * - 只保留 oxlint 已實作的規則，頂層合併後仍為 `off` 的規則移除，除非它關掉的是 `inherited` 中啟用的規則。
 * - 非 JS / TS 檔案（json、yaml、markdown）的設定略過。
 * - `extraRules` 為 ESLint 沒有對應、需另外併入頂層的 oxlint 自有規則（例如 oxc plugin）；
 *   與 preset 經別名對應到同一條規則時以 preset 的設定為準。
 * - `inherited` 為使用時會一起 `extends` 的前一份設定（例如 react 疊在 basic 上）的頂層規則。
 *   只比對頂層：前一份設定在 override 內啟用的規則，oxlint 的 override 會蓋過這裡的頂層 off，無法推導。
 */
export function deriveOxlintConfig(
  configs: readonly EslintConfig[],
  { extraRules = {}, inherited = {} }: { extraRules?: OxlintRules; inherited?: OxlintRules } = {},
): DerivedOxlintConfig {
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

  // 頂層合併後仍為 off 的規則等於沒啟用，但關掉 inherited 啟用的規則時要保留，extends 後才蓋得過去；
  // override 的 off 可能針對其他設定啟用的規則（例如 react 關掉 basic 的 unicorn/no-anonymous-default-export），一律保留。
  const rules = Object.fromEntries(
    Object.entries({ ...extraRules, ...topLevel }).filter(([name, entry]) => {
      const base = inherited[name];

      return isEnabled(entry) || (base !== undefined && isEnabled(base));
    }),
  );
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
