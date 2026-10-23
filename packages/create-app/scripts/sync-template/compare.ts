import { RENAME_FILES } from '../../src/constants.ts';
import { FRAMEWORKS } from './config.ts';
import type {
  DependencyRangeDiff,
  DependencySection,
  Entry,
  FieldDiff,
  Framework,
  LineMismatch,
  PackageDiff,
  PackageJsonLike,
  ScriptDiff,
  SectionDiff,
} from './types.ts';

const DEPENDENCY_SECTIONS: DependencySection[] = ['dependencies', 'devDependencies', 'optionalDependencies'];

/** 來源檔案路徑對應到 template 內的路徑：CLI 在 scaffold 時會改名的檔案，這裡反向對照 */
export function toTemplatePath(sourcePath: string): string {
  const renamed = Object.entries(RENAME_FILES).find(([, scaffoldName]) => scaffoldName === sourcePath);

  return renamed?.[0] ?? sourcePath;
}

function splitLines(text: string) {
  return text.split(/\r?\n/);
}

/** 比對 .art 檔與來源：template 內含 {{…}} 的行視為萬用字元，可對上來源的任一行 */
export function diffArtTemplate(templateText: string, sourceText: string): LineMismatch[] {
  const templateLines = splitLines(templateText);
  const sourceLines = splitLines(sourceText);
  const length = Math.max(templateLines.length, sourceLines.length);

  return Array.from({ length }, (_, index) => index)
    .filter(index => {
      const template = templateLines.at(index);
      const source = sourceLines.at(index);
      const isPlaceholder = template?.includes('{{') && source !== undefined;

      return !isPlaceholder && template !== source;
    })
    .map(index => ({
      line: index + 1,
      source: sourceLines.at(index) ?? '',
      template: templateLines.at(index) ?? '',
    }));
}

function collectRanges(pkg: PackageJsonLike) {
  const entries = DEPENDENCY_SECTIONS.flatMap(section =>
    Object.entries(pkg[section] ?? {}).map(([name, range]) => [name, { range, section }] as const),
  );

  return new Map(entries);
}

function compareScripts(source: Record<string, string>, template: Record<string, string>): ScriptDiff[] {
  const names = new Set([...Object.keys(source), ...Object.keys(template)]);

  return [...names]
    .filter(name => source[name] !== template[name])
    .map(name => ({ name, source: source[name], template: template[name] }));
}

/** 由依賴、scripts、packageManager 各自比對的欄位，不再列入頂層欄位 */
const FIELDS_COMPARED_ELSEWHERE: ReadonlySet<string> = new Set([...DEPENDENCY_SECTIONS, 'packageManager', 'scripts']);

/** 物件鍵依字母排序，巢狀欄位只差在鍵順序時不視為不同 */
function sortKeys(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(item => sortKeys(item));
  if (value === null || typeof value !== 'object') return value;

  return Object.fromEntries(
    Object.entries(value)
      .toSorted(([a], [b]) => a.localeCompare(b))
      .map(([key, item]) => [key, sortKeys(item)]),
  );
}

const stringify = (value: unknown) => (value === undefined ? undefined : JSON.stringify(sortKeys(value)));

/** 依賴、scripts、packageManager 以外的頂層欄位：CLI 會把 template 的 package.json 原樣帶進新專案 */
function compareFields(source: PackageJsonLike, template: PackageJsonLike, skipped: ReadonlySet<string>): FieldDiff[] {
  const names = new Set([...Object.keys(source), ...Object.keys(template)]);

  return [...names]
    .filter(name => !FIELDS_COMPARED_ELSEWHERE.has(name) && !skipped.has(name))
    .map(name => ({ name, source: stringify(source[name]), template: stringify(template[name]) }))
    .filter(diff => diff.source !== diff.template);
}

/** 比對兩份 package.json：兩邊都有的套件比 range，只在一邊的列為候選，不自動增刪 */
export function comparePackageJson(
  source: PackageJsonLike,
  template: PackageJsonLike,
  skip: string[] = [],
  fieldSkip: string[] = [],
): PackageDiff {
  const skipped = new Set(skip);
  const sourceRanges = collectRanges(source);
  const templateRanges = collectRanges(template);
  const ranges: DependencyRangeDiff[] = [...sourceRanges].flatMap(([name, { range }]) => {
    const current = templateRanges.get(name);

    if (skipped.has(name) || !current || current.range === range) return [];
    return [{ name, section: current.section, source: range, template: current.range }];
  });
  const sections: SectionDiff[] = [...sourceRanges].flatMap(([name, { section }]) => {
    const current = templateRanges.get(name);

    if (skipped.has(name) || !current || current.section === section) return [];
    return [{ name, source: section, template: current.section }];
  });
  const onlyInSource = [...sourceRanges.keys()].filter(name => !skipped.has(name) && !templateRanges.has(name));
  const onlyInTemplate = [...templateRanges.keys()].filter(name => !skipped.has(name) && !sourceRanges.has(name));
  const packageManager =
    source.packageManager === template.packageManager
      ? undefined
      : { source: source.packageManager ?? '', template: template.packageManager ?? '' };

  return {
    fields: compareFields(source, template, new Set(fieldSkip)),
    onlyInSource,
    onlyInTemplate,
    packageManager,
    ranges,
    scripts: compareScripts(source.scripts ?? {}, template.scripts ?? {}),
    sections,
  };
}

export function isPackageDiffEmpty({
  fields,
  onlyInSource,
  onlyInTemplate,
  packageManager,
  ranges,
  scripts,
  sections,
}: PackageDiff) {
  return (
    !packageManager &&
    [fields, onlyInSource, onlyInTemplate, ranges, scripts, sections].every(list => list.length === 0)
  );
}

/** 沒被任何來源對應到的 template 檔，只看 kinds 列出的 template 目錄 */
export function findTemplateOnly(
  templateFiles: Iterable<string>,
  claimed: ReadonlySet<string>,
  kinds: ReadonlySet<string>,
): string[] {
  return [...templateFiles].filter(label => {
    const kind = label.slice('template-'.length, label.indexOf('/'));

    return !claimed.has(label) && kinds.has(kind);
  });
}

/** --only 只比對單一來源；shared 檔的孤兒與 CONFLICT 要兩個來源都在才判斷得了 */
export function templateKindsOf(frameworks: readonly Framework[]): ReadonlySet<string> {
  return new Set(frameworks.length < FRAMEWORKS.length ? frameworks : ['shared', ...frameworks]);
}

/** 需要處理的項目數：SAME、SKIP 以外的項目，加上沒有來源對應的 template 檔 */
export function countDrift(entries: readonly Entry[], templateOnly: readonly string[]) {
  return entries.filter(({ status }) => status !== 'same' && status !== 'skip').length + templateOnly.length;
}

/** 去掉 range 前綴後以數字順序比較版本，只是方向提示；複雜 range 不保證正確 */
export function newerSideOf(template: string, source: string) {
  const version = (range: string) => range.replace(/^\D*/, '');
  const order = version(source).localeCompare(version(template), undefined, { numeric: true });

  if (order === 0) return;
  return order > 0 ? 'source newer' : 'template newer';
}
