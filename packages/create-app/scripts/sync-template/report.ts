import { styleText } from 'node:util';
import type { Entry, EntryStatus, Framework, LineMismatch, PackageDiff } from './types.ts';

type Style = Parameters<typeof styleText>[0];

const STATUS_STYLE: Record<EntryStatus, Style> = {
  conflict: 'red',
  deps: 'yellow',
  diff: 'yellow',
  manual: 'magenta',
  new: 'cyan',
  same: 'green',
  skip: 'dim',
};

/** SAME 只顯示數量，其餘依處理的急迫程度排序 */
const STATUS_ORDER: EntryStatus[] = ['diff', 'conflict', 'new', 'manual', 'deps', 'skip'];

const MAX_MISMATCH_LINES = 3;

function truncate(text: string, max = 90) {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

function printMismatches(mismatches: LineMismatch[]) {
  for (const { line, source, template } of mismatches.slice(0, MAX_MISMATCH_LINES)) {
    console.info(styleText('dim', `      L${line}  template: ${truncate(template)}`));
    console.info(styleText('dim', `      ${' '.repeat(String(line).length + 1)}  source:   ${truncate(source)}`));
  }
  if (mismatches.length > MAX_MISMATCH_LINES) {
    console.info(styleText('dim', `      … 另有 ${mismatches.length - MAX_MISMATCH_LINES} 行不同`));
  }
}

function printPackageDiff(diff: PackageDiff) {
  for (const { name, source, template } of diff.ranges) {
    console.info(`    ${name}: ${template} → ${source}`);
  }
  if (diff.onlyInSource.length > 0) console.info(`    只在來源，新增候選: ${diff.onlyInSource.join(', ')}`);
  if (diff.onlyInTemplate.length > 0) console.info(`    只在 template，移除候選: ${diff.onlyInTemplate.join(', ')}`);
  if (diff.packageManager) {
    console.info(`    packageManager: ${diff.packageManager.template} → ${diff.packageManager.source}`);
  }
  for (const { name, source, template } of diff.scripts) {
    console.info(`    scripts.${name}: ${template ?? '(無)'} → ${source ?? '(無)'}`);
  }
}

function printEntry(entry: Entry) {
  const target = entry.target ? ` → ${entry.target}` : '';
  const note = entry.note ? styleText('dim', `  [${entry.note}]`) : '';

  console.info(`  ${entry.sourcePath}${target}${note}`);
  if (entry.mismatches) printMismatches(entry.mismatches);
  if (entry.packageDiff) printPackageDiff(entry.packageDiff);
}

export function printFrameworkReport(framework: Framework, sourceDir: string, entries: Entry[]) {
  const same = entries.filter(entry => entry.status === 'same').length;

  console.info(styleText(['bold', 'magenta'], `\n# ${framework}  ← ${sourceDir}`));
  console.info(styleText('green', `SAME ${same}`));

  for (const status of STATUS_ORDER) {
    const group = entries.filter(entry => entry.status === status);

    if (group.length === 0) continue;
    console.info(styleText(STATUS_STYLE[status], `${status.toUpperCase()} ${group.length}`));
    for (const entry of group) printEntry(entry);
  }
}

export function printTemplateOnly(labels: string[]) {
  if (labels.length === 0) return;
  console.info(styleText(['bold', 'magenta'], `\n# 只在 template，沒有任何來源對應 ${labels.length}`));
  for (const label of labels) console.info(`  ${label}`);
}
