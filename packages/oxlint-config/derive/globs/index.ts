import type { Linter } from 'eslint';

/** eslint-plugin 以 extglob 表示所有 JS / TS 副檔名，oxlint 不支援 extglob，改為大括號列舉 */
const SRC_EXTGLOB = '?([cm])[jt]s?(x)';
const SRC_BRACES = '{js,jsx,ts,tsx,mjs,mts,cjs,cts}';

/** `?(x)` 形式的單一可選片段，展開成有與沒有兩種 pattern */
const OPTIONAL_EXTGLOB = /\?\(([^()|]+)\)/;
const ANY_EXTGLOB = /[?*+@!]\(/;

/** oxlint 只處理 JS / TS（含 `.vue` 等 SFC 的 script），其餘副檔名的設定不需要轉換 */
const NON_SCRIPT_GLOB = /\.(?:json[5c]?|ya?ml|md)$|\.md\//;

const SIMPLE_EXTENSION_GLOB = /^\*\*\/\*\.\w+$/;

/** 把單一 ESLint glob 轉成 oxlint 能理解的 glob，可能展開成多個 */
export function toOxlintGlobs(pattern: string): string[] {
  const braced = pattern.replaceAll(SRC_EXTGLOB, SRC_BRACES);
  const optional = OPTIONAL_EXTGLOB.exec(braced);

  if (optional) {
    return [
      ...toOxlintGlobs(braced.replace(optional[0], '')),
      ...toOxlintGlobs(braced.replace(optional[0], optional[1])),
    ];
  }

  if (ANY_EXTGLOB.test(braced)) {
    throw new Error(`oxlint 不支援的 extglob pattern：${pattern}`);
  }

  return [braced];
}

/**
 * ESLint 的 `files` 允許以巢狀陣列表示 AND 條件（`defineConfig` 合併 `extends` 時會產生）。
 * oxlint 沒有對應語法，這裡只處理副檔名 glob 的交集：全部相同就保留，否則視為空集合。
 */
function intersectFiles(patterns: string[]) {
  const [first, ...rest] = patterns;

  if (rest.every(pattern => pattern === first)) return first;

  if (patterns.every(pattern => SIMPLE_EXTENSION_GLOB.test(pattern))) return;

  throw new Error(`無法轉換的 AND glob：${JSON.stringify(patterns)}`);
}

/**
 * 把 ESLint config 的 `files` 轉成 oxlint override 的 `files`。
 * 回傳 `undefined` 代表沒有 `files`（全域設定），空陣列代表沒有任何 oxlint 需要處理的檔案。
 */
export function toOxlintFiles(files: Linter.Config['files']) {
  if (!files) return;

  const flattened = files
    .map(entry => (Array.isArray(entry) ? intersectFiles(entry) : entry))
    .filter((pattern): pattern is string => pattern !== undefined);

  const converted = flattened.flatMap(toOxlintGlobs).filter(pattern => !NON_SCRIPT_GLOB.test(pattern));

  return [...new Set(converted)];
}

export function isVueGlob(pattern: string) {
  return pattern.endsWith('.vue');
}
