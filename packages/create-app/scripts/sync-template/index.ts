import path from 'node:path';
import { parseArgs, styleText } from 'node:util';
import { parseOnly, parseSourceOverride } from './args.ts';
import { classify, type Context } from './classify.ts';
import { countDrift, findTemplateOnly, templateKindsOf } from './compare.ts';
import { DEFAULT_SOURCE_DIRS, FRAMEWORKS } from './config.ts';
import { isGitRepository, listTrackedFiles } from './git.ts';
import { printFrameworkReport, printTemplateOnly } from './report.ts';
import type { Framework } from './types.ts';

const repoRoot = path.resolve(import.meta.dirname, '../../../..');
const createAppRoot = path.resolve(import.meta.dirname, '../..');

function parseSources(overrides: string[]): Record<Framework, string> {
  const overridden = new Map(overrides.map(parseSourceOverride));

  return {
    react: overridden.get('react') ?? path.resolve(repoRoot, DEFAULT_SOURCE_DIRS.react),
    vue: overridden.get('vue') ?? path.resolve(repoRoot, DEFAULT_SOURCE_DIRS.vue),
  };
}

function parseCli() {
  try {
    const { values } = parseArgs({
      options: {
        only: { type: 'string' },
        source: { default: [], multiple: true, type: 'string' },
      },
    });

    const sources = parseSources(values.source);

    return { frameworks: parseOnly(values.only), sources };
  } catch (error) {
    console.error(styleText('red', error instanceof Error ? error.message : String(error)));
    return;
  }
}

function main() {
  const cli = parseCli();

  if (!cli) {
    process.exitCode = 2;
    return;
  }

  const { frameworks, sources } = cli;
  const missing = frameworks.filter(framework => !isGitRepository(sources[framework]));

  if (missing.length > 0) {
    for (const framework of missing) {
      console.error(styleText('red', `${framework} 的來源必須是 git repo 根目錄：${sources[framework]}`));
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
    templateRoot: createAppRoot,
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

  const isPartial = frameworks.length < FRAMEWORKS.length;
  const templateOnly = findTemplateOnly(context.templateFiles, context.claimed, templateKindsOf(frameworks));

  printTemplateOnly(templateOnly);

  const drift = countDrift(entries, templateOnly);
  const success = isPartial ? `\n✔ ${frameworks.join('、')} 與來源一致` : '\n✔ template 與來源一致';

  console.info(drift === 0 ? styleText('green', success) : styleText('yellow', `\n${drift} 項需要處理`));

  if (isPartial) console.info(styleText('dim', 'shared 檔的孤兒與 CONFLICT 需要不加 --only 執行才會檢查'));

  if (drift > 0) process.exitCode = 1;
}

try {
  main();
} catch (error) {
  console.error(error);
  process.exitCode = 2;
}
