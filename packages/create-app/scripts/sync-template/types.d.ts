export type Framework = 'vue' | 'react';

export type TemplateKind = Framework | 'shared';

export type DependencySection = 'dependencies' | 'devDependencies' | 'optionalDependencies';

export interface PackageJsonLike {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
  packageManager?: string;
  scripts?: Record<string, string>;
  /** 其餘頂層欄位（engines、type 等），CLI 會原樣帶進新專案 */
  readonly [field: string]: unknown;
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

export interface SectionDiff {
  name: string;
  source: DependencySection;
  template: DependencySection;
}

export interface FieldDiff {
  name: string;
  /** JSON 字串，欄位不存在時為 undefined */
  source?: string;
  template?: string;
}

export interface ScriptDiff {
  name: string;
  source?: string;
  template?: string;
}

export interface PackageDiff {
  /** 依賴、scripts、packageManager 以外的頂層欄位 */
  fields: FieldDiff[];
  /** 只在來源有的套件，列為新增候選 */
  onlyInSource: string[];
  /** 只在 template 有的套件，列為移除候選 */
  onlyInTemplate: string[];
  packageManager?: { source: string; template: string };
  /** 兩邊都有但 range 不同 */
  ranges: DependencyRangeDiff[];
  scripts: ScriptDiff[];
  /** 兩邊都有但所在區塊不同 */
  sections: SectionDiff[];
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
