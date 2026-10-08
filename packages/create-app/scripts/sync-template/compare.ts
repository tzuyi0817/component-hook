import { RENAME_FILES } from '../../src/constants.ts';
import type {
  DependencyRangeDiff,
  DependencySection,
  LineMismatch,
  PackageDiff,
  PackageJsonLike,
  ScriptDiff,
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

/** 比對兩份 package.json：兩邊都有的套件比 range，只在一邊的列為候選，不自動增刪 */
export function comparePackageJson(
  source: PackageJsonLike,
  template: PackageJsonLike,
  skip: string[] = [],
): PackageDiff {
  const skipped = new Set(skip);
  const sourceRanges = collectRanges(source);
  const templateRanges = collectRanges(template);
  const ranges: DependencyRangeDiff[] = [...sourceRanges].flatMap(([name, { range }]) => {
    const current = templateRanges.get(name);

    if (skipped.has(name) || !current || current.range === range) return [];
    return [{ name, section: current.section, source: range, template: current.range }];
  });
  const onlyInSource = [...sourceRanges.keys()].filter(name => !skipped.has(name) && !templateRanges.has(name));
  const onlyInTemplate = [...templateRanges.keys()].filter(name => !skipped.has(name) && !sourceRanges.has(name));
  const packageManager =
    source.packageManager === template.packageManager
      ? undefined
      : { source: source.packageManager ?? '', template: template.packageManager ?? '' };

  return {
    onlyInSource,
    onlyInTemplate,
    packageManager,
    ranges,
    scripts: compareScripts(source.scripts ?? {}, template.scripts ?? {}),
  };
}

export function isPackageDiffEmpty({ onlyInSource, onlyInTemplate, packageManager, ranges, scripts }: PackageDiff) {
  return !packageManager && [onlyInSource, onlyInTemplate, ranges, scripts].every(list => list.length === 0);
}
