export type Framework = 'vue' | 'react';

export type TemplateKind = Framework | 'shared';

export type DependencySection = 'dependencies' | 'devDependencies' | 'optionalDependencies';

export interface PackageJsonLike {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
  packageManager?: string;
  scripts?: Record<string, string>;
}

export interface LineMismatch {
  line: number;
  source: string;
  template: string;
}

export interface DependencyRangeDiff {
  name: string;
  section: DependencySection;
  source: string;
  template: string;
}

export interface ScriptDiff {
  name: string;
  source?: string;
  template?: string;
}

export interface PackageDiff {
  /** 只在來源有的套件，列為新增候選 */
  onlyInSource: string[];
  /** 只在 template 有的套件，列為移除候選 */
  onlyInTemplate: string[];
  packageManager?: { source: string; template: string };
  /** 兩邊都有但 range 不同 */
  ranges: DependencyRangeDiff[];
  scripts: ScriptDiff[];
}

export type EntryStatus = 'conflict' | 'deps' | 'diff' | 'manual' | 'new' | 'same' | 'skip';

export interface Entry {
  framework: Framework;
  mismatches?: LineMismatch[];
  note?: string;
  packageDiff?: PackageDiff;
  sourcePath: string;
  status: EntryStatus;
  target?: string;
}
