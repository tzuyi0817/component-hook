import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { isPackageDiffEmpty, kindOfLabel, newerSideOf } from './compare.ts';
import type { DependencyRangeDiff, Entry, Framework, PackageDiff, PackageJsonLike } from './types.ts';

export interface FileCopy {
  framework: Framework;
  sourcePath: string;
  target: string;
}

export interface PackageUpgrade {
  framework: Framework;
  packageManager?: { source: string; template: string };
  ranges: DependencyRangeDiff[];
  target: string;
}

export interface WritePlan {
  /** 來源較新的 DIFF，整檔以來源覆蓋 */
  copies: FileCopy[];
  /** 寫入後仍要人工處理的項目：template 較新或方向不明的 DIFF、NEW、CONFLICT、MANUAL，以及 DEPS 裡升版以外的差異 */
  remaining: Entry[];
  /** DEPS 裡來源較新的 range 與 packageManager，只升版不增刪套件 */
  upgrades: PackageUpgrade[];
}

export interface WriteContext {
  sources: Record<Framework, string>;
  templateRoot: string;
}

const isSourceNewer = (template: string, source: string) => newerSideOf(template, source) === 'source newer';

/** 把會自動升版的部分從 packageDiff 分出來，剩下的留給人工處理 */
function splitPackageDiff(diff: PackageDiff) {
  const ranges = diff.ranges.filter(({ source, template }) => isSourceNewer(template, source));
  const upgraded = new Set(ranges.map(({ name }) => name));
  const packageManager =
    diff.packageManager && isSourceNewer(diff.packageManager.template, diff.packageManager.source)
      ? diff.packageManager
      : undefined;
  const remaining: PackageDiff = {
    ...diff,
    packageManager: packageManager ? undefined : diff.packageManager,
    ranges: diff.ranges.filter(({ name }) => !upgraded.has(name)),
  };

  return { packageManager, ranges, remaining };
}

const planOf = (partial: Partial<WritePlan>): WritePlan => ({ copies: [], remaining: [], upgrades: [], ...partial });

/** 寫入會蓋掉 template 工作樹裡未 commit 的內容，git 救不回來，所以這種 target 先跳過並說明 */
export const UNCOMMITTED_NOTE = 'template 有未 commit 的修改';

/** 方向只看 commit 時間；template 有來源從沒有過的內容時，覆蓋會蓋掉 template 先行的修改，所以留給人工 */
export const DIVERGED_NOTE = 'template 有來源歷史中沒有的修改';

export interface WriteGuards {
  /** target 在 template 工作樹有未 commit 的修改 */
  isDirty: (target: string) => boolean;
  /** template 目前的內容曾是來源該檔的某個版本，代表 template 只是落後、沒有自己的修改 */
  isBehindSource: (entry: Entry) => boolean;
}

/** 測試用的預設：不擋任何寫入，index.ts 一律傳入真正的檢查 */
const NO_GUARDS: WriteGuards = { isBehindSource: () => true, isDirty: () => false };

/** 能寫的只有來源較新的 DIFF 與 DEPS 裡可升版的部分，其餘留給人工 */
function planWritable(entry: Entry, target: string): WritePlan {
  const { framework, packageDiff, sourcePath, status } = entry;

  if (status === 'diff' && entry.note === 'source newer') {
    return planOf({ copies: [{ framework, sourcePath, target }] });
  }

  if (status !== 'deps' || !packageDiff) return planOf({ remaining: [entry] });

  const { packageManager, ranges, remaining } = splitPackageDiff(packageDiff);

  return planOf({
    remaining: isPackageDiffEmpty(remaining) ? [] : [{ ...entry, packageDiff: remaining }],
    upgrades: ranges.length > 0 || packageManager ? [{ framework, packageManager, ranges, target }] : [],
  });
}

/**
 * 單一項目的寫入決定：SAME、SKIP 不需處理；kinds 以外的 target 不碰；
 * 真的要寫時才查工作樹，髒了就整項留給人工；整檔覆蓋前再確認 template 沒有來源沒有過的修改
 */
function planEntry(entry: Entry, kinds: ReadonlySet<string>, { isBehindSource, isDirty }: WriteGuards): WritePlan {
  const { status, target } = entry;

  if (status === 'same' || status === 'skip') return planOf({});

  if (target === undefined || !kinds.has(kindOfLabel(target))) return planOf({ remaining: [entry] });

  const plan = planWritable(entry, target);

  if (plan.copies.length === 0 && plan.upgrades.length === 0) return plan;

  if (isDirty(target)) return planOf({ remaining: [{ ...entry, note: UNCOMMITTED_NOTE }] });

  if (plan.copies.length > 0 && !isBehindSource(entry)) {
    return planOf({ remaining: [{ ...entry, note: DIVERGED_NOTE }] });
  }

  return plan;
}

/** 決定哪些項目可以自動寫入：只動來源較新的 DIFF 與 DEPS 升版 */
export function planWrites(
  entries: readonly Entry[],
  kinds: ReadonlySet<string>,
  guards: Partial<WriteGuards> = {},
): WritePlan {
  const checks: WriteGuards = { ...NO_GUARDS, ...guards };
  const plans = entries.map(entry => planEntry(entry, kinds, checks));

  return {
    copies: plans.flatMap(({ copies }) => copies),
    remaining: plans.flatMap(({ remaining }) => remaining),
    upgrades: plans.flatMap(({ upgrades }) => upgrades),
  };
}

/** 只改 range 與 packageManager 的值，鍵順序與結尾有無換行沿用 template；輸出固定 2 空格、LF，與 oxfmt 對 template 的格式一致 */
export function applyPackageUpgrade(templateText: string, { packageManager, ranges }: PackageUpgrade): string {
  const template: PackageJsonLike = JSON.parse(templateText);
  const upgraded = ranges.reduce<PackageJsonLike>(
    (pkg, { name, section, source }) => ({ ...pkg, [section]: { ...pkg[section], [name]: source } }),
    packageManager ? { ...template, packageManager: packageManager.source } : template,
  );
  const newline = templateText.endsWith('\n') ? '\n' : '';

  return `${JSON.stringify(upgraded, null, 2)}${newline}`;
}

/** 依 plan 寫入 template，回傳寫入的 template 路徑 */
export function applyWrites({ copies, upgrades }: WritePlan, { sources, templateRoot }: WriteContext): string[] {
  const copied = copies.map(({ framework, sourcePath, target }) => {
    copyFileSync(path.join(sources[framework], sourcePath), path.join(templateRoot, target));
    return target;
  });
  const upgradedTargets = upgrades.map(upgrade => {
    const templatePath = path.join(templateRoot, upgrade.target);

    writeFileSync(templatePath, applyPackageUpgrade(readFileSync(templatePath, 'utf8'), upgrade));
    return upgrade.target;
  });

  return [...copied, ...upgradedTargets];
}
