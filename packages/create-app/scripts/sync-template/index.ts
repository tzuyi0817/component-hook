import { readFileSync } from 'node:fs';
import path from 'node:path';
import { parseArgs, styleText } from 'node:util';
import { comparePackageJson, diffArtTemplate, isPackageDiffEmpty, toTemplatePath } from './compare.ts';
import { DEFAULT_SOURCE_DIRS, DEPENDENCY_SKIP, FRAMEWORKS, IGNORED_PATHS, KNOWN_DIVERGENT } from './config.ts';
import { isGitRepository, lastCommitTime, listTrackedFiles } from './git.ts';
import { printFrameworkReport, printTemplateOnly } from './report.ts';
import type { Entry, Framework, PackageJsonLike, TemplateKind } from './types.ts';

interface Target {
  art: boolean;
  kind: TemplateKind;
  path: string;
}

interface Context {
  /** 已被某個來源對應到的 template 檔案，剩下的就是只在 template 的檔案 */
  claimed: Set<string>;
  /** shared 檔案兩個來源都會走到，只報告一次 */
  handledShared: Set<string>;
  sourceFiles: Map<Framework, Set<string>>;
  sources: Record<Framework, string>;
  templateFiles: Set<string>;
}

const repoRoot = path.resolve(import.meta.dirname, '../../../..');
const createAppRoot = path.resolve(import.meta.dirname, '../..');

const labelOf = (target: Target) => `template-${target.kind}/${target.path}`;

const FRAMEWORK_NAMES: ReadonlySet<string> = new Set(FRAMEWORKS);

function isFramework(value: string | undefined): value is Framework {
  return value !== undefined && FRAMEWORK_NAMES.has(value);
}

function parseSources(overrides: string[]): Record<Framework, string> {
  const parsed = overrides.map(override => {
    const [framework, dir] = override.split('=', 2);

    if (!isFramework(framework) || !dir) {
      throw new Error(`--source 格式為 <vue|react>=<path>，收到：${override}`);
    }
    return [framework, path.resolve(dir)] as const;
  });
  const overridden = new Map(parsed);

  return {
    react: overridden.get('react') ?? path.resolve(repoRoot, DEFAULT_SOURCE_DIRS.react),
    vue: overridden.get('vue') ?? path.resolve(repoRoot, DEFAULT_SOURCE_DIRS.vue),
  };
}

function readText(filePath: string) {
  return readFileSync(filePath, 'utf8');
}

/** 依序找 shared、該框架、.art 版本，第一個存在的就是目的地 */
function resolveTarget(context: Context, templatePath: string, framework: Framework): Target | undefined {
  const candidates: Target[] = [
    { art: false, kind: 'shared', path: templatePath },
    { art: false, kind: framework, path: templatePath },
    { art: true, kind: framework, path: `${templatePath}.art` },
    { art: true, kind: 'shared', path: `${templatePath}.art` },
  ];

  return candidates.find(candidate => context.templateFiles.has(labelOf(candidate)));
}

/** 用兩邊檔案最後 commit 的時間提示方向，只是提示，不是真相 */
function directionOf(context: Context, framework: Framework, sourcePath: string, target: Target) {
  const sourceTime = lastCommitTime(context.sources[framework], sourcePath);
  const templateTime = lastCommitTime(repoRoot, `packages/create-app/${labelOf(target)}`);

  if (sourceTime === undefined || templateTime === undefined) return 'unknown';
  return sourceTime >= templateTime ? 'source newer' : 'template newer';
}

function classifyPackageJson(context: Context, framework: Framework): Entry {
  const target = `template-${framework}/package.json`;
  const source: PackageJsonLike = JSON.parse(readText(path.join(context.sources[framework], 'package.json')));
  const template: PackageJsonLike = JSON.parse(readText(path.join(createAppRoot, target)));
  const packageDiff = comparePackageJson(source, template, DEPENDENCY_SKIP[framework]);

  context.claimed.add(target);
  return {
    framework,
    packageDiff,
    sourcePath: 'package.json',
    status: isPackageDiffEmpty(packageDiff) ? 'same' : 'deps',
    target,
  };
}

/** shared 檔案兩個來源都有且內容不同時，不猜哪邊對，標為 CONFLICT */
function findSharedConflict(context: Context, framework: Framework, sourcePath: string, target: Target) {
  const other = FRAMEWORKS.find(candidate => candidate !== framework);

  if (!other || !context.sourceFiles.get(other)?.has(sourcePath)) return;

  const mine = readText(path.join(context.sources[framework], sourcePath));
  const theirs = readText(path.join(context.sources[other], sourcePath));

  if (mine === theirs) return;
  return {
    framework,
    note: `${framework} 與 ${other} 的來源內容不同`,
    sourcePath,
    status: 'conflict',
    target: labelOf(target),
  } satisfies Entry;
}

function compareContents(context: Context, framework: Framework, sourcePath: string, target: Target): Entry {
  const label = labelOf(target);
  const sourceText = readText(path.join(context.sources[framework], sourcePath));
  const templateText = readText(path.join(createAppRoot, label));

  if (target.art) {
    const mismatches = diffArtTemplate(templateText, sourceText);

    return { framework, mismatches, sourcePath, status: mismatches.length > 0 ? 'manual' : 'same', target: label };
  }
  if (sourceText === templateText) return { framework, sourcePath, status: 'same', target: label };
  return {
    framework,
    note: directionOf(context, framework, sourcePath, target),
    sourcePath,
    status: 'diff',
    target: label,
  };
}

function classify(context: Context, framework: Framework, sourcePath: string): Entry | undefined {
  if (IGNORED_PATHS.has(sourcePath)) return undefined;
  if (sourcePath === 'package.json') return classifyPackageJson(context, framework);

  const templatePath = toTemplatePath(sourcePath);
  const target = resolveTarget(context, templatePath, framework);
  const label = target ? labelOf(target) : undefined;

  if (label) context.claimed.add(label);
  if (label && target?.kind === 'shared') {
    if (context.handledShared.has(label)) return undefined;
    context.handledShared.add(label);
  }
  if (Object.hasOwn(KNOWN_DIVERGENT, sourcePath)) {
    return { framework, note: KNOWN_DIVERGENT[sourcePath], sourcePath, status: 'skip', target: label };
  }
  if (!target) return { framework, sourcePath, status: 'new', target: `template-${framework}/${templatePath}` };

  const conflict = target.kind === 'shared' ? findSharedConflict(context, framework, sourcePath, target) : undefined;

  return conflict ?? compareContents(context, framework, sourcePath, target);
}

function main() {
  const { values } = parseArgs({
    options: {
      only: { type: 'string' },
      source: { default: [], multiple: true, type: 'string' },
    },
  });
  const sources = parseSources(values.source);
  const frameworks = FRAMEWORKS.filter(framework => !values.only || framework === values.only);
  const missing = frameworks.filter(framework => !isGitRepository(sources[framework]));

  if (missing.length > 0) {
    for (const framework of missing) {
      console.error(styleText('red', `找不到 ${framework} 的來源 git repo：${sources[framework]}`));
    }
    process.exitCode = 2;
    return;
  }

  const context: Context = {
    claimed: new Set(),
    handledShared: new Set(),
    sourceFiles: new Map(frameworks.map(framework => [framework, new Set(listTrackedFiles(sources[framework]))])),
    sources,
    templateFiles: new Set(
      listTrackedFiles(repoRoot, 'packages/create-app/template-*').map(file =>
        file.replace('packages/create-app/', ''),
      ),
    ),
  };
  const entries = frameworks.flatMap(framework =>
    [...(context.sourceFiles.get(framework) ?? [])].flatMap(sourcePath => {
      const entry = classify(context, framework, sourcePath);

      return entry ? [entry] : [];
    }),
  );

  for (const framework of frameworks) {
    printFrameworkReport(
      framework,
      sources[framework],
      entries.filter(entry => entry.framework === framework),
    );
  }

  const relevantKinds = new Set<string>(['shared', ...frameworks]);
  const templateOnly = [...context.templateFiles].filter(label => {
    const kind = label.slice('template-'.length, label.indexOf('/'));

    return !context.claimed.has(label) && relevantKinds.has(kind);
  });

  printTemplateOnly(templateOnly);

  const drift = entries.filter(entry => entry.status !== 'same' && entry.status !== 'skip').length;

  console.info(
    drift === 0 ? styleText('green', '\n✔ template 與來源一致') : styleText('yellow', `\n${drift} 項需要處理`),
  );
  if (drift > 0) process.exitCode = 1;
}

main();
